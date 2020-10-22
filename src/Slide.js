import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'
import './SharedStyle.css'

export default class Slide extends Component {
  constructor(props) {
    super(props)
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
     const imgPar = "/full/600,/0/default.jpg";

    return (
      <div className="slide-container">
        <div className='close' onClick={this.props.closeSlide}>
             &times; 
        </div>
          
        {this.state.count !== (this.props.current_collection.length - 1) ?
            <NextArrow nextImage={this.nextImage} /> : ''}
        {this.state.count !== 0 ?
             <BackArrow previousImage={this.previousImage} /> : ''}
          
        <div  className="slide">
            
        {this.props.current_collection.map((item) => {
         if (this.props.current_collection.indexOf(item) === this.state.count) {
            return (
                <div className='slide-img-container' key={item.id}> 
                   <img src={item.thumbnail.url + imgPar} alt='' />
                   <h3>{item.title}</h3>
                   <p>{item.thumbnail.alt_text}</p>
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



