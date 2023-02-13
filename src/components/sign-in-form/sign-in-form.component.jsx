import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.compononent";
import {
  signInWithGooglePopup,
  signInWithNativeEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithNativeEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email address.");
          break;
        case "auth/user-not-found":
          alert("Email address not found.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password.");
          break;
        case "auth/too-many-requests":
          alert("Too many sign-in attempts, please try again later.");
          break;
        case "auth/network-request-failed":
          alert("Network error, please try again later.");
          break;
        case "auth/email-already-in-use":
          alert("Email address already in use.");
          break;
        case "auth/operation-not-allowed":
          alert(
            "Email and password authentication is not enabled for this project."
          );
          break;
        default:
          alert("An error has occurred, please try again later.");
      }
    }
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
