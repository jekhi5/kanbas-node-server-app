import * as dao from './dao.js';

export default function QuizRoutes(app) {
    app.post("/api/quizzes/:qid/preview", (req, res) => {
    const { qid, idx, answer } = req.body;
    const quiz = dao.updateQuizAnswer(qid, idx, answer);
    res.send(quiz);
  });
}