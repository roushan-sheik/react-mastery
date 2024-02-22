import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-4xl font-bold ">About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo enim
        error exercitationem deserunt, sit consectetur, eos minus ducimus
        asperiores blanditiis laborum incidunt corrupti neque ex voluptate
        saepe! Eos eveniet quibusdam iste natus corporis eligendi saepe
        voluptatum totam porro nemo!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo enim
        error exercitationem deserunt, sit consectetur, eos minus ducimus
        asperiores blanditiis laborum incidunt corrupti neque ex voluptate
        saepe! Eos eveniet quibusdam iste natus corporis eligendi saepe
        voluptatum totam porro nemo!
      </p>
      <div className="p-6">
        <button onClick={() => navigate("/")} className="btn btn-info">
          Go to home page
        </button>
      </div>
    </div>
  );
};

export default About;
