export const x = '';

const input = await Deno.readTextFile('./2/input.txt');

const lines = input.split('\n');

const parsed = lines.map((line) => line.split(' ') as [string, string]);

let score = 0;

const vals = ['A', 'B', 'C'];

parsed.forEach((item) => {
  let total = 0;

  const [call, response] = item;

  if (response === 'X') total += 0;
  if (response === 'Y') total += 3;
  if (response === 'Z') total += 6;

  let more = vals.findIndex((t) => t === call)! + 1;

  if (response === 'X') more -= 1;
  if (response === 'Z') more += 1;
  more = more % 3;
  total += more;

  if (more === 0) {
    total += 3;
  }

  score += total;
});

console.log(score);
