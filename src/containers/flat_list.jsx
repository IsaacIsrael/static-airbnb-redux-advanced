
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from '../containers/flat';

class FlatList extends Component {
  componentWillMount() {
    // TODO: dispacth an action to updatethe Redux State Tree (flats)
    this.props.setFlats();
  }

  render () {
    const { flats } = this.props;
    return (
      <div className="col-sm-7 flat-list">
        {flats.map(flat => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapReduxStateToProps(state) {
  return {
    flats: state.flats
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
