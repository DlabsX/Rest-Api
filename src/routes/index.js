const { Router } = require('express');
 const router = Router();



//routes

   router.get('/test', (req, res)=> {
    const data = {
        "name":"Ryan",
        "website":"Ryan.com"
    };
    res.json(data);
   });

   module.exports = router; 
   