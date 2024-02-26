const express = require('express');
const bodyParser = require('body-parser');
const routes=require("./routes/user.js")
const router = require('./routes/posts.js');
const routers=require("./routes/images.js")
const routeses=require("./routes/test.js")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/posts", router);
app.use("/user",routes);
app.use('/image',routers)
app.use('/test',routeses)
app.use('/uploads',express.static('uploads'))

app.listen(PORT, () => {
    console.log(`the app is listening to port ${PORT}`);
});
