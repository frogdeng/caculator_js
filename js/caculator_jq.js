$(document).ready(function(){
  
  var result= 0;
  $(".btn").click(function(){

    var input = $(this).attr("value");

    if(input == "*" && result == ''){
      result = '0'
    }else if(input == "/" && result == ''){
      result = '0'
    }

    if(input != "AC" && input != "CE" && input != "%" && input != "="){
      if(result === 0){
        result = "";
        result += input;
      }else{
        result += input;
      }
    }else if(input == "AC"){
      result = 0;
    }else if(input == "CE"){
      result = result.slice(0,-1);
    }else if(input == "="){
      result = eval(result);
    }else if(input == "%"){
      result = eval(result / 100)
    }

    $("#result_sectiont").val(result);
  });

})