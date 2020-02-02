
function getRandomColor() {
    const getRandomInt =() =>{ return Math.floor(Math.random() * 256)};
    const color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    return color
    }
    
function splitFourCircles (){
    //set a min size for the smallest circles so site doesn't break
    if($(this).width()<10){
        $(this).removeClass("child")
    }else{
        $(this).css("background-color", "transparent")
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
        },20)
    }
}

$(function(){
    $("div").one("mouseenter", splitFourCircles)
})