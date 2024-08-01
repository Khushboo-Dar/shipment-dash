import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { MdOutlineFileDownload } from 'react-icons/md';
import { LuShip } from 'react-icons/lu';
import { IoAirplaneOutline } from 'react-icons/io5';
import { PiTruckTrailerBold } from 'react-icons/pi';
import { headings } from './constants/constants';
import './Analytics.css';
import Table from './components/Table';
import { GetAnalyticsData } from '../../utils/ApiRoutes';
import axios from 'axios';
import Card from './components/Card';
import CustomPieChart from './components/CustomPieChart';

const Analytics = () => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(GetAnalyticsData);
        if (data.status) setData((prev) => data);
      } catch (error) {
        console.log('error in analytics section UI : ' + error.message);
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
    "consignee",
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

  useEffect(() => {
    if(detailsSummary)
      console.log(detailsSummary)
  }, [detailsSummary])

  const milestoneData = [
    { name: 'Booked', value: 19 , color : '#6B120A'},
    { name: 'Discharged', value: 29 , color : '#6B120A'},
    { name: 'Arrived', value: 22 , color : '#6B120A'},
    { name: 'Delivered', value: 393 , color : '#6B120A'},
    { name: 'Returned', value: 149 , color : '#6B120A'},
  ];
  const milestoneColors = ['#6B120A', '#EB5D50', '#F7A668', '#7BB896', '#1073E6'];

  const timelineData = [
    { name: 'On Time', value: 681 },
    { name: 'Late', value: 1 },
  ];
  const timelineColors = ['#7BB896', '#F7A668'];

  return (
    <DashboardLayout title={'Analytics'}>
      <div className="transport-modes">
        <span className="sea"><LuShip /> Sea</span>
        <span className="air"><IoAirplaneOutline /> Air</span>
        <span className="land"><PiTruckTrailerBold /> Land</span>
      </div>
      <div className="tabs">
        <div className="tab2">
          <button className="tab active">Shipments</button>
          <button className="tab">Containers</button>
        </div>
      </div>
      <div className="filter-section">
        <div className="filters">
          <label htmlFor="filterSelectType" className="labell">Type</label>
          <select id="filterSelectType" className="filter">
            <option disabled selected>Select</option>
            <option>Sea</option>
            <option>Land</option>
            <option>Air</option>
          </select>

          <label htmlFor="filterSelectDate" className="labell">Date</label>
          <select id="filterSelectDate" className="filter">
            <option disabled selected>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <label htmlFor="filterSelectPeriod" className="labell">Period</label>
          <select id="filterSelectPeriod" className="filter">
            <option disabled selected>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button className="cancel-btn">Cancel</button>
          <button className="go-btn">Go</button>
        </div>
      </div>
      <div className="chart-section">
        <div className="chart milestones">
          <h3>Milestones</h3>
          <CustomPieChart data={milestoneData} colors={milestoneColors} />
        </div>
        <div className="chart timelines">
          <h3>Timelines</h3>
          <CustomPieChart data={timelineData} colors={timelineColors} />
        </div>
      </div>
      <div className="card-sec">
        {detailsSummary && <Card title={"Loading"} stateObject={detailsSummary.loading} />}
        {detailsSummary && <Card stateObject={detailsSummary.discharge} title={"Discharge"} />}
        {detailsSummary && <Card stateObject={detailsSummary.delivery} title={"Delivery"} />}
        {detailsSummary && <Card stateObject={detailsSummary.shipper} title={"Shipper"} />}
        {detailsSummary && <Card stateObject={detailsSummary.consignee} title={"Consignee"} />}
        {detailsSummary && <Card stateObject={detailsSummary.carrier} title={"Carrier"} />}
      </div>
      <div className="table-sec">
        <DownloadBtn />
        {Data && <Table headings={headings} data={Data} />}
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

const DownloadBtn = () => {
  return (
    <div className="btn-div">
      <button className="download-btn">
        <MdOutlineFileDownload color="#FFFFFF" size={24} />
        Download
      </button>
    </div>
  );
};