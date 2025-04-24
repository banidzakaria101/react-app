import Alert from "./components/alert";

//import ListGroup from './components/ListGroup'
function App() {

//  let items = [
//      'New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'
//    ];
    
//    const handleSelectItem = (item: string) =>  {
//      console.log(item);
//    };
  return <div className="alert alert-primary">
    <Alert>
      Hello <span>World</span>
    </Alert>
    </div>;
}

export default App;