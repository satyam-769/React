// import logo from './logo.svg';
import './App.css';
// import Jsx from './Jsx';
// import Dom from './Dom';
// import StatetoC from './StatetoC';
// import DataFlow from './DataFlow';
// import Toggle from './Toggle'
// import Greeting from './Conditional'
// import LoginControl from './Conditional'
// import Mailbox from './InlineCondition'
// import Page from './PreventComRen7'
// import ListItem from './IncKeyUsage8'
// import NumberList from './CorKeyUsage8'
// import Blog from './KeyUnique'
// import NameForm from './ControlComponent9'
// import Reservation from './HandMultiInput9'
// import Calculator from './LiftingState10'
// import Calculator from './LiftingStateUp10'
// import LiftingStateUp from './LiftingStateUp'
import Composition11 from './Composition11'

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Jsx /> */}
        {/* <Dom date={new Date()} /> */}
        {/* <StatetoC /> */}
        {/* <DataFlow /> */}
        {/* <Toggle /> */}
        {/* <Greeting isLoggedIn={true} /> */}
        {/* <LoginControl /> */}


        {/* <Mailbox  unreadMessages ={['React', '2','3', 'Re:Re: React']} /> */}
        {/* <Page /> */}
        {/* <ListItem numbers={numbers}/> */}
        {/* <NumberList numbers={numbers}/> */}
        {/* <Blog posts={posts} /> */}
        {/* <NameForm /> */}
        {/* <Reservation/> */}

        {/* <Calculator/> */}
        {/* <Calculator /> */}
        {/* <LiftingStateUp/> */}

        <Composition11/>
        <Composition11/>
      </header>
    </div>
  );
}

export default App;
