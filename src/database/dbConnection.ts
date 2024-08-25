import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, {
        dbName: "HOLIDAY_WEBSITE"
    }).then(() => {
        console.log("Connected to database")
    }).catch((err) => {
        console.log(`Error occured while connecting to database ${err}`)
    })
}