import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectFlat } from "../actions";

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const { flat, selectedFlat } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')`
    };
    let containerClasses = `flat card ${flat === selectedFlat ? ' selected': ''}`;
    return (
      <div className={containerClasses} style={style} onClick={this.handleClick}>
        <div className="card-category">{`${flat.price} ${flat.priceCurrency}`}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
          <p>{flat.price} {flat.priceCurrency}</p>
        </div>
      </div>
    );
  }
}

function mapReduxStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
