import React from 'react'
import './loginpage.css'
import '../../app.css'
import {Link} from 'react-router-dom'

import logo from '../../LoginAssets/shieldLogo.jpg'
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const LoginPage = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt='Logo'/>
            <h3>Welcome Back!</h3>
          </div>

          <form action='' className='form grid'>
            
            <div className="inputDiv">
              <label htmlFor='username'>Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type='text' id='username' placeholder='Enter Username'/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor='password'>Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type='password' id='password' placeholder='Enter Password'/>
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <a href='/home'>Home</a>

            <span className='forgotPassword'>
              Forgot your password? <a href="">Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default LoginPage