const runGame = require('../index');

const generateGeometricProgression = (length) => {
    const firstTerm = Math.floor(Math.random() * 10) + 1;
    const ratio = Math.floor(Math.random() * 5) + 2;
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(firstTerm * Math.pow(ratio, i));
    }
    return progression;
};

const hideElement = (progression) => {
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return progression.join(' ');
};

const generateQuestion = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const progression = generateGeometricProgression(length);
    return hideElement(progression);
};

const getCorrectAnswer = (question) => {
    const progression = question.split(' ');
    const hiddenIndex = progression.indexOf('..');
    const ratio = progression[hiddenIndex + 1] / progression[hiddenIndex - 1];
    return progression[hiddenIndex - 1] * ratio;
};

const gameDescription = 'What number is missing in the progression?';

runGame(gameDescription, generateQuestion, getCorrectAnswer);