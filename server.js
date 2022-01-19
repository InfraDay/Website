const Express = require("express");
const app = Express();

app.use(Express.static("public"));

app.get("/", (request, response) => {
    response.status(200).sendFile(__dirname + "/views/index.html");
});

app.use("*", (request, response) => {
    response.status(404).sendFile(__dirname + "/views/error.html");
});

const listener = app.listen(3000, "0.0.0.0", () => {
    console.log("The Express application is now listening to port " + listener.address().port + ".");
});