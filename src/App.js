import Dash from "./Dash";
import { useStateValue } from './StateProvider';
import Login from "./components/Auth/Login";
function App() {
  const [{ user }] = useStateValue();
  return (
    ///user does not exist then login component shows up else dashboard component will show up.
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
