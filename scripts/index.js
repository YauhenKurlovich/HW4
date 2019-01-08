var newElement;

newElement = document.createElement("p");

newElement.innerHTML = prompt("Enter your Username!!!", "");

var str = newElement.innerHTML;
var isNumber = false;

for (var i = 0; i < str.length;) {
    if (isNaN(str[i++]) == false) {
        isNumber = true;
        break;
    } else {
        isNumber = false;
    }
}

if (isNumber == false) {
    newElement.innerHTML = str.split('').reverse().join('');
    var el = document.getElementById("container");
    el.appendChild(newElement);
} else {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
        }
    }
    str = arr.join('');
    newElement.innerHTML = str;
    var el = document.getElementById("container");
    el.appendChild(newElement);

}