jQuery(function() {
  jQuery('li').each(function() {

    var href = jQuery(this).find('a').attr('href');
    var parentclass = jQuery(this).parent('ul').attr('class');

    var pageaddr = /[^/]*$/.exec(window.location.pathname)[0];
    if(href === pageaddr) {

      jQuery(this).addClass('active');


      	if(parentclass === 'dropdown-menu'){
      		jQuery(this).parent('ul').parent('li').addClass('active');
      	}
    }
  });
}); 

$(function () {
	$('#start').datetimepicker({
	pickTime: false, 
	});
	$('#end').datetimepicker({
	pickTime: false, 
	showToday: true, 
	});
});
