const readline = require('readline');

const findLCM = (numbers) => {
    var n = numbers.length,
        a = Math.abs(numbers[0]);
    for (var i = 1; i < n; i++) {
        var b = Math.abs(numbers[i]),
            c = a;
        while (a && b) {
            a > b ? a %= b : b %= a;
        }
        a = Math.abs(c * numbers[i]) / (a + b);
    }
    return a;
};

const playLCMGame = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log('Welcome to the Brain Games!');
    rl.question('May I have your name? ', (userName) => {
        console.log(`Hello, ${userName}!`);
        console.log('Find the smallest common multiple of given numbers.');

        let correctAnswersCount = 0;
        const rounds = 3;

        const askQuestion = () => {
            if (correctAnswersCount === rounds) {
                console.log(`Congratulations, ${userName}!`);
                rl.close();
                return;
            }

            const num1 = Math.floor(Math.random() * 20) + 1;
            const num2 = Math.floor(Math.random() * 20) + 1;
            const num3 = Math.floor(Math.random() * 20) + 1;
            const numbers = [num1, num2, num3];

            const correctAnswer = findLCM(numbers);

            console.log(`Question: ${numbers.join(' ')}`);
            rl.question('Your answer: ', (userAnswer) => {
                if (Number(userAnswer) === correctAnswer) {
                    console.log('Correct!');
                    correctAnswersCount++;
                } else {
                    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
                    console.log(`Let's try again, ${userName}!`);
                    rl.close();
                    return;
                }

                askQuestion();
            });
        };

        askQuestion();
    });
};

playLCMGame();