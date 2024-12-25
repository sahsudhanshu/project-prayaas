let img= document.querySelector('.history');
let paras = document.getElementsByTagName('p');

// Using mouseover event to detect hovering
img.addEventListener('mouseover', () => {
    // Loop through all paragraph elements
    for (let para of paras) {
        para.innerText = 'Please donate';
        para.classList.add('phover');
    }
});

// Optional: If you want to reset the text when mouse leaves the image
img.addEventListener('mouseout', () => {
    for (let para of paras) {
        para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates voluptatum, aperiam fugiat accusamus soluta neque ipsa velit cupiditate, distinctio voluptate iusto minus commodi voluptatibus! Quas quo in explicabo consequatur.';
        para.classList.remove('phover') // Change this as needed
    }
});
