function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valueMulti = document.getElementById("multi").value;
    let valueToler = document.getElementById("toler").value;
    let operacao = (valueF01+valueF02)*valueMulti;
    let toler01 = (operacao+valueToler);
    let toler02 = (operacao-valueToler);
    document.getElementById("final").value = operacao;
    document.getElementById("toler1").value = toler01;
    document.getElementById("toler2").value = toler02;
}
