import { Fragment, useState } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const [list, setList] = useState(props.quotes);
  const [toggle, setToggle] = useState(false);

  const sortHandler = () => {
    const listCopy = [...props.quotes];

    const asc = listCopy.sort((a, b) =>
      a.author < b.author ? -1 : a.author > b.author ? 1 : 0
    );
    const desc = listCopy.sort((a, b) =>
      a.author < b.author ? 1 : a.author > b.author ? 1 : 0
    );
    console.log('asc', asc, 'desc', desc);

    setList(toggle ? asc : desc);
    setToggle((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>Sort Asc</button>
      </div>
      <ul className={classes.list}>
        {(list || []).map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
