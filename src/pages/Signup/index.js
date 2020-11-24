import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  }
}));

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(resp => {
      console.log(resp);
      alert('Signup successfully')
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Signup failed. See the console on your developers tools. Maybe youre not registered in firebase')
      // ...
    });
  }
  return (
    <div className={classes.wrapper}>
      <h1>Signup</h1>
      <p>Create your account</p>
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="standard-basic" label="Email" onChange={onChangeEmail} />
      </div>
      <div>
        <TextField id="standard-basic" label="Password" onChange={onChangePassword} />
      </div>
      <div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Signup
      </Button>
      </div>
      </form>
      <div><Link to="/">Back to Home</Link></div>
    </div>
  );
}

export default Signup;