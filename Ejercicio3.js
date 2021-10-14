function ejercicio3(){
    let N = 0;
    let array = [];

    N =  prompt('Ingrese numero');
    for(let i = 0; i< N; i++){
        array[i] = Math.trunc(Math.random() * 1000);
    }
    console.log(array);
}