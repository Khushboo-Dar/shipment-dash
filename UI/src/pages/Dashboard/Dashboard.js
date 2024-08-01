import React, { useEffect, useState } from "react";
import Map from "../../Map";
import DashboardLayout from "../../components/DashboardLayout";
import { BsCardList } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { FaBan } from "react-icons/fa";
import { BiSolidPieChart } from "react-icons/bi";
import { LuShip } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";
import { PiTruckTrailerBold } from "react-icons/pi";
import { GetDashboardData } from "../../utils/ApiRoutes";
import axios from "axios";
import RenderPieChart from "./components/RenderPieChart";
import "./Dashboard.css";
import Documents from "./components/Documents";
import Announcements from "./components/Announcements";

const Dashboard = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(GetDashboardData);
        if (data.status) setData((prev) => data);
      } catch (error) {
        console.log("error in dashboard section UI : " + error.message);
      }
    };
    fetchData();
  }, []);

  const [detailsSummary, setDetailsSummary] = useState(null);
  const columnsToAnalyze = [
    "loading",
    "discharge",
    "delivery",
    "carrier",
    "shipper",
    "milestone",
  ];

  useEffect(() => {
    if (Data) {
      const summary = columnsToAnalyze.reduce((acc, col) => {
        acc[col] = Data.shipments.reduce((colAcc, shipment) => {
          const value = shipment[col] || "N/A";
          colAcc[value] = (colAcc[value] || 0) + 1;
          return colAcc;
        }, {});
        return acc;
      }, {});
      setDetailsSummary(summary);
    }
  }, [Data]);


  return (
    <DashboardLayout title={"Dashboard"}>
      <div className="dashboard-content">
        <div className="stats">
          <div className="stat">
            <div className="stat-text">
              <span>Total Bookings:</span>
              <span className="bookings">501 Bookings</span>
            </div>
            <BsCardList className="cardlist-icon" />
          </div>
          <div className="stat">
            <div className="stat-text">
              <span>Bookings Utilized:</span>
              <span className="bookings">501 Bookings</span>
            </div>
            <GoChecklist className="cardlist-icon" id="listcheckicon" />
          </div>
          <div className="stat">
            <div className="stat-text">
              <span>Booking Cancelled:</span>
              <span className="bookings">0 Bookings</span>
            </div>
            <FaBan className="cardlist-icon" id="ban" />
          </div>
          <div className="stat">
            <div className="stat-text">
              <span>Utilization:</span>
              <span className="bookings">100%</span>
            </div>
            <BiSolidPieChart className="cardlist-icon" id="solidpie" />
          </div>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
      <div className="pie-charts">
        <div className="headPie">
          Pie Chart Analysis
          <div className="transport-modes">
            <span className="sea">
              <LuShip /> Sea
            </span>
            <span className="air">
              <IoAirplaneOutline /> Air
            </span>
            <span className="land">
              <PiTruckTrailerBold /> Land
            </span>
          </div>
        </div>
        <div className="pie-charts-container">
          {detailsSummary && (
            <RenderPieChart shipments={detailsSummary.loading} title={"Origin Port"} />
          )}
          {detailsSummary && (
            <RenderPieChart
              shipments={detailsSummary.discharge}
              title={"Destination Port"}
            />
          )}
          {detailsSummary && (
            <RenderPieChart shipments={detailsSummary.carrier} title={"Carrier"} />
          )}
          {detailsSummary && (
            <RenderPieChart
              shipments={detailsSummary.shipper}
              title={"Consignee or Shipper"}
            />
          )}
          {detailsSummary && (
            <RenderPieChart shipments={detailsSummary.milestone} title={"Milestones"} />
          )}
        </div>
      </div>
      <div className="documents-announcements">
        {Data && <Documents documents={Data.documents} />}

        <Announcements />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
