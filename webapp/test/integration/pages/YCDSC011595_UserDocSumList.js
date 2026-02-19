sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'yui011595userdocsummary',
            componentId: 'YCDSC011595_UserDocSumList',
            contextPath: '/YCDSC011595_UserDocSum'
        },
        CustomPageDefinitions
    );
});