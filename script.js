// === IMAGE GALLERY ===
const totalImages = 14;
const galleryWrapper = document.getElementById('gallery');
const fullscreenWrapper = document.getElementById('fullscreenGalleryWrapper');

function createSlide(imgName) {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  const img = document.createElement('img');
  img.src = imgName;
  img.alt = imgName;
  slide.appendChild(img);
  return slide;
}

// Add image slides to main gallery and fullscreen
for (let i = 1; i <= totalImages; i++) {
  const imgName = `FG${i}.jpg`;
  galleryWrapper.appendChild(createSlide(imgName));
  fullscreenWrapper.appendChild(createSlide(imgName));
}

// Initialize normal image swiper
const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// Click to open fullscreen
galleryWrapper.querySelectorAll('img').forEach((img, idx) => {
  img.addEventListener('click', () => openGallery(idx));
});

let fullscreenSwiper;

function openGallery(index) {
  document.getElementById('fullscreenGallery').style.display = 'flex';
  fullscreenSwiper = new Swiper('.gallery-swiper-fullscreen', {
    initialSlide: index,
    loop: false,
    pagination: {
      el: '.fullscreen-gallery .swiper-pagination',
      clickable: true
    },
    on: {
      slideChange: function () {
        if (this.isEnd && this.touches.diff < 0) closeGallery();
      }
    }
  });
}

function closeGallery() {
  if (fullscreenSwiper) {
    fullscreenSwiper.destroy(true, true);
    fullscreenSwiper = null;
  }
  document.getElementById('fullscreenGallery').style.display = 'none';
}

// === VIDEO GALLERY ===
const videoList = ['FGVIDS1.mp4', 'FGVIDS2.mp4'];
const videoContainer = document.getElementById('videos');

videoList.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<video src="${src}" controls style="width:100%;max-height:300px"></video>`;
  videoContainer.appendChild(slide);
});

new Swiper('.video-swiper', {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// === HERO SWIPER ===
new Swiper('.hero-swiper', {
  loop: true,
  autoplay: { delay: 4000 },
  pagination: { el: '.swiper-pagination', clickable: true }
});
