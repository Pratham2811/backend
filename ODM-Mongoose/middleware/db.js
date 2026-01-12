import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@localhost");
console.log("Database connection requested");
// const models=mongoose.connection.models
// console.log(models);
// const models=mongoose.connection._readyState
// console.log(models);
// console.log("Running DB.js");
{
    /**
     * _readyState: An integer representing the connection status:
0: Disconnected
1: Connected (Your log shows _readyState: 1)
2: Connecting
3: Disconnecting
     */
}

const client=mongoose.connections
console.log(client);
