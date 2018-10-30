function likes(names) {
  var allname=[];
  for (var i = 0; i < names.length; i++) {
    allname[i] = names[i];
  }
  var num = i-2;
  if (i===0){
    return "no one likes this" ;
  }
  else  if (i===1) {
      return allname[0]+" likes this";
  }
  else if (i===2) {
    return allname[0]+" and "+allname[1]+" like this";
  }
  else if(i===3){
    return allname[0]+", "+allname[1]+" and "+allname[2]+" like this";
  }
  else {
  return allname[0]+", "+allname[1]+" and "+num+" others like this";
  }
}
