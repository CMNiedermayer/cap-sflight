sap.ui.define(["sap/fe/core/AppComponent", "sap/ui/performance/trace/FESR"], function (Component, FESR) {
  "use strict";
  return Component.extend("sap.fe.cap.travel_analytics.Component", {
    metadata: { manifest: "json" },
    init: function() {
    	FESR.setActive(true, this.getModel().getServiceUrl().substr(2) + "../fesr");
    	Component.prototype.init.apply(this, arguments);
    }
  });
});
