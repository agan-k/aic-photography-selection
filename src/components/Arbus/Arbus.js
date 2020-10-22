import React, { Component } from "react";
import AboutArbus from "./AboutArbus"
import Modal from "../../Modal"
import Slide from "../../Slide"
import local_photos from '../../local_photos'

class Arbus extends Component {
  constructor(props) {
    super();
    console.log(props)
    this.state = {
      isShowing: false,
      // workSelect: null,
      // titleSelect: null,
      // descSelect: null
    };
  }
  handleSelectThumbnail = (item, index) => {
    this.setState({
      isShowing: true,
      // workSelect: item,
      // titleSelect: item,
      // descSelect: item,
       index: index,
      selectedId: item.id
    });
  };
  closeModal = () => {
    this.setState({
      isShowing: false,
    });
  };
  closeSlide = () => {
    this.setState({
      isShowing: false,
    });
  };
  render() {
    let imgPar = "/full/300,/0/default.jpg"; {/* required endpoint for the iiif image distribution. */}
   
    const collection_thumbnails = this.props.collection.map((item, index) =>
         <div
            style={{position: 'relative', height: '13em', width: '13em', overflow: 'hidden', margin: '1em'}}
            className="image-container"
            key={item.id}
            onClick={() => this.handleSelectThumbnail(item, index)}
          >
          <img
             src={item.thumbnail.url + imgPar}
             style={{ position: 'absolute', top: '-6em', left: '-6em', margin: '0 auto', height: '28em' }}
          />
            
          </div>
        )

    return (
      <div>
        
        {this.state.isShowing && (
          <Slide
            closeSlide={this.closeSlide}
            index={this.state.index}
            current_collection={this.props.collection}
          />
          )}

          <div className={`${this.state.isShowing ? "fade-out" : ""} main`}>
             <div  className="image-gallery">
                {collection_thumbnails}
             </div>
             <AboutArbus />
        </div>
      </div>
    );
  }
}
export default Arbus;
