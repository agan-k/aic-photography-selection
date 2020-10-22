import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './Home.css'
//==================================
import diane from '../assets/diane.jpg'
import brandt from '../assets/brandt.jpg'
import bruce from '../assets/bruce.jpg'
import frank from '../assets/frank.jpg'
import garry2 from '../assets/garry2.jpeg'
import helen from '../assets/helen.jpg'
import henri from '../assets/henri.jpg'
import koudelka from '../assets/koudelka.jpg'
import lee from '../assets/lee.jpg'
import lisette from '../assets/lisette.jpg'
import manuel from '../assets/manuel.jpg'
import sally from '../assets/sally.jpg'
import saul from '../assets/saul.jpg'
import walker from '../assets/walker.jpg'
import aic from '../assets/aic-logo.gif'
//==================================
import local_photos from '../local_photos'

class Home extends React.Component {
  constructor(props) {
    super(props)
    }

  render() {
   //   const local_photo = local_photos.map(({id, src}) => <img key={id} src={src} />)
   //    console.log(local_photo)
    return (
       <div className="home">
          
       
          <p>
             AIC Photography Collection is a growing selection of artwork accessible for viewing trough
             the <a href="https://www.artic.edu/open-access/public-api" target="_blank">Art Institute of Chicago public
             API</a>. The criteria for selected work is based on esthetic as well a
             s social relevance. It includes work of artists who, trough their work, express ideas and feelings 
             while also asking questions. Questions about the life, society, as well as questions about the relevance of 
             the medium of Photography and what it, as an expressive channel, brings to the list of numerous other 
             mediums in the world of visual Art. 
        </p>
        
      </div>
    )
  }

}
export default Home; 

