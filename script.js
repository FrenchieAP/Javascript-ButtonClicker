function turnOff(element) {
    // element.innerText = "Off";
if (element.innerText === "Login") {
    element.innerText = "Logout"
}   else {
    element.innerText = "Login"
}
}

function remove(el) {
    var element = el;
    element.remove();
  }