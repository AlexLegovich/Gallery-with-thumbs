const animals = [
  {
    name: 'bear',
    image:
      'https://images.unsplash.com/photo-1525423207238-e8f5315d87e2?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'fox',
    image:
      'https://images.unsplash.com/photo-1470165511815-34e78ff7a111?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'wolf',
    image:
      'https://images.unsplash.com/photo-1425141750113-187b6a13e28c?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'tiger',
    image:
      'https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'zebra',
    image:
      'https://images.unsplash.com/photo-1526319238109-524eecb9b913?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]


//======================Data==================================================================================================================================


function setThumbImages(data) {
  const thumbnails = document.querySelectorAll('.thumb-image ')
  console.log(thumbnails)
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.style.backgroundImage = `url(${data[index].image})`
    thumbnail.style.backgroundSize = 'cover'
    thumbnail.style.backgroundPosition = 'center'
  })
}
setThumbImages(animals)

function setMainImage(data,index) {
  const mainImage = document.querySelector('.main-image');
  mainImage.style.backgroundImage = `url(${data[index].image})`
  mainImage.style.backgroundSize = 'cover'
  mainImage.style.backgroundPosition = 'center'
}

setMainImage(animals,0)

let transitionTime = 0

function changeImage(){

  const thumbnails = document.querySelectorAll('.thumb-image')
  const mainImage = document.querySelector('.main-image');

  thumbnails[0].classList.add('active');

  thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('click',()=>{
      if (thumbnail.classList.contains('active')) {
        return
      }
      thumbnails.forEach((el)=> el.classList.remove('active'))
      thumbnail.classList.add('active')

      mainImage.classList.add('animate')

      setTimeout(() => {
        mainImage.style.backgroundImage = thumbnail.style.backgroundImage;
        mainImage.classList.remove('animate')
  
      }, transitionTime);
      
    })
  })

}

changeImage()



// // const thumbsImages = document.querySelectorAll('.gallery__thumbs img');
// // const mainImage = document.querySelector('.gallery__image-main img');

// function setThumbImages(data) {
//   const thumbsImages = document.querySelectorAll('.gallery__thumbs img')
//   thumbsImages.forEach((image, index) => {
//     image.src = data[index].image
//   })
// }

// setThumbImages(animals)

// function setMainImage(data, index) {
//   const mainImage = document.querySelector('.gallery__image-main img')
//   mainImage.src = data[index].image
// }

// setMainImage(animals, 0)

// function addThumbClickListeners() {
//   const thumbs = document.querySelectorAll('.gallery__thumb');
//   const mainImage = document.querySelector('.gallery__image-main img');
//   thumbs[0].classList.add('active');

//   thumbs.forEach((thumb) => {
//     const thumbImage = thumb.querySelector('img'); // Get the image inside the thumbnail
//     thumb.addEventListener('click', function () {
//       mainImage.src = thumbImage.src;
//       thumbs.forEach((element) => element.classList.remove('active'));
//       thumb.classList.add('active');
//     });
//   });
// }

// addThumbClickListeners();
