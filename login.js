document.addEventListener("DOMContentLoaded", () => {
    const form=document.querySelector('form');
    const username_input=document.getElementById('username-input');
    const password_input=document.getElementById('password-input');
    const error_message=document.createElement('div');
    error_message.style.color='red';
    error_message.style.textAlign='center';
    document.querySelector('.login-box').appendChild(error_message);

    const predefinedUsername="zelandlyz";
    const predefinedPassword="231@ndlyz";  

    document.getElementById('login-btn').addEventListener('click', (e) => {
      e.preventDefault();
      let errors=[];
      errors = getLoginFormErrors(username_input.value, password_input.value); 
      if (errors.length>0) {
        error_message.innerText = errors.join(". ");
      } else {
        const confirmLogin=confirm("Login successful. Do you want to proceed?");
        if (confirmLogin) {
          window.location.href='explore.html';
        }
      }
    }); 

    function getLoginFormErrors(username, password) {
      let errors=[];
      if (username===''|| username ==null) {
        errors.push('Username is required');
        username_input.parentElement.classList.add('incorrect');
      } else if (username!==predefinedUsername) {
        errors.push('Username is incorrect');
        username_input.parentElement.classList.add('incorrect');
      }
      if (password=== '' ||password==null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
      } else if (password !==predefinedPassword) {
        errors.push('Password is incorrect');
        password_input.parentElement.classList.add('incorrect');
      }
      return errors;
    } 

    const allInputs=[username_input, password_input]; 
    allInputs.forEach(input=> {
      input.addEventListener('input', ()=> {
        if (input.parentElement.classList.contains('incorrect')) {
          input.parentElement.classList.remove('incorrect');
          error_message.innerText = '';
        }
      });
    });
  });
  