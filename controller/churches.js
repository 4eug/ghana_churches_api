
const fs = require('fs');

const getchurches =(req, res, next) =>
{
    const churches = fs.readFileSync("Churches.json", "utf8")
    console.log(churches)
    // const data = JSON.parse(churches)
    
    res.send(churches);
} 
const getchurches_2 =(req, res, next) =>
{
    const churches = fs.readFileSync("Churches.json", "utf8")
    console.log(churches)
    // const data = JSON.parse(churches)
    
    res.send(churches);
} 

// module.exports.getchurches_2 =  (req , res, next) =>
// {
//     const churches = fs.readFileSync("Churches.json", "utf8")
//     console.log(churches)
//     // const data = JSON.parse(churches)
    
//     res.send(churches);
// }




module.exports = {getchurches,getchurches_2};
