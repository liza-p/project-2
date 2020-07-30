
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
});

