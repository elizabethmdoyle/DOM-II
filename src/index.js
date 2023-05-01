import './less/index.less'

// Your code goes here!

/*
* [ ] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`
* [ ] `drag / drop`*? 

first need to select the elements from the dom
once selected, functions need to be created for each event
each function will have a corresponding event listener, to be tied to the event happening inside of the function
*/

//ensures site is working

console.log('hello world');

//load event (loads when user loads window - written like a click handler)
window.onload = function(event) {
    console.log(`event ${event.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = "Ready to go!"
    console.log(heading)
//copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => { 
               // console.log(text)
            heading.textContent += text 
            })
        
    })
};
  

//mirror on click

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

//dblclick

document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = '';
})

//keydown

window.addEventListener('keydown', evt => {
    console.log(evt);
    if (evt.key === '6') {
        document.body.innerHTML = '<h1>You ran order 66</h1>';
    }
})

//mousemove

document.body.addEventListener('mouseover', evt => {
    const {clientX, clientY} = evt
    console.log(`Mouse is at ${clientX} , ${clientY}`)


})

//mouseenter and mouseleave


const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold';
    })

    destination.addEventListener('mouseleave', evt => {
        setTimeout( () => {
        destination.style.fontWeight = '';
        }, 500)
    })
}
                                                                                       

 
