const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const statesController = require('../../controllers/statesController');

/*
// Define your route handlers here
router.route('/')
    .get(statesController.getAllStates)
    .post(statesController.addState);

router.get('/:state/capital', statesController.getStateCapital);
router.get('/:state/nickname', statesController.getNickName);
router.get('/:state/population', statesController.getPopulation);
router.get('/:state/admission', statesController.getAdmission);
router.get('/:code', statesController.getState);
router.get('/:state/funfact', statesController.getRandomFunFact);

router.post('/:state/funfact', statesController.addFunFacts);
router.post('/:state/', statesController.addState);

// Define a middleware function to handle unmatched routes
const handle404 = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html')); // Send the HTML file with 404 status
};

// Add the middleware function at the end of your route handlers
router.use(handle404);

module.exports = router;
*/


// NEWWww

// Route to get all states data
router.get('/', async (req, res) => {
    try {
      const states = await statesController.getAllStates();
      res.json(states);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Route to get states data by contiguity
  router.get('/contiguous', async (req, res) => {
    try {
      const states = await statesController.getStatesByContiguity(true);
      res.json(states);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.get('/noncontiguous', async (req, res) => {
    try {
      const states = await statesController.getStatesByContiguity(false);
      res.json(states);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Route to get state data by state code
  router.get('/:stateCode', async (req, res) => {
    const stateCode = req.params.stateCode;
    try {
      const state = await statesController.getStateByCode(stateCode);
      res.json(state);
    } catch (err) {
      res.status(404).json({ error: 'State not found' });
    }
  });
  
  // Route to get a random fun fact for a state
  router.get('/:stateCode/funfact', async (req, res) => {
    const stateCode = req.params.stateCode;
    try {
      const funFact = await statesController.getRandomFunFact(stateCode);
      res.json({ funFact });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });
  
  // More routes for other requirements (e.g., capital, nickname, population, admission)
  
  module.exports = router;