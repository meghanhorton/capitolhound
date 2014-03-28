$(document).ready(function(){

    function advancedOptions() {
	var optionsDisplay = 0;

	$('#advanced-options').on('click', function(){
	    optionsDisplay++;
	    updateDisplay();
	});
	
	function updateDisplay(){
	    if(optionsDisplay%2!=0){
		$('#advanced-options-container').css('display', 'inherit');
	    }
	    
	    if(optionsDisplay%2==0){
		$('#advanced-options-container').css('display', 'none');		
	    }
	};
	
	$('#advanced-options-close').on('click', function(){
	    $('#advanced-options-container').css('display', 'none');			    
	});
    }
    
    function accountOpen() {
	$('#accountButton').on('click', function(){
	    $(".navbar-collapse.in").animate({ scrollTop: $('.navbar-collapse.in')[0].scrollHeight}, 1000);
	});
    }
    
    
    
    advancedOptions();
    accountOpen();
})