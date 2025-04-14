import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронное действие, которое сначала пробует ZenQuotes, а при ошибке - Quotable
export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async () => {
    try {
      // 1) Пытаемся получить цитату из ZenQuotes
      const responseZen = await axios.get('https://zenquotes.io/api/random');
      // У ZenQuotes массив из одного объекта, берем [0]
      return {
        source: 'zenquotes',
        data: responseZen.data[0],
      };
    } catch (error1) {
      // 2) Если с ZenQuotes что-то не так — пробуем Quotable
      try {
        const responseQuotable = await axios.get('https://api.quotable.io/random');
        return {
          source: 'quotable',
          data: responseQuotable.data,
        };
      } catch (error2) {
        // 3) Если упал и Quotable, выбрасываем итоговую ошибку
        throw new Error(
          `Не удалось получить цитату ни из ZenQuotes, ни из Quotable: ${error2.message}`
        );
      }
    }
  }
);

const initialState = {
  text: '',
  author: '',
  source: '',    // Какой API дал цитату
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Запрос начался
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Запрос успешно завершён
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.source = action.payload.source;

        if (action.payload.source === 'zenquotes') {
          // У ZenQuotes поля q (цитата) и a (автор)
          state.text = action.payload.data.q;
          state.author = action.payload.data.a;
        } else {
          // У Quotable поля content (цитата) и author (автор)
          state.text = action.payload.data.content;
          state.author = action.payload.data.author;
        }
      })
      // Запрос завершился ошибкой
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
