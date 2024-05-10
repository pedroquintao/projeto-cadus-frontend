import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { UserInput } from "./components/UserInput/UserInput";
import { List } from "./components/List/List";

function App() {

  const lista = [
    {
        id: 1,
        name: "Naruto"
    },
    {
        id: 2,
        name: "Boruto"
    },
    {
        id: 3,
        name: "Charuto"
    }
]


  return (
    <>
      <Header/>
      <Form>
          <UserInput/>
          <Button>Cadastrar</Button>
      </Form>
      <List title={"Usuários Cadastrados"} list={lista}/>
    </>
  );
}

export default App;
