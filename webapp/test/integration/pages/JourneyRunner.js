sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"yui011595userdocsummary/test/integration/pages/YCDSC011595_UserDocSumList",
	"yui011595userdocsummary/test/integration/pages/YCDSC011595_UserDocSumObjectPage"
], function (JourneyRunner, YCDSC011595_UserDocSumList, YCDSC011595_UserDocSumObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('yui011595userdocsummary') + '/test/flpSandbox.html#yui011595userdocsummary-tile',
        pages: {
			onTheYCDSC011595_UserDocSumList: YCDSC011595_UserDocSumList,
			onTheYCDSC011595_UserDocSumObjectPage: YCDSC011595_UserDocSumObjectPage
        },
        async: true
    });

    return runner;
});

