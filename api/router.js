const express = require('express');

const helper = require('./helpers');

const router = express.Router();


router.get('/:id', (req, res) => {

  const { id } = req.params;

  helper.getProject(id)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/', (req, res) => {

  helper.getProjects()
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id/actions', (req, res) => {

  const { id } = req.params;

  helper.getProjectActions(id)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router;
