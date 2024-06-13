import React, { useState } from "react";

function Videos() {
  let [load, set_load] = useState(0);
  let [images, set_images] = useState([]);
  let [videos, set_videos] = useState(null);

  let search = async () => {
    let vdt = document.querySelector("#video_name").value;

    let form_data = { tittle: vdt };

    let a = await fetch("http://localhost:8000/search", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form_data),
    });
    let imgs = await a.json();

    set_load(1);
    set_images([...imgs]);
  };

  let image_click = async (e) => {
    let a = e.target.accessKey;
    let form_data = { thmb: a.toString() };
    let b = await fetch("http://localhost:8000/get_video", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form_data),
    });
    let vid = await b.json();

    const videoBuffer = new Uint8Array(vid.data);
    const videoBlob = new Blob([videoBuffer], { type: "video/mp4" });
    const videoUrl = URL.createObjectURL(videoBlob);
    set_videos(videoUrl);
    set_load(2);
  };

  if (load == 2) {
    return (
      <div>
        <video width="400" controls>
          <source src={videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (load == 1) {
    return (
      <div>
        {[...images].map(function (image, index) {
          return (
            <img
              accessKey={image[1]}
              key={image[1]}
              src={`data:image/jpeg;base64,${image[0]}`}
              style={{ maxWidth: "200px", margin: "10px" }}
              onClick={image_click}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          id="video_name"
          style={{
            padding: "10px",
            fontSize: "18px",
            border: "none",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "500px",
            height: "40px",
            marginRight: "10px",
          }}
          placeholder="Search for videos"
        />

        <button
          onClick={search}
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default Videos;