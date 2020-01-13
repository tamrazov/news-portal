import React from 'react';
import { useForm } from 'react-hook-form';
import store from '../store/store';

export default function addPost() {
  const { register, handleSubmit } = useForm(
    {
      mode: "onBlur"
    }
  );
  const onSubmit = data => {
    store.addPost(data)
  }; 
  
  return(
    <div className="main-form" >
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" className="form-title form-control rounded-0" name="title" ref={ register( {required: true} ) } />
        <textarea placeholder="Post" className="form-body form-control rounded-0" name="body" ref={ register( { required: true, min: 18, max: 99} ) } />
        <input className="button-add" type="submit" />
      </form>
    </div>
  );
}
