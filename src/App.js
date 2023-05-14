import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title = "Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value="2,550.90" size="small" />

      <DisplayBalances />
      <MainHeader title="History" type ="h3" />
     
     <EntryLine description="Income1" value="$100.00" isExpense/>
     <EntryLine description="Expense1" value="$20.00" />
     <EntryLine description="Income2" value="$30.00" isExpense/>

      <MainHeader title="Add new transaction" type ="h3" />
      <NewEntryForm />
      
    </Container>
  );
}

export default App;
