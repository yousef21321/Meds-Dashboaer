function Validation(values) {
  let errors = {};

  // Validate email
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Validate password
  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(values.password)) {
    errors.password = "Password is invalid";
  }

  // Validate status
  if (!values.status.trim()) {
    errors.status = "Status is required";
  } else if (values.status !== "active" && values.status !== "inactive") {
    errors.status = "Status is invalid";
  }

  // Validate phone
  if (!values.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "Phone is invalid";
  }

  return errors;
}
