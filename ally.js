
/**
 * Copyright (c) 2016 "Fronteer LTD". All rights reserved.
 */
(function($, ALLY_CFG) {
    if (ALLY_CFG.loaded !== true) {
        // Prevent Ally from loading multiple times (eg. when it's added in multiple themes)
        ALLY_CFG.loaded = true;
        // Load the module that contains the actual integration logic. The webpack build will replace linkPath with a
        // URL to the minified file.
        $.ajax({
            'url': ALLY_CFG.baseUrl + '/static/integration/canvas/ally.94eb61b40b4cc067b042.js',
            'dataType': 'script',
            'cache': true
        });
    }
})(window.jQuery, window.ALLY_CFG);
