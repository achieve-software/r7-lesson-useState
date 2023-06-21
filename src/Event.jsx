const Event = () => {
  const handleClick = () => {
    console.log("hello world");
  };
  const handleReset = (text) => {
    console.log(text);
  };

  return (
    <div>
      <h1>Hello Hw</h1>
      {/* 1.yöntem */}
      <button onClick={handleClick}>click me</button>  
      {/* 2.yöntem */}
      <button onClick={() => handleReset("merhaba")}>Click me</button>
      <br />
      {/* 3.yöntem */}
      <button
        onClick={(e) => {
          console.log("merh hw");
        }}
      >
        clickme3
      </button>
      <button>clickme4</button>
    </div>
  );
};

export default Event;
