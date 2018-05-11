import React, { Component } from 'react';

export default class HowTo extends Component {
  render() {
    return (
      <div className='container'> 
        <div className='howto'>
          <h1>How<i>To</i></h1>
          <p>
            The page is designed to have simple functionality. The only thing you have to do is get in and enjoy the random quote. You can press "R" in your keyboard(or the random icon at the bottom right of the screen) to enjoy another random quote.
            <br/><br/>
            There's an option to add the quotes to your favourites by clicking the heart shaped icon or pressing "L".
            <br/>
            If you want to recommend a quote you just have to click on Suggest and send me an email.
            <br/><br/>
            Enjoy :')
          </p>
        </div>
        <footer>
          <ul>
            <li class='send'>
              <a href='mailto:KingCosmicDev@gmail.com?subject=QUOTE%20TITLE&body=QUOTE%20TEXT'>Suggest</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
