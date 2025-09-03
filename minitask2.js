for (let i =0; i<6; i++){
    var a = ''    
    for(let x = 0; x<i; x++){
        a += '*'
        
    }
    console.log(a)
}


for (let i =6; i>0; i--){
    let a = ''
    for (let x=0; x<i; x++){
        a += '*'
    }
    console.log(a)
}



var i = 0
var a = ''
do {
    
    let x = 0
    do{
        
        a += '*'
        x++;
        console.log(a)
    }while(x < i)
        
    i++;
  } while (i < 4);
