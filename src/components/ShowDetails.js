import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Show Detail</h2>
      {show && (
        <div className="row">
          <div className="col-md-4">
            <div style={{ height: "100%" }}>
              <img
                src={show.image?.medium}
                className="img-fluid"
                alt={show.name}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <p dangerouslySetInnerHTML={{ __html: show.summary }} />
                <div className="mt-3">
                  <p>
                    <strong>Score:</strong> {show.rating.average}
                  </p>
                  <p>
                    <strong>Premiere Date:</strong> {show.premiered}
                  </p>
                  <p>
                    <strong>End Date:</strong>{" "}
                    {show.status === "Ended" ? show.endDate : "Ongoing"}
                  </p>
                  <p>
                    <strong>Schedule:</strong> {show.schedule.days.join(", ")}{" "}
                    at {show.schedule.time}
                  </p>
                  <p>
                    <strong>Rating:</strong> {show.rating.average}
                  </p>

                  <Link
                    to={{
                      pathname: `/book/${id}`
                    }}
                    className="btn btn-primary"
                  >
                    Book Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
