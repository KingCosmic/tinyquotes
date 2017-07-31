/* global quotes global legends*/

var selectedQ,
  searchOn,
  longLove,
  // All document variables are prefixed with D
  DCite = document.getElementById('cite'),
  DModal = document.getElementById('modal'),
  DMQT = document.getElementById('modalQT'),
  DOverlay = document.getElementById('overlay'),
  DTOverlay = document.getElementById('tOverlay'),
  DSearch = document.getElementById('search'),
  DSQT = document.getElementById('searchQT'),
  DLoving = document.getElementById('love'),
  DTwit = document.getElementById('twitter'),
  DTumblr = document.getElementById('tumblr'),
  DWrapper = document.getElementById('wrapper'),
  DTags = document.getElementById('tags'),
  DLDiv = document.getElementById('love-div');


// Used a function so now you don't have to refresh the page to display a random quote
function randomQ() {
  'use strict';

  // This line of code defines a random number from 1 to the length of the quotes array
  selectedQ = Math.floor(Math.random() * quotes.length);

  var separate = quotes[selectedQ].split('|'), // splits the quote and the tags
    // separate[0] is the quote with tags, author, referral etc etc
    qTags = separate[1], // tags
    quote = separate[0].split('//'), // splits the quote in sections
    // quote[0] is the quote itself
    qAuthor = quote[1], // Gets the Author
    qReferer = quote[2], // Gets the referral
    authorNReferal, // used to store the Author and link to the referer
    lovedQuotes = localStorage.getItem('lovedUS'); // Gets the quotes you have loved
  if (lovedQuotes != null) var quoteLovedArray = lovedQuotes.split(','); // Splits the quotes into each individual quote
  var social = quote[3]; // Gets the social network of the referer

  // Put the referral of the quote
  // If the referral is not defined only the quote and the author will be outputed
  if (qReferer === undefined) {
    authorNReferal = qAuthor;
  } else {
    // If it is will output the refferal and the social network link
    switch (social) {
    case 'tumblr':
      authorNReferal = qAuthor + ' | ' + '<a href="http://www.' + qReferer + '.tumblr.com" target="_blank">' + qReferer + '</a>';
      break;
    case 'facebook':
      authorNReferal = qAuthor + ' | ' + '<a href="http://www.facebook.com/' + qReferer + '" target="_blank">' + qReferer + '</a>';
      break;
    case 'twitter':
      authorNReferal = qAuthor + ' | ' + '<a href="http://www.twitter.com/' + qReferer + '" target="_blank">' + qReferer + '</a>';
      break;
    case 'behance':
      authorNReferal = qAuthor + ' | ' + '<a href="http://www.behance.com/' + qReferer + '" target="_blank">' + qReferer + '</a>';
      break;
    case 'youtube':
      authorNReferal = qAuthor + ' | ' + '<a href="http://www.youtube.com/user/' + qReferer + '" target="_blank">' + qReferer + '</a>';
      break;
    case undefined:
      authorNReferal = qAuthor + ' | ' + qReferer;
      break;
    }

  }

  // This two lines define the elements where the quote will be written
  DCite.innerHTML = quote[0]; // set the Cite value to the quote
  document.getElementById('author').innerHTML = authorNReferal; // sets the author value to the author and referer of the quote
  quote[0] = encodeURIComponent(quote[0].trim()); // encode so we can share

  //check if its too long to share on twitter
  if ((quote[0].length + ' -'.length + qAuthor.length) >= 141) {
    // if it is remove its link
    DTwit.href = '';
    // set its classname to disabled
    DTwit.className = 'disabled';
    // and set the hover text
    DTwit.title = 'Too long to share ;( | ' + quote[0].length;
    DTwit.target = '';
  } else if ((quote[0].length + ' -'.length + qAuthor.length) <= 140) {
    // if it is long enough to tweet set the link to share
    DTwit.href = 'https://twitter.com/intent/tweet?text=' + quote[0] + '%20-' + qAuthor;
    // remove ant class name it has
    DTwit.className = '';
    // set the hover text
    DTwit.title = 'Share me :) | ' + quote[0].length;
    DTwit.target = '_blank';
  }
  // set the link to share on tumbler
  DTumblr.href = 'http://www.tumblr.com/share/link?description=' + quote[0] + '%20-' + qAuthor + ' | @' + qReferer;
  // set the hover text :P
  DTumblr.title = 'Share me :)';

  // clear the tags
  DTags.innerHTML = '';

  // split the tags into an array
  var tagsArray = qTags.split(',');

  // check if there is some tags
  if (qTags > '' || qTags.length > 0) {
    // if there is loop through them
    for (var z = 0; z <= (tagsArray.length - 1); z++) {
      // add a span with each id and tag into the tags document
      DTags.innerHTML += '<span id =z' + z + '>' + tagsArray[z] + '</span>';

      // check if the tag is a legend tag (gold)
      if (legends.indexOf(tagsArray[z]) != -1) {
        // if it is give it the `legends` class
        document.getElementById(('z' + z)).setAttribute('class', 'legends');
        // set the hover text for legendary tags
        document.getElementById(('z' + z)).title = 'tag on the Legendarium.';
      }
      // add a click eveent for the tags
      document.getElementById(('z' + z)).setAttribute('onclick', 'tag("'+ tagsArray[z] + '")');
    }
  }

  // check if there isn't any lovedQuotes
  if (lovedQuotes === null) {
    // if there isnt set it to a empty string
    localStorage.setItem('lovedUS', '');
    // cant remember what this does o.o
    DLoving.setAttribute('class', 'toLove');
  } else {
    // if there are loved quotes we check if the current quote is loved
    var searchLove = quoteLovedArray.indexOf(selectedQ + ',');
    if (searchLove != -1) {
      // if it is we set the class to `loving`
      DLoving.setAttribute('class', 'loving');
    } else if (searchLove == -1) {
      // if it hasn't we set its class to `toLove`
      DLoving.setAttribute('class', 'toLove');
    }
  }

  // check screen size and change fontSize accordingly
  if (screen.width >= 961) {
    if (quote[0].length >= 140) {
      DCite.style.fontSize = '2em';
    } else if (quote[0].length >= 200) {
      DCite.style.fontSize = '1.7em';
    } else {
      DCite.style.fontSize = '2.5em';
    }
  }

  // sets the element with the id `more`
  // and gives it the class `more`
  aClass('more', 'more');

}

// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(randomQ, 60000);

// Function to love/add a quote on your favorite(locally)
function love() {
  // grab the loved quotes from storage
  var lovedQuotes = localStorage.getItem('lovedUS');

  // Check if the user hasnt loved any quotes
  if (lovedQuotes === null) {
    // if there isnt any set it to the loved quote
    localStorage.setItem('lovedUS', selectedQ + ',');
  } else {
    var lovedQ = lovedQuotes.indexOf(selectedQ + ',');
    if (lovedQ != -1) {
      // Already Loved selectedQ so return
      return;
    } else if (lovedQ === -1) {
      // set the loved quotes to lovedquotes plus the new loved quote
      localStorage.setItem('lovedUS', lovedQuotes + selectedQ + ',');
      // set the class of DLoving to `loving`
      DLoving.setAttribute('class', 'loving');
    }
  }
}

// give us a random quote when the site loads
window.addEventListener('load', randomQ, false);

// When R key is pressed a random quote will be shown
window.addEventListener('keydown', checkKeyPressed, false);

//
DSearch.addEventListener('keydown', searchFav, false);

// Event listener to catch a click on overlay
DOverlay.addEventListener('click', hide);

// This still needs to be cleaned and commented o.o
document.getElementById('post').addEventListener('click', function () {
  var ins = document.createElement('section'),
    form = document.getElementById('form'),
    text = form.getElementsByTagName('input')[0],
    daAuth = form.getElementsByTagName('input')[1],
    mention = form.getElementsByTagName('input')[2],
    social = form.getElementsByTagName('select')[0],
    current = document.getElementById('pendingC'),
    section = document.getElementsByTagName('section')[0],
    toAdd = text.value + '//' + daAuth.value + '//' + mention.value + '//' + social.value.toLowerCase(),
    toOpen = 'mailto:amiguencio@icloud.com?subject=' + daAuth.value + '[quote]&body=' + text.value;
  ins.innerHTML = '<cite class="added">' + text.value.substr(0, 60) + '</cite>';
  if (text.value.length >= 6 && daAuth.value.length >= 6 && mention.value.length >= 6) {
    if (localStorage.getItem('pending') === null) {
      localStorage.setItem('pending', (toAdd));
      current.insertBefore(ins, section);
    } else if (localStorage.getItem('pending')) {
      localStorage.setItem('pending', (localStorage.getItem('pending') + '|' + toAdd));
      text.value = '';
      daAuth.value = '';
      mention.value = '';
      current.insertBefore(ins, section);
      window.location.href = toOpen;
    }
  } else {
    alert('fill all the form');
  }
});

document.getElementById('favs').addEventListener('click', function () {
  DModal.className = 'modal modals';
  DOverlay.style.display = 'block';
  DSearch.className = 'fav_search searchd';
  document.getElementById('sharer').style.display = 'block';
  DModal.innerHTML = '';

  var lovedQuotes = localStorage.getItem('lovedUS'),
    onFavs = lovedQuotes.split(',');
  for (var i = 0; i <= (onFavs.length - 1); i++) {
    var getFromQuotesDB;
    if (onFavs[i] == '') {
      getFromQuotesDB = quotes[0];
    } else {
      getFromQuotesDB = quotes[onFavs[i]];
    }
    var separateTheQuote = getFromQuotesDB.split('|'),
      getTheTextFromSeparation = separateTheQuote[0],
      splitTheText = getTheTextFromSeparation.split('//'),
      splitedQuote = splitTheText[0],
      splitedAuthor = splitTheText[1];
    DModal.innerHTML = DModal.innerHTML + '<section>' + '<cite contenteditable="true" spellcheck="false">' + splitedQuote + '</cite>' + '<p><a onclick="location.reload()" href="#' + onFavs[i] + '>' + splitedAuthor + '</a></p>' + '</section>';
  }
});

function hide() {
  if (searchOn == true) {
    DMQT.className = 'modal modalh';
    DSQT.className = 'fav_search searchHide';
    setTimeout(function () {
      DSQT.className = 'fav_search';
      DMQT.className = 'modal';
      DMQT.innerHTML = '';
    }, 360);
  } else if (searchOn == false || searchOn == undefined) {
    DModal.className = 'modal modalh';
    DSearch.className = 'fav_search searchHide';
    setTimeout(function () {
      DSearch.className = 'fav_search';
      DModal.className = 'modal';
    }, 360);
  }
  DOverlay.style.display = 'none';
  document.getElementById('sharer').style.display = 'none';
  DSearch.value = '';
  DSQT.value = '';
  searchOn = false;
}

// pressing R will clear the interval and display another random quote
function checkKeyPressed(e) {
  // Random quote
  if (e.keyCode == '82') {
    clearInterval(quoteInterval);
    quoteInterval = setInterval(randomQ, 60000);
    randomQ();
    // Love quote
  } else if (e.keyCode == '70') {
    // Clicking L or F will add the quote to your favourites.
    love();
  }
}

// search you're loved quotes
function searchFav() {

  // DSearch.value is the value to search for
  var lovedQuotes = localStorage.getItem('lovedUS'), // get the lovedQuotes of the user
    LQArray = lovedQuotes.split(','); // split the quote's index
  DModal.innerHTML = ''; // set the value to '' so the old search doesnt show up with the new one
  for (var i = 0; i < (LQArray.length - 1); i++) {
    var q = quotes[LQArray[i]].split('//'); // splits the quote by index

    if (q[0].toLowerCase().indexOf(DSearch.value.toLowerCase()) != -1) {
      // this sets the value to all the quotes that are in the search criteria
      DModal.innerHTML = DModal.innerHTML + '<section>' + '<cite contenteditable="false" spellcheck="false">' + q[0] + '</cite>' + '<p><a onclick="location.reload()" href="#' + LQArray[i] + '">' + q[1] + '<span class="dev_fav"></span>' + '</a></p>' + '</section>';
    }
  }
}

// set a keydown event so it refreshes with every keystroke
DSQT.addEventListener('keydown', find, false);

// find any and all quotes
function find() {
  DMQT.innerHTML = ''; // make it empty so last searches dont showup with the new ones
  for (var i = 0; i < quotes.length; i++) {
    var qArray = quotes[i].split('|'), // split all the quotes
      qInfo = qArray[0].split('//'); // split the quote itself

    // if the quote fits in the search add it to the results
    if (qInfo[0].toLowerCase().indexOf(DSQT.value.toLowerCase()) != -1) {
      DMQT.innerHTML += '<section>' + '<cite contenteditable="false" spellcheck="false">' + qInfo[0] + '</cite>' + '<p>' + qInfo[1] + '</p>' + '</section>';
    }
  }
}

// TODO find what this does :eyes:
/*
function searchQT(a) {
  DMQT.innerHTML = ''; // sets the
  if (a == undefined || a == null) {
    DMQT.className = 'modal modals';
    DOverlay.style.display = 'block';
    DSQT.className = 'fav_search searchd';
  } else if (a) {
    if (searchOn) {
      find(a);
    } else if (searchOn == undefined || searchOn == null || searchOn == '') {
      DMQT.className = 'modal modals';
      DOverlay.style.display = 'block';
      DSQT.className = 'fav_search searchd';
      DSQT.value = a;
      find(a);
    }
  }
  searchOn = true;
}
*/
function tag(a) {
  document.getElementById('da_tag').setAttribute('class', 'daTag daTag-open');
  DWrapper.setAttribute('class', 'wrapper wr-open');
  DTOverlay.setAttribute('class', 'tOverlay tol-open');
  document.getElementById('tags_iframe').setAttribute('src', ('./tags/tags.html#' + a));
  DTOverlay.addEventListener('click', function () {
    DWrapper.setAttribute('class', 'wrapper');
    this.setAttribute('class', 'tOverlay tol-closed');
    document.getElementById('da_tag').setAttribute('class', 'daTag daTag-closed');
  });
}

// adds a class to a element
function aClass(e, c) {
  var el = document.getElementById(e); // grabs the element
  el.setAttribute('class', c); // adds the class to the element
}

function lovePop(e) {
  DLDiv.style.left = (e.pageX + 10) + 'px';
  DLDiv.style.top = (e.pageY + 10) + 'px';
}

DCite.addEventListener('mousedown', function () {
  aClass('love-div', 'showing progress');
  DLDiv.addEventListener('mousemove', lovePop(event));
  longLove = setTimeout(function () {
    aClass('love-div', 'hide done');
    aClass('love-pop', 'l-pop');
    setTimeout(function () {
      aClass('love-pop', '');
    }, 800);
    love();
  }, 1000);
  return false;
});

DCite.addEventListener('mouseup', function () {
  clearTimeout(longLove);
  aClass('love-div', 'hide cancelled');
  return false;
});


document.getElementById('more').addEventListener('click', function () {
  DTags.scrollLeft = DTags.scrollWidth;
  aClass('more', 'more active');
});


// Change theme on click
document.getElementById('toggleTheme').addEventListener('click', function () {
  if (localStorage.getItem('themePreference') == undefined) {
    localStorage.setItem('themePreference', 'light');
    aClass('toggleTheme', '');
  } else if (localStorage.getItem('themePreference') == 'light') {
    document.body.setAttribute('class', 'dark');
    localStorage.setItem('themePreference', 'dark');
    aClass('toggleTheme', 'active');
  } else if (localStorage.getItem('themePreference') == 'dark') {
    document.body.setAttribute('class', '');
    localStorage.setItem('themePreference', 'light');
    aClass('toggleTheme', '');
  }
});
