import React from "react";
import GoogleMapReact from "google-map-react";

const center = {
  lat: 59.95,
  lng: 30.33
};

const Footer = () => (
  <div>
    <div className="uk-child-width-expand@s " data-uk-grid>
        <div className="uk-section uk-section-muted">
          <div className="uk-container">
                <div>
                    <p>Address.</p>
                </div>
            </div>
        </div>
        <div className="uk-section uk-section-primary" style={{ padding: 0 }}>
          <div style={{ height: 400, width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBTyLdPJxThGcHv_ODUB-5rXn2y4VIStpg" }}
              defaultZoom={12}
              defaultCenter={center}
            />
          </div>
        </div>
    </div>
    <div className="uk-section uk-section-secondary uk-section-small">
        <div className="uk-container">
          <h3>Footer</h3>
        </div>
    </div>

  </div>
);

export default Footer;
