"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KEYWORDS = [
    'x', 'y', 'z',
    'scaleX', 'scaleY', 'scaleZ', 'scale',
    'rotateX', 'rotateY', 'rotateZ', 'rotate',
    'skewX', 'skewY'
];
function getTransform(param) {
    var transform = "";
    /** translate */
    if (param.z === undefined) {
        if (param.x !== undefined || param.y !== undefined) {
            var x = getPX(param, 'x');
            var y = getPX(param, 'y');
            transform += " translate(" + x + ", " + y + ")";
        }
    }
    else {
        if (param.x !== undefined)
            transform += " translateX(" + getPX(param, 'x') + ")";
        if (param.y !== undefined)
            transform += " translateY(" + getPX(param, 'y') + ")";
        if (param.z !== undefined)
            transform += " translateZ(" + getPX(param, 'z') + ")";
    }
    /** scale */
    if (param.scale !== undefined) {
        transform += " scale(" + param.scale + ", " + param.scale + ")";
    }
    else {
        if (param.scaleX !== undefined)
            transform += " scaleX(" + param.scaleX + ")";
        if (param.scaleY !== undefined)
            transform += " scaleY(" + param.scaleY + ")";
        if (param.scaleZ !== undefined)
            transform += " scaleZ(" + param.scaleZ + ")";
    }
    /** rotate */
    if (param.rotate !== undefined) {
        transform += " rotate(" + param.rotate + "deg)";
    }
    else {
        if (param.rotateX !== undefined)
            transform += " rotateX(" + param.rotateX + "deg)";
        if (param.rotateY !== undefined)
            transform += " rotateY(" + param.rotateY + "deg)";
        if (param.rotateZ !== undefined)
            transform += " rotateZ(" + param.rotateZ + "deg)";
    }
    /** skew */
    if (param.skewX !== undefined)
        transform += " skewX(" + param.skewX + "deg)";
    if (param.skewY !== undefined)
        transform += " skewY(" + param.skewY + "deg)";
    /** perspective */
    if (param.perspective !== undefined) {
        transform += " perspective(" + param.perspective + ")";
    }
    /** pre */
    if (param.pre)
        transform = param.pre + " " + transform;
    var css = {
        "transform": transform,
        "-webkit-transform": transform,
        "-ms-transform": transform,
        "-o-transform": transform,
        "-moz-transform": transform
    };
    if (param.normal) {
        for (var key in param.normal) {
            css[key] = param.normal[key];
        }
    }
    return css;
}
exports.getTransform = getTransform;
function isTransformStyle(key) {
    return KEYWORDS.indexOf(key) > -1;
}
exports.isTransformStyle = isTransformStyle;
function hasTransformStyle(args) {
    var has = false;
    for (var key in args) {
        if (isTransformStyle(key))
            has = true;
    }
    return has;
}
exports.hasTransformStyle = hasTransformStyle;
function getPX(param, key) {
    var px = typeof param[key] === "string" ? param[key] : (param[key] || 0) + 'px';
    return px;
}
//# sourceMappingURL=gettransform.js.map