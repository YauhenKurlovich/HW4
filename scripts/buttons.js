function nextPage() {
    location.href = 'index.html';
}

function newContent() {
    try {
        var element = document.getElementById("container");
        element.parentNode.removeChild(element);
    } catch {

    }
    
    var div = document.createElement('div');
    div.className = "flex-container";
    div.id = "fc";
    document.body.appendChild(div);
    var divElem = document.createElement('div');
    divElem.innerHTML = "Flex Item 1";
    document.getElementById("fc").appendChild(divElem);
    var divElem2 = document.createElement('div');
    divElem2.innerHTML = "Flex Item 2";
    document.getElementById("fc").appendChild(divElem2);
    var divElem3 = document.createElement('div');
    divElem3.innerHTML = "Flex Item 3";
    document.getElementById("fc").appendChild(divElem3);
    var divElem4 = document.createElement('div');
    divElem4.innerHTML = "Flex Item 4";
    document.getElementById("fc").appendChild(divElem4);

}

function deleteNewContent() {
    var element = document.getElementById("fc");
    element.parentNode.removeChild(element);
}