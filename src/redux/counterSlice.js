import { createSlice } from "@reduxjs/toolkit";

const initialState = { counterValue: 0 };

//定義Slice物件↴

const counterSlice = createSlice({
  name: 'counter',                         // 1.Slice名稱
  initialState,                            // 2.狀態變數初始值
  reducers: {                              // 3.reducers：內含action函數
    increaseOne: (state) => {
      state.counterValue++;
    },
    decreaseOne: (state) => {
      state.counterValue--;
    }
  }
});

export const selectCounter = (state) => state.counter.counterValue; //一般輸出(狀態變數counterValue)
export const { increaseOne, decreaseOne } = counterSlice.actions; //一般輸出
export default counterSlice.reducer;  //唯一的標準輸出(default物件)