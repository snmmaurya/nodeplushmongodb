"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const crossDomain_1 = __importDefault(require("./middlewares/crossDomain"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({ secret: process.env.SESSION_SECRET || 'Ocean' }));
// middlewares
// CORS middleware
app.use(crossDomain_1.default);
const PORT = process.env.PORT || 3003;
// Health
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'Server is healthy' });
});
// Database
// Routes
// Server
app.listen(PORT, () => {
    console.log("Server started on PORT: " + PORT);
});
