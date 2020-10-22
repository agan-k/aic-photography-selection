import React, { Component } from 'react'

import photogsData from './photogsData'
import axios from "axios"

export default class Photogs extends Component {
   constructor(props) {
      super()
      this.state = {
         selectPhotog: null,
         collection: []
      }
   }
   componentDidMount() {
      const api_url = photogsData.map(item =>
         '${item.api}'
         )
      axios
         .get(
            {api_url}
         )
         .then((response) => {
            this.setState({
               collection: response.data.data,
            })
            console.log(response);
         })
   }
      
   handleSelectPhotog = (item, index) => {
      this.setState({
         selectPhotog: item
      })
   }
   render() {
      const name = photogsData.map((item, index) =>
         <div >
            <li onClick={() => this.handleSelectPhotog(item)} style={{cursor: 'pointer'}}>
               {item.name}
            </li>
         </div>

      )
      // const about_photographer = photogsData.map((item, index) =>
      //    <div>
      //       <img src={item.bio_pic} style={{ height: '5em' }}/>
      //       <p>{item.about_body}</p>
      //    </div>

      // )
         return (
            <div style={{
               // backgroundColor: 'red',
               paddingTop: '5%'
            }}>

               <div>
                  {name}
               </div>

               {this.state.selectPhotog ?
                  <div style={{ width: '80vw', margin: '0 auto' }}>
                     <img src={this.state.selectPhotog.bio_pic} style={{ height: '5em' }} />
                     {this.state.selectPhotog.about_body.map(item =>
                        <p>{item}</p>)}
                  </div> : ''
               }
               {/* <div className='showcase-collection'>
               {showcase_collection}
            </div> */}
               {/* <div className='aic-collection'>
               {aic_collection}
            </div> */}

            </div>
         
         )
   }
}
