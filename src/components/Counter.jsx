import React from "react";
import PropTypes from "prop-types";

export class Counter extends React.Component {
  state = {
      count: this.props.init
  };
  static propTypes = {
      init: PropTypes.number.isRequired,
      onSaveCount: PropTypes.func.isRequired
  };
  handleButtonClick = event => {
      const operation = +event.target.dataset.operation;
      this.setState(prevState => {
          return {
              count: prevState.count + operation
          };
      });
  };
  componentDidMount() {
      console.log("mounted");
      this.helloer = setInterval(() => {
          console.log("Hello from counter");
      }, 2000);
  }
  componentDidUpdate() {
      console.log("updeted");
  }
  componentWillUnmount() {
      console.log("unmounted");
      clearInterval(this.helloer);
      this.props.onSaveCount(this.state.count);
  }
  render() {
      const { count } = this.state;
      return (
          <div>
              <button data-operation="-1" onClick={this.handleButtonClick}>
          -1
              </button>
              {count}
              <button data-operation="+1" onClick={this.handleButtonClick}>
          +1
              </button>
          </div>
      );
  }
}
