"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const group_routes_1 = __importDefault(require("./routes/group.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the WorkUp API!" });
});
app.use("/api/groups", group_routes_1.default);
app.listen(5005, () => {
    console.log("Server is running on http://localhost:5005");
});
exports.default = app;
