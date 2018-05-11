import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('ui')
@observer
export default class Header extends Component {
  render() {
    const { toggleTheme } = this.props.ui;
    return (
      <header id="pendingQ">
        <div className='theme' onClick={toggleTheme}>
          <p title="Toggle Day/Night theme." id="toggleTheme">D/N</p>
        </div>
      </header>
    );
  }
}
