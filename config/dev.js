const dotenv = require('dotenv');
dotenv.config();
module.exports={
    MONGOURI:process.env.MOGO_URI,
    JWT_SECRET:process.env.JWT_SEC,
    SENDGRID_API:process.env.SENDGRID_API,
    EMAIL:process.env.EMAIL
}