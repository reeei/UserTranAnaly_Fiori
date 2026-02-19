sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheYCDSC011595_UserDocSumList.iSeeThisPage();
            Then.onTheYCDSC011595_UserDocSumList.onTable().iCheckColumns(5, {"UserName":{"header":"仕訳登録者"},"TotalDocumentCount":{"header":"TotalDocumentCount"},"FI_Count":{"header":"FI_Count"},"MM_Count":{"header":"MM_Count"},"MM_IM_Count":{"header":"MM_IM_Count"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheYCDSC011595_UserDocSumList.onFilterBar().iExecuteSearch();
            
            Then.onTheYCDSC011595_UserDocSumList.onTable().iCheckRows();

            When.onTheYCDSC011595_UserDocSumList.onTable().iPressRow(0);
            Then.onTheYCDSC011595_UserDocSumObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});