// validation script here

//Testing a RegEx Pattern
//Getting inputs from our index.html
const inputs = document.querySelectorAll('input')

const patterns = {

    //name property: RegEx pattern
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8-20}$/
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

