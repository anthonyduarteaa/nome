function calcula(){
    let C = parseInt(document.getElementById('C').value);
    let P = parseInt(document.getElementById('P').value);
    let T = parseInt(document.getElementById('T').value);

    if(C == 0){
        alert("O capital não pode ser 0!");
        return;
    }

    if(P == 0){
        alert("A porcentagem não pode ser 0!");
        return;
    }

    if(T == 0){
        alert("O tempo não pode ser 0!");
        return;
    }

    let newP = P/ (100);
    let J = C * newP * T;
    let M = C + J; 
    
    document.getElementById('resultado1').textContent = "O valor dos juros é " + J;

    document.getElementById('resultado').textContent = "O montante final é " + M;

}
