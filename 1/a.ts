export const x = '';

const input = await Deno.readTextFile('./1/input.txt');

const lines = input.split('\n\n');

let highest = 0;

const amounts = [0];

for (const line of lines) {
  const nums = line.split('\n').map((s) => parseInt(s, 10));
  const total = nums.reduce((a, b) => a + b, 0);

  amounts.push(total);

  if (total > highest) {
    highest = total;
  }
}

console.log('highest', highest);
