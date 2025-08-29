import { fetchListUser } from "@/hooks/fetchListUser";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { list: [] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchListUser.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default userSlice.reducer;
