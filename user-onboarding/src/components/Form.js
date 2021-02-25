import React from 'react';

const Form = (props) => {

    const {values, change, submit, disabled ,errors} = props;

    const onChange = e =>{
        //* deconstruct for e.target
        const {name, value, type, checked} = e.target

        //*Check to see if type is checkbox is checked first if not use value
        const valueSet = type === 'checkbox' ? checked : value

        //* Calls InputChange from app.js to setFormValues
        change(name, valueSet)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}className='form-container'>
            <div className='form-groups'>
                <label> Name:
                    <input name='first_name' type='text' 
                    value={values.name}
                    onChange={onChange}
                    placeholder='Type name here..'
                     />
                </label>
                <label> Email:
                    <input name="email" value={values.email} 
                    onChange={onChange}
                    placeholder='Type email here..'
                    />
                </label>
                <label> Password:
                    <input name='password' value={values.password} 
                    onChange={onChange}
                    className="password"
                    placeholder='Type password here..'
                     />
                </label>
                <label> Terms of Service:
                    <input className="terms" name="terms"
                    type="checkbox"
                    value={values.terms} 
                    onChange={onChange}
                      />
                </label>
            </div>
            <div className='submit'>
                <h2>Add a User</h2>
                <button disabled={disabled}>submit</button>
                <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                {/* <div>{errors.terms}</div> */}
                </div>
            </div> 
        </form>
    );
};

export default Form;