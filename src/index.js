
const express = require("express");

const app = express();
app.use(express.json());

const uRoutes = require("../routes/users");
app.use("/users", uRoutes);

app.listen(3000, function () {
    console.log("Server started on 3000");
});