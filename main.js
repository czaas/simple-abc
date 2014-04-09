var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var viewPort = document.getElementById('dLetter');
var lft = document.getElementById('lArrow');
var rgt = document.getElementById('rArrow');
var cLet = 0;
viewPort.innerHTML=letters[cLet];
rgt.addEventListener('click', function(){
    if(cLet===25){
        return false;
    }else{
        cLet++;
        viewPort.innerHTML=letters[cLet];
    }
});

lft.addEventListener('click', function(){
    if(cLet === 0){
        return false;
    }else {
        cLet--;
        viewPort.innerHTML=letters[cLet];
    }
});