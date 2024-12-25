let img= document.querySelector('.history');
let para = document.querySelector('#pone');
let imgg= document.querySelector('.about');
let paraa = document.querySelector('#ptwo');
let imggg= document.querySelector('.events');
let paraaa = document.querySelector('#pthree');


// Using mouseover event to detect hovering
const donate = (img, para)=>{
        
        
        img.addEventListener('mouseover', () => {
    // Loop through all paragraph elements
    
        para.innerText = 'Please donate';
        para.classList.add('phover');
    
        
});


img.addEventListener('mouseout', () => {
   
        para.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates voluptatum, aperiam fugiat accusamus soluta neque ipsa velit cupiditate, distinctio voluptate iusto minus commodi voluptatibus! Quas quo in explicabo consequatur.';
        para.classList.remove('phover') // Change this as needed
    
});
}

donate(img, para);
donate(imgg, paraa);
donate(imggg, paraaa)

container = document.querySelectorAll('.containertwo')

const opaque= (object)=>{
        object.classList.add('opacity');

}
const dopaque= (object)=>{
        object.classList.remove('opacity');

}

container.forEach( (evt)=> {

        opaque(evt);
        
});


document.querySelector('.present').addEventListener('click', ()=>{
        document.querySelector('.present').classList.add('animation');   
        //document.querySelector('.present').classList.add('hide');   

        container.forEach( (evt)=> {

                dopaque(evt);
                
        });
        
})