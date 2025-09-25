import React, { useEffect, useState } from "react";
import axios from "axios";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const [upperMarquee, setUpperMarquee] = useState([]);
  const [lowerMarquee, setLowerMarquee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/marquee")
      .then((res) => {
        const upper = res.data.filter((item) => item.group === "upper");
        const lower = res.data.filter((item) => item.group === "lower");

        // prepend server URL
        setUpperMarquee(upper.map((i) => `http://localhost:5000${i.image}`));
        setLowerMarquee(lower.map((i) => `http://localhost:5000${i.image}`));
      })
      .catch((err) => console.error("❌ Error fetching marquee:", err));
  }, []);

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
