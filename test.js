const express = require('express')
const app = express();



app.get("/leitura", (req, res) => {

    //let counts = {};
    var PR = ["SC", "SP", "PR", "RJ", "PR", "PR"];
    var count;

PR.forEach(count => {
    if(PR(Object.values === "PR")){
        count++;
    //counts[count] = (counts[count] || 0 ) + 1;
    }
});
 //const maxVal = Math.max(...Object.values(counts));
  res.send(count);
    //console.log(Object.values(counts));
});
app.listen(3030);