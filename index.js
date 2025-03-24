const readline = require('readline');

const runGame = async (gameDescription, generateQuestion, getCorrectAnswer) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log('Welcome to the Brain Games!');
    const userName = await new Promise((resolve) => {
        rl.question('May I have your name? ', resolve);
    });
    console.log(`Hello, ${userName}!`);
    console.log(gameDescription);

    let correctAnswersCount = 0;
    const rounds = 3;

    while (correctAnswersCount < rounds) {
        const question = generateQuestion();
        console.log(`Question: ${question}`);
        const userAnswer = await new Promise((resolve) => {
            rl.question('Your answer: ', resolve);
        });

        const correctAnswer = getCorrectAnswer(question);
        if (userAnswer === correctAnswer.toString()) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            rl.close();
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
    rl.close();
};
module.exports = runGame;
