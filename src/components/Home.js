import React from 'react'
import './Home.css'
import bus from '../assets/bus.jpg'
import Frank from './Frank/Frank'

class Home extends React.Component {
  constructor(props) {
    super()
    }

  render() {
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
             <br /><br />
             This educational photography hub is made possible by Art Institute of Chicago and their public sharing of vast
             art collection. Please visit the <a href="https://www.artic.edu/">official website</a> for more information and support thier work by
             <a href="https://sales.artic.edu/memberships"> becoming a member today</a>.
          </p>
          <br/>
          <div className='featured'>
          <h3>Featurd Artist</h3>
          <span>January 2021</span>
          <hr style={{ width: '90%', opacity: '.2'}}/>
             <Frank collection={this.props.collection}/>
          </div>
      </div>
    )
  }
}
export default Home; 

