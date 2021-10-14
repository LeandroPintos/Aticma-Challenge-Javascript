function uniryOrdenarVectores(){
    let vector1 = [1,2,4,6,7,8];
    let vector2 = [1,2,4,5,6,7,8];

    let newVector = vector1.concat(vector2);
    newVector.sort((a,b) => a-b);
    console.log(newVector);
}