import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Popular Shows</h2>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className="col-md-3 mb-4">
            <div className="card">
              {show.show.image?.medium ? (
                <img src={show.show.image.medium} className="card-img-top" alt={show.show.name} />
              ) : (
                <div className="placeholder-image">No Image Available</div>
              )}
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <Link to={`/show/${show.show.id}`} className="btn btn-danger">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
