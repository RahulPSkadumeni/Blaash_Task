import React, { useEffect, useState } from "react";
import "./App.css";
import "./Video.css";
import BackgroundVideo from "./BackgroundVideo";
interface SliderVideoProps {
  id: string;
  volumeMute: boolean;
}

interface ApiResponseData {
  data: {
    Url: string;
  }[];
}

const SliderVideo: React.FC<SliderVideoProps> = (props) => {
  const EngagementPostId = props.id;
  console.log(EngagementPostId, "engageId");
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getPostContent?eid=${EngagementPostId}`;
      const headers: HeadersInit = {
        "x-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
        "x-tenant-key": "BLAASH1122",
      };

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData: ApiResponseData = await response.json();

        if (responseData.data && responseData.data.length > 0) {
          const firstDataItem = responseData.data[0];
          const videoUrl = firstDataItem.Url;

          setUrl(videoUrl);

          // You can handle the data here
          console.log("URL from API:", videoUrl);
        } else {
          console.error("No data found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [EngagementPostId]);

  return (
    <div>
      {url && (
        <div className="reels-video">
          <BackgroundVideo volumeMute={props.volumeMute} url={url} />
        </div>
      )}
    </div>
  );
};

export default SliderVideo;
