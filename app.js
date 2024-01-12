//Flow game
//1. Example button by random number
//2. push number in to array
//2. user click that button same in array
//3.


let sounds = {
    'box box-blue' : 'blue.mp3', 
    'box box-green': 'green.mp3',
    'box box-red' : 'red.mp3',
    'box box-yellow' : 'yellow.mp3',
    'wrong': 'wrong.mp3'}

function playSounds(objName) { 
    let sound = new Audio('sounds/'+sounds[objName]);
    sound.play();
}

let numOder=[]
let numRandom
///แสดงตัวอย่างสีที่ User ต้องคลิก
function colorExample() {
    let classEx
    let objName
    numRandom=Math.floor(Math.random()*4)

    switch (numRandom) {
        case 0 :
            classEx=".box-green"
            objName=$(classEx).attr("class")
            break;
        case 1 :
            classEx=".box-red"
            playSounds('box box-red')
            objName=$(classEx).attr("class")
            break;
        case 2 :
            classEx=".box-yellow"
            objName=$(classEx).attr("class")
            break;
        case 3 :
            classEx=".box-blue"
            objName=$(classEx).attr("class")
            break;
    }
    // delay here 3 second
    setTimeout(function() {
        playSounds(objName)
        $(classEx).css("opacity",0).delay(100).queue(function () {
            $(this).css("opacity",1)
            numOder.push(numRandom)
            console.log(numOder)
            $(this).dequeue();
        });
    }, 2000);
}

$(document).keypress(function () { 
    colorExample()
});

numOder.forEach(element => {
    $('.box')
});

// $('.box').click(function () {
//     let className= $(this).attr("class");
//     playSounds(className)
//     colorExample()

//     $(this).addClass('box-click')
//     .delay(100) // 1000 milliseconds = 1 second
//     .queue(function () {
//         $(this).removeClass('box-click');
//         $(this).dequeue();
//     });
    
// });


