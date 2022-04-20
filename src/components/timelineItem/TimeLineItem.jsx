import "./TimeLineItem.css";

function TimeLineItem({ data }) {

    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ backgroundColor: "#59b256" }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                {data.descriptions.map((desc) => {
                    return (<p>{desc}</p>)
                })}
                {/* {data.link && <a href={data.link.url} target="_blank" rel="noreferrer">
                    {data.link.text}
                </a>} */}
                <span className="circle" ></span>
            </div>
        </div>
    );
}

export default TimeLineItem;