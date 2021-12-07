import './App.css';
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header appName="Brand List"/>
        <List></List>
      </header>
    </div>
  );
}

export default App;
