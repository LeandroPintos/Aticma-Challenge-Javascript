function sumarUnoalArray(){
    let array = [1,2,3,4,5,7];
    let array2 = array;
    
    for(let i = 0; i < array.length; i++){
        array2[i] += 1;
    }
    console.log(array2);
}