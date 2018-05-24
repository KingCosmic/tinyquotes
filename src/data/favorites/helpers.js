
// checks if the quote is in the given array

export const indexOfQuote = (arr, quote) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === quote.id) return i;
  }

  return -1;
}