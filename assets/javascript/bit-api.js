

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>


	$("#select-artist").click(function(){
  	event.preventDefault();
  	searchBandsInTown($("#artist-input").val());
	});


  function searchBandsInTown(artistname) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artistname + "/events?app_id=codingbootcamp";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
       console.log(response);

    });
  }

  // Create function(loop?) to query only the tour date and venue latitude and longitude


 // Create table using materialize to append artists tour dates and venue location
 




