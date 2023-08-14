import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState(null);

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(`${process.env.REACT_APP_HOST}/auths/register`, input);
      navigate("/login")
      console.log(res);
    } catch (err) {
      setError(err.response.data);
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
        { error && <p>{error}</p>}
        <span>Do you have an account <Link to="/login">Login</Link></span>
      </form>

    </div>
  )
}

export default Register