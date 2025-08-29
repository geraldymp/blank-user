import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import userStore from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    listUser: userStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();
