// Carousel.js
import React, { useState } from "react";
// import './Carousel.css'; // Assuming you have a CSS file for styling

const Slider = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Switzerland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/qCkd9jS/img1.jpg",
    },
    {
      id: 2,
      name: "Finland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/jrRb11q/img2.jpg",
    },
    {
      id: 3,
      name: "Iceland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/NSwVv8D/img3.jpg",
    },
    {
      id: 4,
      name: "Australia",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    },
    {
      id: 5,
      name: "Netherlands",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/jTQfmTq/img5.jpg",
    },
    {
      id: 6,
      name: "Ireland",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      imageUrl: "https://i.ibb.co/RNkk6L0/img6.jpg",
    },
  ]);

  const handleNext = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      return newItems;
    });
  };

  return (
    <div className="container">
      <div className="slide">
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.description}</div>
              <button>
                <i className="fa-solid fa-eye"></i> See More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
