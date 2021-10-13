const createmySquadHTML = (team) => {
  const createEngineer = (engineer) => {
    return `<div class="col-5">
        <div class="card mx-auto mb-3" style="max-width: 20rem">
        <h5 class="card-header">${engineer.name}<br /><br />Engineer</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email Address: ${engineer.email}</li>
            
        </ul>
        </div>
    </div>
        `;
  };
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
        <div class="container container-fluid text-center">
            <div class="jumbotron bg-danger">
                <h1 class="bg-danger text-white">My Team</h1>
            </div>
            <div class = "row">
      
        </div>
        <div class="col-5">
            <div class="card mx-auto mb-3" style="max-width: 20rem">
            <h5 class="card-header">${data[i].name}<br /><br />${Engineer}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email Address: ${data[i].email}</li>
                
            </ul>
            </div>
        </div>

        <div class="col-5">
            <div class="card mx-auto mb-3" style="max-width: 20rem">
            <h5 class="card-header">${data[i].name}<br /><br />${Manager}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email Address: ${data[i].email}</li>
                
            </ul>
            </div>

            <div class="col-5">
                <div class="card mx-auto mb-3" style="max-width: 20rem">
                <h5 class="card-header">${data[i].name}<br /><br />${Intern}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data[i].id}</li>
                    <li class="list-group-item">Email Address: ${data[i].email}</li>
                    
                </ul>
                </div>
            </div>

            <div class="col-5">
                <div class="card mx-auto mb-3" style="max-width: 20rem">
                <h5 class="card-header">${data[i].name}<br /><br />${Employee}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data[i].id}</li>
                    <li class="list-group-item">Email Address: ${data[i].email}</li>
                    
                </ul>
                </div>
            </div>
        </div>
    </body>

    </html>`;
};
module.exports = createmySquadHTML;