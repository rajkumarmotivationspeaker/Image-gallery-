// Get elements
const imageForm = document.getElementById('imageForm');
const imageUrl = document.getElementById('imageUrl');
const imageGrid = document.getElementById('imageGrid');

// Handle form submission
imageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addImage(imageUrl.value);
    imageUrl.value = '';
});

// Function to add an image
function addImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Image';
    img.addEventListener('click', () => removeImage(img));
    imageGrid.appendChild(img);
}

// Function to remove an image
function removeImage(img) {
    if (confirm('Do you want to remove this image?')) {
        img.remove();
    }
}
