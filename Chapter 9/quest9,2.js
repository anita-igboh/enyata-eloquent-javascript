
    // Quoting style
let msg = "'I'm the cook,' he said, 'it's my job.'";

console.log(msg.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."