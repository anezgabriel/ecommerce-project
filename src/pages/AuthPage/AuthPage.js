import React from 'react';
import './AuthPage.styles.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

function AuthPage() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthPage;
