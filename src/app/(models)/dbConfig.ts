import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("Mongodb Connected");
    })
    .catch((e) => {
      console.log(e);
    });
  mongoose.Promise = global.Promise;
};
