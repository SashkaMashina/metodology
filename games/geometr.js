const readline = require('readline');

const rl = readline.createInterface({
  // eslint-disable-next-line no-undef
  input: process.stdin,
  // eslint-disable-next-line no-undef
  output: process.stdout,
});

function generateGeometricProgression(length) {
  const firstTerm = Math.floor(Math.random() * 10) + 1; 
  const ratio = Math.floor(Math.random() * 5) + 2; 
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(firstTerm * Math.pow(ratio, i));
  }
  return progression;
}

function hideElement(progression) {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { hiddenIndex, hiddenValue, progression };
}

async function playGame() {
  const name = await new Promise((resolve) => {
    rl.question('May I have your name? ', resolve);
  });

  console.log(`Hello, ${name}!`);
  let correctAnswers = 0;

  for (let i = 0; i < 3; i++) {
    const length = Math.floor(Math.random() * 6) + 5; // Длина прогрессии от 5 до 10
    const progression = generateGeometricProgression(length);
    const { hiddenValue, progression: progressionWithHidden } = hideElement(progression);

    console.log('What number is missing in the progression?');
    console.log(`Question: ${progressionWithHidden.join(' ')}`);

    const answer = await new Promise((resolve) => {
      rl.question('Your answer: ', resolve);
    });

    if (parseInt(answer) === hiddenValue) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${hiddenValue}.`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }

  rl.close();
}

playGame();
