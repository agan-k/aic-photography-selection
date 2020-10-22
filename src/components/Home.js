import React from 'react'
import 'font-awesome/css/font-awesome.css'
import './Home.css'
//==================================
import bus from '../assets/bus.jpg'
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
          <div className='banner'>
            <img src={bus} />
          </div>
       
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

