const express = require("express");
const db = require("../backend/Database/DatabaseConnection"); // Connection Handling MongoDB
const dotenv = require("dotenv");
dotenv.config();
const userrouter = require("./Routers/userRouter");
const app = express();
const cors = require("cors");
const {
  errorHandler,
  notFound,
} = require("../backend/middlewares/errorMiddleware");
const PORT = process.env.PORT || 1783;

app.use(
  cors({
    origin: [
      "http://localhost:6463",
      "http://localhost:6464",
      "https://rr-farming.vercel.app/",
      "https://rr-farming-8lo8kdcyf-ahmad-hassan-khans-projects-f1ab2b11.vercel.app",
    ],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

// Define routes
app.use("/api", userrouter);

//Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
