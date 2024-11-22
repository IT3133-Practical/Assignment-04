import "../assets/css/GameStyles.css";

export default function Game() {
    const [targetAnimal, setTargetAnimal] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    getRandomAnimal();
  }, []);

  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setTargetAnimal(animals[randomIndex]);
    setResult("");
  };

  return (
    <><div className="game-wrapper">
          <div className="header">
              <h1>ANIMAL MATCHING GAME</h1>
          </div>
      </div><div className="game-container">
              <div className="column result-column ">
                  <div className="animal-grid-header"><h2>Result</h2></div>
                  <span style={{ color: result === "WIN" ? "orange" : "orange" }}>
                      {result}
                  </span>
              </div>


              <div className="column name-column">
                  <div className="animal-grid-header"><h2>Animal Name</h2></div>
                  {targetAnimal ? targetAnimal.name.toUpperCase() : "Loading..."}
              </div>
          </div>
    </>

  );
};


