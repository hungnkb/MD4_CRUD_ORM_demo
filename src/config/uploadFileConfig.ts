import multer from "multer";
import path from "path";

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/image/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({ storage: storage });

export default upload;
