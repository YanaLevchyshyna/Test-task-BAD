import fs from 'fs/promises';

const fileContent = fs.readFile('./10m.txt', 'utf-8');
console.log(fileContent);

const func = async () => {
  const filePath = './10m-copy.txt';
  const data = await fs.readFile(filePath, 'utf-8');

  console.log(data);

  const numbers = data.trim().split('\n').map(Number);
  console.log(numbers);

  numbers.sort((a, b) => a - b);

  const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  console.log(average);

  const minNumber = Math.min(...numbers);
  const maxNumber = Math.max(...numbers);
  console.log(minNumber);
  console.log(maxNumber);
};

func();
