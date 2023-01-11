import { configureStore } from "@reduxjs/toolkit";
import toggleMenu from "../features/toggleMenu";

export const store = configureStore({
  reducer: {
    toggleMenu,
  }
})

