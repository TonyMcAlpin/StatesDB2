const State = require('../model/State');
const path = require('path');
const fs = require('fs'); // Import the file system module




/*
const getAllStates = async (req, res) => {
    const states = await State.find();
    if(!states) return res.status(204).json({ 'message': 'No state found.'});
    res.json(states);
}



const getAllStates = (req, res) => {
    // Resolve the absolute path to the states.json file
    const filePath = path.resolve(__dirname, '../model/states.json');

    // Read the contents of the states.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            // Parse the JSON data
            let statesData = JSON.parse(data);

            // If the contig query parameter is provided and true, filter out non-contiguous states (AK and HI)
            if (req.query.contig === 'true') {
                statesData = statesData.filter(state => state.code !== 'AK' && state.code !== 'HI');
            }
            
            // If the contig query parameter is provided and false, filter out contiguous states (all except AK and HI)
            if (req.query.contig === 'false') {
                statesData = statesData.filter(state => state.code === 'AK' || state.code === 'HI');
            }

            res.json(statesData); // Send the JSON data as the response
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
}




const getStateCapital = (req, res) => {
    const stateCode = req.params.state.toUpperCase(); // Convert the state code to uppercase
    console.log("State Code:", stateCode);

    // Resolve the absolute path to the states.json file
    const filePath = path.resolve(__dirname, '../model/states.json');

    // Read the contents of the states.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            // Parse the JSON data
            const statesData = JSON.parse(data);
            console.log("States Data:", statesData);

            // Find the state with the matching code
            const state = statesData.find(state => state.code === stateCode);

            if (!state) {
                return res.status(204).json({ "message": `No state matches code ${stateCode}.` });
            }

            // Send the capital city as the response
            res.json({ 'state': state.state, 'capital': state.capital_city });
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
}

const getNickName = (req, res) => {
    const stateCode = req.params.state.toUpperCase(); // Convert the state code to uppercase
    console.log("State Code:", stateCode);

    // Resolve the absolute path to the states.json file
    const filePath = path.resolve(__dirname, '../model/states.json');

    // Read the contents of the states.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            // Parse the JSON data
            const statesData = JSON.parse(data);
            console.log("States Data:", statesData);

            // Find the state with the matching code
            const state = statesData.find(state => state.code === stateCode);

            if (!state) {
                return res.status(204).json({ "message": `No state matches code ${stateCode}.` });
            }

            // Send the nick name as the response
            res.json({ 'state': state.state, 'nickname': state.nickname });
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
}

const getPopulation = (req, res) => {
    const stateCode = req.params.state.toUpperCase(); // Convert the state code to uppercase
    console.log("State Code:", stateCode);

    // Resolve the absolute path to the states.json file
    const filePath = path.resolve(__dirname, '../model/states.json');

    // Read the contents of the states.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            // Parse the JSON data
            const statesData = JSON.parse(data);
            console.log("States Data:", statesData);

            // Find the state with the matching code
            const state = statesData.find(state => state.code === stateCode);

            if (!state) {
                return res.status(204).json({ "message": `No state matches code ${stateCode}.` });
            }

            // Send the population as the response
            res.json({ 'state': state.state, 'population': state.population });
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
}

const getAdmission = (req, res) => {
    const stateCode = req.params.state.toUpperCase(); // Convert the state code to uppercase
    console.log("State Code:", stateCode);

    // Resolve the absolute path to the states.json file
    const filePath = path.resolve(__dirname, '../model/states.json');

    // Read the contents of the states.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            // Parse the JSON data
            const statesData = JSON.parse(data);
            console.log("States Data:", statesData);

            // Find the state with the matching code
            const state = statesData.find(state => state.code === stateCode);

            if (!state) {
                return res.status(204).json({ "message": `No state matches code ${stateCode}.` });
            }

            // Send the population as the response
            res.json({ 'state': state.state, 'admitted': state.admission_date  });
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
}



/*


const updateEmployee = async (req, res) => {
    if(!req?.body?.id){
        return res.status(400).json({ 'message': 'id parameter is required.'});
    }


    const employee = await Employee.findOne({_id: req.body.id }).exec();
    if (!employee) {
        return res.status(204).json({ "message": `No Employee matches ID ${req.body.id}.` });
    }
    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    res.json(result);
}

const deleteEmployee = async (req, res) => {
    if(!req?.body?.id){
        return res.status(400).json({ 'message': 'id parameter is required.'});
    }
    const employee = await Employee.findOne({_id: req.body.id }).exec();
    if (!employee) {
        return res.status(204).json({ "message": `No Employee matches ID ${req.body.id}.` });
    }
    const result = await employee.deleteOne({_id: req.body.id });
    res.json(result);
}

const getState = (req, res) => {
    const stateCode = req.params.code;

    // Read states data from JSON file
    fs.readFile(path.resolve(__dirname, '../model/states.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            const statesData = JSON.parse(data);
            const state = statesData.find(state => state.code === stateCode);

            if (!state) {
                return res.status(404).json({ "message": `No state matches code ${stateCode}.` });
            }

            res.json(state);
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
};

/*
const getState = (req, res) => {
    const stateCode = req.params.code; // Extract the state code parameter from the request URL
    if (!stateCode) {
        return res.status(400).json({ 'message': 'State code parameter is required.' });
    }

    // Resolve the absolute path to the states.json file
    const filePath = path.resolve(__dirname, '../model/states.json');

    // Read the contents of the states.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ 'message': 'Error reading states.json file.' });
        }

        try {
            // Parse the JSON data
            const statesData = JSON.parse(data);

            // Find the state with the matching code
            const state = statesData.find(state => state.code === stateCode);
            if (!state) {
                return res.status(404).json({ "message": `No state matches code ${stateCode}.` }); // Change status code to 404
            }

            res.json(state); // Send the state data as the response
        } catch (parseError) {
            console.error(parseError);
            return res.status(500).json({ 'message': 'Error parsing states.json file.' });
        }
    });
}



//This adds null every time. Need to fix 
const addFunFacts = async (req, res) => {
    const stateCode = req.params.state.toUpperCase(); // Extract the state code from the URL parameter
    const funFacts = req.body.funfacts; // Extract the funfacts array from the request body

    try {
        // Find the state by its stateCode
        let state = await State.findOne({ stateCode });

        if (!state) {
            return res.status(404).json({ message: `State with code ${stateCode} not found.` });
        }

        // If the state already has some fun facts, append the new ones
        if (state.funfacts && state.funfacts.length > 0) {
            state.funfacts = state.funfacts.concat(funFacts);
        } else {
            // If the state has no existing fun facts, set the new ones
            state.funfacts = funFacts;
        }

        // Save the updated state with the new fun facts
        await state.save();

        res.status(200).json({ message: 'Fun facts added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const addState = async (req, res) => {
    try {
        const newState = await State.create({
            stateCode: req.body.stateCode,
            funfacts: req.body.funfacts
        });
        res.status(201).json(newState);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getRandomFunFact = async (req, res) => {
    try {
        const stateCode = req.params.state.toUpperCase();

        // Find the state document by stateCode
        const state = await State.findOne({ stateCode });
        console.log('State found:', state);

       if (!state || !state.funfacts || state.funfacts.length === 0) {
            return res.status(404).json({ message: 'No fun facts found for the state.' });
        }

        // Get a random fun fact from the array
        const randomIndex = Math.floor(Math.random() * state.funfacts.length);
        const randomFunFact = state.funfacts[randomIndex];

        res.json({ state: stateCode, funfact: randomFunFact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};






module.exports = {
    getAllStates,
    //createNewEmployee,
    //updateEmployee,
    //deleteEmployee,
    getState,
    getStateCapital,
    getNickName,
    getPopulation,
    getAdmission,
    addFunFacts,
    addState,
    getRandomFunFact
}

*/


// NEWWWWWWWWWWWWWWWWw
// Load states data from JSON file

// Construct the absolute path to the statesData.json file
const statesDataPath = path.join(__dirname, '..', 'model', 'states.json');

// Load states data from JSON file
const statesData = JSON.parse(fs.readFileSync(statesDataPath, 'utf8'));

// Function to get all states data
async function getAllStates() {
  try {
    const statesFromDB = await State.find({});
    return [...statesData, ...statesFromDB];
  } catch (err) {
    throw new Error('Error fetching states data');
  }
}

// Function to get states data for contiguous or non-contiguous states
async function getStatesByContiguity(contiguous) {
  try {
    const statesFromDB = await State.find({});
    const filteredStates = statesFromDB.filter(state => {
      // Assuming AK and HI are non-contiguous
      if (contiguous) {
        return state.stateCode !== 'AK' && state.stateCode !== 'HI';
      } else {
        return state.stateCode === 'AK' || state.stateCode === 'HI';
      }
    });
    return [...statesData, ...filteredStates];
  } catch (err) {
    throw new Error('Error fetching states data');
  }
}

// Function to get state data by state code
async function getStateByCode(stateCode) {
  try {
    const state = await State.findOne({ stateCode });
    if (!state) {
      throw new Error('State not found');
    }
    return state;
  } catch (err) {
    throw new Error('Error fetching state data');
  }
}

// Function to get a random fun fact for a state
async function getRandomFunFact(stateCode) {
  try {
    const state = await State.findOne({ stateCode });
    if (!state || !state.funFacts.length) {
      throw new Error('No fun facts available for this state');
    }
    const randomIndex = Math.floor(Math.random() * state.funFacts.length);
    return state.funFacts[randomIndex];
  } catch (err) {
    throw new Error('Error fetching fun fact');
  }
}

module.exports = {
  getAllStates,
  getStatesByContiguity,
  getStateByCode,
  getRandomFunFact
};