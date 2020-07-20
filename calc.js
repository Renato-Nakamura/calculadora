//let a = document.getElement
//const adicao = (a,b) => a+b
//function Resultado() {
//    test.innerHTML = `${a}`
//}
var ini = 0
var fin = 0
var s1 = false
var s2 = false
var valora = []
{
    function a1(){
        valora.push("1")
    }
    function a2(){
        valora.push("2")
    }
    function a3(){
        valora.push("3")
    }
    function a4(){
        valora.push("4")
    }
    function a5(){
        valora.push("5")
    }
    function a6(){
        valora.push("6")
    }
    function a7(){
        valora.push("7")
    }
    function a8(){
        valora.push("8")
    }
    function a9(){
        valora.push("9")
    }
    function a0(){
        valora.push("0")
    }
}
function soma() {
    if(s2===true){
        subtrair()
        s2= false
        s1= true
        soma()
    }else{
    if(ini===0){
        for(n=0;n<valora.length;n++){
        ini += valora[n]
    } 
        s1 = true
        valora = []
    }else{
        for(n=0;n<valora.length;n++){
            fin += valora[n]
        }
        let a = Number(ini)
        let b = Number(fin)
        var soma = a+b
        ini=soma
        test.innerHTML = `A soma dos valores é ${ini}`

    }       
    valora = []
    fin = 0
}
}
function subtrair() {
    if(s1===true){
        soma()
        s1=false
        s2= true
        subtrair()
    }else{
    if(ini===0){
        for(n=0;n<valora.length;n++){
        ini += valora[n]
   
    }   
        s2 = true   
        valora = []
    }else{
        for(n=0;n<valora.length;n++){
            fin += valora[n]
        }
        let a = Number(ini)
        let b = Number(fin)
        var sub = a-b
        ini=sub
        test.innerHTML = `A soma dos valores é ${ini}`
    }       
    valora = []
    fin = 0
}
}
function Resultado() {
    if(s1===true){
        soma()
    }else{
        if(s2===true){
        subtrair()
    }
    }

    test.innerHTML = `A soma dos valores é ${ini}`
}