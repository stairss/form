export const validate = (values, isSubmit, name) => {
  const errors = {};
  if (isSubmit) {
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 3) {
      errors.name = "Name is too short!";
    } else if (values.name.length > 50) {
      errors.name = "Name is too long!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!values.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = "Email is invalid!";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (values.phone.length < 9) {
      errors.phone = "Phone number is too short!";
    } else if (values.phone.length > 9) {
      errors.phone = "Phone number is too long!";
    }

    if (!values.nip) {
      errors.nip = "NIP is required!";
    } else if (values.nip.length !== 10) {
      errors.nip = "NIP number is invalid!";
    }

    if (!values.rodo) {
      errors.rodo = "Zaakpectuj regulamin rodo";
    }
  } else {
    switch (name) {
      case "name":
        if (!values.name) {
          errors.name = "Name is required!";
        } else if (values.name.length < 3) {
          errors.name = "Name is too short!";
        } else if (values.name.length > 50) {
          errors.name = "Name is too long!";
        } else {
          errors.name = "";
        }
        break;
      case "email":
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!values.email.match(/^\S+@\S+\.\S+$/)) {
          errors.email = "Email is invalid!";
        } else {
          errors.email = "";
        }
        break;
      case "phone":
        console.log(values.phone.length);
        if (!values.phone) {
          errors.phone = "Phone number is required!";
        } else if (values.phone.length < 9) {
          errors.phone = "Phone number is too short!";
        } else if (values.phone.length > 9) {
          errors.phone = "Phone number is too long!";
        } else {
          errors.phone = "";
        }
        break;
      case "nip":
        if (!values.nip) {
          errors.nip = "NIP is required!";
        } else if (values.nip.length !== 10) {
          errors.nip = "NIP number is invalid!";
        } else {
          errors.nip = "";
        }
        break;
      case "rodo":
        if (!values.rodo) {
          errors.rodo = "Zaakpectuj regulamin rodo";
        } else {
          errors.rodo = "";
        }
        break;

      default:
        break;
    }
  }

  return errors;
};
