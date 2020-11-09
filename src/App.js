import logo from './logo.svg';
import NewPersonCard from "./components/newPersonCard";
import './App.css';

function App() {
  return (
    <div>
      <NewPersonCard
        lastName={"Trump"}
        firstName={"Donald"}
        age={77}
        hair={"Orange"} />
      <NewPersonCard
        lastName={"Biden"}
        firstName={"Joe"}
        age={78}
        hair={"grey"} />
      <NewPersonCard
        lastName={"Bernie"}
        firstName={"Sanders"}
        age={79}
        hair={"grey"} />
      <NewPersonCard
        lastName={"Robinson"}
        firstName={"Joel"}
        age={53}
        hair={"dark brown"} />

    </div>
  )
}

export default App;
