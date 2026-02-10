import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";

function Card(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard /> : <CompactCard param={props} />}
    </AnimateSharedLayout>
  );
}

// CompactCard

function CompactCard({ param }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxshadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barvalue}
          text={`${param.barvalue}%`}
        ></CircularProgressbar>
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

export default Card;
