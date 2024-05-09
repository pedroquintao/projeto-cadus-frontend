import { Button } from "./components/Button/Button";
import { UserInput } from "./components/UserInput/UserInput";

function App() {
  return (
    <div style={{
      // display: 'flex',
      height: '50px',
      width: '500px',
      // margin: 'auto',
      backgroundColor: 'red'
    }}>
        <UserInput />
        <Button>Ok</Button>
    </div>
  );
}

export default App;
