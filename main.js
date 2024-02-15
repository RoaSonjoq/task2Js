var formReg = document.querySelector(".registerForm");
var parag =document.querySelector("p");
 formReg.onsubmit = function(e){
    e.preventDefault();
    var element = e.target.elements;
    var price = {
        money: element['amount'].value,
  }

 }

 formReg.onsubmit = function (e) {
    e.preventDefault();
    var element = e.target.elements;
    var price = {
        monytype : element['amount'].value,
        selltype : element['exchange'].value,

    }
    var exchangerate;
    switch(price.selltype){
        case'dollar':
        exchangerate = 0.28;
        break;
        case 'dinar':
            exchangerate = 0.20;
            break;
        case 'nis':
            exchangerate = 1;
            break;
            default:
                parag.textContent ="invalid";
                return;

    }
    var result = exchangerate *price.monytype;
    parag.textContent = `Converted amount:${result}`;
 }