const runGame = require('../index');

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

const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const num3 = Math.floor(Math.random() * 20) + 1;
    const numbers = [num1, num2, num3];

    return numbers.join(' ');
};

const getCorrectAnswer = (question) => {
    const numbers = question.split(' ').map(Number);
    return findLCM(numbers);
};

const gameDescription = 'Find the smallest common multiple of given numbers.';

runGame(gameDescription, generateQuestion, getCorrectAnswer);
