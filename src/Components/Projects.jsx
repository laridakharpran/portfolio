import React from "react";
import project from "./data/project.json";

const Projects = () => {
  return (
    <>
      <div className="container projects" id="Projects" align="center">
        <h1 align="center">PROJECTS</h1>
        <div className="row  d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "rgb(42, 60, 0)"
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.source} onclick="window.open({{event.url}}),````_system" className="btn btn-warning" >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;