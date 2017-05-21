import React, { Component } from 'react';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';

export class ContentSide extends Component {

    items = [
        { link: "#section1", title: "Overview", isActive: true },
        { link: "#section2", title: "Reference", isActive: false },
        { link: "#section3", title: "API & Demo", isActive: false },
        { link: "#section4", title: "Future", isActive: false },
    ];

    clickHandler(item, index) {
        for (let i = 0; i < this.items.length; i++)
            this.items[i].isActive = false;

        this.items[index].isActive = true;

        let dom = document.querySelector(item.link);
        let top = this.getOffsetTop(dom);
        let htmlElement = document.querySelector("html");

        top = Math.max(0, top - 50);
        this.scrollTo(document.body, 500, top);

        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
            this.scrollTo(htmlElement, 500, top);

        this.setState({});
    }

    getOffsetTop(dom) {
        let top = 0;
        let offsetParent = dom;

        while (offsetParent !== null && offsetParent !== document.body) {
            top += offsetParent.offsetTop || 0;
            offsetParent = offsetParent.offsetParent;
        }

        return top;
    }

    timeoutId;
    scrollTo(dom, time, top) {
        let from = dom.scrollTop;
        let to = top;
        let t = 1000 / 60;
        let k = Math.floor(time / t);
        let d = (to - from) / k;
        let i = 0;

        clearInterval(this.timeoutId);
        this.timeoutId = setInterval(() => {
            dom.scrollTop += d;
            i++;

            if (i >= k) {
                clearInterval(this.timeoutId);
                dom.scrollTop = to;
            }
        }, t);
    }

    get navlist() {
        return this.items.map((item, i) => {
            return (
                <li key={i} className="nav-item pointer" onClick={this.clickHandler.bind(this, item, i)}>
                    <a className={item.isActive ? 'nav-link pointer active' : 'nav-link pointer'}>{item.title}
                        <span className="sr-only">(current)</span>
                    </a>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="content-side">
                <div className="container">

                    <div className="row">
                        <div className="col-md-2 sidebar">
                            <ul className="nav nav-pills flex-column">
                                {
                                    this.navlist
                                }
                            </ul>
                        </div>

                        <div className="col-md-10">
                            <Section1 />
                            <Section2 />
                            <Section3 />
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}