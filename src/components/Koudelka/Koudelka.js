import React from 'react'
import AboutKoudelka from './AboutKoudelka'
import Modal from '../../Modal'
import Slide from "../../Slide"

class Kudelka extends React.Component {
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
            style={{height: '8em', width: '8em', overflow: 'hidden', padding: '1em'}}
            className="image-container koudelka"
            key={item.id}
            onClick={() => this.handleSelect(item, index)}
          >
            <img src={item.thumbnail.url + imgPar} style={{ height: '16em' }}/>
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
          <AboutKoudelka />
        </div>
      </div>
    )
  }
}
export default Kudelka
