const express = require("express");
const app = express();
const bodyPar = require("body-parser");
const cros = require("cors");

// const upload = multer({dest :"upload/"})
app.use(
    bodyPar.urlencoded({
        extended: false,
    })
);

app.use(bodyPar.json());
app.use(express.json());
app.use(cros());
const usersRouters = require("./routes/users");
const modulesRouters = require("./routes/modules");
app.use("/users", usersRouters);
app.use("/modules", modulesRouters);

app.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
