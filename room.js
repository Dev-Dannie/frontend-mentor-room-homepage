const Cases = [
    {
        img : './images/desktop-image-hero-1.jpg',
        title : 'Discover innovative ways to decorate',
        
        review: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love..`
    },

    {
        img : './images/desktop-image-hero-2.jpg',
        title : 'We are available all across the globe',
        
        review : `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today....`
    },

    {
        img : './images/desktop-image-hero-3.jpg',
        title : 'Manufactured with the best materials',
        
        review : `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office....` 
    }
];

const Img = document.getElementById('Image');
const title = document.getElementById('title');
const text = document.getElementById('text');


const previousBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem  = 0

window.addEventListener('DOMContentLoaded', showCase());


function showCase(){
    let item = Cases[currentItem]
    Img.src = item.img
    title.textContent = item.title
    text.textContent = item.review
};

nextBtn.addEventListener('click', function (){
    currentItem++
    if (currentItem > Cases.length - 1){
        currentItem = 0
    }
    // (currentItem > Cases.length - 1) ? currentItem = 0 :
    showCase()
});

previousBtn.addEventListener('click', function (){
    currentItem--
    if (currentItem < 0){
        currentItem = Cases.length - 1
    }
    // (currentItem < 0) ? currentItem = Cases.length - 1 :
    showCase()
});
