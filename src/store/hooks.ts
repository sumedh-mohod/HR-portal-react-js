import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";

// Hook for useDispatch to be used throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook for useSelector to be used throughout the app
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
