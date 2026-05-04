"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "hu" | "en";
const LangContext = createContext<{ lang: Lang; toggle: () => void }>({ lang: "hu", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("hu");
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === "hu" ? "en" : "hu") }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
