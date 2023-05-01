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
};
  
 function changeColor(event) {
    const background = document.querySelector('.home');
    
}

