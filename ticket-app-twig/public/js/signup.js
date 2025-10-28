document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form='signup']");
  if (!form) return;

  const inputs = {
    name: form.querySelector("[name='name']"),
    email: form.querySelector("[name='email']"),
    password: form.querySelector("[name='password']"),
    confirmPassword: form.querySelector("[name='confirmPassword']"),
  };

  const errorEls = {
    name: form.querySelector("[data-error='name']"),
    email: form.querySelector("[data-error='email']"),
    password: form.querySelector("[data-error='password']"),
    confirmPassword: form.querySelector("[data-error='confirmPassword']"),
  };

  const validateSingleField = (fieldName, value) => {
    const errors = validateForm(
      fieldName === "name" ? value : inputs.name.value,
      fieldName === "email" ? value : inputs.email.value,
      fieldName === "password" ? value : inputs.password.value,
      fieldName === "confirmPassword" ? value : inputs.confirmPassword.value
    );
    errorEls[fieldName].textContent = errors[fieldName] || "";
    inputs[fieldName].classList.toggle("border-red-500", !!errors[fieldName]);
    inputs[fieldName].classList.toggle("border-gray-300", !errors[fieldName]);
  };

  Object.entries(inputs).forEach(([field, input]) => {
    input.addEventListener("blur", (e) => {
      validateSingleField(field, e.target.value);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = validateForm(
      inputs.name.value,
      inputs.email.value,
      inputs.password.value,
      inputs.confirmPassword.value
    );

    let hasError = false;
    Object.entries(errors).forEach(([field, message]) => {
      errorEls[field].textContent = message || "";
      inputs[field].classList.toggle("border-red-500", !!message);
      inputs[field].classList.toggle("border-gray-300", !message);
      if (message) hasError = true;
    });

    if (!hasError) {
      alert("Sign Up successful! (Simulated)");
      form.reset();
      Object.values(errorEls).forEach((el) => (el.textContent = ""));
    }
  });
});
