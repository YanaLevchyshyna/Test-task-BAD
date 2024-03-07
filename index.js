import fs from 'fs/promises';

const func = async () => {
  const startTime = performance.now(); // Запам'ятовуємо час початку виконання
  console.log('startTime', startTime);

  const filePath = './constant/10m.txt';
  const data = await fs.readFile(filePath, 'utf-8');

  const numbers = data.trim().split('\n').map(Number);
  console.log('Array numbers', numbers.length);

  const sum = numbers.reduce((prevValue, number) => prevValue + number, 0);
  const average = Math.round(sum / numbers.length);
  console.log('average', average); // 7364

  const minNumber = numbers.reduce(
    (prevValue, minNum) => (minNum < prevValue ? minNum : prevValue),
    0
  );
  console.log('minNumber', minNumber); // minNumber -49999996

  const maxNumber = numbers.reduce(
    (prevValue, maxNum) => (maxNum > prevValue ? maxNum : prevValue),
    0
  );
  console.log('maxNumber', maxNumber); // maxNumber 49999978

  const median =
    numbers.length % 2 === 0
      ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
      : numbers[Math.floor(numbers.length / 2)];

  console.log('median', median); // -42706036;

  const ascendingNumbers = [...numbers].sort((a, b) => a - b);
  console.log('ascendingNumbers', ascendingNumbers);
  const descendingNumbers = [...numbers].sort((a, b) => b - a);
  console.log('descendingNumbers', descendingNumbers);

  const endTime = performance.now();
  console.log('endTime', endTime);

  const executionTime = Math.round((endTime - startTime) / 1000);
  console.log('executionTime', executionTime, 's');
};

func();
