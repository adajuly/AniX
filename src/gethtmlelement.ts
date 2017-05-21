let getHTMLElement = (ele: {
    nodeName?: any;
    jquery?: any;
    nativeElement?: any;
    [propName: string]: any;
}) => {
    if (!ele) throw "AniX Error :: element is null!";
    
    if (ele.nodeName)
        return ele;
    else if (ele.jquery)
        return ele[0];
    else
        return ele.nativeElement;
}

export { getHTMLElement }