const express = require('express');
const router = express.Router();
const Actions = require('../data/helpers/actionModel');


router.post('/', (req, res) => {
  Actions.insert(req.body)
    .then(newAction => {
      res.status(201).json(newAction);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding actions',
      });
    });
});

router.get('/', (req, res) => {
  Actions.get()
  .then(actions => {
    res.status(200).json(actions);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the actions',
    });
  });
});

router.get('/:id',  (req, res) => {
 Actions.get(req.params.id)
  .then(action => {
      res.status(200).json(action);
    }) 
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the action',
      });
    });
  });

router.delete('/:id', (req, res) => {
 Actions.remove(req.params.id)
    .then(action => {
    res.status(200).json(action)
  })
  .catch(error => {
    console.log(error);
      res.status(500).json({errorMessage: "The action could not be removed"})
    });
});

router.put('/:id', (req, res) => {
   Actions.update(req.params.id, req.body)
      .then(update => {
      res.status(200).json(update)
      })
  .catch(error => {
    console.log(error);
      res.status(500).json({errorMessage: "The action information could not be modified."})
  });
});


module.exports = router;
