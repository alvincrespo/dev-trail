#!/usr/bin/env node

console.log("===============Dev Trail===============");

const inquirer = require("inquirer");

const questions = [
  {
    type: "rawlist",
    name: "scenario",
    message: "Choose your background.",
    choices: [
      {
        key: "c",
        name: "College",
        value: "college"
      },
      {
        key: "b",
        name: "Bootcamp",
        value: "bootcamp"
      },
      {
        key: "s",
        name: "Self-taught",
        value: "selftaught"
      }
    ]
  },
  {
    type: "rawlist",
    name: "gender",
    message: "Choose your gender.",
    choices: [
      {
        key: "n",
        name: "Non-binary",
        value: "nonbinary"
      },
      {
        key: "f",
        name: "Female",
        value: "female"
      },
      {
        key: "m",
        name: "Male",
        value: "male"
      }
    ]
  },
  {
    type: "rawlist",
    name: "title",
    message: "What's your job title?",
    choices: [
      {
        key: "j",
        name: "Junior Engineer",
        value: "juniorengineer"
      },
      {
        key: "s1",
        name: "Software Engineer",
        value: "softwareengineer"
      },
      {
        key: "s2",
        name: "Senior Software Engineer",
        value: "senioreengineer"
      },
      {
        key: "em",
        name: "Engineering Manager",
        value: "manager"
      },
      {
        key: "de",
        name: "Director of Engineering",
        value: "director"
      },
      {
        key: "vp",
        name: "Vice President of Engineering",
        value: "vicepresident"
      },
      {
        key: "cto",
        name: "Chief Technology Officer",
        value: "cto"
      }
    ]
  }
];

inquirer.prompt(questions).then(answers => {
  console.log({ answers });
});
