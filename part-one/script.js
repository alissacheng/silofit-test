
function getRandomColor() {
    const getRandomInt =() =>{ return Math.floor(Math.random() * 300)};
    const color = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`
    return color
    }


$(function(){
    $("div").one("mouseover", function(){
        this.style.backgroundColor = "black"
        $(this).html(`
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        `)

        $(this).children("div").css("background", getRandomColor)
    })
})