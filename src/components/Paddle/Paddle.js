import React from "react";
import "./Paddle.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Paddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const test = (
      <div
        className="paddle pic"
        style={{
          top: `${this.props.movement.y}px`,
          transform: `rotate(${this.props.movement.r}deg)`
        }}
      >
        <div className="top-right" />
        <div className="top-left" />
        <div className="bottom-right" />
        <div className="bottom-left" />
      </div>
    );
    return (
      <ReactCSSTransitionGroup
        transitionName="pic"
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}
      >
        {test}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Paddle;
