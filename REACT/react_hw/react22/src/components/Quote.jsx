import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomQuote } from '../features/quote/quoteSlice';
import styles from './Quote.module.css';

const Quote = () => {
  const dispatch = useDispatch();
  const { text, author, source, status, error } = useSelector((state) => state.quote);

  // --- УДАЛЯЕМ или комментируем:
  // useEffect(() => {
  //   dispatch(fetchRandomQuote());
  // }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  let content;
  if (status === 'loading') {
    content = <p>Загрузка...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div>
        <p className={styles.text}>"{text}"</p>
        <p className={styles.author}>— {author}</p>
        <p className={styles.source}>
          (Источник: {source === 'zenquotes' ? 'ZenQuotes' : 'Quotable'})
        </p>
      </div>
    );
  } else if (status === 'failed') {
    content = <p>Ошибка: {error}</p>;
  } else {
    // Когда статус "idle" (пока не загружено)
    content = <p>Нажмите «Новая цитата»</p>;
  }

  return (
    <div className={styles.container}>
      {content}
      <button className={styles.button} onClick={handleNewQuote}>
        Новая цитата
      </button>
    </div>
  );
};

export default Quote;