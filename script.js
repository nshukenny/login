const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
let isFormSubmitted = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isFormSubmitted = true;
  validateInputs();
});

const isValidPassword = (password) => {
  const pe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/;
  return pe.test(password);
};

const isValidUsername = (username) => {
  const re = /^[a-z0-9_\.]{5,10}$/;
  return re.test(username);
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is Required");
  } else if (!isValidUsername(usernameValue)) {
    setError(username, "provide a valid username");
  } else {
    setSuccess(username);
  }
  if (passwordValue === "") {
    setError(password, "Password is Required");
  } else if (!isValidPassword(passwordValue)) {
    setError(password, "provide a valid password");
  } else {
    setSuccess(password);
  }
  if (
    isFormSubmitted &&
    isValidUsername(usernameValue) &&
    isValidPassword(passwordValue)
  ) {
    window.location.href = "bootstrap.html";
  }
};

username.addEventListener("blur", () => {
  validateInputs();
});
password.addEventListener("blur", () => {
  validateInputs();
});
