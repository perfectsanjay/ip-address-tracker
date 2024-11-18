import React from "react";
import './Ip_AddressPage.styles.scss'
import arrow from '../../images/icon-arrow.svg'

const Home_Page = () =>{
    return(
        <div className="container">
            <div className="subcontainer">
            <h1 className="text">IP Address Tracker</h1>
            <div className="searchbar">
                <input className="input-text" type="text" placeholder="Search for any IP Address or domain"/>
                <button className="button"><img className="arrow" src={arrow} alt="arrow-img" /></button>
            </div>
            <div className="ip-info">
                <div className="ip-address">
                    <p>IP ADDRESS</p>
                    <h1>192.212.174.101</h1>
                </div>
                <div className="vertical-line"></div>

                <div className="location">
                     <p>LOCATION</p>
                    <h1>Brooklyn,NY 10001</h1>
                </div>

                <div className="vertical-line"></div>

                <div className="timezone">
                    <p>TIMEZONE</p>
                    <h1>UTC-05:00</h1>
                </div>

                <div className="vertical-line"></div>

                <div className="ISP">
                    <p>ISP</p>
                    <h1>SpaceX StarLink</h1>
                </div>

            </div>
            
            </div>
            

        </div>
    )
}
export default Home_Page;