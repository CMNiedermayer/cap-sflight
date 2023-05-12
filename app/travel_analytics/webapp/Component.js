sap.ui.define(["sap/fe/core/AppComponent", "sap/ui/performance/trace/FESR"], function (Component, FESR) {
  "use strict";
  FESR.setActive(true, "/c4979668-b37a-445a-a6fd-d04f57fa93e4.sapfecapsflight.sapfecaptravel_analytics/fesr");
  return Component.extend("sap.fe.cap.travel_analytics.Component", {
    metadata: { manifest: "json" }
//    ,init: function() {
//    	FESR.setActive(true, this.getModel().getServiceUrl().substr(2) + "../fesr");
//    	Component.prototype.init.apply(this, arguments);
//    }
  });
});
