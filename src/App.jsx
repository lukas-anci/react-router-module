import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes" exact>
          <h1>quotes</h1>
        </Route>
        <Route path="/quotes/:quoteId">
          <h1>quoteID</h1>
        </Route>
        <Route path="/quotes/new-quote">
          <h1>new-quote</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

/*
domain.com/quotes
domain.com/quotes/:quoteId
domain.com/new-quote

*/
