import styles from './FlipCard.module.scss'
import React from "react"; 
import ReactCardFlip from 'react-card-flip';


class FlipCard extends React.Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div className={styles.wrapper} onClick={this.handleClick}>
                <ReactCardFlip isFlipped={this.state.isFlipped}>
                  {this.props.children[0]}
                  {this.props.children[1]}
                </ReactCardFlip>
            </div>
        )
    }
  }

export default FlipCard;