import React from "react";
import GoogleMapReact from "google-map-react";


function SimpleMap()
{
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    return (
      <div
        style={{ height: "50vh", width: "100vh" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
            process.env.REACT_APP_GOOGLE_TOKEN
          }}
          defaultCenter= {{
            lat: 9.937031544611857,
            lng: -84.04483716100493
          }}
          defaultZoom= {20}
        >
        <AnyReactComponent
            lat={9.937031544611857}
            lng={-84.04483716100493}
            text="Pizza Magma"
          />
        </GoogleMapReact>
      </div>
    );
  }

export default SimpleMap;