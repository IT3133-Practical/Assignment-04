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
    <div className="game-wrapper">
      <div className="header">
        <h1>ANIMAL MATCHING GAME</h1>
      </div>
    </div>
  );
};


