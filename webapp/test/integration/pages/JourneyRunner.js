sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travelprocessor/test/integration/pages/TravelList",
	"travelprocessor/test/integration/pages/TravelObjectPage",
	"travelprocessor/test/integration/pages/BookingObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage, BookingObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travelprocessor') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage,
			onTheBookingObjectPage: BookingObjectPage
        },
        async: true
    });

    return runner;
});

