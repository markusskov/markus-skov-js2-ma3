import {
  testLengthofTextBoxValue,
  testEmailAddress,
} from './libs/validation.js';
import { saveToLocalStorage } from './libs/localStorage.js';
import alert from './components/alert.js';

let form = document.querySelector('.form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const url = 'http://localhost:1337/auth/local';

form.onsubmit = async function (event) {
  event.preventDefault();

  if (
    testLengthofTextBoxValue(password.value, 1) &&
    testEmailAddress(email.value)
  ) {
    try {
      const { data } = await axios.post(url, {
        identifier: email.value,
        password: password.value,
      });
      console.log(data);
      saveToLocalStorage('token', data.jwt);
      saveToLocalStorage('user', data.user);

      window.location.href = './loggedIn.html';
    } catch (error) {
      alert('alert-danger', 'Invalid Credentials');
      console.log(error);
    }
  } else {
    alert('alert-danger', 'Please enter proper values for the inputs');
  }
};
