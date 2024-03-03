import React, { FC, useState } from "react";


interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Increment the click count when the component is clicked
    setClickCount(clickCount + 1);
  };

  return (
    <div onClick={handleClick}>
      <div>hello from home</div>
      Home Component - Clicked: {clickCount} times
    </div>
  );
};

export default Home;
