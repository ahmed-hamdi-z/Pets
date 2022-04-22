

var images = document.querySelectorAll('.img-gallary');
var imageslight = document.querySelector('.product');
var containerlight = document.querySelector('.image-light');


images.forEach(image =>{
    image.addEventListener('click', ()=>{
       showimage(image.getAttribute('src'))
    })
})

containerlight.addEventListener('click', (e)=>{
    if(e.target !== imageslight){
        containerlight.classList.toggle('show')
        imageslight.classList.toggle('showImage')
        menusvg1.style.opacity = '1'
    }
})

var showimage = (image)=>{
    imageslight.src = image
    containerlight.classList.toggle('show')
    imageslight.classList.toggle('showImage')
}
