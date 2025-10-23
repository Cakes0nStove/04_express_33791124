// Create a new router
const express = require("express");
const router = express.Router();
const path = require('path');
// Handles the routes
// Two parameters, the req(incoming request) and res (the response we send back).
router.get("/", (req, res) => res.send("<h1>Hello World!</h1>")); 
//handles the 'about' router and sends a html message back as a response.
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
//similar to about where it handles the 'contact' route and sends html response.
router.get('/contact', (req, res) => res.send ('<h1>Contact Page: axavi001@campus.goldsmiths.ac.uk</h1>'))
//handles the 'date' route and create a new date object with current date and time.
router.get('/date', (req, res) => {const current_date = new Date(); 
    //converts the date to a readable string and sends it a an HTML response.
    res.send(current_date.toString());
});
router.get('/:username',(req, res) => {
    const user = req.params.username;
    res.send(`<h1>Welcome, ${user}!</h1>`);
});
// Example route with multiple callbacks
router.get('/chain',
  (req, res, next) => {
    // Set a custom property on the request object
    req.customMessage = 'Hello from the first handler!';
    next(); // move to the next callback
  },
  (req, res) => {
    // Include the custom message in the response
    res.send(`<h1>Second function runs — response sent!</h1>
              <p>${req.customMessage}</p>`);
  }
);
router.get('/file', (req, res) => {
  // Use path.join() to construct the correct absolute file path
  res.sendFile(path.join(__dirname, '../a.html'));
});



// Export the router object so index.js can access it
module.exports = router;
