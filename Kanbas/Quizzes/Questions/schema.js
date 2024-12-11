import mongoose from "mongoose";
const questionsSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true, default: 'Empty Question' },
    type: {
      type: String,
      enum: ["True-False", "Multiple-Choice", "Open-Response"],
      required: true
    },
    points: { type: Number, required: true, default: 0 },
    answerChoices: [{
      type: {
        choice: { type: String, required: true, default: "Empty Answer" },
        isCorrect: { type: Boolean, required: true }
      },
      required: false
    }],
  },
  { collection: "quizzes" }
);
export default questionsSchema;
