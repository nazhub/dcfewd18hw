//wait for the DOM elements to load before executing
$(document).ready(function() {


    function iHaveBeenClicked(){
        //prevent the submit button from refreshing the page
        event.preventDefault();



   var cityname =  jQuery('#city-type') .val();
   
   cityname = cityname.toLowerCase().trim();

// if the user inputs New York/ New York City / NYC fantastic change the CSS class to 'nyc'
if(cityname == "new york" || cityname == "new york city" || cityname == "nyc"){
            $('body').attr('class','nyc');
 }
      

// if the user inputs san francisco/ Bay Area / SF fantastic change the CSS class to 'nyc'
if(cityname == "san francisco" || cityname == "bay Area" || cityname == "sf"){
            $('body').attr('class','sf');
       }

       // if the user inputs Los Angeles/ LAX / LA fantastic change the CSS class to 'nyc'
if(cityname == "los angeles" || cityname == "bay area" || cityname == "la"){
            $('body').attr('class','la');
       }

// if the user inputs Austin/ ATX fantastic change the CSS class to 'nyc'
if(cityname == "austin" || cityname == "atx"){
            $('body').attr('class','austin');
       }


// if the user inputs Sydney/ SYD fantastic change the CSS class to 'nyc'
if(cityname == "sydney" || cityname == "syd"){
            $('body').attr('class','sydney');
       }


// if the user inputs Sydney/ SYD fantastic change the CSS class to 'nyc'
if(cityname == "Maison Margiela" || cityname == "mmm"){
            $('body').attr('class','mmm');
       }

else if (cityname == "sydney" || cityname == "syd") {
    $('body').attr('class','unknown');
}

}

jQuery('#submit-btn').click(iHaveBeenClicked);
});