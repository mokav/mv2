const express = require('express')
const app = express()
const port = 3000
let m = 17;
let rata = 1480;
let dug;
let poruka = "Duzan sam "

{
dug = m * rata;
poruka += dug
}
app.get('/', (req, res) => {
  res.send(poruka )

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})