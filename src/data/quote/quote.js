import Immutable from 'immutable';

const Quote = Immutable.Record({
  id: '',
  cite: '',
  author: '',
  referer: '',
  social: '',
  tags: [],
  meta: {}
});

export default Quote;