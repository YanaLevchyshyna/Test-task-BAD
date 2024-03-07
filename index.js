import fs from 'fs/promises';

const func = async () => {
  const filePath = './constant/10m.txt';
  const data = await fs.readFile(filePath, 'utf-8');

  const numbers = data.trim().split('\n').map(Number);
  console.log('Array numbers', numbers);

  // for (let i = 1; i < numbers.length; i += 1) {
  //   let maxNumber = numbers[0];
  //   let minNumber = numbers[0];

  //   if (numbers[i] > maxNumber) {
  //     maxNumber = numbers[i];
  //   }

  //   if (numbers[i] < minNumber) {
  //     minNumber = numbers[i];
  //   }
  //   console.log('maxNumber', maxNumber);
  //   console.log('minNumber', minNumber);
  // }

  const sum = numbers.reduce((prevValue, number) => prevValue + number, 0);
  const average = Math.round(sum / numbers.length);
  console.log('average', average);

  const minNumber = numbers.reduce(
    (prevValue, minNum) => (minNum < prevValue ? minNum : prevValue),
    0
  );
  console.log('minNumber', minNumber);

  const maxNumber = numbers.reduce(
    (prevValue, maxNum) => (maxNum > prevValue ? maxNum : prevValue),
    0
  );
  console.log('maxNumber', maxNumber);
};

func();
