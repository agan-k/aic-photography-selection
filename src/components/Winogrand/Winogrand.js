import React, { Component } from "react"
import AboutWinogrand from './AboutWinogrand'
import Modal from "../../Modal"
import Slide from "../../Slide"

class Winogrand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing: false,
      workSelect: null,
      descSelect: null,
    };
    console.log(props)
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
//   closeModal = () => {
//     this.setState({
//       isShowing: false,
//     });
//   };
  closeSlide = () => {
    this.setState({
      isShowing: false,
    });
  };

  render() {
    let imgPar = "/full/200,/0/default.jpg"; {/* required endpoint for the iiif image distribution. */}
    const photo_selection = this.props.collection.map((item, index) =>
      // to pick specific selections use this block and adjust the id#
      // item.id === 101530 ||
      // item.id === 99662 ||
      // item.id === 61390 ||
      // item.id === 61371 ||
      // item.id === 129987 ||
      // item.id === 61368 ||
      // item.id === 59769 ||
      // item.id === 61388 ||
      // item.id === 101531 ||
      // item.id === 99662 ||
      // item.id === 130009 ||
      // item.id === 101537 ||
      // item.id === 130026 ||
      // item.id === 129979 ||
      // item.id === 101532 ||
      // item.id === 136291 ||
      //   item.id === 130026
      //   ? (
        <div
          className="image-container"
          key={item.id}
          onClick={() => this.handleSelect(item, index)}
        >
          <img src={item.thumbnail.url + imgPar} />
        </div>
      // ) : null
    );

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
          <AboutWinogrand /> 
        </div>
      </div>
    );
  }
}
export default Winogrand;


