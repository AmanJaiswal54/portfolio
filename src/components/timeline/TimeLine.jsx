import "./TimeLine.css";
import { timeLineData } from "../../data";
import TimeLineItem from "../timelineItem/TimeLineItem";

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-container">
                {timeLineData.map((item, index) => {
                    return <TimeLineItem key={index} data={item}></TimeLineItem>
                })}
            </div>
        </div>
    );
}
export default Timeline;