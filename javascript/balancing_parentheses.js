function balancingParentheses(string) {
  let openP = 0
  let missing =0 
  
  for(let i =0; i<string.length; i++){
    if(string[i] === '('){
      openP++
      console.log(openP)
      continue;
    }
    if(openP>0){
      openP--
      console.log(openP)
    }else{
      missing++
    }
  }
  let sum = openP + missing
  return sum
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
