var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/*------------------------------------------------------------------------------------ */
// Get all users

router.get("/", async (req, res, next) => {
  try {
    const results = await db(
      "SELECT * FROM users"
    );
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ error: err.message });
  }
});

/*------------------------------------------------------------------------------------ */
// create user
router.post("/", async (req, res) => {
    const {
        firstName, 
        secondName, 
        email
    } = req.body;
  
    try {
      //creating a new board
      let sql= `INSERT INTO users (firstName, secondName, email) VALUES ("${firstName}","${secondName}", "${email}" )`;
      await db(sql);
      //getting the id of the new board
      let results = await db(`select * from users`)
  
      res.send(results.data);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });





/*------------------------------------------------------------------------------------ */
// delete user id


/*------------------------------------------------------------------------------------ */
// edit user by id


/*------------------------------------------------------------------------------------ */
// get all boards by user

module.exports = router;