import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p> Being in the industry for over 20 years has seen us hone perfectionism to levels none can match</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Baratie Quick</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li className="del">Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+8-91-233-323</li>
                    <li>dine@baratie.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright © 2024 - All rights Reserved: baratie.org <br/><span>developed by <a href="#">Southern Just</a></span></p>

      
    </div>
  )
}

export default Footer
