// src/components/theme-provider.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    attribute?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    enableSystem = true,
    disableTransitionOnChange = false,
    attribute = "data-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        const localTheme = localStorage.getItem(storageKey) as Theme;

        if (localTheme) {
            setTheme(localTheme);
        }

        if (disableTransitionOnChange) {
            root.classList.add("[&_*]:!transition-none");
            return () => {
                root.classList.remove("[&_*]:!transition-none");
            };
        }
    }, [storageKey, disableTransitionOnChange]);

    useEffect(() => {
        const root = window.document.documentElement;

        if (theme === "system" && enableSystem) {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";

            root.classList.remove("light", "dark");
            root.classList.add(systemTheme);
            root.setAttribute(attribute, systemTheme);
            return;
        }

        root.classList.remove("light", "dark");
        root.classList.add(theme);
        root.setAttribute(attribute, theme);

        localStorage.setItem(storageKey, theme);
    }, [theme, enableSystem, attribute, storageKey]);

    return (
        <ThemeProviderContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};