var newElement;

newElement = document.createElement("p");

newElement.innerHTML = prompt("Enter your Username!!!", "");

var str = newElement.innerHTML;

var lenght = str.length;
for (var i = 0; i < lenght;) {
    if (isNaN(str[i++])) {
        
        var el = document.getElementById("container");
        newElement.innerHTML = str.split('').reverse().join('');
        el.appendChild(newElement);
    }
}