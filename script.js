
function getRandomColor() {
    const getRandomInt =() =>{ return Math.floor(Math.random() * 255)};
    const color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    return color
    }
    
function splitFourCircles (){
    $(this).css("background-color", "black")
    $(this).removeClass("child")

    $(this).html(`
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
    `)
    $(this).children("div").css("background", getRandomColor)

    setTimeout(function(){
        $(".child").one("mouseenter", splitFourCircles)
    },50)
}

$(function(){
    $("div").one("mouseenter", splitFourCircles)
})