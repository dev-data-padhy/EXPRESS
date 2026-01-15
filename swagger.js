import swaggerJSDoc from "swagger-jsdoc";

export default swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Employee Management API",            
        },},
    apis: ["./controller/*.js"],
});