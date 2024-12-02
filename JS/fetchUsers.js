users.forEach(user => {
  const userList = document.getElementById('user-list');


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

