import React, { useState } from 'react';

import Button from '../Button';
import './log-in.scss';

export default function Login(props) {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInput = event =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  function validate() {
    if (!input.email || !input.password) {
      setError('ERROR: Cannot be blank');
      return;
    }
  }

  return (
    <div className='base-container'>
      <h2>Login</h2>
      <div className='content'>
        <form autoComplete='off' onSubmit={event => event.preventDefault()}>
          <section>{error}</section>
          <div className='form-group'>
            <label>Email </label>
            <input
              type='email'
              name='email'
              onChange={handleInput}
              autofocus='true'
            />
          </div>
          <div className='form-group'>
            <label>Password </label>
            <input type='password' name='password' onChange={handleInput} />
          </div>
          <Button
            type='submit'
            message='Log In'
            onClick={validate}
            classes={'sign-up-button'}
          />
        </form>
      </div>
    </div>
  );
}
