import React from 'react';
import './Auth.styles.scss';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

function AuthPage() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthPage;
