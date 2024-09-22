import { createContext, useState, useContext, ReactNode } from "react";

interface TotalCostContextProps {
    totalCost: number;
    setTotalCost: (value: number) => void;
}

const TotalCostContext = createContext<TotalCostContextProps | undefined>(undefined);

export const TotalCostProvider = ({ children }: { children: ReactNode }) => {
    const [totalCost, setTotalCost] = useState<number>(0);

    return (
        <TotalCostContext.Provider value={{ totalCost, setTotalCost }}>
            {children}
        </TotalCostContext.Provider>
    );
};

export const useTotalCost = () => {
    const context = useContext(TotalCostContext);
    if (!context) {
        throw new Error("useTotalCost must be used within a TotalCostProvider");
    }
    return context;
};
