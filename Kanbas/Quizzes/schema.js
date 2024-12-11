const mongoose = require('mongoose');

// Define schema for answer choices
const AnswerChoiceSchema = new mongoose.Schema({
  choice: {
    type: String,
    required: true
  },
  isCorrect: {
    type: String,
    enum: ["True", "False"], // Ensures only "True" or "False" values are allowed
    required: true
  }
});

// Define schema for questions
const QuestionSchema = new mongoose.Schema({
  number: {
    type: String, // Use String to match example structure ("1", "2", etc.)
    required: false
  },
  questionText: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["True-False", "Open-Response", "Multiple-Choice"], // Limit types to predefined options
    required: true
  },
  points: {
    type: String,
    required: true
  },
  answerChoices: {
    type: [AnswerChoiceSchema], // Reference the AnswerChoiceSchema for multiple choice questions
    required: function () {
      return this.type === "Multiple-Choice"; // Only required for "Multiple-Choice" type
    }
  }
});

// Define schema for quizzes
const QuizSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  quizType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shuffleAnswers: {
    type: String,
    enum: ["True", "False"],
    required: true
  },
  submissionType: {
    type: String,
    required: true
  },
  displayGradeAs: {
    type: String,
    required: true
  },
  onlineEntryOptions: {
    type: [String],
    required: true
  },
  assignTo: {
    type: String,
    required: true
  },
  availableUntil: {
    type: Date,
    required: true
  },
  assignmentGroup: {
    type: String,
    required: true
  },
  timeLimitInMinutes: {
    type: String,
    required: true
  },
  multipleAttempts: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  viewResponses: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  showCorrectAnswers: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  oneQuestionAtATime: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  requireLockdownBrowser: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  requireToViewResults: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  requireWebcam: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  lockAfterAnswering: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  questions: {
    type: [QuestionSchema], // Reference the QuestionSchema for the list of questions
    required: true
  }
});

module.exports = mongoose.model('Quiz', QuizSchema);