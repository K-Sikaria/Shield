import React from 'react'
import './registerpage.css'
import '../../app.css'
import {Link} from 'react-router-dom'

import logo from '../../LoginAssets/shieldLogo.jpg'
import bg from '../../LoginAssets/loginbg.png'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'

const RegisterPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className='registerPage flex' style={backgroundStyle}>
      <div className='container flex'>

        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Register <BsFillPersonFill/></h3>
            <p className='textDiv'>Hello, Welcome aboard!</p>
            <img src={logo} alt='Logo'/>
          </div>

          <form action='' className='form grid'>
            
            <div className="inputDiv">
              <div className="input flex">
                <input type='text' id='name' placeholder='Full Name'/>
              </div>
            </div>

            <div className="inputDiv">
              <div className="input flex">
                <input type='text' id='username' placeholder='Email Address'/>
              </div>
            </div>

            <div className="inputDiv">
              <div className="input flex">
                <input type='password' id='password' placeholder='Password'/>
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight className='icon'/>
            </button>

            <a href='/home'>Home</a> {/* to make it easier for me to navigate between pages.*/}

            <span className='forgotPassword'>
              <a href="">Forgot password?</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage
