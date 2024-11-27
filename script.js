const checkClosingBracket = function (s) {
  const sArr = s.split("");
  const strMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  console.log(sArr.at(-1) === strMap.get(sArr[0]) ? "valid" : "invalid");
};

checkClosingBracket("({}()[])");
