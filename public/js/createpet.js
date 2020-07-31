
$(function(){
  const apiKey = "ApEoFusqzTKuzXSA3uJeZz";
  const client = filestack.init(apiKey);
  let imgURL = "";
  //function to call filestack on button click 
  $('#upload').on("click", function(event){
    event.preventDefault();
    const options = {
      onUploadDone: (res) => {
        console.log(res);
        imgURL = res.filesUploaded[0].url;
      }
    };
    client.picker(options).open();
  
  });
  //on submit function for the AddPet form 
  $("#addPetForm").on("submit", function(event) {
    event.preventDefault();
    //ajax request to the server to add form data to DB
    $.post("/api/create-pet",{
      //passing users data to the var 
      name: $("#name").val().trim(),
      breed: $("#breed").val(),
      gender: $("#gender").val(),
      age: $("#age").val().trim(),
      notes: $("#notes").val().trim(),
      image : imgURL
    })
    .then(function(data) {
      window.location.replace("/");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    

    
   
  });

});

