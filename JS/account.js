document.addEventListener("DOMContentLoaded", function() {
  let user = {
    firstname: "Jeff",
    lastname: "Diaku",
    email: "admin@gmail.com",
    description: "Passionate about basketball and soccer, loves outdoor activities. Looking to connect with like-minded athletes in my area for friendly matches and training sessions.",
    sports: ["Basketball", "Golf", "Tennis", "Kayaking"],
    city: "Austin",
    phone: "(123) 456 789",
    state: "Texas",
    longitude: -97.7431,
    latitude: 30.2672,
    image: "../images/user.jpg",
  };


  let sports = ["MMA", "Boxing", "Kayaking", "Golf", "Soccer", "Football", "Tenis", "Hiking", "Basketball"]
  
  
  var fname = $("#fname");
  var lname = $("#lname");
  var email = $("#email");
  var phone = $("#phone");
  var bio = $("#bio");
  var location = $("#location");
  var activities = $("#activities");
  var profile_picture = $("#profile-pic");
  var activity_select = $("#activity-select");
  
  fname.attr("placeholder", user.firstname);
  lname.attr("placeholder", user.lastname);
  email.attr("placeholder", user.email);
  phone.attr("placeholder", user.phone);
  location.attr("placeholder", user.city+","+user.state);
  bio.attr("placeholder", user.description);
  profile_picture.attr("src", user.image);

  function enableActivityButtons() {
    let activityButtons = document.querySelectorAll(".activity-button");

    // Loop through each button and enable it
    activityButtons.forEach(button => {
      button.disabled = false; // Enable the button
    });
  }


  function loadSports(Usersports){
    activities.html("");
    Usersports.forEach(sport => {
      activities.append(`<form id="activity" class="activity">
                    <input type="text" value="${sport}" placeholder="${sport}" disabled>
                    <button type="submit" id="activity-button" class="activity-button" disabled>x</button>
                  </form>`);
      
    });
  }

  loadSports(user.sports);


  sports.forEach(sport =>{
    activity_select.append($("<option></option>").val(sport).text(sport));
  });
  

  $(document).on("click", ".activity-button", function(event) {
    event.preventDefault();
    const inputValue = $(this).closest("#activity").find("input").val();
    new_sports = user.sports.filter(sport => sport !== inputValue);
    user.sports = new_sports;
    loadSports(new_sports);
    console.log(new_sports);
  });


  $(document).on("click", ".activity-button", function(event) {
    event.preventDefault();
    const inputValue = $(this).closest("#activity").find("input").val();
    new_sports = user.sports.filter(sport => sport !== inputValue);
    user.sports = new_sports;
    loadSports(new_sports);
    console.log(new_sports);
  });

  $(document).on("click", "#add-sport", function(event) {
    event.preventDefault();
    const inputValue = $("#activity-select").val();
    if(!user.sports.includes(inputValue)){
      user.sports.push(inputValue);
      loadSports(user.sports);
    }
  });

  $(document).on("click", "#activity-edit-button", function(event) {
    event.preventDefault();
    enableActivityButtons();
  });
 


});







