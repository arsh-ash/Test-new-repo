const express=require("express");
const app=express()
const cors=require("cors");
const bodyParser=require("body-parser")
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerUi = require("swagger-ui-express");
const PORT=8000
const connectDB=require("./db/mongoConnect")
const errorHandler = require("./handlers/handleError");

connectDB()
app.use(express.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(bodyParser.json());
  app.use("/", require("./routes"));
  
  const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Api documentation",
        version: "1.0.0",
        description: "Api documentation for Marble health notes app",
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
        },
      ],
    },
    apis: [
    "./routes/notesRouter.js",
    ],
  };
  
  swaggerSpec = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use(errorHandler);

app.listen(PORT,(err)=>{
  if(err){
    console.error("Error in running Server")
  }
    console.log(`server is runnng on port ${PORT}`)

})