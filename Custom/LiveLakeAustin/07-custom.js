<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
<script>
// Since using enqueue script to load jquery in no-conflict mode, must declare this to allow $ as shortcut for jQuery
jQuery(document).ready(function($){
  
  // Hover Nav
  $('.hover .sub-menu').hide();
  $('.hover .sub-menu .sub-menu').show();
  $('.hover .sub-menu').parent('li').addClass('parent');
  $('.hover .sub-menu .sub-menu').parent('li').removeClass('parent');
  $('.hover .menu-item').hover(
    function () {
      $(this).children('div.hidden').children('div.back').stop(true, true).slideDown(300);
    }, 
    function () {
      $(this).children('div.hidden').children('div.back').stop(true, true).slideUp(200);
    }
  );
  $('.hover .parent').hover(
    function () {
      $(this).children('ul.sub-menu').stop(true, true).slideDown(300);
    }, 
    function () {
      $(this).children('ul.sub-menu').stop(true, true).slideUp(200);
    }
  );

  // Hover Transition links
  $('.hovertrans').parent('div').hover(
	function () {
		$(this).children('.hovertrans').stop(true, true).fadeIn(200);
	},
	function () {
		$(this).children('.hovertrans').stop(true, true).fadeOut(200);
	}
  );

  // Photo Slideshow light window
  $('#jqphotos #horizontal_carousel').attr("id","horizontal_carousel2");
  $('#horizontal_carousel #largeImage').click(
	function () {
		$('#jqphotos').show();
		var largeImagesrc = $(this).attr("src");
		var ulLeft = $('#horizontal_carousel .container ul').css("left");
		$(this).attr("id","largeImageDuck");
		new UI.Carousel("horizontal_carousel2");
		$('#horizontal_carousel2 #largeImage').attr("src",largeImagesrc);
		$('#horizontal_carousel2 .container ul').css("left",ulLeft);		
		$("html,body").animate({ scrollTop: 0 }, "fast");
		$('body').addClass('jqphotos');
	}
  );
  function exit () {
	var largeImagesrc2 = $('#horizontal_carousel2 #largeImage').attr("src");
	var ulLeft2 = $('#horizontal_carousel2 .container ul').css("left");
	$('#jqphotos').hide();
	$('#horizontal_carousel #largeImageDuck').attr("id","largeImage");
	$('#horizontal_carousel #largeImage').attr("src",largeImagesrc2);
	$('#horizontal_carousel .container ul').css("left",ulLeft2);
	$('body').removeClass('jqphotos');
  }
  $('#jqphotos .exit a').click(
	function () {
		exit();
	}
  );
  $('#jqphotos .white').click(
	function () {
		exit();
	}
  );

  // Tabs for Map + List, Tile
  var leftColumn = $('#leftColumn').html();
  var viewBothLinkHTML = '<a href="javascript:void(0);">List + Map</a>';
  var viewTileHTML = '<a href="javascript:void(0);">Tile View</a>';
  $('#leftColumn').before('<div id="viewTabs"><ul><li class="viewBoth active">List + Map</li><li class="viewTile">' + viewTileHTML + '</li><div class="clear"></div></ul></div><div id="tileView">' + leftColumn + '</div>');
  var curview = 'both';
  var divs_to_re_id = ["resultsList","resultsNav","sortingLinks","listLoader","resultsDiv","propPaginationDiv"];
  var divs_to_copy_html = ["resultsList","resultsNav","listLoader"];
  $.each(divs_to_re_id, function(){
	$('#tileView #' + this).attr("id",this + "2");		
  });
  function showTileView(){
	curview = 'tile';
	$('#viewTabs li').removeClass('active');
	$('#viewTabs .viewTile').addClass('active');
	$('#viewTabs .viewTile').html('Tile View');
	$('#viewTabs .viewBoth').html(viewBothLinkHTML);
	$.each(divs_to_re_id, function(){
		$('#tileView #' + this + '2').attr("id",this);		
	});
	$.each(divs_to_copy_html, function(){
		$('#tileView #' + this).html($('#leftColumn #' + this).html());		
	});
	$.each(divs_to_re_id, function(){
		$('#leftColumn #' + this).attr("id",this + "2");		
	});
	$('#leftColumn, #rightColumn').hide();
	$('#tileView').show();
	$j('#propPaginationDiv').on('click', 'a.priceSorterLink', function(e) {
	    e.preventDefault()
	    if (this.id == 'priceSorterAsc') {
	      $j('#priceSorter').val('asc')
	    }
	    else if (this.id == 'priceSorterDesc') {
	      $j('#priceSorter').val('desc')
	    }
	    buildSearch(this)
	});
	$('.hovertrans').parent('div').hover(
		function () {
			$('.displet-tile-listing').css('background','none');
			$('.displet-tile-listing').css('boxShadow','none');
			$(this).children('.hovertrans').stop(true, true).fadeIn(200);
		},
		function () {
			$(this).children('.hovertrans').stop(true, true).fadeOut(200);
		}
	);
  }
  function showBothView(){
	curview = 'both';
	$('#viewTabs li').removeClass('active');
	$('#viewTabs .viewBoth').addClass('active');
	$('#viewTabs .viewBoth').html('List + Map');
	$('#viewTabs .viewTile').html(viewTileHTML);
	$.each(divs_to_re_id, function(){
		$('#leftColumn #' + this + '2').attr("id",this);		
	});
	$.each(divs_to_copy_html, function(){
		$('#leftColumn #' + this).html($('#tileView #' + this).html());		
	});
	$.each(divs_to_re_id, function(){
		$('#tileView #' + this).attr("id",this + "2");		
	});
	$('#tileView').hide();
	$('#rightColumn, #leftColumn').show();
  }
  $('#viewTabs .viewTile').click(function(){
	if (curview != 'tile'){
	  	showTileView();
	}
  });
  $('#viewTabs .viewBoth').click(function(){
	if (curview != 'both'){
		if (curview == 'tile'){
			var cururl = window.location.pathname;
			window.location = cururl.replace('/view=tile/','');
		}
		else{
	  		showBothView();
		}
	}
  });
  var curhash = window.location.hash;
  if (curhash.toLowerCase().indexOf("view=tile") >= 0) {
	showTileView();
  }


// Ends allowance of jQuery to $ shortcut
});
</script>
