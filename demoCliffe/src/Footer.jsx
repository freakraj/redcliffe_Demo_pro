// import React from 'react';
import './Footer.css';
import RedcliffeIcon from '../src/assets/redcliffe.png'
import QualityLogo from '../src/assets/quality-logo.png'
import ShootingIcon from '../src/assets/shooting-icon.png'


const Footer = () => {
  return (
    <>

      <div className='footerSection'>
        <div className="main_container">
          <div className='footer_section'>
            {/* <img src="/logo.webp" alt="logo" /> */}
            <img src={RedcliffeIcon} alt="" width="104" height="41"/>
            <p>
              Redcliffe Labs is Indias fastest growing omnichannel Pan India diagnostics service provider having its services in 220+ cities through a network of 80+ owned advanced labs and 2000+ Collection Centers powered by home sample collection across India. We are on a mission to provide quality healthcare
            </p>
            <hr/>
          </div>
          <div className='footer_section'>
            <p className='headings'>Quick Links</p>
            <ul style={{ marginLeft: '-20px' }}>
              <li><a href="jdfhjsd">Partner With Us</a></li>
              <li><a href="jdfhjsd">FAQs</a></li>
              <li><a href="jdfhjsd">About Us</a></li>
              <li><a href="jdfhjsd">Our Labs</a></li>
              <li><a href="jdfhjsd">Redcliffe Imaging</a></li>
            </ul>
          </div>
          <div className='footer_section'>
            <p className='headings'>Follow us on</p>
            <div className="social_icons">
              <a href="fhksjdfh"><i className="bi bi-facebook"></i></a>
              <a href="fhksjdfh"><i className="bi bi-twitter-x"></i></a>
              <a href="fhksjdfh"><i className="bi bi-instagram"></i></a>
              <a href="fhksjdfh"><i className="bi bi-linkedin"></i></a>
              <a href="fhksjdfh"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          <div className='footer_section'>
            <p className='headings'>Connect with us</p>
            <div className="contact_row">
            <i className="bi bi-envelope"></i>
              <p>care@redcliffelabs.com</p>
            </div>
            <div className="contact_row">
            <i className="bi bi-person-lines-fill"></i>
              <p>898 898 0606</p>
            </div>
            <div className="contact_row_location">
              <i className="bi bi-geo-alt" style={{ width: '15%' }}></i>
              <p>Corporate Address: H 55, Electronic City, H Block, Sector 63, Noida, Uttar Pradesh 201301</p>
            </div>
          </div>


        </div>
        <div className='abc' >
          <div>
            <hr style={{ display: 'none' }} className='horizontals' />
            <div className="contact_row">
              <img src={QualityLogo} alt="logo" style={{ marginRight: '4px' }} />
              <p >We are NABL compliant with a<br /> motto for “exceptional customer service”</p>
            </div>
            <hr />
            <p>The Content on this websites is DMCA protected</p>
          </div>
          <div className="pills">
            <img src={ShootingIcon} alt="logo" style={{width:"2em",height:"2em"}} />
            <p>Find a lab near me</p>
            <button>Locate Now</button>
          </div>
        </div>
        <hr style={{ width: '100%' }} />
        <div className='footer_bottem_section'>
          <div className="left_section">
            <p>Redcliffe Labs</p>
            <p>© 2023 - 2024. All rights reserved.</p>
          </div>
          <div className="mid_section">

            <p>`Disclaimer: As per Pre-Natal Diagnostic Techniques (Regulation and prevention of Misuse) Act, 1994, our labs strictly does not determine the sex of the fetus.</p>
          </div>
          <div className="right_section">
            <ul>
              <li><a href="dlkfj">Privacy Policy</a></li>
              <li><a href="fj">Terms & Condition</a></li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer;
