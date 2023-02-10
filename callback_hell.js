function hey(){
    setTimeout(() => {
        console.log("set1")
        setTimeout(() => {
            console.log("set2")
            setTimeout(() => {
                console.log("set4")
                setTimeout(() => {
                    console.log("set5")
                    setTimeout(() => {
                        console.log('set6')
                        
                    }, 5000);
                    
                }, 4000);
                
            }, 3000);
            
        }, 2000);
        
    }, 1000);
}