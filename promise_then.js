let p=new Promise((resolve, reject) => {
    var data=true
    if (data){
        resolve([1,2,3,4])
    }
    else{
        reject("promise is not done")
    }
})

p.then(function(data){
    console.log(data)
})