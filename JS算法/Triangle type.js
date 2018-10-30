
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script type="text/javascript">
    function triangleType(a, b, c){
      var arr=[a,b,c];
      arr.sort();
      if (arr[0]+arr[1]<=arr[3]) {
        return 0;
      }
      if (Math.pow(arr[0],2)+Math.pow(arr[1],2)>=Math.pow(arr[2],2)) {
        return 1;
      }
      if (Math.pow(arr[0],2)+Math.pow(arr[1],2)==Math.pow(arr[2],2)) {
        return 2;
      }
      if (Math.pow(arr[0],2)+Math.pow(arr[1],2)<=Math.pow(arr[2],2)) {
        return 3;
      }
    }
    console.log(triangleType(3,4,5));
    </script>
  </body>
</html>
