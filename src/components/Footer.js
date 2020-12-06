import React from "react"
import './Footer.css'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'
import logo from '../assets/aic-logo.gif'


function Footer() {
  return (
    <footer>
      <div className='left section'>
      <a href='https://www.instagram.com/aic.photography.collection'>follow on Instagram
              {/* <Instagram className='instagram' /> */}
           </a><br />
           <a href="https://www.artic.edu/">AIC public API</a><br />
           <a href="https://sales.artic.edu/memberships">AIC - Become a member today.</a>
           {/* <img src={logo} /> */}
           <br />
           <div>
              site by:
               <div className='credit mobile'>
                  &nbsp;<a href="https://formversuscontent.com">FormVersusContent</a>©2020
               </div>
           </div>
      </div>
        <div className='right section'>
           <div className='credit desk-top'>
               <a href="https://formversuscontent.com">&nbsp;FormVersusContent</a>©2020
           </div>
        {/* <img src={logo} /> */}
      </div>
    </footer>
  )
}

export default Footer
