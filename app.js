const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const BacklogsRouter = require("./Routers/BacklogsRouter");

const SprintsRouter = require("./Routers/SprintsRouter");

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));

app.use(cors());

app.use(morgan("dev"));

// Router
app.use("/api/v1/backlogs", BacklogsRouter);
app.use("/api/v1/sprints", SprintsRouter);


module.exports = app;
