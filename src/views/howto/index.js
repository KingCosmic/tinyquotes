import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../redux/actions';

class HowTo extends Component {
  render() {
    return (
      <div id='container'>
        Testing
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(HowTo);
