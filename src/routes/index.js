const router = require('express').Router();


router.route('/revisasivivo').get((req, res) => {
    res.send({ "status" : "estoy bien" });
  })

module.exports = router;