import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { UserInput } from "./components/UserInput/UserInput";
import { List } from "./components/List/List";
import { Form } from "./components/Form/Form";
import { Body } from "./components/Body/Body";

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
      <Body>
        <h1>Cadastrar Usuário</h1>
        <Form>
            <UserInput/>
            <Button>Cadastrar</Button>
        </Form>
        <h1>Listar Usuários</h1>
        <List title={"Usuários Cadastrados"} list={lista}/>
      </Body>
    </>
  );
}

export default App;
