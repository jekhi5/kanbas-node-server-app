import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: "Untitled Quiz" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
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
    assignmentGroup: { type: String, required: false },
    requireTimeLimit: { type: Boolean, required: true, default: false },
    timeLimitInMinutes: { type: Number, required: false, default: Infinity },
    multipleAttempts: { type: Boolean, required: true, default: false },
    numberOfAllowedAttempts: { type: Number, required: false, default: 1 },
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

