"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getHTMLElement = function (ele) {
    if (!ele)
        throw "AniX Error :: element is null!";
    if (ele.nodeName)
        return ele;
    else if (ele.jquery)
        return ele[0];
    else
        return ele.nativeElement;
};
exports.getHTMLElement = getHTMLElement;
//# sourceMappingURL=gethtmlelement.js.map