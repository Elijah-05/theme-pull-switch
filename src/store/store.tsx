import { atom } from "jotai";

export const theme = atom<"light" | "dark" | string>("light");
