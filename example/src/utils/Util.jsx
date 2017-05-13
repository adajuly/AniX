export class Util {

    static getRandomColor() {
        return '#' + (function (h) {
            return new Array(7 - h.length).join("0") + h;
        })((Math.random() * 0x1000000 << 0).toString(16))
    }

    static getWidth() {
        return document.body.clientWidth || document.documentElement.clientWidth || window.screen.availWidth;
    }

}
