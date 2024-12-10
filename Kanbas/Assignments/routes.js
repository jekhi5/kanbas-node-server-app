import * as dao from "./dao.js";
export default function AssignmentsRoutes(app) {
    app.get('/api/assignments', async (req, res) => {
        const assignments = dao.findAllAssignments();
        res.send(assignments)
    })

    app.post("/api/assignments", async (req, res) => {
        const assignment = await dao.createAssignment(req.body);
        res.json(assignment);
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await dao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });

}