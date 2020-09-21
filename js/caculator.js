
var result= 0;
var input= '';

document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {

    if(item.innerHTML != "AC" && item.innerHTML != "CE" && item.innerHTML != "%" && item.innerHTML != "="){
      result = input += item.innerHTML

    }else if(item.innerHTML == "="){
      result = eval(result)
      input = eval(input)

    
    }else if(item.innerHTML == "AC"){
      input = ''
      result = 0
      
    }else if(item.innerHTML == "CE"){
      result = eval(result).toString()
      input = eval(input)

      result = result.slice(0,-1);
      
  
    }else if(item.innerHTML == "%"){
      input =  input/100
      result = input
    }
    // result = input += item.innerHTML
    document.getElementById("result_section").innerHTML = result
  })
})
























