document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateButton').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value, 10);
    const syllables = parseInt(document.getElementById('syllables').value, 10);
    const vowelList = document.getElementById('vowels').value.split(',');
    const consonantList = document.getElementById('consonants').value.split(',');

    const word = generateWord(length, syllables, vowelList, consonantList);

    document.getElementById('result').textContent = word;
  });
});

function generateWord(length, syllables, vowelList, consonantList) {
  let word = '';

  for (let i = 0; i < syllables; i++) {
    let consonant = consonantList[Math.floor(Math.random() * consonantList.length)];
    let vowel = vowelList[Math.floor(Math.random() * vowelList.length)];

    if (word.length + 2 <= length) {
      word += consonant + vowel;
    } else if (word.length + 1 <= length) {
      word += vowel;
    } else {
      break;
    }
  }

  return word;
}
