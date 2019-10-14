import React from 'react';
import FormInput from '../FormInput';
import './SignIn.styles.scss';
import Button from '../Button';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

function SignIn() {
  const [formState, setFormState] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = formState;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormState({ email: '', password: '' });
    } catch (err) {
      console.log(`Error while signing in: ${err.message}`);
    }
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button
            isGoogleSignIn
            type="button"
            onClick={() => signInWithGoogle()}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
