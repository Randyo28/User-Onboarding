import './App.css';
import { useEffect, useState } from 'react';
import Form from './components/Form';
import Users from './components/Users';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';


function App() {

  //* Forms starts Empty
  const InitialFormValues = {
    first_name: '',
    email: '',
    password: '',
    terms: false
  }

//* Errors starts Empty
  const InitialErrors = {
    first_name: '',
    email: '',
    password: '',
  }
  //*Users array are empty at first
  const newUser = []

  //* Button is initally disabled
  const initialDisabled = true

  //* Form State - object
  const [formValues, setFormValues] = useState(InitialFormValues)

  //* User State - object
  const [user, setUser] = useState(newUser)

  //* Error State - object
  const [errors, setErrors] = useState(InitialErrors)

  //* Disabled State - boolean
  const [disabled, setDisabled] = useState(initialDisabled)

  //* Input function to change the state of Input
  const inputChange = (first_name, value) => {

      yup.reach(formSchema, first_name)
      .validate(value)
      .then(() => {
        
        setErrors({...errors, [first_name]: ''})
      })
      .catch(err => {
        setErrors({...errors, [first_name]: err.errors[0]})
      })

      setFormValues({...formValues, 
        [first_name]: value
      })
  }

  //* Axios put requst that will use the formSubmit function to post new User
  const postNewUser = (newUser) => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([...user, res.data])
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    setFormValues(InitialFormValues)
  }

  //* Form submit function to trim out whitespaces, and post new user
  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }

     postNewUser(newUser)
  }

  //* 
   useEffect(() => {
     const getUsers = () => {
       axios
       .get('https://reqres.in/api/users')
       .then(res => {
         console.log(res.data.data)
         setUser(res.data.data)
       })
       .catch(err => {
         console.log(err)
       })
     }
     getUsers()
    }, [])

    //*Status of Disabled when form changes
    useEffect(() => {
      formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])
  
  return (
    <div className="app-container">
        <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={errors}
      />
      <Users users={user}/>
    </div>
  );
}

export default App;
