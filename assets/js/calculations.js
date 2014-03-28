$(document).ready(function() {

      $.getJSON("https://spreadsheets.google.com/feeds/cells/0Aq7UWYtV79hYdElTNjhWTUFydFdSeExTNUdWdHhpMmc/od7/public/basic?range=B1:B4&alt=json", function listEntries(json) {   
      	  // GET VARIABLES FROM SPREADSHEET      
            var subscribers = 	parseInt( json.feed.entry[0].content.$t ); 
            var money = 		'$' + parseFloat( json.feed.entry[1].content.$t );
            var goal = 			parseInt( json.feed.entry[2].content.$t );  
            if(subscribers != 0){ 
            var percentage = 		parseFloat( json.feed.entry[3].content.$t ); }
            else{ var percentage = 0;}
            var height =		$('.thermometer').height() * percentage;


            console.log(height);

            // DISPLAY VARIABLES         
            $("#subscribers").prepend(subscribers);
            $("#goal").append(goal);
            $("#money").append(money);
            $(".inner").css('height',height);

            if(percentage >= 1){
                  $('#caphound').imgExplosion({
                      angle:true,
                      interval:500,
                      minThrow:500,
                      maxThrow:1300,
                      angle:true,
                      explode: false,
                      extraWidth:200,
                      rotateSpeed:10,
                      num: 300
                  });

            $('#celebrate').append('<audio controls autoplay="true"><source src="http://feelgoodsongs.info/audio/mp3s/Celebration.mp3" type="audio/mpeg"></audio>');
            }
            else{
                // REFRESHES EVERY MINUTE
                var interval = setInterval("location.reload(true)", 60000);  
            }
      });


});
