import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        disabled: false,
    },
    // 修改狀態的方法
    reducers: {
        increment(state) {
            if (!state.disabled) {
                state.count += 1;
            }
        },
        clear(state) {
            state.count = 0;
        },
        toggleDisabled(state) {
            state.disabled = !state.disabled;
        },
    },
});

export const { increment, clear, toggleDisabled } = counterStore.actions;

export default counterStore.reducer;
