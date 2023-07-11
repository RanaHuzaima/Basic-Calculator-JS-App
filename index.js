function sum() {
  let first = prompt("Enter a Number"),
    second = prompt("Enter a Number");

  let newfirst = parseInt(first);
  let newsecond = parseInt(second);

  let SumofNumber = sum(newfirst, newsecond);

  console.log(SumofNumber);
  function sum(a, b) {
    return a + b;
  }

  alert(SumofNumber);
}

function sub() {
    let first = prompt("Enter a Number"),
      second = prompt("Enter a Number");
  
    let newfirst = parseInt(first);
    let newsecond = parseInt(second);
  
    let SubofNumber = sub(newfirst, newsecond);
    console.log(SubofNumber);

    function sub(a, b) {
      return a - b;
    }
  
    alert(SubofNumber);
  }


  function mul() {
    let first = prompt("Enter a Number"),
      second = prompt("Enter a Number");
  
    let newfirst = parseInt(first);
    let newsecond = parseInt(second);
  
    let mulofNumber = mul(newfirst, newsecond);
  
    console.log(mulofNumber);
    function mul(a, b) {
      return a * b;
    }
  
    alert(mulofNumber);
  }


  function divi() {
    let first = prompt("Enter a Number"),
      second = prompt("Enter a Number");
  
    let newfirst = parseInt(first);
    let newsecond = parseInt(second);
  
    let diviofNumber = divi(newfirst, newsecond);
  
    console.log(diviofNumber);
    function divi(a, b) {
      return a / b;
    }
  
    alert(diviofNumber);
  }
