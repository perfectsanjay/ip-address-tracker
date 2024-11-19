import React, { useState } from "react";
import "./Ip_AddressPage.styles.scss";
import arrow from "../../images/icon-arrow.svg";
import MapComponent from "../MapComponent/MapComponent";

const Home_Page = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchIpData = async () => {
    if (!ipAddress.trim()) {
      setError("Please enter a valid IP address or domain.");
      return;
    }

    try {
      setError(null); 
      setLoading(true); 
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_UaqaNm1ul6SyXWzYilrdPDG8ily7M&ipAddress=${ipAddress}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setIpData(data);
    } catch (error) {
      setError("Failed to fetch IP information. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="subcontainer">
        <h1 className="text">IP Address Tracker</h1>
        <div className="searchbar">
          <input
            className="input-text"
            type="text"
            placeholder="Search for any IP Address or domain"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button type="submit" className="button" onClick={fetchIpData}>
            <img className="arrow" src={arrow} alt="arrow-img" />
          </button>
        </div>
      

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {ipData && (
          <>
            <div className="ip-info">
              <div className="ip-address">
                <p>IP ADDRESS</p>
                <h1>{ipData.ip}</h1>
              </div>
              <div className="vertical-line"></div>

              <div className="location">
                <p>LOCATION</p>
                <h1>
                  {ipData.location.city}, {ipData.location.region}{" "}
                  {ipData.location.postalCode}
                </h1>
              </div>
              <div className="vertical-line"></div>

              <div className="timezone">
                <p>TIMEZONE</p>
                <h1>UTC {ipData.location.timezone}</h1>
              </div>
              <div className="vertical-line"></div>

              <div className="ISP">
                <p>ISP</p>
                <h1>{ipData.isp}</h1>
              </div>
            </div>
            <div className="map-container">
            <MapComponent
              location={{
                lat: ipData.location.lat,
                lng: ipData.location.lng,
              }}
            />
            </div>
            
          </>
        )}
      </div>
   </div>
  );
};

export default Home_Page;
