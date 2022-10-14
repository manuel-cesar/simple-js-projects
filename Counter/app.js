//set the initial counter
let counter = 0;

//select value and all buttons 
var value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function (e){
        const action = e.currentTarget.classList;

        if(action.contains('decrease'))
            counter-- ;
        else if(action.contains('increase'))
            counter++;
        else
            counter = 0;
    
    if(counter < 0)
    value.style.color = 'red';
    else if(counter > 0)
        value.style.color = 'green';
    else
        value.style.color = 'black'
        
    value.textContent = counter;


    })
    
})
