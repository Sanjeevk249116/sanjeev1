const express = require("express");
const App = express();

App.get("/", (req, res) => {

  res.send(`<a href="/about"> Go to about part </a>`);
});
App.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="enter Details"/>
  <button>Submit</button>
  <a href="/"> Go to help part </a>
  `);
});
App.get("/help", (req, res) => {

  res.send([
    {
        name:"sanjeev",
        age:21,
        id:1,
        course:"masai"
      },
      {
        name:"sanjeev",
        age:21,
        id:1,
        course:"masai"
      }
      
  ]);
});

App.listen(4000)

