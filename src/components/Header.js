import React, { Component } from 'react';

export default class Header extends Component {
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
