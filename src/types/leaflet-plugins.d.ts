import "leaflet";

declare module "leaflet" {
  interface Layer {
    managed?: {
      name?: string;
      type?: string;
      params?: {
        opacity?: number;
        subType?: string;
        [key: string]: unknown;
      };
    };
  }

  class KML extends FeatureGroup {
    constructor(kml: Document | XMLDocument, options?: Record<string, unknown>);
  }

  const glify: {
    shapes(options: Record<string, unknown>): unknown;
  };
}

declare module "leaflet-kml";
declare module "leaflet.glify";
