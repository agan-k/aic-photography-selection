import React, { Component } from "react";
import AboutFriedlander from "./AboutFriedlander"
import Modal from "../../Modal"
import Slide from "../../Slide"

class Friedlander extends Component {
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
              className="image-container"
              key={item.id}
              onClick={() => this.handleSelect(item, index)}
            >
              <img src={item.thumbnail.url + imgPar} />
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
             <Slide
   // =============== SLIDE ====================== 
              closeSlide={this.closeSlide}
              index={this.state.index}
              current_collection={this.props.collection}
            />
            )}
  
          <div className={`${this.state.isShowing ? "fade-out" : ""} main`}>
            <div className="image-gallery">
              {photo_selection}
            </div>
          <AboutFriedlander />
        </div>
      </div>
    );
  }
}
export default Friedlander;
