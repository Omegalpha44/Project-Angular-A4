// api backend of our project.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Sequelize = require('sequelize');
var _a = require('sequelize'), Model = _a.Model, DataTypes = _a.DataTypes;
// Import necessary modules
var express = require('express');
// Initialize express app
var app = express();
app.use(express.json());
// Connect to PostgreSQL database
var sequelize = new Sequelize('node_project', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'root'
});
// Define 'project' model
var Project = sequelize.define('project', {
    // Define your columns here, for example:
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'project',
    timestamps: false
});
var Card = sequelize.define('card', {
    // Define your columns here, for example:
    card_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    element_1: {
        type: DataTypes.STRING
    },
    element_2: {
        type: DataTypes.STRING
    },
    project_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Project,
            key: 'project_id'
        }
    },
}, {
    tableName: 'card',
    timestamps: false
});
// Create a route to fetch all projects
app.get('/api/projects', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var projects, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Project.findAll()];
            case 1:
                projects = _a.sent();
                res.json(projects);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error(err_1);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Create a route to fetch all cards linked to a project number
app.get('/api/projects/:projectNumber/cards', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var projectNumber, cards, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectNumber = req.params.projectNumber;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Card.findAll({
                        where: {
                            project_id: projectNumber
                        }
                    })];
            case 2:
                cards = _a.sent();
                res.json(cards);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Create a route to add a project
app.post('/api/projects', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name, description, created_at, id, project, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, description = _a.description;
                console.log(name);
                console.log(description);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                created_at = new Date();
                return [4 /*yield*/, Project.count()];
            case 2:
                id = (_b.sent()) + 1;
                console.log(id);
                return [4 /*yield*/, Project.create({ project_id: id, name: name, description: description, created_at: created_at })];
            case 3:
                project = _b.sent();
                res.json(project);
                return [3 /*break*/, 5];
            case 4:
                err_3 = _b.sent();
                console.error(err_3);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Create a route to add a card to a project
app.post('/api/projects/:projectNumber/cards', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var projectNumber, _a, name, element_1, element_2, card, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectNumber = req.params.projectNumber;
                _a = req.body, name = _a.name, element_1 = _a.element_1, element_2 = _a.element_2;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Card.create({ name: name, element_1: element_1, element_2: element_2, project_id: projectNumber })];
            case 2:
                card = _b.sent();
                res.json(card);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _b.sent();
                console.error(err_4);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Create a route to delete a project based on its index
app.delete('/api/projects/:projectIndex', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var projectIndex, project, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectIndex = req.params.projectIndex;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Project.findOne({ where: { project_id: projectIndex } })];
            case 2:
                project = _a.sent();
                if (!project) {
                    return [2 /*return*/, res.status(404).json({ message: 'Project not found' })];
                }
                return [4 /*yield*/, project.destroy()];
            case 3:
                _a.sent();
                res.json({ message: 'Project deleted successfully' });
                return [3 /*break*/, 5];
            case 4:
                err_5 = _a.sent();
                console.error(err_5);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Create a route to delete a card based on its index
app.delete('/api/projects/:projectNumber/cards/:cardIndex', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var projectNumber, cardIndex, card, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                projectNumber = req.params.projectNumber;
                cardIndex = req.params.cardIndex;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, Card.findOne({ where: { project_id: projectNumber, card_id: cardIndex } })];
            case 2:
                card = _a.sent();
                if (!card) {
                    return [2 /*return*/, res.status(404).json({ message: 'Card not found' })];
                }
                return [4 /*yield*/, card.destroy()];
            case 3:
                _a.sent();
                res.json({ message: 'Card deleted successfully' });
                return [3 /*break*/, 5];
            case 4:
                err_6 = _a.sent();
                console.error(err_6);
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
