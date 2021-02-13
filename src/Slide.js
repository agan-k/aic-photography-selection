import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'
import './Slide.css'

export default class Slide extends Component {
  constructor(props) {
     super()
     console.log(props)
    this.state = {
      count: 0,
    }
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentDidMount() {
      this.setState({count: this.props.index})
  }

  nextImage() {
    this.setState(
      {
        count: this.state.count + 1
      })
  }
  previousImage() {
    this.setState(
      {
        count: this.state.count - 1
      })
  }
   
   render() {
     const iiifHq = "/full/800,/0/default.jpg" // higher quality image 
      

    // ===========================
    const BackArrow = (props) => (
      <div className='arrow back' onClick={props.previousImage}>
        <i className="fa fa-angle-left fa-1x" aria-hidden="true"></i>
      </div>
    )
    // ===========================
    const NextArrow = (props) => (
      <div className='arrow next' onClick={props.nextImage}>
        <i className="fa fa-angle-right fa-1x" aria-hidden="true"></i>
      </div>
    )
    {/* required endpoint for the "iiif" image distribution. */ }
     const imgPar = "/full/800,/0/default.jpg";

    return (
      <div className="slide-container">
          
        <div className='close' onClick={this.props.closeSlide}>
         &times; 
        </div>
          
        <div className="slide">
        {this.state.count !== 0 ?
         <BackArrow previousImage={this.previousImage} /> : ''}
        {this.props.current_collection.map((item) => {
         if (this.props.current_collection.indexOf(item) === this.state.count) {
            return (
               <div className={`${item.thumbnail.height > item.thumbnail.width ? 'vertical' : ''} slide-img-caption-container`}
                  // className='slide-img-container'
                  key={item.id}> 
                   <img src={this.props.url + item.image_id + iiifHq} alt='' />
                   <h3>{item.date_display}</h3>
                   <p>{item.title}</p>
                </div>
              )
             }
            return ''
         })} 
             
          {this.state.count !== (this.props.current_collection.length - 1) ?
         <NextArrow nextImage={this.nextImage} /> : ''}
         </div>
      </div>
     )
   }
}



