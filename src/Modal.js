// to use Modal component uncomment in photographer components (i.e. Winogrand.js)
// and comment out the Slide component
import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgPar = "/full/600,/0/default.jpg";{/* required endpoint for the iiif image distribution. */}
    return (
      <>
        <div className="modal" onClick={this.props.closeModal}>
          <div className="centering-container">
            <div className="image-caption">
              <img src={this.props.workDetail.thumbnail.url + imgPar} />
              <h3>{this.props.description.title}</h3>
              <p>{this.props.description.thumbnail.alt_text}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
