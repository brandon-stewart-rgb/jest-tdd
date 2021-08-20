const generateCards = teamArray => {
  // empty array from employees pushed from prompts
  let cards = [];
       
 for (let i = 0; i < teamArray.length; i++) {
  
    if(teamArray[i].getRole()=== 'Engineer') {
      cards.push(`

      <div class="column is-4">
          <div class="card large">
            <div class="card-image">
              <figure class="image is-16by9">
                <img src="./img/lion.jpg" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                  <i class="fas fa-glasses"></i>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 no-padding">ENGINEER</p>
                  <p><span class="subtitle is-5">${teamArray[i].name}</span></p>
                    
                  <p class="subtitle is-6">Employee Id: <strong>${teamArray[i].id}</strong></p>
                  <p class="subtitle is-6">Email: <a href='mailto:${teamArray[i].email}'>${teamArray[i].email}</a></p>
                  <p class="subtitle is-6">Github: <a href='https://github.com/${teamArray[i].github}'>${teamArray[i].github}</a></p>
               
                </div>
              </div>
              <div class="content">
              
                <div class="background-icon"><span class="icon-twitter"></span></div>
              </div>
            </div>
          </div>
        </div>

      `)
    } else if (teamArray[i].getRole() === 'Intern') {
      cards.push(`
      
      <div class="column is-4">
          <div class="card large">
            <div class="card-image">
              <figure class="image is-16by9">
              <img src="./img/chipmunk.jpg" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                  <i class="fas fa-user-graduate"></i>        
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 no-padding">INTERN</p>
                  <p><span class="subtitle is-5">${teamArray[i].name}</span></p>
                    
                  <p class="subtitle is-6">Employee Id: <strong>${teamArray[i].id}</strong></p>
                  <p class="subtitle is-6">Email: <a href='mailto:${teamArray[i].email}'>${teamArray[i].email}</a></p>
                  <p class="subtitle is-6">School: ${teamArray[i].school}</p>
               
                </div>
              </div>
              <div class="content">            
                <div class="background-icon"><span class="icon-twitter"></span></div>
              </div>
            </div>
          </div>
        </div>
      
      `)
    } else if (teamArray[i].getRole() === 'Manager') {
      cards.push(`

      <div class="column is-4">
          <div class="card large">
            <div class="card-image">
              <figure class="image is-16by9">
              <img src="./img/bear.jpg" alt="Image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                  <i class="fas fa-mug-hot"></i>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 no-padding">MANAGER</p>
                  <p><span class="subtitle is-5">${teamArray[i].name}</span></p>
                    
                  <p class="subtitle is-6">Employee Id: <strong>${teamArray[i].id}</strong></p>
                  <p class="subtitle is-6">Email: <a href='mailto:${teamArray[i].email}'>${teamArray[i].email}</a></p>
                  <p class="subtitle is-6">Office Number: ${teamArray[i].officeNumber}</p>
               
                </div>
              </div>
              <div class="content">        
                <div class="background-icon"><span class="icon-twitter"></span></div>
              </div>
            </div>
          </div>
        </div>
      `)
    }
      
    
  };  


let outcome = `
    
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Developer TEAM</title>
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <script src="https://kit.fontawesome.com/7dc3015a44.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>

    <!-- START NAV -->
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
          The TEAM
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>      
        </div>
      </div>
    </nav>
    <!-- END NAV -->
    <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h1 class="title" style="color: ghostwhite;">Developer TEAM</h1><br>
          </div>
        </div>
        <div id="app" class="row columns is-multiline">
                  ${cards.join('')}
        </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <div class="soc">
              <a href="#"><i class="fa fa-github-alt fa-lg" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
            </div>                  
          </div>
        </div>
      </footer>
    </body>   
  </html>

`
return outcome;

}; 

module.exports = generateCards;