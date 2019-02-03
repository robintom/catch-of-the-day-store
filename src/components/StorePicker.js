import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  myInput = React.createRef();

  // using properties method to access StorePicker this instance
  goToPage = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToPage}>
        <h2>Please enter a Store Name</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Enter a store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default StorePicker;
