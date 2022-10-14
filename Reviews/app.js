//Reviews data
const reviews = [
    {
    id: 1,
    author: 'Lucia Cesar',
    job: 'Bioquimica',
    img: 'person1.jpg',
    text: 'This game was intriguing, funny, challenging, and loads of fun! Been playing these games for a decade and this is by far my top 3 ever If you’re tired of the same old HOGs, give this a try — you won’t be disappointed!!',
    },
    {
    id: 2,
    author: 'Manuel Cesar',
    job: 'Software Engineer',
    img: 'person2.jpg',
    text: 'This game was intriguing, funny, challenging, and loads of fun! Been playing these games for a decade and this is by far my top 3 ever If you’re tired of the same old HOGs, give this a try — you won’t be disappointed!!',
    },
    {
    id: 3,
    author: 'Daniel Cesar',
    job: 'Management',
    img: 'person3.jpg',
    text: 'This game was intriguing, funny, challenging, and loads of fun! Been playing these games for a decade and this is by far my top 3 ever If you’re tired of the same old HOGs, give this a try — you won’t be disappointed!!',
    },
    {
    id: 4,
    author: 'Juan Perez',
    job: 'Software Engineer',
    img: 'person4.jpg',
    text: 'This game was intriguing, funny, challenging, and loads of fun! Been playing these games for a decade and this is by far my top 3 ever If you’re tired of the same old HOGs, give this a try — you won’t be disappointed!!',
    },
]

//Select DOM items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//Set starting item
let currentItem = 0;

//Show review -- selected item
function showReview(review) {
    const rev = reviews[review];
    img.src = rev.img;
    author.textContent = rev.author;
    job.textContent = rev.job;
    info.textContent = rev.text;
}

//load Initial review
window.addEventListener('DOMContentLoaded', function(){
    showReview(currentItem);
});

//Show previous and next revire
nextBtn.addEventListener('click', function(){
    if(currentItem > reviews.length - 1)
        currentItem = 0;
    else
    currentItem++;

    showReview(currentItem);
})
prevBtn.addEventListener('click', function(){
    if(currentItem == 0)
        currentItem = reviews.length - 1;
    else
    currentItem--;
    
    showReview(currentItem);
})


