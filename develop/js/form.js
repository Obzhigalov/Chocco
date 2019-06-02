let myForm = document.querySelector('#form');
let sendbutton = document.querySelector('#sendform');
let modal = document.querySelector('.order-modal-wrap');
let modalContent = document.querySelector('.order-modal__content')
let body = document.querySelector('.body');
let cross = document.querySelector('.cross');
let input = document.querySelectorAll('.input');
let textarea = document.querySelector('.comment');
let clear = document.querySelector('.clear');
let formerror = document.querySelector('.formerror')
let clearform = () => {
    input.forEach(function(elem) {
        elem.value = '';
    });
    textarea.value = '';
}

sendbutton.addEventListener('click', e => {
    e.preventDefault();

    if (validateForm(myForm)) {

        formerror.textContent = '';

        let data = new FormData();
            data.append("name", myForm.name.value);
            data.append("phone", myForm.phone.value);
            data.append("comment", myForm.comment.value);
            data.append("to", "my@gmail.com");
        // {
        //     name: myForm.elements.name.value,
        //     phone: myForm.elements.phone.value,
        //     street: myForm.elements.street.value,
        //     building: myForm.elements.building.value,
        //     body: myForm.elements.body.value,
        //     apt: myForm.elements.apt.value,
        //     floor: myForm.elements.floor.value,
        //     paymentType: myForm.elements.paymentType.value,
        //     callback: myForm.elements.callback.checked
        // }

        console.log(data);
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(data);
        xhr.addEventListener('load', () => {

            body.classList.toggle('body--menu');
            modal.classList.add('order-modal-wrap--active');
            modalContent.textContent = xhr.response.message;

            if (xhr.response.status == 1) {
                clearform();
            }
            
        });
    };
});


function validateForm(form) {
    let valid = true;

    if(!validateInput(form.elements.name)) {
        valid = false;
    }
    if(!validateInput(form.elements.phone)) {
        valid = false;
    }
    if(!validateInput(form.elements.street)) {
        valid = false;
    }
    if(!validateInput(form.elements.building)) {
        valid = false;
    }
    if(!validateInput(form.elements.body)) {
        valid = false;
    }
    if(!validateInput(form.elements.apt)) {
        valid = false;
    }
    if(!validateInput(form.elements.floor)) {
        valid = false;
    }
    if(!validateInput(form.elements.comment)) {
        valid = false;
    }


    return valid;
}

function validateInput(input) {
    // input.nextElementSibling.textContent = input.validationMessage;
    formerror.textContent = 'Пожалуйста, корректно заполните все выделенные поля.'

    return input.checkValidity();
}

cross.addEventListener('click', () => {
    modal.classList.remove('order-modal-wrap--active');
    body.classList.remove('body--menu');
})

clear.addEventListener('click', clearform)

