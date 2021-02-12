import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import Image from './components/Image'
import DropDown from './components/DropDown'
import TextBox from './components/TextBox'
import useApplicationData from './hooks/useApplicationData'

const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));
  return (
    <div className="App">
      <h1>Only Grans</h1>
      <Button />
    </div>
  );
}

export default App;
