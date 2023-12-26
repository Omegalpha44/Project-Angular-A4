// api backend of our project.

const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

// Import necessary modules
const express = require('express');

// Initialize express app
const app = express();
app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Connect to PostgreSQL database
const sequelize = new Sequelize('node_project', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'root'
});

// Define 'project' model
const Project = sequelize.define('project', {
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

const Card = sequelize.define('card', {
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
    project_id: {  // foreign key
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
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a route to fetch all cards linked to a project number
app.get('/api/projects/:projectNumber/cards', async (req, res) => {
    const projectNumber = req.params.projectNumber;

    try {
        const cards = await Card.findAll({
            where: {
                project_id: projectNumber
            }
        });
        res.json(cards);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a route to add a project
app.post('/api/projects', async (req, res) => {
    const { name, description } = req.body;
    console.log(name);
    console.log(description);
    try {
        const created_at = new Date();
        const id = await Project.count() + 1;
        console.log(id);
        const project = await Project.create({ project_id: id, name, description, created_at });
        res.json(project);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
);


// Create a route to add a card to a project
app.post('/api/projects/:projectNumber/cards', async (req, res) => {
    const projectNumber = req.params.projectNumber;
    const { name, element_1, element_2 } = req.body;

    try {
        const id = await Card.count() + 1;
        const card = await Card.create({card_id:id, name, element_1, element_2, project_id: projectNumber });
        res.json(card);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a route to delete a project based on its index
app.delete('/api/projects/:projectIndex', async (req, res) => {
    const projectIndex = req.params.projectIndex;

    try {
        const project = await Project.findOne({ where: { project_id: projectIndex } });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        await project.destroy();
        res.json({ message: 'Project deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a route to delete a card based on its index
app.delete('/api/projects/:projectNumber/cards/:cardIndex', async (req, res) => {
    const projectNumber = req.params.projectNumber;
    const cardIndex = req.params.cardIndex;

    try {
        const card = await Card.findOne({ where: { project_id: projectNumber, card_id: cardIndex } });
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        await card.destroy();
        res.json({ message: 'Card deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
