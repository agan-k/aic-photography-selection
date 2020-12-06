import React, { Component } from "react"
import AboutLevitt from "./AboutLevitt"
import Slide from "../../Slide"

class Levitt extends Component {
   constructor(props) {
      super()
      this.state = {
        isShowing: false,
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
    closeModal = () => {
      this.setState({
        isShowing: false,
      })
    }
    closeSlide = () => {
      this.setState({
        isShowing: false,
      })
    }
    render() {
      let imgPar = "/full/400,/0/default.jpg"; {/* required endpoint for the iiif image distribution. */}
  
      const photo_selection = this.props.collection.map((item, index) =>
         <div className='thumbnail-container' >
            <div className="thumbnail"
                  key={item.id}
                  onClick={() => this.handleSelectThumbnail(item, index)}>
               <img src={item.thumbnail.url + imgPar}/>
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
       />
       )}

         <AboutLevitt />
         <div className={`${this.state.isShowing ? "fade-out" : ""} main`}>
            <div className="image-gallery">
               {photo_selection}
            </div>
         </div>
      </div>
    )
  }
}
export default Levitt
