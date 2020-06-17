import React, { Component } from "react";
import AboutLevitt from "./AboutLevitt"
import Modal from "../../Modal"
import Slide from "../../Slide"

class Levitt extends Component {
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
      let imgPar = "/full/400,/0/default.jpg"; {/* required endpoint for the iiif image distribution. */}
  
      const photo_selection = this.props.collection.map((item, index) =>
         <div
            style={{position: 'relative', height: '8em', width: '8em', overflow: 'hidden', margin: '1em'}}
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

     <div className={`${this.state.isShowing ? "fade-out" : ""} main`}>
       <div className="image-gallery">
         {photo_selection}
       </div>
          <AboutLevitt />
        </div>
      </div>
    );
  }
}
export default Levitt;
