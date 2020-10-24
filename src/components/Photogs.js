import React, { Component } from 'react'
import photogsData from './photogsData'
import axios from "axios"

export default class Photogs extends Component {
   constructor(props) {
      super()
   }

   render() {
         const imgPar = "/full/200,/0/default.jpg"
         const photo_selection = this.props.collection.map((item, index) =>
            <div className='image-container' key={item.id}>
               <img src={item.thumbnail.url + imgPar}/>  
            </div>
         )
         const name = photogsData.map((item, index) =>
            <div>
               <li onClick={this.props.handleSelectPhotog} style={{cursor: 'pointer'}}>
                  {item.name}
               </li>
            </div>
         )

         return (
            <div style={{paddingTop: '5%',}}>
               {/* <div>
                  {this.props.photogs_list}
               </div> */}

               {this.props.selectPhotog ?
                  
                  <div style={{ width: '80vw', margin: '0 auto' }}>
                     <img src={this.props.selectPhotog.bio_pic} style={{ height: '5em' }} />
                     {this.props.selectPhotog.about_body.map(item =>
                     <p>{item}</p>)}
                     <div className='image-gallery'>
                        {photo_selection}
                     </div>
                  </div> : ''
               }
            </div>
         )
   }
}
