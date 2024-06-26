import bg from "../assets/bg1.jpg";

function Background() {
  return (
    <div>
      <img src={bg} className="App-bg" alt="background" />
      <div className="widgets"></div>
    </div>
  );
}

export default Background;
