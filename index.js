//Imports the express module for usage in building web server.
const express = require("express");
//create an instance of an express application.
const app = express();
//defines port number where server will listen for requests.
const port = 8000; 

//loads the router handles, imports the route/main.js file,
// which contains all the route handles for specific URLs
const mainRoutes = require("./routes/main");
app.use('/usr/278', mainRoutes);
// uses the imported routes in the express app, '/ sets the base path for these routes
// so any route will start from the root
app.use('/', mainRoutes);

// Start listening for HTTP requests and when the server starts successfully, it sends
// a log message to the console.
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
