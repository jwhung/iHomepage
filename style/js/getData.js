$(function() {
	if ($('#more-works').length === 0) {
		return;
	}
	var currentPage = 1;
	function addWorks() {
		$.getJSON('/works.json', {
			currentPage: currentPage
		}).then(function(data) {
			if (data.lastPage) {
				$('#more-works').remove();
			}
			data.pics.forEach(function(pic) {
				$('.work').append('<div class="item">' + pic + '</div>');
			});
		});
		currentPage += 1;
	}
	addWorks();	
	$('#more-works').click(function(e) {
		e.preventDefault();
		addWorks();
	});
});

$(function() {
	if ($('#more-photos').length === 0) {
		return;
	}
	var currentPage = 1;
	function addPhotos() {
		$.getJSON('/photos.json', {
			currentPage: currentPage
		}).then(function(data) {
			if (data.lastPage) {
				$('#more-photos').remove();
			}
			data.pics.forEach(function(pic) {
				$('.photo').append('<div class="item">' + pic + '</div>');
			});
		});
		currentPage += 1;
	}
	addPhotos();	
	$('#more-photos').click(function(e) {
		e.preventDefault();
		addPhotos();
	});

});