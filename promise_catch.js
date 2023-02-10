let p=new Promise((resolve, reject) => {
    let data=false
    if (data){
        resolve([1,2,3,4,5])
    }
    else{
        reject("promise is  not done")
    }
})

p.catch(function(error){
    console.log(error)
})
