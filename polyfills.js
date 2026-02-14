let a = [1,2,3,4]

function mymap(fn){
    console.log(fn(a[1]))
}

mymap(a=>a*2)
