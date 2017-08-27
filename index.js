function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (n=0; n < musicians.length-1; n++){
    newArray.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return newArray;
}

function johnLennonFacts (facts){
  var newJohnArray = [];
  while (newJohnArray.length > facts.length){
    newJohnArray.push(`${facts}+!!!`);
  }
  return newJohnArray;
}

function iLoveTheBeatles(numb){
  var loveArray = [];
  do {
    loveArray.push(`I love the Beatles!`);
    numb++;
  } while (numb <=15);
}