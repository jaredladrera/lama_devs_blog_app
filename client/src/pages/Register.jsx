import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(`${process.env.REACT_APP_HOST}/auths/register`, input);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='auth'>

      <h1>Register</h1>
      {/* <h1>{process.env.REACT_APP_HOST} HOST</h1> */}
      <form>
        <input required type="text" placeholder='username' name='name' onChange={handleChange}/>
        <input required type="text" placeholder='email' name='email' onChange={handleChange}/>
        <input required type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error</p>
        <span>Do you have an account <Link to="/login">Login</Link></span>
      </form>

    </div>
  )
}

export default Register