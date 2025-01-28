let hide = document.querySelector('.hide');
let boxes = document.querySelectorAll('.republic_day');
let blurred = document.querySelector('.change')


// Toggle visibility when clicking on a .republic_day element
boxes.forEach((box) => {
    box.addEventListener('click', (event) => {

        // Prevent event from bubbling to the document click handler
        event.stopPropagation();
        blurred.classList.add('blur')
        // Toggle the 'hidden' class on the .hide element
        hide.classList.toggle('hidden');
        
    });
    
});

// Hide .hide element if clicking anywhere else on the page
document.addEventListener('click', () => {

    hide.classList.add('hidden');
    hide.classList.add()
    blurred.classList.remove('blur')

});

// Prevent hiding .hide when clicking inside it
hide.addEventListener('click', (event) => {
    event.stopPropagation();
});
