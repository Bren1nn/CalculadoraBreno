// pega os elemontos da li
var button = document.querySelectorAll(".key li"), 
    input = document.querySelector(".input-valor"),
    operador = document.querySelectorAll(".operador");
    var oi = 10;  
for(var i = 0; i < button.length; i++){
    document.onkeypress = function(event){
        for(var e = 0; e <= 10; e++){
            if(key === 48 + e) {
                input.innerHTML += e;
            }
        }
        switch(key){
            case 1:
                input.innerHTML += "*";
                break;
            case 2:
                input.innerHTML += "+";
                break;
            case 3:
                input.innerHTML += "-";
                break;
            case 4:
                input.innerHTML += ".";
                break;
            case 5:
                input.innerHTML += "/";
                break;            
            case 6:
            case 7:
                 var equacao = input.innerHTML;
                 if (equacao) {
                     try {
                         input.innerHTML = eval (equacao);
                     } catch (e) {
                         alert ('Erro na Expressão');
                     }
                 }
     break;
     case 8:
     case 9:
        input.innerHTML = "";
        break;
        default:
        break;
      }
   };
   button[i].addEventListener('click', function(){
  var btnVal = this .innerHTML,
    inputVal = input .innerHTML;
    console.log(btnVal);
   

   switch(btnVal){
        case "c":
            input .innerHTML = "";
            break;
        case"=":
        var equação = inputVal;

        if(equação){
            try{
                input .innerHTML = eval(equação);
            }catch(e){
                alert('Erro na Expressão')
            }
        }
        break;
        default:
            input .innerHTML += btnVal;
            break;
    }
});
};