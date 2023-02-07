const name_input = document.querySelector('input[name="name"]');
const name_size = Object.keys(name_input).length;
const name_error = document.querySelector(".name_txt_er");

const email_input = document.querySelector('input[name="email"]')
const email_error = document.querySelector(".email_txt_er");

const tel_input = document.querySelector('input[name="tel"]');
const tel_error = document.querySelector(".tel_txt_er");

const msg_input = document.querySelector('textarea[name="msg"]');
const msg_error = document.querySelector('.msg_txt_er');

const txt_error = document.querySelector(".error_txt");

const submit_button = document.querySelector(".save_btn");

// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }




submit_button.addEventListener("click", (e) => {
    e.preventDefault();
    if(!name_input.value)
    {
        name_error.innerHTML="Name cannot be empty";
    }
    else if(!name_input.value.match(/^[A-Za-z]+$/))
    {
        name_error.innerHTML="Name should not contain numbers";
    }
    else if(!(name_input.value.length>2))
    {
        name_error.innerHTML="Name should contain more than 2 characters";
    }
    else
    {
        name_error.innerHTML="";
    }
    
    if(!email_input.value)
    {
        email_error.innerHTML="Email cannot be empty";
    }
    else if(!email_input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        email_error.innerHTML="Enter a valid email address";
    }
    else
    {
        email_error.innerHTML="";
    }

    if(!tel_input.value)
    {
        tel_error.innerHTML="Telephone number cannot be empty";
    }
    else if(!tel_input.value.match(/^\d{10}$/))
    {
        tel_error.innerHTML="Enter a valid Telephone number";
    }
    else
    {
        tel_error.innerHTML="";
    }

    if(!msg_input.value)
    {
        msg_error.innerHTML="Message cannot be empty";
    }
    else if(!(name_input.value.length>9 && name_input.value.length<=500))
    {
        msg_error.innerHTML="Message should contain more than ten characters and less than 500 characters";
    }
    else
    {
        msg_error.innerHTML="";
    }
  });


  