(function() {
	
	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var $email1 = $('#email1'),
		$email2 = $('#email2'),
        $name1 = $('#name1'),
        $name2 = $('#name2'),
        $submit1 = $('#submit1'),
		$submit2 = $('#submit2'),
		$submit3 = $('#submit3'),
        $popupSubmit = $('#popup-submit'),
        $popupEmail = $('#popup-email'),
        $popup = $('.popup');
		
	
	// Проверяем валидность email и открываем popup-окно
    $submit1.click(function(event){
		event.preventDefault();
        var value = $email1.val();
		if (pattern.test(value)) {
			if ($('.alert1').hasClass('error')) {
				$('.alert1').removeClass('error');
			};
            if (!$popup.hasClass('popup-show')) {
                $popup.addClass('popup-show');
            };
		} else {
			$('.alert1').addClass('error');
		}
	});
	
	$submit2.click(function(event){
		event.preventDefault();
        var value = $email2.val();
		if (pattern.test(value)) {
			if ($('.alert2').hasClass('error')) {
				$('.alert2').removeClass('error');
			};
            if (!$popup.hasClass('popup-show')) {
                $popup.addClass('popup-show');
            };
		} else {
			event.preventDefault();
			$('.alert2').addClass('error');
		}
	});
	
	$submit3.click(function(event){
		event.preventDefault();
        if (!$popup.hasClass('popup-show')) {
                $popup.addClass('popup-show');
        };
	});
    
    $popupSubmit.click(function(event){
		event.preventDefault();
        var value = $popupEmail.val();
		if (pattern.test(value)) {
			if ($('.popup-alert').hasClass('error')) {
				$('.popup-alert').removeClass('error');
			};
		} else {
			event.preventDefault();
			$('.popup-alert').addClass('error');
		}
	});
	
    $('.order').click(function() {
        if (!$popup.hasClass('popup-show')) {
            $popup.addClass('popup-show');
        };
    });
    
    
	// Закрываем popup-окно при нажатии на Esc
	$(window).keydown(function(event) {
		if (event.keyCode == 27	&& $popup.hasClass("popup-show")) {
			$popup.removeClass("popup-show");
		};
	});
	
})();