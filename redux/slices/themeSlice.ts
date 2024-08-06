import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReducerState {
  value: string | null;
}

const initialState: ReducerState = {
  value: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<"light" | "dark" | "system">) => {
      switch (action.payload) {
        case "light":
        case "dark":
          state.value = action.payload;
          break;
        case "system":
          state.value = null;
          break;
      }
    },
  },
});

export const { change } = themeSlice.actions;
export default themeSlice.reducer;
