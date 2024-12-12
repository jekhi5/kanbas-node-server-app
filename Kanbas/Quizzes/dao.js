import model from "./model.js";
export function findAllQuizzes() {
    return model.find();
}
export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}

export function createQuiz(quiz) {
    delete quiz._id
    return model.create(quiz);
}

export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId })
}

export function updateQuiz(quizID, quizUpdates) {
    return model.updateOne({ _id: quizID }, { $set: quizUpdates })
}