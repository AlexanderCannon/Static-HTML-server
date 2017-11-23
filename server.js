const  express = require('express');

const app = express();
const PORT = process.env.PORT || 1989;
app.use(express.static('public'));

app.listen(PORT, () => console.log(`server running on ${PORT}`));
