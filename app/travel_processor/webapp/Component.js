sap.ui.define(["sap/fe/core/AppComponent", "sap/ui/performance/trace/FESR"], function(AppComponent, FESR) {
	"use strict";
	const pattern = /\/([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})/;
	FESR.setActive(true, new URI(document.baseURI).path().match(pattern)[0] + ".sapfecapsflight.sapfecaptravel_analytics/fesr");
	return AppComponent.extend("sap.fe.cap.travel.Component", {
		metadata: { manifest: "json" }
	});
});
