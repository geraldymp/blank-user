import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListUser = createAsyncThunk("fetchListUser", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return json;
});
