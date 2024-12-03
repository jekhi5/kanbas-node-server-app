import Database from '../Database/index.js';

export function updateQuizAnswer(qid, idx, answer) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === qid);
    quiz.answerChoices[idx] = { ...quiz.answerChoices[idx], ...answer };
    return quiz;
}