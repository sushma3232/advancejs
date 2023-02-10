// console.log(this)


// var a=10
// console.log(this)



// var a=10
// console.log(this)
// function add(){

// }
// console.log(window.a)
// console.log(a)
// console.log(this.a)


var a=10
function add(){
    console.log(this)
}
add()


var movie={
    name:"rrr",
    getname:function (){
        console.log(this)
    }
}
movie.getname();
