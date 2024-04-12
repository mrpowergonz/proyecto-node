const swaggerJsdoc = require("swagger-jsdoc");
const fs = require("fs");
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "BeatApi",
      version: "1.0",
      description: "BeatApi",
    },
    servers: [
      { url: "http://localhost:3000", description: "Local server" },
      { url: "https://apibtc.vercel.app/", description: "Vercel server" },
    ],
  },
  apis: ["./api/**/*.js"], // Rutas donde se encuentran los comentarios JSDoc
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
const options = {
  customCss: ".swagger-ui .topbar { display: none }",
};
function generateSwaggerJson() {
  const swaggerJsonPath = "./api-docs/swagger.json";
  const newSwaggerJson = JSON.stringify(swaggerDocs, null, 2);
  // Verificar si el contenido del archivo ha cambiado
  try {
    const existingSwaggerJson = fs.readFileSync(swaggerJsonPath, "utf8");
    if (existingSwaggerJson !== newSwaggerJson) {
      fs.writeFileSync(swaggerJsonPath, newSwaggerJson);
      console.log("Swagger JSON generado con éxito.");
    } else {
      console.log("No se han realizado cambios en la documentación Swagger.");
    }
  } catch (error) {
    fs.writeFileSync(swaggerJsonPath, newSwaggerJson);
    console.log("Swagger JSON generado con éxito.");
  }
}
generateSwaggerJson();
module.exports = swaggerDocs;