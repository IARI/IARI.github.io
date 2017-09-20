/** rsCard Options */
var rsOptions = {
    rtl: false,	
	timeline: {
		topSpace: 50,
		itemsSpace: 25		
	},
	refSlider: {		
		speed: 800, //Slide transition duration (in ms)		
		auto: false, //Slides will automatically transition
		pause: 6000, //The amount of time (in ms) between each auto transition
		autoHover: true, //Auto show will pause when mouse hovers over slider		
		adaptiveHeight: true, //Dynamically adjust slider height based on each slide's height
		adaptiveHeightSpeed: 500 //Slide height transition duration (in ms).
	},
	postSlider: {
		speed: 800, //Slide transition duration (in ms)
		auto: true, //Slides will automatically transition
		pause: 6000, //The amount of time (in ms) between each auto transition
		autoHover: true //Auto show will pause when mouse hovers over slider
	},
	clientsSlider: {
		items: 5,
		singleItem: false,
		autoPlay: true,
		stopOnHover: true,
		itemsDesktopSmall: [992, 4],
		itemsTabletSmall: [767, 3],
		itemsMobile: [320, 1]
	},
    calendar: {
		startYear: '2017',
		startMonth: '0', // moths are starting form 0-11
		endYear: '2018',
		endMonth: '0',
		weekStart: 'Monday', // possible values Sunday/Monday
		weekNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],		                
		busyDays: [ // new Date(year, month, day)
            new Date(2017, 7, 31),
            new Date(2017, 8, 1),
            new Date(2017, 8, 2),
            new Date(2017, 8, 3),
            new Date(2017, 8, 4),
            new Date(2017, 8, 5),
            new Date(2017, 8, 6),
            new Date(2017, 8, 7),
            new Date(2017, 8, 8),
            new Date(2017, 8, 9),
            new Date(2017, 8, 10),
            new Date(2017, 8, 11),
            new Date(2017, 8, 12),
            new Date(2017, 8, 13),

            new Date(2017, 8, 15),
            new Date(2017, 8, 16),
            new Date(2017, 8, 17),

            new Date(2017, 8, 18),
            new Date(2017, 8, 19),
            new Date(2017, 8, 20),

            new Date(2017, 8, 29),
            new Date(2017, 8, 30),
            new Date(2017, 9, 1),
		]
    }	
};