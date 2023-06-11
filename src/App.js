import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {

  const [entries, setEntries] = useState(initialEntries)

  function deleteEntry(id) {
      const result = entries.filter(entry => entry.id !== id);
      setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length+1,
      description,
      value,
      isExpense
    });
    setEntries(result);
  }

  return (
    <Container>

      <MainHeader title = "Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value="2,550.90" size="small" />

      <DisplayBalances />
      <MainHeader title="History" type ="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title="Add new transaction" type ="h3" />
      <NewEntryForm addEntry={addEntry}/>

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description:"Work income",
    value:"$1000.00",
    isExpense:false
  },
  {
    id:2,
    description:"Water",
    value:"$10.00",
    isExpense:true
  },
  {
    id:3,
    description:"House Rent",
    value:"$500.00",
    isExpense:true
  },
  {
    id:4,
    description:"EB bill",
    value:"$50.00",
    isExpense:true
  }

]
