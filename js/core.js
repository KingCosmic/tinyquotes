/* global quotes global legends*/

var selectedQ,
  searchOn,
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
  DTags = document.getElementById('tags');


// Used a function so now you don't have to refresh the page to display a random quote
function randomQ() {
  'use strict';

  // This line of code defines a random number from 1 to the length of the quotes array
  selectedQ = Math.floor(Math.random() * quotes.length);

  var separate = quotes[i].split('|'), // splits the quote and the tags
    // separate[0] is the quote with tags, author, referral etc etc
    tags = separate[1], // tags
    quote = separate[0].split('//'), // splits the quote in sections
    // quote[0] is the quote itself
    qAuthor = quote[1], // Gets the Author
    qReferer = quote[2], // Gets the referral
    authorNReferal, // used to store the Author and link to the referer
    lovedQuotes = localStorage.getItem('lovedUS'), // Gets the quotes you have loved
    quoteLovedArray = lovedQuotes.split(','), // Splits the quotes into each individual quote
    social = quote[3]; // Gets the social network will be used

  // Put the referral of the quote
  // If the referral is not defined only the quote and the author will be outputed
  if (qreferer === undefined) {
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
  DCite.innerHTML = quote[0];
  document.getElementById('author').innerHTML = authorNReferal;
  quote[0] = encodeURIComponent(quote[0].trim());

  if ((quote[0].length + ' -'.length + qAuthor.length) >= 141) {
    DTwit.href = '';
    DTwit.className = 'disabled';
    DTwit.title = 'Too long to share ;( | ' + quote[0].length;
    DTwit.target = '';
  } else if ((quote[0].length + ' -'.length + qAuthor.length) <= 140) {
    DTwit.href = 'https://twitter.com/intent/tweet?text=' + quote[0] + '%20-' + qAuthor;
    DTwit.className = '';
    DTwit.title = 'Share me :) | ' + quote[0].length;
    DTwit.target = '_blank';
  }
  DTumblr.href = 'http://www.tumblr.com/share/link?description=' + quote[0] + '%20-' + qAuthor + ' | @' + qReferer;
  DTumblr.title = 'Share me :)';

  DTags.innerHTML = '';
  var tagsArray= tags.split(',');
  if (tags > '' || tags.length > 0) {
    for (var z = 0; z <= (tagsArray.length - 1); z++) {
      DTags.innerHTML += '<span id =z' + z + '>' + tagsArray[z] + '</span>';
      if (legends.indexOf(tagsArray[z]) != -1) {
        document.getElementById(('z' + z)).setAttribute('class', 'legends');
        document.getElementById(('z' + z)).title = 'tag on the Legendarium.';
      }
      document.getElementById(('z' + z)).setAttribute('onclick', 'tag("'+ tagsArray[z] + '")');
    }
  }

  if (lovedQuotes === null) {
    localStorage.setItem('lovedUS', '');
    DLoving.setAttribute('class', 'toLove');
  } else {
    var searchLove = quoteLovedArray.indexOf(i + ',');
    if (searchLove != -1) {
      DLoving.setAttribute('class', 'loving');
      console.warn('loved ' + i);
    } else if (searchLove == -1) {
      DLoving.setAttribute('class', 'toLove');
      console.warn('not loved. ' + i);
    }
  }

  if (screen.width >= 961) {
    if (quote[0].length >= 140) {
      DCite.style.fontSize = '2em';
    } else if (quote[0].length >= 200) {
      DCite.style.fontSize = '1.7em';
    } else {
      DCite.style.fontSize = '2.5em';
    }
  }

  aClass('more', 'more');
  setTimeout(function () {
    location.hash = '';
  }, 100);

}

// Set interval to show a new random quote every 60 seconds
var quoteInterval = setInterval(randomQ, 60000);

// Function to love/add a quote on your favorite(locally)
function love() {
  lovedQuotes = localStorage.getItem('lovedUS');
  if (lovedQuotes === null) {
    localStorage.setItem('lovedUS', selectedQ + ',');
  } else {
    var lovedQ = lovedQuotes.indexOf(selectedQ + ',');
    if (lovedQ != -1) {
      console.warn('Already Loved ' + selectedQ);
    } else if (lovedQ === -1) {
      localStorage.setItem('lovedUS', lovedQuotes + selectedQ + ',');
      console.info('Loved quote: ' + selectedQ);
      DLoving.setAttribute('class', 'loving');
    }
  }
}

window.addEventListener('load', randomQ, false);

// When R key is pressed a random quote will be shown
window.addEventListener('keydown', checkKeyPressed, false);

//
DSearch.addEventListener('keydown', searchFav, false);

// Event listener to catch a click on overlay
DOverlay.addEventListener('click', hide);

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

function searchFav() {
  var searchVal = DSearch.value,
    lovedQuotes = localStorage.getItem('lovedUS'),
    favA = lovedQuotes.split(',');
  DModal.innerHTML = '';
  for (var i = 0; i < (favA.length - 1); i++) {
    var favQ = favA[i],
      favQuotes = quotes[favQ],
      s = favQuotes.split('//'),
      t = s[0],
      tTL = t.toLowerCase();
    if (tTL.indexOf(searchVal) != -1) {
      DModal.innerHTML = DModal.innerHTML + '<section>' + '<cite contenteditable="true" spellcheck="false">' + s[0] + '</cite>' + '<p><a onclick="location.reload()" href="#' + favQ + '">' + s[1] + '<span class="dev_fav"></span>' + '</a></p>' + '</section>';
    }
  }
}

DSQT.addEventListener('keydown', find, false);

function find() {
  DMQT.innerHTML = '';
  for (var i = 0; i < quotes.length; i++) {
    var qsplit = quotes[i].split('|'),
      q = qsplit[0],
      qa = q.split('//'),
      qtext = qa[0],
      qTextToLowerCase = qtext.toLowerCase(),
      qauthor = qa[1],
      tags = qsplit[1];
    if (DSQT.value.indexOf('#') != -1) {
      if (tags.indexOf(DSQT.value.substring(1, (DSQT.value.length))) != -1) {
        DMQT.innerHTML += '<section>' + '<cite contenteditable="true" spellcheck="false">' + qtext + '</cite>' + '<p>' + qauthor + '</p>' + '</section>';
      }
    } else if (qTextToLowerCase.indexOf(DSQT.value.toLowerCase()) != -1) {
      DMQT.innerHTML += '<section>' + '<cite contenteditable="true" spellcheck="false">' + qtext + '</cite>' + '<p>' + qauthor + '</p>' + '</section>';
    }
  }
}

function searchQT(a) {
  DMQT.innerHTML = '';
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

function aClass(e, c) {
  var el = document.getElementById(e);
  el.setAttribute('class', c);
}

var longLove,
  loveDiv = document.getElementById('love-div'),
  x,
  y,
  coorTO;

function lovePop(e) {
  x = e.pageX;
  y = e.pageY;
  loveDiv.style.left = (x + 10) + 'px';
  loveDiv.style.top = (y + 10) + 'px';
}

DCite.addEventListener('mousedown', function () {
  aClass('love-div', 'showing progress');
  loveDiv.addEventListener('mousemove', lovePop(event));
  clearTimeout(coorTO);
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
