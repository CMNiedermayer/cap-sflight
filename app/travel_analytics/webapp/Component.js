sap.ui.define(["sap/fe/core/AppComponent", "sap/ui/performance/trace/FESR", "sap/ui/performance/trace/FESRHelper"], function(Component, FESR, FESRHelper) {
	"use strict";
	const pattern = /\/([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})/;
	FESR.setActive(true, new URI(document.baseURI).path().match(pattern)[0] + ".sapfecapsflight.sapfecaptravel_analytics/fesr");
	return Component.extend("sap.fe.cap.travel_analytics.Component", {
		metadata: { manifest: "json" },
		
		/**
		 * Function is called when the rendering of the ComponentContainer is completed.
		 *
		 * @protected
		 */
		onAfterRendering: function() {
			setTimeout(function() {
				const kpiTag = sap.ui.getCore().byId("sap.fe.cap.travel_analytics::BookingsList--kpiTag-fe::KPI::KPI1");
				if (kpiTag) {
					FESRHelper.setSemanticStepname(kpiTag, "press", "KPI Tag"); // max. 20 chars
				}				
			}, 1000);
		}		
	});
});
