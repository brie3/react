import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  state = {
    isHidden: true,
    counterValue: 0
  };
  handleCounter = count => {
    this.setState({
      counterValue: count
    });
  };
  render() {
    const { isHidden, counterValue } = this.state;
    return (
      <div>
        {!isHidden && (
          <Counter init={counterValue} onSaveCount={this.handleCounter} />
        )}
        <button onClick={() => this.setState({ isHidden: !isHidden })}>
          Show
        </button>
      </div>
    );
  }
}
