import React, { Component } from "react"
import AboutFrank from "./AboutFrank"
import Modal from "../../Modal"
import Slide from "../../Slide"


class Frank extends Component {
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
  
      const photo_selection = this.props.collection.map((item, index) =>
           <div
              style={{height: '5em', width: '5em', overflow: 'hidden', padding: '1em'}}
              className="image-container"
              key={item.id}
              onClick={() => this.handleSelect(item, index)}
            >
            <img
               src={item.thumbnail.url + imgPar}
               style={{ height: '14em' }}
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
  
          <div className={`${this.state.isShowing ? "fade-out" : ""} main`}>
            <div className="image-gallery">
              {photo_selection}
            </div>
          <AboutFrank />
        </div>
      </div>
    );
  }
}
export default Frank;
