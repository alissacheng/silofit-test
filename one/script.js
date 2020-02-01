
function getRandomColor() {
    const getRandomInt =() =>{ return Math.floor(Math.random() * 300)};
    const color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    return color
    }
    
const circles = [
    [
        [],
        [],
        [],
        []
    ],
    []
]

function splitFourCircles (){
    $(this).css("background", "black")


    $(this).html(`
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    `)
    $(this).children("div").css("background", getRandomColor)
}

$(function(){
    //initial split of four circles
    $("div").one("mouseenter", splitFourCircles)
    //save to state after mouse has hoverd over a circle - the circle that cannot be split
    //array of empty values = each array element represents a div, with divs within

    //if array.length > 0, background color is black
    //if array.length ===0, random color\
    
})