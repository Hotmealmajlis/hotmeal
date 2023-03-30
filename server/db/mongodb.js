import mongoose from 'mongoose'

async function connect(){
  // mongoose.set(strictQuery, false)

  await mongoose
    .connect(
      "mongodb+srv://Hotmealadmin:admin123@hotmeals.bvboanr.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("db connection success :)");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default connect