const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());

const auth = require("./routes/Auth");
const listPatient = require("./routes/listPatient");
const catogay = require("./routes/catogay");
const patient = require("./routes/patient");
const meds = require("./routes/meds");
const meds2 = require("./routes/meds2");
const req = require("./routes/req");
const send = require("./routes/send");
const search2 = require("./routes/Search2");

app.listen(4000, "localhost", () => {
  console.log("SERVER IS RUNNING ");
});

app.use("/auth", auth);
app.use("/listPatient", listPatient);
app.use("/catogay", catogay);

app.use("/patient", patient);
app.use("/meds", meds);
app.use("/meds2", meds2);
app.use("/req", req);
app.use("/send", send);
app.use("/Search2", search2);

// patient
