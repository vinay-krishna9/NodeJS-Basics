const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "Public/uploads/" });
const BookModel = require("../Models/books");

router.post("/addNewBook", upload.single("bookImg"), async (req, res, next) => {
  const newBook = new BookModel({
    BookName: req.body.BookName
  });

  try {
    const book = await newBook.save();
    res.status(200).send({ book: book._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Public/uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//   }
// });

// var upload = multer({ storage: storage }).single("bookImg");

// router.post("/addNewBook", (req, res) => {
//   upload(req, res, err => {
//     if (err) return res.status(400).send(err);

//     res.status(200).send({ success: true, message: "Image Uploded" });
//   });
// });

module.exports = router;
