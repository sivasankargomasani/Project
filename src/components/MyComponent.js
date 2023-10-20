import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MyComponent = () => {
  const data = [
    {
      images: [
        'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
        'https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg',
        'https://cdn.pixabay.com/photo/2021/08/02/00/10/flowers-6515538_640.jpg',
        'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
      ],
      text: 'Efficiently',
    },
    {
      images: [
        'https://cdn.pixabay.com/photo/2021/08/02/00/10/flowers-6515538_640.jpg',
        'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
        'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
        'https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg',
      ],
      text: 'Fastly',
    },
    {
      images: [
        'https://cdn.pixabay.com/photo/2021/08/02/00/10/flowers-6515538_640.jpg',
        'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
        'https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg',
        'https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg',
      ],
      text: 'With ease',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change data every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  // Custom CSS styles for the button and text
  const customStyles = {
    button: {
      backgroundColor: 'red', // Set the background color to red
      color: 'white', // Set the text color to white
      border: '2px solid orange', // Add an orange border to the button
    },
    text: {
      color: 'red', // Set the text color to red
    },
  };

  return (
    <div className="container">
      <h1>WELCOME TO SANJO INFOTECH</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="left-side">
            <table className="table table-bordered">
              <tbody>
                {data[currentIndex].images.map((image, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={image}
                        alt={`Image ${currentIndex + 1}`}
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side">
            <h2>
              In today's<br />
              Competitive<br />
              landscape<br />
              Grow your <br />
              Business{' '}
              <span style={customStyles.text}>{data[currentIndex].text}</span>
            </h2>
            <button className="btn btn-primary" style={customStyles.button}>
              Reach Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
