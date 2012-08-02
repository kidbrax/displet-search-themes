<link href='http://fonts.googleapis.com/css?family=Oswald:400,700' rel='stylesheet' type='text/css'>

<script>
// Since using enqueue script to load jquery in no-conflict mode, must declare this to allow $ as shortcut for jQuery
jQuery(document).ready(function($){

  // Quick search navigation
  $('#quicksearch select, #slimsearch select').change(function(){
  	$(this + 'option:selected').each(function(){
  	  	var url = $(this).val();
  	  	if (url!=''){
  	  		window.location = url;
  	  	}
  	});
  });
  
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

  // Hover Transition links
  $.each($('.hovertrans, .slidetrans'),function(){
	$(this).parent('div').css('position','relative');
	$(this).css('height',$(this).parent('div').css('height'));
	$(this).css('width',$(this).parent('div').css('width'));
	$(this).css('lineHeight',$(this).parent('div').css('lineHeight'));
  });
  $('.hovertrans').parent('div').hover(
	function () {
		$(this).children('.hovertrans').stop(true, true).fadeIn(200);
	},
	function () {
		$(this).children('.hovertrans').stop(true, true).fadeOut(200);
	}
  );

  // Tabs for Map + List, Tile
  var leftColumn = $('#leftColumn').html();
  var resultsNav = $('#leftColumn #resultsNav').html();
  var viewBothHTML = '<a href="javascript:void(0);">Split View</a>';
  var viewTileHTML = '<a href="javascript:void(0);">Tile View</a>';
  var viewMapHTML = '<a href="javascript:void(0);">Map View</a>';
  $('#leftColumn').before('<div id="viewTabs"><ul><li class="viewBoth active">Split View</li><li class="viewTile">' + viewTileHTML + '</li><li class="viewMap">' + viewMapHTML + '</li><div class="clear"></div></ul></div><div id="tileView">' + leftColumn + '</div>');
  $('#rightColumnInner').before('<div id="resultsNav2">' + resultsNav + '</div>');
  var curview = 'both';
  var prevview = 'both';
  var divs_to_re_id = ["resultsList","listLoader","resultsDiv"];
  var divs_to_copy_html = ["resultsList","listLoader"];
  $.each(divs_to_re_id, function(){
	$('#tileView #' + this).attr("id",this + "2");		
  });
  $('#tileView #resultsNav').attr("id", "resultsNav2");
  $('#tileView #propPaginationDiv').attr("id", "propPaginationDiv2");	
  $('#tileView #sortingLinks').attr("id","sortingLinks2");
  function showTileView(){
	curview = 'tile';
	$('#viewTabs li').removeClass('active');
	$('#viewTabs .viewTile').addClass('active');
	$('#viewTabs .viewTile').html('Tile View');
	$('#viewTabs .viewBoth').html(viewBothHTML);
	$('#viewTabs .viewMap').html(viewMapHTML);
	$('#tileView #resultsNav2').html($('#resultsNav').html());
	$('#rightColumn #resultsNav, #leftColumn #resultsNav').attr("id","resultsNav2");
	$('#rightColumn #propPaginationDiv, #leftColumn #propPaginationDiv').attr("id","propPaginationDiv2");
	$('#rightColumn #sortingLinks, #leftColumn #sortingLinks').attr("id","sortingLinks2");
	$('#tileView #resultsNav2').attr("id","resultsNav");
	if (prevview=='both'){
		$.each(divs_to_re_id, function(){
			$('#tileView #' + this + '2').attr("id",this);		
		});
		$.each(divs_to_copy_html, function(){
			$('#tileView #' + this).html($('#leftColumn #' + this).html());		
		});
		$.each(divs_to_re_id, function(){
			$('#leftColumn #' + this).attr("id",this + "2");		
		});
	}
	prevview = 'tile';
	$('#rightColumn').removeClass('large');
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
	$('#viewTabs .viewBoth').html('Split View');
	$('#viewTabs .viewTile').html(viewTileHTML);
	$('#viewTabs .viewMap').html(viewMapHTML);
	$('#leftColumn #resultsNav2').html($('#resultsNav').html());
	$('#rightColumn #resultsNav, #tileView #resultsNav').attr("id","resultsNav2");
	$('#rightColumn #propPaginationDiv, #tileView #propPaginationDiv').attr("id","propPaginationDiv2");
	$('#rightColumn #sortingLinks, #tileView #sortingLinks').attr("id","sortingLinks2");
	$('#leftColumn #resultsNav2').attr("id","resultsNav");
	if (prevview=='tile'){
		$.each(divs_to_re_id, function(){
			$('#leftColumn #' + this + '2').attr("id",this);		
		});
		$.each(divs_to_copy_html, function(){
			$('#leftColumn #' + this).html($('#tileView #' + this).html());		
		});
		$.each(divs_to_re_id, function(){
			$('#tileView #' + this).attr("id",this + "2");		
		});
	}
	$('#leftColumn #resultsNav2')
	prevview = 'both';
	$('#tileView').hide();
	$('#rightColumn').removeClass('large');
	$('#rightColumn, #leftColumn').show();
	initializeMap();
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
  }
  function showMapView(){
	curview = 'map';
	$('#viewTabs li').removeClass('active');
	$('#viewTabs .viewMap').addClass('active');
	$('#viewTabs .viewMap').html('Map View');
	$('#viewTabs .viewTile').html(viewTileHTML);
	$('#viewTabs .viewBoth').html(viewBothHTML);
	$('#rightColumn #resultsNav2').html($('#resultsNav').html());
	$('#leftColumn #resultsNav, #tileView #resultsNav').attr("id","resultsNav2");
	$('#leftColumn #propPaginationDiv, #tileView #propPaginationDiv').attr("id","propPaginationDiv2");
	$('#leftColumn #sortingLinks, #tileView #sortingLinks').attr("id","sortingLinks2");
	$('#rightColumn #resultsNav2').attr("id","resultsNav");
	$('#tileView,#leftColumn').hide();
	$('#rightColumn').addClass('large');
	$('#rightColumn').show();
	initializeMap();
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
  }
  $('#viewTabs .viewTile').click(function(){
	if (curview != 'tile'){
	  	showTileView();
	}
  });
  $('#viewTabs .viewBoth').click(function(){
	if (curview != 'both'){
  		showBothView();
	}
  });
  $('#viewTabs .viewMap').click(function(){
	if (curview != 'map'){
  		showMapView();
	}
  });
  var curhash = window.location.hash;
  if (curhash.toLowerCase().indexOf("view=tile") >= 0) {
	showTileView();
  }
  if (curhash.toLowerCase().indexOf("view=map") >= 0) {
	showMapView();
  }

// Ends allowance of jQuery to $ shortcut
});</script>

<!-- Required for Facebook Like Button -->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<!-- End Required -->
<!-- Required for Google Plus One Button -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
<!-- End Required -->