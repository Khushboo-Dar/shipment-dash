import React from "react";
import "../Dashboard.css";
const Documents = ({documents}) => {
    const convertDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const formattedDate = date.toISOString().split("T")[0];
        const formattedTime = date.toTimeString().split(" ")[0];
    
        return {
          date: formattedDate,
          time: formattedTime,
        };
      };
  return (
    <div className="latest-documents">
      <h3>Latest Documents</h3>
      <ul>
        {
          documents.map((doc) => {
            const { date, time } = convertDateTime(doc.created_at);
            return (
              <Doc 
                key={doc._id}
                title={doc.title}
                description={doc.description}
                date={date}
                time={time}
              />
            );
          })}
      </ul>
    </div>
  );
};

const Doc = ({title, description, date, time}) => {
  return (
    <li >
      <div className="doc-left">
        <img src="pdf.png" alt="PDF Icon" className="pdf-icon" />
        <div className="doc-details">
          <span className="doc-title">{title}</span>
          <span className="doc-meta">{description}</span>
        </div>
      </div>
      <div className="doc-datetime">
        <span className="doc-date">{date}</span>
        <span className="doc-time">{time}</span>
      </div>
    </li>
  );
};


export default Documents