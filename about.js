const images = [
    'gym1.jpg',
    'gym2.jpg',
    'gym3.jpg'
  ];
  
  let index = 0;
  const slide = document.getElementById('slide');
  
  function showNextImage() {
    index = (index + 1) % images.length;
    slide.src = images[index];
  }
  
  setInterval(showNextImage, 3000);
  