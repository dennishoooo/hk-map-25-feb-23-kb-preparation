let start = 0;
let end = pattern.length;
let space = "";

while (start < end) {
  console.log(space + pattern.slice(start, end));
  start++;
  end--;
  space += " ";
}
