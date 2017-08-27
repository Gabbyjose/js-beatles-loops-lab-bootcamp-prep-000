function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (n=0; n < musicians.length-1; n++){
    newArray.push(`${musicians[n]} plays ${instruments[n]}`);
  }
  return newArray;
}