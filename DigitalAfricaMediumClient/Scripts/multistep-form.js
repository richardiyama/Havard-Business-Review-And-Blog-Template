$(document).ready(function(){
	spamschutz_init();//spam check
  msform_init();//Multiform 
})// $(document).ready()  */

/**
 * check($fs)
 * Validates the actualy fieldset
 *
 */
function check($fs){
	var ok = true;
	switch($fs.attr('data-check-id')){
		// Fieldset with 'data-check-id' == '1'
		case '1':
			$i_fname = $('input[name="cds_name"]',$fs);
			$i_address1 = $('input[name="cds_address_1"]',$fs);
			$i_city = $('input[name="cds_city"]',$fs);
			$i_zipcode = $('input[name="cds_zip"]',$fs);

			$i_email = $('input[name="cds_email"]',$fs);

		//NAME
			if ($i_fname.val().length < 3) {
				ok=false;
				$i_fname.addClass('error');
			}
			else{$i_fname.removeClass('error');}

		//ADDRESS 1
			if ($i_address1.val().length < 3) {
				ok=false;
				$i_address1.addClass('error');
			}
			else{$i_address1.removeClass('error');}

		//CITY
			if ($i_city.val().length < 3) {
				ok=false;
				$i_city.addClass('error');
			}
			else{$i_city.removeClass('error');}	

		//ZIP CODE
			if ($i_zipcode.val().length < 3) {
				ok=false;
				$i_zipcode.addClass('error');
			}
			else{$i_zipcode.removeClass('error');}	
								
		//EMAIL
			if ($i_email.val().length < 6) {// <http://www.html-seminar.de/html-css-php-forum/board40-themenbereiche/board18-php/4708-php-mailing/#post32959>
				ok=false;
				$i_email.addClass('error');
			}
			else{$i_email.removeClass('error');}
			break;
	}
	
	if(ok === true){
		$fs.attr('data-complete', true);
		return true;
	}
	else{
		$fs.attr('data-complete', false);
		return false;
	}
}// check()  */

/**
 * unCheck($fieldset)
 * DeValidates the actualy fieldset
 *
 */
function unCheck($fieldset){
	$fieldset.attr('data-complete', false);
}// unCheck()  */

/**
 * form_completeCheck()
 *
 */
function form_completeCheck(){
  var ok = true;
  $('fieldset').each(function(index,elem){
    $this = $(this);
    if ($this.attr('data-complete') != 'true') {
      ok = false;
    };
  })

}// form_completeCheck()  */

/**
 * msform_init()
 * init's the Next and Previus Buttons
 * 
 * author & copyright by <http://thecodeplayer.com/walkthrough/jquery-multi-step-form-with-progress-bar>
 *
 * modifyed by Wolf Wortmann:
 *  Added Validation caal.
 *  Added Disvalidation call.
 */
function msform_init(){
	//jQuery time
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating; //flag to prevent quick multi-click glitches
	$('.send').click(function(){
		// fake the button click (submit buttons don't get attached to forms unless actually clicked, and simulating a click on this one results in an infinite loop
		var attach = $("<input type='hidden' id='myButton' name='send' class='next-text' value='Next' />");
		$(this).closest("form").append(attach);
		$(this).closest("form").submit();
	})
	$(".next").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		
		if( check(current_fs) === false ) {
			animating = false;
			return false;
		} //Validate & Cancel if fail

		//activate next step on progressbar using the index of next_fs
		$(".progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')', 'position': 'absolute'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 700, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});// $(".next").click()  */

	$(".previous").click(function(){
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		
		unCheck(previous_fs)//DeValidieren

		//de-activate current step on progressbar
		$(".progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		
		//show the previous fieldset
		previous_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				left = ((1-now) * 50)+"%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			duration: 700, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});// $(".previous").click()  */
};// msform_init()  */

function spamschutz_init(){
	$('.vtcha-spamschutz').vtcha({
    //hide: '.hide-this-pls',
    ok: 'multi_human_detected',
  })
}// spamschutz_init()  */
