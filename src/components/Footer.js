import React from "react"
import './Footer.css'
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg'


function Footer() {
  return (
    <footer>
      <div className='left section'>
      follow on Instagram<a href='https://www.instagram.com/aic.photography.collection'>
                  <Instagram className='instagram' /></a><br/>
           <a href="https://sales.artic.edu/memberships">Art Institute of Chicago - Become a member today.</a><br/>
           <a href="https://www.artic.edu/">AIC public API</a><br />
           site by: &nbsp;<a href="https://formversuscontent.com">FormVersusContent</a>©2020
      </div>
      <div className='right section'>
        {/* <a href="https://www.artic.edu/">Art Institute of Chicago</a> */}
        {/* public API<br></br> */}
           {/* <a href="https://formversuscontent.com">FormVersusContent</a>©2020 */}
      </div>
    </footer>
  )
}

export default Footer
