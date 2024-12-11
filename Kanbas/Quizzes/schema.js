import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: "Untitled Quiz" },
    releaseDate: { type: mongoose.Schema.Types.Date, required: false },
    dueDate: { type: mongoose.Schema.Types.Date, required: false },
    points: Number,
    quizType: {
      type: String,
      enum: ["Graded", "Practice"],
      default: "Graded",
      required: true
    },
    description: { type: String, required: false },
    shuffleAnswers: Boolean,
    submissionType: {
      type: String,
      enum: ["Online", "Paper"],
      default: "Online",
      required: true
    },
    displayGradeAs: {
      type: String,
      enum: ["Points", "Letter", "Percentage"],
      default: "Percentage",
      required: true
    },
    onlineEntryOptions: [{ type: String, required: false }],
    assignTo: { type: String, required: true, default: 'Everyone' },
    availableUntil: { type: mongoose.Schema.Types.Date, required: false },
    assignmentGroup: String,
    timeLimitInMinutes: Number,
    multipleAttempts: { type: Boolean, required: true, default: false },
    viewResponses: { type: Boolean, required: true, default: false },
    showCorrectAnswers: { type: Boolean, required: true, default: false },
    oneQuestionAtATime: { type: Boolean, required: true, default: false },
    requireLockdownBrowser: { type: Boolean, required: true, default: false },
    requireToViewResults: { type: Boolean, required: true, default: false },
    requireWebcam: { type: Boolean, required: true, default: false },
    lockAfterAnswering: { type: Boolean, required: true, default: false },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuizQuestionModel', required: true }]
  },
  { collection: "quizzes" }
);
export default quizzesSchema;

