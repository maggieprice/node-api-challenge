const express = require('express')
const projectDb = require('../data/helpers/projectModel')
const actionDb = require('../data/helpers/actionModel')
const router = express.Router()
router.get('/', (req, res) => {
  console.log('actions')
  actionDb.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(error => {
      res.status(500).json({
        message: "The action information could not be retrieved."
      })
    })  
})
router.get('/:id', (req, res) => {
  console.log('actions', req.params.id)
  actionDb.get(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(error => {
      res.status(500).json({
        message: "The action information could not be retrieved."
      })
    })  
})
router.post('/', validateProjectId, (req, res) => {
  actionDb.insert(req.body)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({message: "There was an error while saving the project to the database"})
  })
})
router.put('/:id', (req, res) => {
  actionDb.update(req.params.id, req.body)
    .then(updatedProject => {
      res.status(200).json(updatedProject)
    })
    .catch(error => {
      res.status(500).json({message:"unable to update project"})
    })
});
router.delete('/:id', (req, res) => {
  actionDb.remove(req.params.id)
    .then(deleted => {
        res.status(200).json({message: `removed ${deleted} item`})
    })
    .catch(error=> {
      res.status(500).json({message: "unable to delete project"})
    })
});
function validateProjectId(req, res, next){
  const id = req.body.project_id
  projectDb.get(id)
  .then(exists =>{
      !exists && res.status(400).json({message: "validateProjectID Project does not exist"})
  })
  next();
}
module.exports = router
















// const express = require('express');
// const router = express.Router();
// // const Actions = require('../data/helpers/actionModel');

// router.get('/', (req, res) =>{
//     console.log("something")
// })
// // router.post('/', changes, (req, res) => {
// //   Actions.insert(req.body)
// //     .then(actions => {
// //       res.status(201).json(actions);
// //     })
// //     .catch(error => {
// //       console.log(error);
// //       res.status(500).json({
// //         message: 'Error adding actions',
// //       });
// //     });
// // });

// // router.get('/', (req, res) => {
// //   Actions.get()
// //   .then(actions => {
// //     res.status(200).json(actions);
// //   })
// //   .catch(error => {
// //     console.log(error);
// //     res.status(500).json({
// //       message: 'Error retrieving the actions',
// //     });
// //   });
// // });

// // router.get('/:id',  (req, res) => {
// //  Actions.get(req.params.id)
// //   .then(action => {
// //       res.status(200).json(action);
// //     }) 
// //     .catch(error => {
// //       console.log(error);
// //       res.status(500).json({
// //         message: 'Error retrieving the action',
// //       });
// //     });
// //   });

// // router.delete('/:id', (req, res) => {
// //  Actions.remove(req.params.id)
// //     .then(action => {
// //     res.status(200).json(action)
// //   })
// //   .catch(error => {
// //     console.log(error);
// //       res.status(500).json({errorMessage: "The action could not be removed"})
// //     });
// // });

// // router.put('/:id', (req, res) => {
// //    Actions.update(req.params.id, req.body)
// //       .then(action => {
// //       res.status(200).json(action)
// //       })
// //   .catch(error => {
// //     console.log(error);
// //       res.status(500).json({errorMessage: "The action information could not be modified."})
// //   });
// // });


// module.exports = router;
