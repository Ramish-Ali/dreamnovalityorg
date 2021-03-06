import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SmallNavbar.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import logo from '../images/abc.png'

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    {console.log("cheeclkdsf",props.name)}
      {props.name == 'main' ?
        <>
          <nav className=''>
            <Link
              // to=''
              className='nav-logo' onClick={closeMobileMenu}>
              <img src={logo} width='90' alt="logo" />
            </Link>
            <div className='mn-icon' onClick={handleClick}>
              <i className={click ? '' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-mn active' : 'nav-mn'}>
              <li>
                <div className='mn-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times tms' : ''} />
                </div>
              </li>
              <li className='nav-item'>
                {/* <Link
              to='gallery'
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              SERVICES 
            </Link> */}
                <a href="#services" className='nav-lnks' onClick={closeMobileMenu}><span style={{fontFamily:"book"}}>SERVICES</span></a>
              </li>

              <li className='nav-item'>
                {/* <Link
              // to=''
              className='nav-lnks'
              onClick={closeMobileMenu}
<span>        </span>    >
              GALLERY
            </Link> */}
                <a href="#gallery" className='nav-lnks' onClick={closeMobileMenu}> <span style={{fontFamily:"book"}}>GALLERY</span></a>
              </li>
              <li className='nav-item'>
                {/* <Link
              
              // to=''
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              TESTIMONIALS
            </Link> */}
                <a href="#teams" className='nav-lnks' onClick={closeMobileMenu}> <span style={{fontFamily:"book"}}>OUR-TEAM</span></a>
              </li>
              <li className='nav-item'>
                {/* <Link
              
              // to='contact'
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link> */}
                <a href="#contact" className='nav-lnks' onClick={closeMobileMenu}><span style={{fontFamily:"book"}}>CONTACT</span></a>
              </li>
              <li className='nav-item'>
                <Link
                  to='/login'
                  className='nav-lnks bdr'
                  onClick={closeMobileMenu}
                >
                    <span style={{fontFamily:"book"}}> LOGIN </span>
            </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='signup'
                  className='nav-lnks bdr'
                  onClick={closeMobileMenu}
                >
                   <span style={{fontFamily:"book"}}>SIGNUP</span>
            </Link>
              </li>
            </ul>
          </nav>
        </>
        :
        <>
          <nav className=''>
            <Link
              to='/'
              className='nav-logo' onClick={closeMobileMenu}>
                <ArrowBackIcon style={{ color: "white", fontSize: "30px",marginTop:"15px", fontWeight: "bold" }} />
              {/* <img src={logo} width='90' alt="logo" /> */}
            </Link>
            <div className='mn-icon' onClick={handleClick}>
              <i className={click ? '' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-mn active' : 'nav-mn'}>
              <li>
                <div className='mn-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times tms' : ''} />
                </div>
              </li>
              <li className='nav-item'>
                {/* <Link
              to='gallery'
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              SERVICES 
            </Link> */}
                <a href="#svc" className='nav-lnks' onClick={closeMobileMenu}>SERVICES</a>
              </li>
              <li className='nav-item'>
                <a href="#designer" className='nav-lnks' onClick={closeMobileMenu}>Designer</a>
              </li>

              <li className='nav-item'>
                {/* <Link
              // to=''
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              GALLERY
            </Link> */}
                <a href="#gallary" className='nav-lnks' onClick={closeMobileMenu}>GALLERY</a>
              </li>
              <li className='nav-item'>
                {/* <Link
              
              // to=''
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              TESTIMONIALS
            </Link> */}
                <a href="#feedback" className='nav-lnks' onClick={closeMobileMenu}>OUR-TEAM</a>
              </li>
              <li className='nav-item'>
                {/* <Link
              
              // to='contact'
              className='nav-lnks'
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link> */}
                <a href="#contact" className='nav-lnks bdr' onClick={closeMobileMenu}>CONTACT</a>
              </li>
              <li className='nav-item'>
                <Link
                  to='signup'
                  style={{ fontFamily: "serif,'Sacramento', Arial", fontSize: "16px" }}
                  className='nav-lnks bdr'
                  onClick={closeMobileMenu}
                >
                  SIGNUP
            </Link>
              </li>
            </ul>
          </nav>
        </>
      }
    </>
  );
}

export default Navbar;
