// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Step 2: GET API that returns query param and path param as JSON
app.get('/api/:id', (req, res) => {
  const pathParam = req.params.id; // Extract path parameter
  const queryParam = req.query.name; // Extract query parameter
  
  // Create response with both params and additional info
  const response = {
    pathParam: pathParam,
    queryParam: queryParam,
    message: 'This is a sample response with query and path parameters'
  };

  res.json(response); // Return the response as JSON
});

// Step 3: POST API that accepts JSON data and returns an array of data
app.post('/api/data', (req, res) => {
  const data = req.body; // Get JSON data from the request body

  // Assuming we receive an array of objects, we'll return the same data wrapped in an array.
  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Input data should be an array' });
  }

  // Respond with the same array received
  const response = {
    message: 'Data received successfully',
    data: data
  };

  res.json(response);
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
