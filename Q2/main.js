const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());
const { showmsg, addmsg } = require("./user");
// get request
app.get("/users", async (req, res) => {
  const list = await showmsg();
  res.json(list);
});

// post request into server

app.post("/user-msg", async (req, res) => {
  const msg = req.body;
  await addmsg(msg);
  res.json({ message: "msg adding in database successful..!" });
});

app.listen(4000, () => {
  console.log("this is server  and server started successful  ..");
});
