// Get the gallery container and the lightbox
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const caption = document.getElementById('caption');
const closeButton = document.getElementById('close');

// Array to store image data (source, caption)
const images = [
  {
    src: 'image1.jpg',
    caption: 'Caption for Image 1'
  },
  {
    src: 'image2.jpg',
    caption: 'Caption for Image 2'
  },
  {
    src: 'image3.jpg',
  },
  {
    src: 'image4.jpg',
  },
  {
    src: 'image5.jpg',
  },
  {
    src: 'image6.jpg    '
  }
  // Add more images with captions here
];

// Function to create thumbnail images and set up click event
function createThumbnail(src, caption) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = caption;
  img.addEventListener('click', () => openLightbox(src, caption));
  gallery.appendChild(img);
}

// Function to open the lightbox
function openLightbox(src, caption) {
  lightbox.style.display = 'block';
  lightboxImage.src = src;
  caption ? (caption.style.display = 'block') : (caption.style.display = 'none');
  caption.textContent = caption;
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Event listener for close button
closeButton.addEventListener('click', closeLightbox);

// Populate the gallery with thumbnail images
images.forEach(image => createThumbnail(image.src, image.caption));
