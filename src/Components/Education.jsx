import React from 'react'
import education from "./data/education.json";

export const Education = () => {
  return (
    <>
     <div id="Education" className="container edu"> 
      <h1 align="center">EDUCATION</h1>
      {education.map((data) => {
        return(
          <>
          <div align="center">
          <div  key={data.id} className="edu-items text-center">
                  <div className="left">
                  <img src={`/asset/${data.imageSrc}`} alt="" />
                  </div>
                <div className="right">
                  <h2 >{data.degree}{data.school}</h2>
                  <h4>
                    <span  style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                  </h4>
                  <h5>
                  <span style={{ color: "yellow" }}>{data.location}</span>
                  </h5>
                </div>
          </div>
          </div>
         </>
          );
        })}
      </div>
    </>
  );
};


export default Education