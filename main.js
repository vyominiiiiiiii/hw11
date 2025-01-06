var num=[1,2,3,4,5,6,7,8,9,10];
console.log(num);

var find=(ar)=>{
    for(var i=0;i<ar.length;i++){
        if(ar[i] % 2===0){
            console.log(ar[i]);
        }
    }
}

find(num);