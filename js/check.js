
function check(name, from, to) {
    var x, l;
    x = document.getElementsByClassName(name);
    l = x.length;

    for (let i = 0; i < l; i++) {
        if ((Number.parseFloat(x[i].textContent)>from)&&(Number.parseFloat(x[i].textContent)<to)){
            x[i].classList.add('check');
        }
        else{
            x[i].classList.add('uncheck');
        }
    }
};

check('slope',95,105);
check('offset',-20,20);

