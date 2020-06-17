import React, { Component } from "react";
import AboutArbus from "./AboutArbus"
import Modal from "../../Modal"
import Slide from "../../Slide"
import manuel from "../../assets/manuel.jpg"
import local_photos from '../../local_photos'

class Arbus extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      isShowing: false,
      workSelect: null,
      titleSelect: null,
      descSelect: null
    };
  }
  handleSelect = (item, index) => {
    this.setState({
      isShowing: true,
      workSelect: item,
      titleSelect: item,
      descSelect: item,
      index: index
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
     const local_photo_selection = local_photos.map(local_photo => 
      <div key={local_photo.id}>
              {/* <img src={local_photo.url} /> */}
           </div>
      )
      console.log(local_photos)
    const photo_selection = this.props.collection.map((item, index) =>
         <div
            style={{position: 'relative', height: '13em', width: '13em', overflow: 'hidden', margin: '1em'}}
            className="image-container"
            key={item.id}
            onClick={() => this.handleSelect(item, index)}
          >
          <img
             src={item.thumbnail.url + imgPar}
             style={{ position: 'absolute', top: '-6em', left: '-6em', margin: '0 auto', height: '28em' }}
          />
            
          </div>
        )

    return (
      // ==== Use either 'Modal' or 'Slide' componenet for showing individual photos.
      <div>
        {/* <div className={` ${this.state.isShowing ? "fade-in" : ""} modal-container`}>
          {this.state.isShowing && (
// =============== MODAL ======================
            <Modal
            closeModal={this.closeModal}
            workDetail={this.state.workSelect}
            title={this.state.titleSelect}
            description={this.state.descSelect}
            />
            )}
          </div> */}
        {this.state.isShowing && (
// =============== SLIDE ====================== 
          <Slide
            closeSlide={this.closeSlide}
            index={this.state.index}
            current_collection={this.props.collection}
          />
          )}

          <div
            //  style={{display: 'block'}}
             className={`${this.state.isShowing ? "fade-out" : ""} main`}>
             <div
               //  style={{display: 'block'}}
                className="image-gallery">
                {photo_selection}
          </div>
          <AboutArbus />
        </div>
      </div>
    );
  }
}
export default Arbus;
