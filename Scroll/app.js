//Set Date 
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//Close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer =  document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  //Calculate height needed to show links dinamically
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height + 20;

  if(containerHeight === 0)
    linksContainer.style.height = `${linksHeight}px`
  else
  linksContainer.style.height = 0;
})


//Fixed navbar and scroll back to top
const navBar = document.querySelector('.nav-center');
const topLink = document.querySelector('.top-link');
const navHeight = navBar.getBoundingClientRect().height;


window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  console.log('scrol '+scrollHeight)
  console.log('nav ' + navHeight)

  if(scrollHeight > navHeight){
    navBar.classList.add('fixed-nav');

  }

  else
    navBar.classList.remove('fixed-nav');
  

  //TOP LINK BUTTON
    if (scrollHeight > 500)
      topLink.classList.add('show-link')
  else
    topLink.classList.remove('show-link')

})

//Smooth Scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function(e) {
    //Prevent default to stay in the same place 
    e.preventDefault();
    //scroll to selected item
    const id = e.currentTarget.getAttribute("href").slice(1); //to get rid of the # in the link.
    const element = document.getElementById(id);
    //Calculate heights precisely
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;//Get element position. Top position in px

    if(!fixedNav){
      position = position - navHeight;
    }
    if(navHeight > 82){
      position += containerHeight;
    }

    window.scrollTo({left: 0, top: position,});

    // linksContainer.style.height = 0;

  });
});