import React from 'react';

const Header = (props) => {
  const { toggleTheme } = props;
  
  return (
    <header id="pendingQ">
      <div className='theme' onClick={toggleTheme}>
        <p title="Toggle Day/Night theme." id="toggleTheme">D/N</p>
      </div>
    </header>
  );
}

export default Header;
