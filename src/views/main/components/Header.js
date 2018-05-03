import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../redux/actions';

class Header extends Component {
  render() {
    const { toggleTheme } = this.props;
    return (
      <header id="pendingQ">
        <div className='theme' onClick={toggleTheme}>
          <p title="Toggle Day/Night theme." id="toggleTheme">D/N</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = (dispatch) => 
  bindActionCreators(Actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Header);
