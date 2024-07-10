import React, { useState,useContext } from 'react';
import {firebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory,Link} from 'react-router-dom'
function Login() {

  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState('');
  const {firebase} = useContext(firebaseContext)
  const history=useHistory()
  

  const handleLogin =(e)=>{
      e.preventDefault()
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        history.push('/')
      }).catch((error)=>{
        // alert('Invalid Email/ Password');
        setError('Invalid email/password')
      })
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          {error && <span className="error">{error}</span>}
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup' ><a>Signup</a> </Link>
      </div>
    </div>
  );
}

export default Login;
