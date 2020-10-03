module.exports = function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map(pair => pair[0]).join('');
  const closeBrackets = bracketsConfig.map(pair => pair[1]).join('');
  let stack = [];

  for (const bracket of str) {
    //Делаем проверку на закрывающийся символ;
    if (closeBrackets.includes(bracket)) {
      //Сравнивает последний в стеке символ с открывающим соответствующим встреченному закрывающему;
      if (stack[stack.length-1] === openBrackets[closeBrackets.indexOf(bracket)]) {  
        stack.pop();
        //Иначе если встречный символ содержится в открывающих;
      } else if (openBrackets.includes(bracket)) {
        stack.push(bracket);
      } else {
        return false;
      }
    } else if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    }
  }

  if (stack.length === 0) return true;
  else return false;
}
