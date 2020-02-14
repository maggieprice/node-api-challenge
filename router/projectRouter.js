const express = require('express');
const router = express.Router();
const Projects = require('../data/helpers/projectModel');


router.post('/', changes, (req, res) => {
  Projects.insert(req.body)
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding projects',
      });
    });
});

router.get('/', (req, res) => {
  Projects.get()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the projects',
    });
  });
});

router.get('/:id',  (req, res) => {
 Projects.get(req.params.id)
  .then(project => {
      res.status(200).json(project);
    }) 
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the project',
      });
    });
  });

  router.get('/:projectId', (req, res) => {
    Posts.getProjectActions(req.params.project_id).then(posts => {
        res.status(200).json(posts)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage: "The project could not be retrieved."})
    });
  });

router.delete('/:id', (req, res) => {
 Projects.remove(req.params.id)
    .then(project => {
    res.status(200).json(project)
  })
  .catch(error => {
    console.log(error);
      res.status(500).json({errorMessage: "The project could not be removed"})
    });
});

router.put('/:id', (req, res) => {
   Projects.update(req.params.id, req.body)
      .then(project => {
      res.status(200).json(project)
      })
  .catch(error => {
    console.log(error);
      res.status(500).json({errorMessage: "The project information could not be modified."})
  });
});


module.exports = router;
