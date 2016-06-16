$(document).ready(function(){
	var count = 0;
 	var choiceOne;
	var choiceTwo;

	$('.hidden').click(function() {
		function flipBack() {
			$('#' + choiceOne.id).addClass('hidden');
			$('#' + choiceTwo.id).addClass('hidden');
			count = 0;
		}
		count++;
		if (count > 2) {
			return;
		}
		$(this).removeClass('hidden');
		if(count === 1) {
			choiceOne = {
				value: $(this).html(),
				id: $(this).attr('id')
			};
		}
		else if(count === 2) {
			choiceTwo = { 
				value: $(this).html(),
				id: $(this).attr('id')
			};
			if(choiceOne.value === choiceTwo.value) {
				count = 0;
			} 
			else {
			setTimeout(flipBack, 3000);
			}
		}
	});
});