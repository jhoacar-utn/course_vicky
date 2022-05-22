
const {getDb} = require("../config/mongo/mongoConnection");

const handleRequest = (req, res, next)=>{
        
    const dbConnect = getDb();
  
    dbConnect
      .collection("users")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching users collection!");
       } else {
          res.json(result);
        }
      });


// res.sendFile(__dirname+"/views/index.html");
}

module.exports.handleWelcome = handleRequest;