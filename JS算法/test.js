function tripledouble(num1, num2) {
  //code me
  var goal;
  var judge = [];
  var num1Arr = (num1 + "").split("");
  var num2Arr = (num2 + "").split("");
  for (var i in num1Arr) {
    if(num1Arr[i]==num1Arr[parseInt(i)+1]){
      if(num1Arr[parseInt(i)+1]==num1Arr[parseInt(i)+2]){
        var binGo=[parseInt(i),parseInt(i)+1,parseInt(i)+2];
        judge.push(binGo);
      }
    }
  }
  for (var j in num2Arr) {
    for(var k in judge){
      if(num1Arr[judge[k][0]]==num2Arr[j]){
        if(num1Arr[judge[k][0]]==num2Arr[parseInt(j)+1]){
          return 1;
        }
      }
    }
  }
  return 0;
}
}
/*function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}
var test = tripledouble(223332, 121332);
console.log(test);
