sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'yui011595userdocsummary',
            componentId: 'YCDSC011595_UserDocSumObjectPage',
            contextPath: '/YCDSC011595_UserDocSum'
        },
        CustomPageDefinitions
    );
});