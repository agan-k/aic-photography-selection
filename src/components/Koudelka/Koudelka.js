import React from 'react'
import AboutKoudelka from './AboutKoudelka'
import Slide from "../../Slide"

class Kudelka extends React.Component {
   constructor(props) {
      super()
      this.state = {
        isShowing: false
      }
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
    handleSelectThumbnail = (item, index) => {
      this.setState({
        isShowing: true,
        index: index
      })
    }
    closeSlide = () => {
      this.setState({
        isShowing: false,
      })
    }
  
    render() {
      // path to the image: {url}{image_id}{imgPar}
     const url = 'https://www.artic.edu/iiif/2/'
     const iiif = "/full/300,/0/default.jpg"
 
     const collection_thumbnails = this.props.collection.map((item, index) =>
       <div className='thumbnail-container' >
         <div className="thumbnail"
               key={item.id}
               onClick={() => this.handleSelectThumbnail(item, index)}>
            <img src={url + item.image_id + iiif}/>
         </div>
       </div>
        )
    return (
      <div className='main'>
        {this.state.isShowing && (
          <Slide
            closeSlide={this.closeSlide}
            index={this.state.index}
            current_collection={this.props.collection}
            url={url}
            iiif={iiif}
          />
          )}
       
        <AboutKoudelka />
        <div className={`${this.state.isShowing ? "fade-out" : ""} main`}>
          <div className="image-gallery">
            {collection_thumbnails}
          </div>
        </div>
      </div>
    )
  }
}
export default Kudelka
