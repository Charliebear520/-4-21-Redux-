import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice' //內容為counterSlice.reducer

//利用configureStore函數將counterReducer輸出為最終的store↴

const store = configureStore({
    reducer: {
      counter: counterReducer,  //reducer內的counter變數屬於狀態變數名稱，要與slice設定的name相同
    },
    devTools: process.env.NODE_ENV !== 'production'
  });

  export default store;