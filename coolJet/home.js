// $(document).ready(function() {
//     var dropDown = window.matchMedia("(max-width: 767px)").matches;

//     $("#navbar").append('<button class="navBarBtn"><i class="fa fa-bars  fa-3x" aria-hidden="true"></i></button>'); 
//     toggleBtn(dropDown);
     
//     $(window).on('resize', function() { 
//         dropDown = window.matchMedia("(max-width: 767px)").matches; 
//         toggleBtn(dropDown);
//     });
// });

// var btnClickActive = function(){
//     var opendNav = false;
//     var nav = $(".navbar");
//     console.log(nav, opendNav);
//     $(".navBarBtn").on("click", function (){
//         console.log("aaa");
//         if(opendNav == false){
//             console.log("otvori");
//             $(".navbar").addClass("navbar-opened");
//             opendNav = true;
//         }
//        else{
//             $(".navbar").removeClass("navbar-opened");
//             console.log("zatvori");
//             opendNav = false;
//        }
    
//     })
// }

// var toggleBtn = function(isMobile){
//     if(!isMobile){
//         $(".navBarBtn").hide();
//     }
//     else {
//         $(".navBarBtn").show();
//         btnClickActive();
//     } 

//     $('.age-inline').append('<label class="switch"><input type="checkbox"><span class="slider round"></span></label>');
// }


var opendNav = false;
var nav = $(".navbar"); 
$(".navBarBtn").on("click", function (){ 
    if(opendNav == false){ 
        $(".navbar").addClass("navbar-opened");
        opendNav = true;
    }
    else{
        $(".navbar").removeClass("navbar-opened"); 
        opendNav = false;
    } 

    
});

$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#departureDate" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#returDate" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

  var data = [];
  $.getJSON('http://127.0.0.1:5500/json.Data.json', function(result){
        $.each(result.entries,function(index, val){
            data.push(val);
        });
  });
  
console.log(data);
  $( "#from" ).autocomplete({
    source: data
  });

  console.log(from,to)