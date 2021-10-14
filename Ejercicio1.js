function CantidadMayusculas(palabra){

    let cantidadCaracteres = palabra.length;
    let contadorMayusculas = 0;

    let i = 0;
        for(i=0; i < cantidadCaracteres; i++){
            if(palabra.charAt(i) != " "){
                if(palabra.charAt(i) == palabra.charAt(i).toUpperCase()){
                    contadorMayusculas++;
            }
        }
    }
   console.log(contadorMayusculas);
   alert(`La frase '${palabra}' contiene ${contadorMayusculas} mayusculas`);
}

