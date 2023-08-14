import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from'axios';
import { AuthContext } from './../context/authContext'

const Login = () => {

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { login } = useContext(AuthContext);

  // console.log(currentUser);

  const [error, setError] = useState(null);

  const handleChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      // const res = await axios.post(`${process.env.REACT_APP_HOST}/auths/login`, input);
      login(input)
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <div className='auth'>

      <h1>Login</h1>

      <form>
        <input type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input type="password" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {  error && <p>{error}</p>}
        <span>Don't you have an account <Link to="/register">Register</Link></span>
      </form>

    </div>
  )
}

export default Login