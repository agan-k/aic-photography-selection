import React, { Component } from 'react'
import Slide from '../Slide'

import axios from "axios"
import photogsData from './photogsData'
// import photogComponents from '../photogComponents'

export default class Photogs extends Component {
   constructor(props) {
      super(props)
      this.state = {
         showSlide: false,
         // collection: [],
      }
   }
   // handleSelectThumbnail = (item, index) => {
   //    this.setState({
   //       showSlide: true,
   //       index: index
   //    })
   // }
   // handleCloseSlide = () => {
   //    this.setState({
   //       showSlide: false
   //    })
   // }
   render() {
      // axios.get(this.props.collection_api).then((response) => {
      //    this.setState({
      //       collection: response.data.data
      //    })
      // })
      // let imgPar = "/full/200,/0/default.jpg"
      // const collection_thumbnails = this.state.collection.map((item, index) =>
      //    <div
      //       className='image-container'
      //       key={item.id}
      //       onClick={() => this.handleSelectThumbnail(item, index)}
      //    >
      //       <img src={item.thumbnail.url + imgPar}/>  
      //    </div>
      // )
      // const photogs = photogComponents.map(item => 
      //    <div>
      //       {item.src}
      //    </div>
      //    )
      return (
         <div className='photogs-container'>

            {/* {this.props.selectPhotog && (
            <>
               
               <div className='about-photog'>
                  <img className='bio-pic' src={this.props.selectPhotog.bio_pic} />
                  <h1>{this.props.selectPhotog.name}</h1>
               
                  {this.props.selectPhotog.about_body.map(item =>
                     <p>{item}</p>
                     )}
                  </div> 
                  <div className='photogs-collection'>
                  {collection_thumbnails}
               </div>
               
            </>
            )}
            
            
            {this.state.showSlide && (
               <Slide
                  current_collection={this.state.collection}
                  index={this.state.index}
                  closeSlide={this.handleCloseSlide}
               />
            )} */}

            {/* {photogs} */}
           
         </div>
      )
   }
}
