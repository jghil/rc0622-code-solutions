/* exported isVowel */

function isVowel(character) {
  var vowel = 'aeiouAEIOU';
  for (var i = 0; i < vowel.length; i++) {
    if (character === vowel[i]) {
      return true;
    }
  }
  return false;
}
