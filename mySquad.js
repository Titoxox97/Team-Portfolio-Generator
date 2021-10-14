const Manager = require("./lib/Manager");

const createmySquadHTML = (team) => {
  let managerArray = [];
  let internArray = [];
  let engineerArray = [];

  team.forEach((element) => {
    if (element.constructor.name === "Manager") {
      managerArray.push(element);
    }
    if (element.constructor.name === "Intern") {
      internArray.push(element);
    }
    if (element.constructor.name === "Engineer") {
      engineerArray.push(element);
    }
  });
  console.log(managerArray);
  console.log(internArray);
  console.log(engineerArray);

  console.log(team);
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Awesome Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css">
    </head>

    <body>
    ${engineerArray.forEach((engineer) => createEngineer(engineer))}; 
    </body>
    </html>`;
};
const createEngineer = (engineer) => {
  return `<div class="col-5">
        <div class="card mx-auto mb-3" style="max-width: 20rem">
        <h5 class="card-header">${engineer.name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email Address: ${engineer.email}</li>
            <li class="list-group-item">Email Address: ${engineer.github}</li>
        </ul>
        </div>
    </div>
        `;
};
const createManager = (manager) => {
  return `<div class="col-5">
    <div class="card mx-auto mb-3" style="max-width: 20rem">
    <h5 class="card-header">${manager.name}<br /><br />Engineer</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email Address: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
    </div>
</div>
    `;
};

const createIntern = (intern) => {
  return `<div class="col-5">
    <div class="card mx-auto mb-3" style="max-width: 20rem">
    <h5 class="card-header">${intern.name}<br /><br />Engineer</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email Address: ${intern.email}</li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
    </div>
</div>
    `;
};

module.exports = createmySquadHTML;
