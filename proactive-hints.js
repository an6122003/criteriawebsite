"use strict";
eesy.define([
    'jquery-private', 'utils', 'mustachejs', 'presentation-helper', 'helpitem-visibility', 'eesy-timers', 'json!language'
], function ($, utils, Mustache, presentationHelper, helpitemVisibility, eesyTimers, language) {
    var hintTargetAttribute = 'data-eesy-assigned-helpitem-id';
    return { show: show };
    function show(helpItem, connectTo) {
        var _a;
        $('body').append(Mustache.to_html(eesyTemplates.hintfixed, presentationHelper.helpItemModel(helpItem), eesyTemplates));
        $(connectTo).attr((_a = {
                'aria-describedby': "eesy_systray_" + helpItem.id
            },
            _a[hintTargetAttribute] = helpItem.id,
            _a));
        __showHintProactive(helpItem, connectTo);
        $(connectTo).after(getSystrayAnchorMarkup(helpItem.id));
    }
    function __showHintProactive(helpItem, connectTo) {
        var _a;
        if (!helpitemVisibility.isVisible(helpItem.id)) {
            hideHint(helpItem.id, connectTo);
            return;
        }
        if (window.sessionStorage["build_mode"] === "true") {
            $(connectTo).removeClass('eesy-highlighted');
        }
        else {
            var surveyHeight = $('#systraycontainer_' + helpItem.id + ' .quick-survey-section').outerHeight();
            surveyHeight = surveyHeight ? surveyHeight : 54.7; // set default for proactive v4
            var surveyOffset = (var_proactive_version == 4) ? surveyHeight : 0;
            var metrics = calcMetrics(connectTo, parseInt(helpItem.width), parseInt(helpItem.height), surveyOffset);
            var hintXPos = 0;
            var hintYPos = 0;
            var arrowPos = undefined;
            var allowedDirections = ["BOTTOM", "TOP", "RIGHT", "LEFT", "BOTTOMRIGHT", "BOTTOMLEFT", "TOPRIGHT", "TOPLEFT"];
            var orientationCandidates = allowedDirections.indexOf(helpItem.orientation) === -1 ? allowedDirections : [helpItem.orientation];
            var orientation_1 = getOrientation(metrics, orientationCandidates);
            var $systrayContainer = $('#systraycontainer_' + helpItem.id);
            var $systrayAnchor = $('#systray_anchor_' + helpItem.id);
            var arrowSelector = "#arrow_" + helpItem.id;
            if (orientation_1 !== undefined) {
                $(connectTo).addClass('eesy-highlighted');
                var c = metrics.hintMetricsCentered;
                var t = metrics.target;
                var h = metrics.hintMetrics;
                _a = {
                    "BOTTOM": ["up", c.left, t.top + t.height + 14],
                    "TOP": ["down", c.left, t.top - h.height - surveyOffset - 15],
                    "RIGHT": ["right", t.left + t.width + 15, c.top],
                    "LEFT": ["left", t.left - h.width - 15, c.top],
                    "BOTTOMRIGHT": ["up rightcorner", t.left + t.width - 20, t.top + t.height + 14],
                    "BOTTOMLEFT": ["up leftcorner", t.left - h.width + 20, t.top + t.height + 14],
                    "TOPRIGHT": ["down rightcorner", t.left + t.width - 20, t.top - h.height - surveyOffset - 15],
                    "TOPLEFT": ["down leftcorner", t.left - h.width + 20, t.top - h.height - surveyOffset - 15]
                }[orientation_1], arrowPos = _a[0], hintXPos = _a[1], hintYPos = _a[2];
                $systrayContainer.css({
                    'display': 'block',
                    'position': 'absolute',
                    'height': helpItem.height + 'px',
                    'width': helpItem.width + 'px',
                    'top': hintYPos,
                    'left': hintXPos
                });
                // All styles sets directly to element not by classes, to make sure LMS styles don't interfere with it.
                $systrayAnchor.css(calculateHintAnchorStyles(helpItem.id, $systrayAnchor.is(':visible:focus')));
                $('#arrowInner_' + helpItem.id)
                    .removeClass('eesyarrow up down left right leftcorner rightcorner')
                    .addClass('eesyarrow ' + arrowPos);
                if ((arrowPos == "down" || arrowPos == "down rightcorner" || arrowPos == "down leftcorner") && var_proactive_version == 4) {
                    $(arrowSelector + " .eesyarrow").css({
                        'top': 'calc(100% + ' + surveyOffset + 'px - 1.5px )'
                    });
                }
                else {
                    $(arrowSelector + " .eesyarrow").css("top", "");
                }
                if (utils.isTargetVisible(metrics.target, connectTo) || $systrayContainer.is(':focus-within')) {
                    $(arrowSelector).fadeIn('slow');
                    fadeInElement($systrayContainer);
                }
                else {
                    $(arrowSelector).fadeOut('slow');
                    fadeOutElement($systrayContainer);
                }
            }
            else if (!utils.isTargetVisible(metrics.target, connectTo)) {
                $(arrowSelector).fadeOut('slow');
                fadeOutElement($systrayContainer);
            }
        }
        eesyTimers.set("helpitem" + helpItem.id, 100, function () {
            __showHintProactive(helpItem, connectTo);
        });
    }
    function hideHint(id, connectTo) {
        $('#systraycontainer_' + id).fadeOut('fast').remove();
        $(connectTo).removeClass('eesy-highlighted');
        $('#arrow_' + id).remove();
        $("#systray_anchor_" + id).focus().parent().remove();
        $(document).trigger("helpitemHandle.hide", [id]);
    }
    function getOrientation(metrics, orientationCandidates) {
        return orientationCandidates.find(function (c) { return canPositionAt(metrics, c); });
    }
    function fadeInElement($element) {
        $element.css({
            opacity: 1,
            'z-index': ''
        });
    }
    function fadeOutElement($element) {
        $element.css({
            opacity: 0,
            'z-index': -1
        });
    }
    function canPositionAt(metrics, orientationCandidate) {
        var orientationChecks = {
            "BOTTOM": function () { return metrics.canCenter.x && metrics.space.below; },
            "TOP": function () { return metrics.canCenter.x && metrics.space.above; },
            "RIGHT": function () { return metrics.canCenter.y && metrics.space.right; },
            "LEFT": function () { return metrics.canCenter.y && metrics.space.left; },
            "BOTTOMRIGHT": function () { return metrics.space.below && metrics.space.right; },
            "BOTTOMLEFT": function () { return metrics.space.below && metrics.space.left; },
            "TOPRIGHT": function () { return metrics.space.above && metrics.space.right; },
            "TOPLEFT": function () { return metrics.space.above && metrics.space.left; }
        };
        return orientationChecks[orientationCandidate]();
    }
    function calcMetrics(connectTo, hintWidth, hintHeight, surveyOffset) {
        var hintOffset = 10;
        var target = {
            left: $(connectTo).offset().left,
            top: $(connectTo).offset().top,
            width: Math.max($(connectTo).outerWidth(), $(connectTo).width()),
            height: Math.max($(connectTo).outerHeight(), $(connectTo).height())
        };
        var hintMetrics = {
            width: hintWidth,
            height: hintHeight
        };
        var hintMetricsCentered = {
            left: target.left + (target.width - hintMetrics.width) / 2,
            top: target.top + (target.height - hintMetrics.height) / 2
        };
        var space = {
            below: (target.top + target.height + hintMetrics.height + surveyOffset + hintOffset) < $(window).scrollTop() + $(window).height(),
            above: (target.top - hintMetrics.height - surveyOffset - hintOffset) > $(window).scrollTop(),
            right: (target.left + target.width + hintMetrics.width + hintOffset) < $(window).scrollLeft() + $(window).width(),
            left: (target.left - hintMetrics.width - hintOffset) > $(window).scrollLeft()
        };
        var canCenter = {
            x: (hintMetricsCentered.left >= 0)
                && (hintMetricsCentered.left + hintMetrics.width) < $("body").width()
                && (space.below || space.above),
            y: (hintMetricsCentered.top >= 0)
                && (hintMetricsCentered.top + hintMetrics.height + surveyOffset + hintOffset) < $(window).height() + $(window).scrollTop()
                && (space.left || space.right)
        };
        return {
            target: target,
            hintMetrics: hintMetrics,
            hintMetricsCentered: hintMetricsCentered,
            space: space,
            canCenter: canCenter
        };
    }
    function calculateHintAnchorStyles(hintId, isFocusedAndVisible) {
        var $anchor = $("[" + hintTargetAttribute + "=\"" + hintId + "\"]");
        if (!$anchor) {
            return { display: 'none' };
        }
        var anchorDimensions = $anchor.get(0).getBoundingClientRect();
        var parentDimensions = $anchor.parent().get(0).getBoundingClientRect();
        var isInline = Math.round(parentDimensions.left) === Math.round(anchorDimensions.left);
        var bottomMargin = parseInt($anchor.css('margin-bottom'), 10);
        var leftMargin = parseInt($anchor.css('margin-left'), 10);
        var rightMargin = parseInt($anchor.css('margin-right'), 10);
        var space = 3;
        var height = anchorDimensions.height - space * 2;
        var width = anchorDimensions.width - space * 2;
        var left = isInline ? space + leftMargin : 'auto';
        var right = isInline ? 'auto' : space + rightMargin;
        return {
            'align-items': 'center',
            'background-color': '#fff',
            'font-size': '12px',
            'justify-content': 'center',
            'line-height': '12px',
            'text-align': 'center',
            'text-decoration': 'underline',
            'z-index': 1000000,
            bottom: space + bottomMargin,
            color: '#0374b4',
            display: 'flex',
            height: isFocusedAndVisible ? height : 0,
            left: left,
            margin: 0,
            opacity: isFocusedAndVisible ? 1 : 0,
            padding: 0,
            position: 'absolute',
            right: right,
            top: 'auto',
            width: isFocusedAndVisible ? width : 0,
        };
    }
    function getSystrayAnchorMarkup(helpItemId) {
        return "\n            <div style=\"display:block; width:0; height:0; position:relative\">\n                <a\n                    style=\"width:0; height:0; opacity:0\"\n                    href=\"#systraycontainer_" + helpItemId + "\"\n                    id=\"systray_anchor_" + helpItemId + "\"\n                >\n                    " + language.LNG.PROACTIVE.GO_TO_HINT + "\n                </a>\n                <div id=\"systray_return_anchor_" + helpItemId + "\" />\n            </div>\n        ";
    }
});
//# sourceMappingURL=proactive-hints.js.map