const results = await Deno.readTextFile('./input.txt');

// const lines = results.split(' ');

// const highest = lines.reduce((highest, line) => {
//   const total = line.split('').reduce((total, char) => total + Number(char), 0);
//   return total > highest ? total : highest;
// }, 0);

console.log('highest', results);
