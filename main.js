a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');

function add(a, b) {
    c.innerText = parseInt(a.value) + parseInt(b.value);
}

function substract(a, b) {
    c.innerText = parseInt(a.value) - parseInt(b.value);
}

function multiply(a, b) {
    c.innerText = parseInt(a.value) * parseInt(b.value);
}

function divide(a, b) {
    if (parseInt(b.value) == 0) {
        //return
        alert("Cannot divide by Zero!");
    } else {
        c.innerText = parseInt(a.value) / parseInt(b.value);
    }
}

function lbottunate(el) {
    //1- fka5 l9ima n lbottunate lli minoder 
    x = el.value;
    //3- awiyaghd linput i 
    i = document.getElementById('i');

    // igh tga l9ima lbottune x tmseht ford ghlprogramme
    if (x == "x") {

        return i.value = i.value.slice(0, -1)

    }
    //2- 7wlt snumber fa9at righ iga ra9m
    x = parseInt(x);
    if (isNaN(x)) {
        x = el.value;
    } else {
        x = parseInt(x);
    }

    //4- lbottunate lli monoder attingr i
    //i.value = i.value+x;
    i.value += x;
}

function equal() {
    i.value = "=" + eval(i.value);
}