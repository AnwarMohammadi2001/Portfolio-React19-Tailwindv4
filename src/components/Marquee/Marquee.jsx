import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const upperMarquee = [
    "/html.png",
    "/tech/react.png",
    "/tech/tailwind-css.svg",
    "/tech/angual.png",
    "/tech/vue.png",
    "/tech/boostrap.png",
    "/tech/js.png",
    "/tech/figma.png",
    "/tech/vscode.png",
  ];

  const lowerMarquee = [
    "/tech/node.png",
    "/tech/worpress.png",
    "/tech/next.png",
    "/tech/mongo.png",
    "/tech/mysql.png",
    "/tech/laravel.png",
    "/tech/git.png",
    "/tech/gatsby.png",
    "/tech/fluter.png",
    "/tech/django.png",
  ];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
