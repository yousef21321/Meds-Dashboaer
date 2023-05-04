// const multer = require('multer');

// // Define storage for uploaded files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// });

// // Define file filter to accept only image files
// const fileFilter = function (req, file, cb) {
//   if (file.mimetype.startsWith('image/')) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only image files are allowed!'), false);
//   }
// }

// // Create the multer instance
// const upload = multer({ storage: storage, fileFilter: fileFilter });

// // Create the middleware function
// const uploadImage = upload.single('image');

// // Use the middleware function in your routes
// app.post('/upload', uploadImage, (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).json({ error: 'Please select an image file to upload' });
//   }
//   // Process the uploaded file
//   res.status(200).json({ message: 'Image uploaded successfully' });
// });
