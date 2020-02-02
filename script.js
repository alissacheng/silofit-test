
function getRandomColor() {
    const getRandomInt =() =>{ return Math.floor(Math.random() * 255)};
    const color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    return color
    }
    
function splitFourCircles (){
    $(this).css("background", "black")

    $(this).html(`
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    `)
    $(this).children("div").css("background", getRandomColor)
    setTimeout(function(){
        $("div").one("mouseenter", splitFourCircles)
    
    },50)
}

$(function(){
    $("div").one("mouseenter", splitFourCircles)
})