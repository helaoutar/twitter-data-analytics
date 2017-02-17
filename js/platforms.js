/**
 * Created by sam on 17/02/17.
 */

var getPlatform = function (link) {
    return $(link).html();
};

window.getPlatform = getPlatform;