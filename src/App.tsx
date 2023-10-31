import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

import Modal from "./Modal";

function App() {
  const [data, setData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const apiUrl: string =
        "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1";

      const headers: HeadersInit = {
        "x-api-key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
        "x-tenant-key": "BLAASH1122",
      };

      const requestBody = {
        Index: 1,
        ContentType: [2],
        ProductCategory: [],
        PlayListCode: "XL7OXUUX_638264173348576143",
        IsTagged: false,
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const jsonData = await response.json();

        setData(jsonData?.data?.Feeds);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  const openModal = (feed: any) => {
    setSelectedFeed(feed);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("closing ");
    setSelectedFeed(null);
    setIsModalOpen(false);
  };

  return (
    <div className="main">
      <div className="flex-container">
        {data &&
          data.map((feed: any, index: number) => (
            <div key={index} onClick={() => openModal(index)}>
              <Video feed={feed} index={index} />
            </div>
          ))}

        {isModalOpen && selectedFeed && (
          <div className="Modal">
            <Modal slides={data} feed={selectedFeed} closeModal={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
