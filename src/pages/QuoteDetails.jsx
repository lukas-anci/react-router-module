import { Route, useParams } from 'react-router-dom';

const QuoteDetails = () => {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote details page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/:comment`}>
        <h3>Comments test</h3>
      </Route>
    </>
  );
};

export default QuoteDetails;

// sukurti toki route su dinamine dalimi http://localhost:3000/quotes/some-quote/comment
