const animals = [
  {
    name: 'Grizzly bear',
    text:'The grizzly bear, a subspecies of the brown bear, is a powerful mammal found in North America, known for its distinctive hump and dense fur. These omnivores are skilled hunters and foragers, playing a vital role in maintaining ecosystem balance.',
    image:
      'https://images.unsplash.com/photo-1525423207238-e8f5315d87e2?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Red Fox',
    text:'The red fox is a small, adaptable carnivore with striking reddish-orange fur, bushy tail, and black legs, found across much of the Northern Hemisphere. Known for its intelligence and agility, it thrives in diverse habitats, from forests to urban areas.',
    image:
      'https://images.unsplash.com/photo-1470165511815-34e78ff7a111?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Eurasian wolf',
    text:'The Eurasian wolf, a subspecies of the gray wolf, is a highly adaptable predator found across Europe and Asia, recognized for its slender build and dense, grayish-brown fur. It plays a crucial role in its ecosystem by maintaining prey populations and supporting biodiversity.',
    image:
      'https://images.unsplash.com/photo-1425141750113-187b6a13e28c?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Bengal tiger',
    text:'The Bengal tiger, a majestic and endangered big cat, is known for its striking orange coat with black stripes and resides primarily in the forests and grasslands of India and Bangladesh. As a top predator, it plays a critical role in maintaining the balance of its ecosystem.',
    image:
      'https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Zebra',
    text:'Zebras are herbivorous mammals known for their striking black-and-white striped coats, which provide camouflage and social bonding within their herds. Native to Africa, they thrive in grasslands and savannas, playing a key role in maintaining the health of their ecosystems.',
    image:
      'https://images.unsplash.com/photo-1526319238109-524eecb9b913?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]


//======================Data==================================================================================================================================


function setThumbImages(data) {
  const thumbnails = document.querySelectorAll('.thumb-image ')
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




function setDataThumnails(data){
  const thumbnails = document.querySelectorAll('.thumb-image ')
  thumbnails.forEach((thumbnail, index)=>{
    thumbnail.dataset.title = data[index].name
  })
}

setDataThumnails(animals)


function updateTitle(thumbnail) {
  const mainTitle = document.querySelector('.main__title');
  mainTitle.textContent = thumbnail.dataset.title;
}

function setMainTitle(data,index){
 const mainTitle = document.querySelector('.main__title')
 mainTitle.textContent = data[index].name
}

setMainTitle(animals,0)


function setmainText(data, index){
  
}
let transitionTime = 300

function changeImage(){

  const thumbnails = document.querySelectorAll('.thumb-image')
  const mainImage = document.querySelector('.main-image');
  const mainContent = document.querySelector('.main__content');

  thumbnails[0].classList.add('active');
  updateTitle(thumbnails[0]);

  thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener('click',()=>{
      if (thumbnail.classList.contains('active')) {
        return
      }
      thumbnails.forEach((el)=> el.classList.remove('active'))
      mainImage.style.backgroundImage = thumbnail.style.backgroundImage;
      thumbnail.classList.add('active')
      mainContent.classList.add('animate')

      setTimeout(() => {
        mainContent.classList.remove('animate')
        updateTitle(thumbnail)
  
      }, transitionTime);
      
    })
  })

}

changeImage()



