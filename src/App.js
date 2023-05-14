import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title = "Budget"></MainHeader>
      <DisplayBalance title="Your Balance:" value="2,550.90" size="small" />

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
             <DisplayBalance title="Income:" value="1234.50" color="green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="Expenses:" value="700.50" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type ="h3" />
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>text1</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>text2</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>text1</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new transaction" type ="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
