import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// // fake data
// export const videos = [
//   {
//     id: 324393,
//     title: "Video 1",
//     description: "This is a Video 1 description",
//     views: 24,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 121212,
//       name: "yskim",
//       email: "yskim@abc.com",
//     },
//   },
//   {
//     id: 324378,
//     title: "Video 2",
//     description: "This is a Video 2 description",
//     views: 19,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 121212,
//       name: "yskim",
//       email: "yskim@abc.com",
//     },
//   },
//   {
//     id: 234373,
//     title: "Video 3",
//     description: "This is a Video 3 description",
//     views: 11,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 121212,
//       name: "yskim",
//       email: "yskim@abc.com",
//     },
//   },
//   {
//     id: 176393,
//     title: "Video 4",
//     description: "This is a Video 4 description",
//     views: 27,
//     videoFile:
//       "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//     creator: {
//       id: 121212,
//       name: "yskim",
//       email: "yskim@abc.com",
//     },
//   },
// ];
