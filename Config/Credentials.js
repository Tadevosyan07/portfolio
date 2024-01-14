import allowedOrigins from "./AllowedOrigins.js";

const credentials = (req, res, next) => {
    const origin = req?.headers?.origin
    console.log("headers: ", req.headers);
    console.log("origin: ", req.headers.host);
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Credentials", "true")
    }
    next()
}

export default credentials