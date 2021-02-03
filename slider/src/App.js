import { useEffect, useState } from 'react';
import data from './data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
function App() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < 0) {
      setIndex(data.length - 1)
    }
    if (index > data.length - 1) {
      setIndex(0)
    }
  }, [index])
  return (
    <div className="App">
      <div className="main">
        <div className="slider">
          <FiChevronRight
            className="next"
            onClick={() => setIndex(index + 1)}
          />
          {data.map((item, itemIndex) => {
            let position = 'nextSlide';
            if (itemIndex === index) {
              position = 'activeSlide';
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === data.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <div className={`slider-item ${position}`}
                key={itemIndex}
              >
                <img src={item.image} alt="" />
                <h3 className="slider-item__title">
                  {item.title}
                </h3>
                <p className="slider-item__quote">
                  {item.quote}
                </p>
              </div>
            )
          })}
          <FiChevronLeft
            className="prev"
            onClick={() => setIndex(index - 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
