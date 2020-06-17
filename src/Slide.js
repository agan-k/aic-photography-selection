import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'
import './SharedStyle.css'

export default class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      //for 'slide' effect only. uncomment line 108 & 112
      // in #SharedStyle.css to use the effect. (comment out fadeIn)
      slideRight: false,
      slideLeft: false
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
        count: this.state.count + 1,
        slideRight: true,
        slideCurrent: true
      })
  }
  
  previousImage() {
    this.setState(
      {
        count: this.state.count - 1,
        slideLeft: true,
        slideRight: false,
      })
  }

  render() {
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
   
    let imgPar = "/full/600,/0/default.jpg";{/* required endpoint for the "iiif" image distribution. */}

    return (
      <div className="slide-container">
        <div className='close'
          onClick={this.props.closeSlide}>
          &times; 
        </div>
        {this.state.count !== (this.props.current_collection.length - 1) ?
            <NextArrow nextImage={this.nextImage} /> :
            ''}
        {this.state.count !== 0 ?
            <BackArrow previousImage={this.previousImage} /> :
            ''}
        <div  className="slide" >
            
          {this.props.current_collection.map((photo, key) => {
            if (this.props.current_collection.indexOf(photo) === this.state.count) {
              console.log(photo)
              return (
              
                <div className={`${this.state.slideRight ?
                  "slide-right" :
                  "slide-left"} slide-img-container`}
                  key={photo.id}>
                  <img src={photo.thumbnail.url + imgPar} alt='' />
                  <h3>{photo.title}</h3>
                  <p>{photo.thumbnail.alt_text}</p>
                </div>
              )
             }
            return ''
            
          })}  
        </div>
      </div>
     )
   }
}



