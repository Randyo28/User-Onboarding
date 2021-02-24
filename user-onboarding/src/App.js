import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';

function App() {

  //* Forms start Empty
  const InitialFormValues = {
    name: '',
    email: '',
    password: '',
    terms: false
  }

//* Errors start Empty
  const InitialErrors = {
    name: '',
    email: '',
    password: '',
  }

  //*Users array are empty at first
  const newUser = []

  //* Button is initally disabled
  const initialDisabled = false

  //* Form State - object
  const [formValues, setFormValues] = useState(InitialFormValues)

  //* User State - object
  const [user, setUser] = useState(newUser)

  //* Error State - object
  const [errors, setErrors] = useState(InitialErrors)

  //* Disabled State - boolean
  const [disabled, setDisabled] = useState(initialDisabled)

  //* Input function to change the state of Input
  const inputChange = (name, value) => {
      setFormValues({...formValues, 
        [name]: value
      })
  }

  //* Form submit function to trim out whitespaces, and post new user
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }

     postNewUser(newUser)
  }

  //* Axios put requst that will use the formSubmit function to post new User
  const postNewUser = (newUser) => {
    axios
    .put('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([res.data, ...user])
      
    })
    .catch(err => {
      console.log(err)
    })
    setFormValues(InitialFormValues)
  }

  //* 
   useEffect(() => {
     const getUsers = () => {
       axios
       .get('https://reqres.in/api/users')
       .then(res => {
         console.log(res.data)
         setUser(res.data)
       })
       .catch(err => {
         console.log(err)
       })
     }
     getUsers()
    }, [])
  
  return (
    <div className='app-container'>
      <header>
        <h1>User-OnBoarding</h1>
      </header>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={InitialErrors}
      />
    </div>
  );
}

export default App;
