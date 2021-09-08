function buttonLoginAlert() {
  alert(document.getElementById('user-email-phone').value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', buttonLoginAlert);

function nullOrEmpty(field) {
  const v = document.getElementById(field).value;
  return v === null || v === '';
}

function validateForm() {
  return !nullOrEmpty('name') && !nullOrEmpty('surname') && !nullOrEmpty('phone_email') && !nullOrEmpty('password') && !nullOrEmpty('birthdate') && !nullOrEmpty('gender');
}

const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', function (event) {
  if (validateForm()) {
    return true;
  }
  const msInvalidField = document.getElementById('msInvalidField');
  msInvalidField.style.display = 'block';
  return event.preventDefault();
});

const genderCustom = document.getElementById('gender-custom');
const customGender = document.getElementById('customGender');

customGender.addEventListener('click', function () {
  genderCustom.style.display = 'block';
});
