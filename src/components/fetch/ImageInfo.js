import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./ImageInfo.css";

const ImageInfo = (match) => {
  const [data, setData] = useState([]);
  console.log(match.id, "match", 2131231231231231231231232);
  const fetchImage = useCallback(async () => {
    try {
      const res = await fetch(`https://picsum.photos/v2/list/?id=${match.id}`);
      const resData = await res.json();

      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      console.log(match, "match");
      console.log(match, "match");
      console.log(resData);

      setData(resData);
    } catch (error) {
      console.log(error);
    }
  }, [match]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <div>
      {console.log(data)}
      {data.find((obj) => {
        return (
          <div className="image-container" key={obj.id}>
            <div id="divId">
              <img
                id="imgId"
                className="image-info"
                src={obj.download_url}
                alt=""
              />
              <p>{obj.author}</p>
            </div>
          </div>
        );
      })}
      )
      <div>
        <Link to={`/`}>FEATURED IMAGES</Link>
      </div>
    </div>
  );
};

export default ImageInfo;
