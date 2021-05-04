
		function toggleMenu() {
			let toggle = document.querySelector('.toggle');
			let navigation = document.querySelector('.navigation');
			let main = document.querySelector('.main');
			toggle.classList.toggle('active');
			navigation.classList.toggle('active');
			main.classList.toggle('active');
		}

		function clock() {
			let hour = document.getElementById('hour');
			let minute = document.getElementById('minute');
			let second = document.getElementById('second');
			let ampm = document.getElementById('ampm');

			let h = new Date().getHours();
			let m = new Date().getMinutes();
			let s = new Date().getSeconds();
			var am = 'AM';

			if (h > 12) {
				h = h - 12;
				var am = ' PM'
			}

			h = (h < 10 ) ? '0' + h : h;
			m = (m < 10 ) ? '0' + m : m;
			s = (s < 10 ) ? '0' + s : s;

			hour.innerHTML = h;
			minute.innerHTML = m;
			second.innerHTML = s;
			ampm.innerHTML = am;
		}
		var interval = setInterval(clock, 1000);

		$(document).ready(function() {
          $('#navigation').load("default/navigation.html");
        });
        $(document).ready(function() {
          $('#topbar').load("default/topbar.html");
        });

        dycalendar.draw({
        	target: '#dycalendar',
        	type: 'month',
        	dayformat: 'full',
        	monthformat: 'full',
        	highlighttargetdate: true,
        	prevnext: 'show';
        })