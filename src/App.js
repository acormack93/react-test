import './App.css';
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <div className="App">
        <Header appName="Brand List"/>
        <List></List>
    </div>
  );
}

export default App;
