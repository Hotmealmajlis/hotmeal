import mongoose from 'mongoose'

async function connect(){
  // mongoose.set(strictQuery, false)

  await mongoose
    .connect(
      "mongodb+srv://hotmeals:hotmeals123@cluster0.ydq7zmt.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("db connection success :)");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect