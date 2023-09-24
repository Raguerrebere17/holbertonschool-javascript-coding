#!/usr/bin/node
const request = require('request');

const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}/`;
request.get(url, (err, response) => {
  if (err) {
    console.log(err);
    return;
  }
  const data = JSON.parse(response.body);
  console.log(data.title);
});
