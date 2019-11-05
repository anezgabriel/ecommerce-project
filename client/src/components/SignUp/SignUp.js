import React from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

function SignUp() {
  const [formState, setFormState] = React.useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formState;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setFormState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.log(
        `Error creating user with email and password: ${err.message}`
      );
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="displayName"
          type="text"
          value={formState.displayName}
          required
          handleChange={handleChange}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formState.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formState.password}
          required
          handleChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formState.confirmPassword}
          required
          handleChange={handleChange}
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
}

export default SignUp;
