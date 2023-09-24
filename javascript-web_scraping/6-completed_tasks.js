#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, (err, response) => {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(response.body);
  const completed = {};

  data.forEach(task => {
    const userId = task.userId;
    if (task.completed) {
      if (!completed[userId]) {
        completed[userId] = 1;
      } else {
        completed[userId]++;
      }
    }
  });
  console.log(completed);
});
