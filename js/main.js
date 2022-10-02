// Setting up the variables
const imageEl = document.getElementById('slideshow')
const images = [
    'images/image1.jpg',
    'images/image2.jpg', 
    'images/image3.jpg', 
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
]

let i = 0

function slideshow() {
    imageEl.setAttribute('src', images[i])

    if (i == images.length - 1) {
        i = 0
    } else {
        i++
    }

    setTimeout(() => {
        slideshow()
    }, 2000)
}

slideshow()
