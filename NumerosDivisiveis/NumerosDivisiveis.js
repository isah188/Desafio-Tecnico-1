function somatorioDeNumerosDivisiveisPortresecinco(numero){
let divisiveis=[];
   var somatorio=0;
    for (let i = 1; i < numero; i++) 
    {
     if(i% 3 === 0 || i % 5 === 0)
     {
      divisiveis .push(i);
     }
     
    }console.log ("a soma dos numeros ",divisiveis)
    
    for (let a = 0; a < divisiveis.length; a++){
     somatorio+=divisiveis[a];
    }console.log ("é igual a ",somatorio);
    
    return console.log =divisiveis;
    
    }
    
    
    
    somatorioDeNumerosDivisiveisPortresecinco(10);