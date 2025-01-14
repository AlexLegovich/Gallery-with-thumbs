const animals = [
  {
    name: 'Grizzly bear',
    text:'The grizzly bear, a subspecies of the brown bear, is a powerful mammal found in North America, known for its distinctive hump and dense fur. T',
    image:
      'https://images.unsplash.com/photo-1710948651972-736cbca18977?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Red Fox',
    text:'The red fox is a small, adaptable carnivore with striking reddish-orange fur, bushy tail, and black legs, found across much of the Northern Hemisphere.',
    image:
      'https://images.unsplash.com/photo-1470165511815-34e78ff7a111?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Eurasian wolf',
    text:'The Eurasian wolf, a subspecies of the gray wolf, is a highly adaptable predator found across Europe and Asia, recognized for its slender build and dense, grayish-brown fur.',
    image:
      'https://images.unsplash.com/photo-1504715329877-f69f5258f4e8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Bengal tiger',
    text:'The Bengal tiger, a majestic and endangered big cat, is known for its striking orange coat with black stripes and resides primarily in the forests and grasslands of India and Bangladesh.',
    image:
      'https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Leopard',
    text:'The leopard is a large, agile big cat native to sub-Saharan Africa and parts of Asia. Known for its striking golden coat with black rosettes, the leopard is an expert hunter, using stealth and speed to catch prey.',
    image:
      'https://images.unsplash.com/photo-1496841733162-a88a250a275c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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


function setMainTitle(data,index){
  const mainTitle = document.querySelector('.main__title')
  mainTitle.textContent = data[index].name
 }
 
 setMainTitle(animals,0)

function updateTitle(thumbnail) {
  const mainTitle = document.querySelector('.main__title');
  mainTitle.textContent = thumbnail.dataset.title;
}




function setmainText(data, index){
  const mainText = document.querySelector('.main__text')
  mainText.textContent = data[index].text
}

setmainText(animals,0)

function updateText(thumbnail,data,index){
  const mainText = document.querySelector('.main__text')
  mainText.textContent = data[index].text
}

let transitionTime = 300

function changeImage(){

  const thumbnails = document.querySelectorAll('.thumb-image')
  const mainImage = document.querySelector('.main-image');
  const mainContent = document.querySelector('.main__content');

  thumbnails[0].classList.add('active');
  updateTitle(thumbnails[0]);

  thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener('click',()=>{
      if (thumbnail.classList.contains('active')) {
        return
      }
      thumbnails.forEach((el)=> el.classList.remove('active'))
      mainImage.style.backgroundImage = thumbnail.style.backgroundImage;
      thumbnail.classList.add('active')
      mainContent.classList.add('animate')
      mainImage.classList.add('animate')

      setTimeout(() => {
        mainContent.classList.remove('animate')
        mainImage.classList.remove('animate')
        updateTitle(thumbnail)
        updateText(thumbnail, animals, index);
  
      }, transitionTime);
      
    })
  })

}

changeImage()



