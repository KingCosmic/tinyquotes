import React from 'react';

import Header from '../components/Header';
import QuoteContainer from '../components/QuoteContainer';
import Footer from '../components/Footer';
import Favorites from '../components/Favorites';

const AppView = (props) => {
  return (
    <div id='container' className={(props.ui.theme) ? 'dark' : 'light'} >
      <Header {...props} />
      <QuoteContainer {...props} />
      <Footer {...props} />
      <Favorites {...props} />
    </div>
  )
}

export default AppView;