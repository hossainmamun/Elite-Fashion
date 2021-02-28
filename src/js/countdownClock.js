var now = new Date();
		var day = now.getDate();
		var month = now.getMonth() + 1;
		var year = now.getFullYear() + 1;

		var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

		$('#example').countdown({
			date: nextyear, // TODO Date format: 07/27/2017 17:00:00
			offset: +2, // TODO Your Timezone Offset
			day: 'Day',
			days: 'Days',
			hideOnComplete: true
		}, function (container) {
			alert('Done!');
		});