import * as dao from './dao.js';

export default function QuizRoutes(app) {
  app.get('/api/quizzes', async (req, res) => {
    const quizzes = dao.findAllQuizzes();
    res.send(quizzes)
  });

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.send(status);
  });

  app.post("/api/quizzes", async (req, res) => {
      const quiz = await dao.createQuiz(req.body);
      res.json(quiz);
  });

  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
}