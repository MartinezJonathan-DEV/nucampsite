export const validateContactForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Must be at least 2 characters.";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Must be at least 2 characters.";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  const digitsOnly = /^\d+$/;
  if (!digitsOnly.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should contain only numbers.";
  }
  const exactlyTenDigits = /^\d{10}$/;
  if (!exactlyTenDigits.test(values.phoneNum)) {
    errors.phoneNum = "The phone number must be 10 numbers long.";
  }

  if (!values.email.includes("@")) {
    errors.email = "Please enter a valid email.";
  }

  return errors;
};
