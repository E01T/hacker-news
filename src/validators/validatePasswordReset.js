export default function validateSignup(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "An email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  return errors;
}
