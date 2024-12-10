import mongoose from "mongoose";
const enrollmentSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
    grade: Number,
    letterGrade: String,
    enrollmentDate: Date,
    status: {
      type: String,
      enum: ["ENROLLED", "DROPPED", "COMPLETED"],
      default: "ENROLLED",
      required: true
    },
  },
  { collection: "enrollments" }
);
export default enrollmentSchema;