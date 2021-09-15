import Dash from "./Dash";
import { useStateValue } from './StateProvider';
import Login from "./components/Auth/Login";
function App() {
  const [{ user }] = useStateValue();
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Dash />
      )}
    </>
  );
}

export default App;
