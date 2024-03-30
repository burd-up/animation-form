document.querySelector('.form').addEventListener('submit', (event) =>{
    event.preventDefault()
})


var im = new Inputmask();
im.mask(document.querySelector('#tel'))