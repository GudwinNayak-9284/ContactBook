import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

  const[enteredUserName,setEnteredUserName] =useState('')
  const[enteredUserAge,setEnteredUserAge] =useState('')


  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredUserName.trim().length ===0 || enteredUserAge.trim().length ===0){
      return alert('Please enter name');
    }
    if(enteredUserAge<1){
      return alert('please enter age greater than 1')
    }
    // console.log(enteredUserName,enteredUserAge)
    props.onAddUser(enteredUserName,enteredUserAge)
    setEnteredUserName('')
    setEnteredUserAge('')

  };

  const usernameHandler=(e)=>{
    setEnteredUserName(e.target.value);
  }
  const ageChangeHandler = (e)=>{
    setEnteredUserAge(e.target.value);
  }

  return (
    <Card cssClass={classes.card}>
      <form className={classes.form} onSubmit={addUserHandler}>
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input type="text" id="username" className={classes.inputField} value={enteredUserName} onChange={usernameHandler}/>
        <label htmlFor="age" className={classes.label}>
          Age (years)
        </label>
        <input type="number" id="age" className={classes.inputField} value={enteredUserAge} onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
