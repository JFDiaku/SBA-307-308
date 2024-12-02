
fetch('/SBA-307-308/js/users.json')
    .then(response => {
        if (!response.ok) {
            console.log("no response");
        }
        return response.json();
    })
    .then(users => {
      

        const userList = document.getElementById('user-list');

        
        users.forEach(user => {
            const userCard = `
            <div class="user-card">
              <img class="user-image" src="${user.image}" alt="${user.firstname}'s image">
              <div class="details">
                <h3>${user.firstname} ${user.lastname}</h3>
                <p>${user.sports.join(', ')}</p>
              </div>
            <div>
              <p class="location">${user.city}, ${user.state}</p>
              <a href=""><img src="../images/chat.png" class="chat-btn" alt="${user.firstname}'s image"> </a>
            </div>
              
            </div>
          `;
            userList.innerHTML += userCard; 
        });
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        document.getElementById('user-list').innerHTML = '<p>Error loading user data.</p>';
    });