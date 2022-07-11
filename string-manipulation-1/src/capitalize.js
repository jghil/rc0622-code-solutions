/* exported capitalize */

// return the original string with only first letter capitalized

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// return the concatenation of 0th index of word being capitalized and the next letters being lowercased
