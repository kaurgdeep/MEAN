var bodyParser = require('body-parser');
const api = require("./controllers");

// const readAll = require("./server/routes");
// import {readAll} from './controllers';

function router(app) {
  app.use(bodyParser.json());
  app.post("/pets", api.createOne);
  app.get("/pets", api.allpets);
  app.delete("/delete/:id", api.deleteOne);
  app.put("/pets/:id", api.updateOne);
  app.get("/pets/:id", api.getOne);
  // app.post("/vote/:id", api.voteQuote)
}
module.exports = router;
