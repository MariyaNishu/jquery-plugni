$(document).ready(function(){
	// draggable
	$( "#draggable" ).draggable();

	// accordion
	$( "#accordion" ).accordion({
		collapsible: true
	});
	// autocomplete
    var data = [

    	"HTML",
    	"CSS",
    	"JavaScript"
    ];
    $( "#courses" ).autocomplete({
      source: data
    });

    // droppable
    $( "#draggable2" ).draggable();
    // sortable
    $( function() {
    $( "#sortable" ).sortable();
  });
    //datepicker
    $( "#datepicker" ).datepicker();
	//tabs
    $( "#tabs" ).tabs();
 	//tooltips
    $( document ).tooltip();

    // add class
    $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );

    $( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
});

$(document).ready(function(){
  // counterup
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
})
