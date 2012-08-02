<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Josefin+Sans:700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Antic+Slab' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:700' rel='stylesheet' type='text/css'>

<script>
// Since using enqueue script to load jquery in no-conflict mode, must declare this to allow $ as shortcut for jQuery
jQuery(document).ready(function($){
	// Hover Nav
	$('.hover .sub-menu').hide();
	$('.hover .sub-menu .sub-menu').show();
	$('.hover .sub-menu').parent('li').addClass('parent');
	$('.hover .sub-menu .sub-menu').parent('li').removeClass('parent');
	$('.hover .parent').hover(
	  function () {
	    $(this).children('ul.sub-menu').stop(true, true).slideDown(300);
	  }, 
	  function () {
	    $(this).children('ul.sub-menu').stop(true, true).slideUp(200);
	  }
	);
// Ends allowance of jQuery to $ shortcut
});
</script>