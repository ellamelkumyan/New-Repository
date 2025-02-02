
      const slides = document.querySelector('.slides'); //считываю 
      const images = document.querySelectorAll('.slides img');
      

      let currentIndex = 0; // индекс текущего слайда 

      function changeImg() {
          slides.style.transform = `translateX(-${currentIndex * 100}%)`; //идем влево
      }

      
      setInterval(() => {
          if (currentIndex < images.length - 1) {
              currentIndex++;
          } else {
              currentIndex = 0;
          }
          changeImg();
      }, 1500);