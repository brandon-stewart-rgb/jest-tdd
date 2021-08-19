function generateTeam (res) {
    
    var roles = selectRoles(res.selectAnswer)
    
   var = outcome (`
    
    <div v-for="card in cardData" key="card.id" class="column is-4">
      <div class="card large">
        <div class="card-image">
          <figure class="image is-16by9">
            <img :src="card.image" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="card.avatar" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4 no-padding">${res.role}</p>
              
              <p class="subtitle is-6">${res.name}</p>
              <p class="subtitle is-6">Employee ID:${res.id}</p>
              <p class="subtitle is-6">Employee Email:${res.email}</p>
            </div>
          </div>
          <div class="content">
           
                ${roles}
           
            <div class="background-icon"><span class="icon-twitter"></span></div>
          </div>
        </div>
      </div>
    </div>
    `);

    return outcome;
    
};






function  selectRoles (selectAnswer) {
    var theRole = {
      'Engineer': "${github}",
      'Intern' : "${school}",
      'Manager' : "${officeNumber}"    
    };
    return `${theRole[selectAnswer]}`;
};
