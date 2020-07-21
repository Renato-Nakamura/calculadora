
var ini = 0
var fin = 0
var s1 = false
var s2 = false
var valora = []
{
    function a1(){
        valora.push("1")
        visor.innerHTML += '1'
    }
    function a2(){
        valora.push("2")
        visor.innerHTML += '2'
    }
    function a3(){
        valora.push("3")
        visor.innerHTML += '3'
    }
    function a4(){
        valora.push("4")
        visor.innerHTML += '4'
    }
    function a5(){
        valora.push("5")
        visor.innerHTML += '5'
    }
    function a6(){
        valora.push("6")
        visor.innerHTML += '6'
    }
    function a7(){
        valora.push("7")
        visor.innerHTML += '7'
    }
    function a8(){
        valora.push("8")
        visor.innerHTML += '8'
    }
    function a9(){
        valora.push("9")
        visor.innerHTML += '9'
    }
    function a0(){
        valora.push("0")
        visor.innerHTML += '0'
    }
    function somatela(){
        visor.innerHTML += '+'
    }
    function subtrairtela(){
        visor.innerHTML += '-'
    }
    function igualtela(){
        visor.innerHTML += '='    
        visor.innerHTML += `${ini}`
        var fin = 0
        var s1 = false
        var s2 = false
        var valora = []
        visor.innerHTML += "<br>"    
        visor.innerHTML += `${ini}`
        window.document.getElementById("visor").scrollBy(0,50);

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
}