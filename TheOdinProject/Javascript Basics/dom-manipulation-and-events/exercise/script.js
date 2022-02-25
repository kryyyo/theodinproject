// a <p> with red text that says “Hey I’m red!”
const body = document.querySelector('body')

const p = document.createElement('p')

p.setAttribute('style','color:red')
p.textContent = "Hey I'm red!"

body.appendChild(p)

// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3')

h3.setAttribute('style','color:blue')
h3.textContent = "I'm a blue h3"

body.appendChild(h3)


// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


const div = document.createElement('div')

div.setAttribute('style','border-color:black; background-color:pink')

body.appendChild(div)

const divQuery = document.querySelector('div')

const divH1 = document.createElement('h1')
const divP = document.createElement('p')

divH1.textContent = "I'm in a div"
divP.textContent = "Me too!"

divQuery.appendChild(divH1)
divQuery.appendChild(divP)