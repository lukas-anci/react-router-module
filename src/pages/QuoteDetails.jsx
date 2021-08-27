import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import { DUMMY_QUOTES } from './AllQuotes';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const QuoteDetails = () => {
  const { quoteId } = useParams();
  const objToFind = DUMMY_QUOTES.find((item) => item.id === quoteId);

  console.log('objToFind', objToFind);
  return (
    <>
      {!objToFind ? (
        <h1>There are no quotes</h1>
      ) : (
        <>
          <HighlightedQuote text={objToFind.text} author={objToFind.author} />
          <Route path={`/quotes/${quoteId}/:comment`}>
            <Comments />
          </Route>
        </>
      )}
    </>
  );
};

export default QuoteDetails;

// sukurti toki route su dinamine dalimi http://localhost:3000/quotes/some-quote/comment
