export const x = '';

const input = await Deno.readTextFile('./2/input.txt');

const lines = input.split('\n');

const parsed = lines.map((line) => line.split(' ') as [string, string]);

let score = 0;

const answers = {
  X: 'A',
  Y: 'B',
  Z: 'C',
};

parsed.forEach((item) => {
  let total = 0;

  let [call, response] = item;

  if (response === 'X') total += 1;
  if (response === 'Y') total += 2;
  if (response === 'Z') total += 3;

  response = answers[response as keyof typeof answers];

  if (call === response) score += 3;
  if (call === 'A' && response === 'B') score += 6;
  if (call === 'B' && response === 'C') score += 6;
  if (call === 'C' && response === 'A') score += 6;

  score += total;
});

console.log(score);
