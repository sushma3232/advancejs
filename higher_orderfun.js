var arr=[2,3.4,55,56,76]
function square(num){

    return num*num
}

function cube(num){
    return num*num*num

}
function increment(num){
    return num=num+1
}



function operation(arr,operator){
    var res=[]
    for (ele in arr){
        res.push(operator(ele))
    }
    return res
}
operation(arr,square)
operation(arr,cube)
operation(arr,increment)