document.querySelector(".button-start-animation").addEventListener('click', ()=>{
    delay = 1510

    gas = document.querySelectorAll(".gas")
    tree = document.querySelectorAll(".tree")
    bush = document.querySelectorAll(".bush")
    mountaines = document.querySelector(".scene__mountaines")
    wheels = document.querySelectorAll(".wheel")
    road = document.querySelector(".road__marks")
    car = document.querySelector('.car')

    function startAnimation (element){
        element.style.animationPlayState = "running"
    }

    gas.forEach(startAnimation)
    tree.forEach((el) => setTimeout(startAnimation, delay, el))
    bush.forEach((el) => setTimeout(startAnimation, delay, el))
    setTimeout(startAnimation, delay, mountaines)
    setTimeout(startAnimation, delay, road)
    startAnimation(car)
    wheels.forEach(startAnimation)
})


