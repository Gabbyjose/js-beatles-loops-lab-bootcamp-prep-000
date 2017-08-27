function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var n=0; n < musicians.length-1; n++){
    newArray.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return newArray;
}

function johnLennonFacts (facts){
  var newJohnArray = [];
  var i=0;
  while (newJohnArray.length < facts.length){
    newJohnArray.push(`${facts[i]}+!!!`);
    i++;
  }
  return newJohnArray;
}

function iLoveTheBeatles(numb){
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    numb++;
  } while (numb <15);
  return loveArray;
}
