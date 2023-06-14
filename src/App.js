import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import { useSelector } from 'react-redux';

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const entriesRedux = useSelector(state => state.entries);

  useEffect(() => {
    if(!isOpen && entryId) {
        const index = entries. findIndex(entry => entry.id === entryId);
        const newEntries = [...entries];
        newEntries[index].description = description;
        newEntries[index].value = value;
        newEntries[index].isExpense = isExpense;
        setEntries(newEntries);
        resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => {
      if(entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } 
      return (totalIncome += Number(entry.value));
    })
    setTotalBalance(totalIncome - totalExpense);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
  }, entries);

  function deleteEntry(id) {
      const result = entries.filter(entry => entry.id !== id);
      setEntries(result);
      resetEntry();
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length+1,
      description,
      value,
      isExpense
    });
    setEntries(result);
    resetEntry();
  }

  function editEntry(id) {

    if(id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }

  }

  return (
    <Container>

      <MainHeader title = "Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value={totalBalance} size="small" />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
      <MainHeader title="History" type ="h3" />

      <EntryLines entries={entriesRedux} deleteEntry={deleteEntry} editEntry={editEntry}/>

      <MainHeader title="Add new transaction" type ="h3" />
      <NewEntryForm addEntry={addEntry}         
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}/>

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description:"Work income",
    value:1000.00,
    isExpense:false
  },
  {
    id:2,
    description:"Water",
    value:10.00,
    isExpense:true
  },
  {
    id:3,
    description:"House Rent",
    value:500.00,
    isExpense:true
  },
  {
    id:4,
    description:"EB bill",
    value:50.00,
    isExpense:true
  }

]
