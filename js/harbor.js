function anchorPosition(element,anchor) {
    let rect = element.getBoundingClientRect()
    switch (anchor) {
        case "left":
            return rect.left
        case "right":
            return rect.right
        case "top":
            return rect.top
        case "bottom":
            return rect.bottom
        case "verticalCenter":
            return rect.bottom - (rect.height / 2)
        case "horizontalCenter":
            return (rect.left + (rect.width / 2))
    }
}

function anchorTo(element,anchor,anchorElement,anchor2){
    let pos1  = anchorPosition(anchorElement,anchor2)
    let rect = element.getBoundingClientRect()
    element.style.position = "fixed"
    let pos = pos1 +"px"
    switch (anchor) {
        case "left":
            element.style.left = pos
            return 0
        case "right":
            pos = pos1 - rect.width
            element.style.left = pos + "px"
            return 0
        case "bottom":
            pos = pos1 - rect.height
            element.style.top = pos + "px"
            return 0
        case "top":
            element.style.top = pos
            return 0
        case "verticalCenter":
            pos = pos1 - (rect.height / 2)
            element.style.top = pos + "px"
            return 0
        case "horizontalCenter":
            pos = pos1 - (rect.width / 2)
            element.style.left = pos + "px"
            return 0
    }
    return 1;
}

function parseAnchor(anchor){
    anchor = anchor.trim()
    let list = anchor.split(" ")
    return {
        target: list[0],
        anchor: list[1]
    }
}
function getCustomCssAttribute(element, attribut){
    const style = window.getComputedStyle(element)
    const value = style.getPropertyValue(attribut)
    return value
}

function render() {
    let list = document.getElementsByClassName("sailingShip");
    let anchors = ["--anchor-left", "--anchor-right", "--anchor-bottom", "--anchor-top",
        "--anchor-verticalCenter", "--anchor-horizontalCenter"];
    for(let element of list) {
        anchors.forEach(function (anchorName) {
            const anchorstring =  getCustomCssAttribute(element,anchorName)
            if(anchorstring !== null && anchorstring.length > 0){
                let anchor = parseAnchor(anchorstring);
                let elementAnchor = anchorName.split("-")
                let harbor = null;
                if(anchor.target === "parent"){
                    harbor = element.parentNode
                } else {
                    harbor = document.querySelector(anchor.target)
                }
                if(harbor !== null){
                    anchorTo(element,elementAnchor[elementAnchor.length-1],harbor,anchor.anchor);
                }

            }
        } )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    render()
    setInterval(render, 200)
} );
