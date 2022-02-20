// validation script here

//Testing a RegEx Pattern
//Getting inputs from our index.html
const inputs = document.querySelectorAll('input')


//Telephone RegEx
const patterns = {
    telephone: /^\d{11}$/
}

//validation function 
function validate(field, regex){
    // console.log(regex.test(field.value))

    if(regex.test(field.value)) {
        field.className = 'valid'
    } else
        field.className = 'invalid'
}

//Making JS Listen if you are typing on the input boxes
inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        // console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})

