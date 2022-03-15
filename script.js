function pegarDados(){
    document.querySelector(".fim").style.display = "block";

    let fum = document.getElementById("faixaUm").value;
    let fdois = document.getElementById("faixaDois").value;
    let ftres = document.getElementById("faixaTres").value;
    let fquatro = document.getElementById("Mult").value;
    let fcinco = document.getElementById("Tol").value;
    
    let con = fum + fdois + ftres;
    let res = con * fquatro;
    let tolf = res * fcinco;
    let toln = res - tolf;
    let tolp = res + tolf;
    
    document.getElementById("result").innerHTML = res + " &#x2126 " + " com tolerância mínima de " + toln + " &#x2126 e máxima de " + tolp + " &#x2126";
}