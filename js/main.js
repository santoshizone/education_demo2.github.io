




mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




$(document).ready(function(){

$('.form1').waypoint(function(direction){

    $('.form1').addClass(' animated fadeInRight')
    
    
   
    

   
  },{
    offset:'50%'
  })



$('.div1').waypoint(function(direction){

    $('.div1').addClass(' animated fadeInDown')
    $('.div2').addClass(' animated fadeInDown')
 
	$('.div3').addClass(' animated fadeInDown')
 
	 $('.div4').addClass(' animated fadeInDown')
 
    
    
   
    

   
  },{
    offset:'50%'
  })


$('.sec2_col1').waypoint(function(direction){

    $('.sec2_col1').addClass(' animated fadeInDown')
    $('.image_div').addClass(' animated fadeInUp')
    $('.sec2_col1').addClass(' animated fadeInDown')
    
   },{
    offset:'50%'
  })



$('.sec3_div1').waypoint(function(direction){

    $('.sec3_div1').addClass(' animated fadeInUp')
    $('.sec3_img').addClass(' animated fadeInLeft')
    
 
    
   },{
    offset:'50%'
  })


$('.sec4_div1').waypoint(function(direction){

    $('.sec4_div1').addClass(' animated slideInLeft')
  
    
 
    
   },{
    offset:'50%'
  })



$('.card1').waypoint(function(direction){

    $('.card1').addClass(' animated slideInRight')

    $('.card2').addClass(' animated slideInRight')
	$('.card3').addClass(' animated slideInRight')

 },{
    offset:'50%'
  })




$('.sec6_col1').waypoint(function(direction){

    $('.sec6_col2').addClass(' animated fadeInLeft')

    $('.sec6_col1').addClass(' animated fadeInRight')

 },{
    offset:'50%'
  })


});

$('.sec7_div1').waypoint(function(direction){

    $('.sec7_div1').addClass(' animated fadeInDown')

    

 },{
    offset:'50%'
  })
