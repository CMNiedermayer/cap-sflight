sap.ui.define(["sap/fe/core/AppComponent", "sap/ui/performance/trace/FESR"], function (AppComponent, FESR) {
  "use strict";
  FESR.setActive(true, "/c4979668-b37a-445a-a6fd-d04f57fa93e4.sapfecapsflight.sapfecaptravel_analytics/fesr");
  return AppComponent.extend("sap.fe.cap.travel.Component", {
    metadata: { manifest: "json" },
  });
});
