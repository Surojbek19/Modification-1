import dotenv from "dotenv";
dotenv.config();
import server from "./app";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log(`MongoDB connection succeed`);
        const PORT = process.env.PORT ?? 3002;
        server.listen(PORT, function () {
            console.info(`Server is running successfully on port: ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`)
        });
    })
    .catch((err) => {
        console.log("ERROR on connection MongoDB", err);
    })
