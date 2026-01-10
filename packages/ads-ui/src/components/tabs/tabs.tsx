import { createContext, type ReactNode, useContext, useState } from "react";

import * as s from "./tabs.css";

interface TabsContextValue {
  value: string;
  setValue: (nextValue: string) => void;
  variant: "viewer" | "notice";
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs 컴포넌트는 <Tabs> 내부에서만 사용할 수 있습니다.");
  }
  return context;
};

interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: "viewer" | "notice";
}

const Tabs = ({
  children,
  defaultValue,
  onValueChange,
  variant = "viewer",
}: TabsProps) => {
  const [value, setValue] = useState(defaultValue ?? "");

  const handleValueChange = (nextValue: string) => {
    setValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <TabsContext.Provider value={{ value, setValue: handleValueChange, variant }}>
      <div className={s.root}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabsListProps {
  children: ReactNode;
}

const TabsList = ({ children }: TabsListProps) => {
  const { variant } = useTabsContext();
  return <div className={s.list({ variant })}>{children}</div>;
};

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { value: selectedValue, setValue, variant } = useTabsContext();

  const isSelected = selectedValue === value;

  const handleClick = () => {
    setValue(value);
  };

  return (
    <button
      type="button"
      className={s.trigger({ variant })}
      aria-selected={isSelected}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;

export default Tabs;
