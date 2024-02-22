import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> 404 Page Not Found</h1>
      <div className="p-6">
        <button onClick={() => navigate("/")} className="btn btn-info">
          Go to home page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
