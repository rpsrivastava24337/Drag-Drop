let lists = document.getElementsByClassName("list")
let right = document.getElementById("right")

let left = document.getElementById("left")



function onDrag(e) {
    e.dataTransfer.setData("text", e.target.id)


}



function onDrop(e) {

    e.preventDefault()
    var itemId = e.dataTransfer.getData("text")
    if (e.target == right) {
        right.appendChild(document.getElementById(itemId))
    }
    else if (e.target == left) {
        left.appendChild(document.getElementById(itemId))

    }
}



function allowDrop(e) {
    e.preventDefault()


}




// let lists = document.getElementsByClassName("list")
// let right = document.getElementById("right")

// let left = document.getElementById("left")



// function onDrag(e) {
//     e.dataTransfer.setData("text", e.target.id)


// }



// function onDrop(e) {

//     e.preventDefault()
//     var itemId = e.dataTransfer.getData("text")
//     if (e.target == right) {
//         right.appendChild(document.getElementById(itemId))
//     }
//     else if (e.target == left) {
//         left.appendChild(document.getElementById(itemId))

//     }
// }



// function allowDrop(e) {
//     e.preventDefault()


// }


// let lists = document.getElementsByClassName("list")
// let right = document.getElementById("right")
// let left = document.getElementById("left")

// function onDrag(e) {
//     e.dataTransfer.setData("text", e.target.id)
// }

// function onDrop(e) {
//     e.preventDefault()
//     var itemId = e.dataTransfer.getData("text")
//     e.target.appendChild(document.getElementById(itemId))
// }
// function allowDrop(e){
//     e.preventDefault()


// }