import React, { Component } from 'react';
import { render } from 'react-dom';
import flo from '../Images/Art/Props/flo.jpg';
import '../css/Gallery.css';

class Gallery extends Component {
    constructor(props) {
      super(props);
      this.handleMouseHover = this.handleMouseHover.bind(this);
      this.state = {
        isHovering: false,
      };
    }

    handleMouseHover() {
      this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
      return {
        isHovering: !state.isHovering,
      };
    }

    render() {
      return (
        <div id="gallery-container">
            <div className="thumbnail-container"
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
            >
                <div className="thumbnail-image-container">
                    <img src={flo} alt="image" />
                </div>
                {this.state.isHovering &&
                <div className="thumbnail-info-container">
                    <div className="thumbnail-info-text">example info</div>
                </div>
                }
            </div>
        </div>
      );
    }
  }

  export default Gallery;
