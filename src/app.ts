import express, { Express } from "express";
import morgan from "morgan";
import productRouter from "../src/api/v1/routes/productRoutes";

const app: Express = express();

app.use(express.json()); //  use JSON body parsing

// Use Morgan for HTTP request logging
app.use(morgan("combined"));

// GET request at the app root
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});
// Route handler for items
app.use("/api/v1", productRouter);

// Export the app
export default app;