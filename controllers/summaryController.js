const express = require('express');
const summary = express.Router();
const db = require('../db/dbConfig');

// get a specific article from DB by ID
summary.get('/:id/', async (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    try {
        const article = await db.one('SELECT * from articles WHERE id = $1', [numId])
        console.log(article);
        // const abstract = article.abstract;
        // console.log(abstract);
        // res.status(200).json(article);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error getting article' });
    };
});