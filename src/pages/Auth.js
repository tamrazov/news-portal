import React from 'react';
import store from '../store/store';

import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as _ from 'lodash';

export default function Auth() {
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    store.Auth({
      email: _.trim(data.email),
      password: _.trim(data.password)
    }, history);
  };
  return(
    <form className="wrapper-content container-auth" onSubmit={handleSubmit(onSubmit)}>
      <h2> Authorization </h2>
      <input autoComplete="off" className="auth-email" name="email" ref={register({ required: true })} />
      <div className="auth-errors"> { errors.email && "email is required" } </div>  
      <input className="auth-password" name="password" ref={register({ required: true })} />
      <div className="auth-errors"> { errors.password && "password is required" } </div>  
      <button> Entry </button>
      <h6 className="text-success"> email: eve.holt@reqres.in <br/> password: cityslicka </h6>
    </form>
  )
}
