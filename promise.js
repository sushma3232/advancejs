let p=new Promise((resolve, reject) => {
    
})
console.log(p)



var r=new Promise((resolve, reject) => {
    var data=true
    if (data){
        resolve("prmose done")
    }
    else{
        reject('promise reject')
    }
    
})
console.log(r)