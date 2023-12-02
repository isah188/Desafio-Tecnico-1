function somatorioDeNumerosDivisiveisPortresecinco(numero){
   if(Number.isInteger(numero)){
     let divisiveis=[];
     var somatorio=0;
     for (let i = 1; i < numero; i++){
       if(i% 3 === 0 || i % 5 === 0){
         divisiveis.push(i);
       } 
       }console.log ("a soma dos números",divisiveis)
         
     for (let a = 0; a < divisiveis.length; a++){
       somatorio += divisiveis[a];
     }console.log ("é igual a ",somatorio);
         
   return console.log =divisiveis;
         
   }else {console.log("Digite um número inteiro")}
 
 }
 
     
     
     // DIGTE O NÚMERO DENTRO DO PARENTES
     somatorioDeNumerosDivisiveisPortresecinco(11);
     