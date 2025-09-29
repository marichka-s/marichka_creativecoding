const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/15.jpg',
  'images/16.jpg',
  'images/17.jpg',
  'images/18.jpg',
  'images/19.jpg',
  'images/20.jpg',
  'images/21.jpg',
  'images/22.jpg',
  'images/23.jpg',
  'images/24.jpg',
  'images/25.jpg',
  'images/26.jpg',
  'images/27.jpg',

];

document.getElementById('get-it-btn').addEventListener('click', showRandomImage);

function showRandomImage() {
  const imgElement = document.getElementById('randomImage');
  const randomIndex = Math.floor(Math.random() * images.length);
  imgElement.src = images[randomIndex];
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.style.opacity = 1;
  }, 50);
}


    

