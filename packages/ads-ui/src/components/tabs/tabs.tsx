import type { ReactNode } from "react";

import * as s from "./tabs.css"

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <div className={s.root}>{children}</div>;
}

interface TabsListProps {
  children: ReactNode;
}

const TabsList = ({ children }: TabsListProps) => {
  return <div className={s.list}>{children}</div>;
};

interface TabsTriggerProps {
  children: ReactNode;
}

const TabsTrigger = ({ children }: TabsTriggerProps) => {
  return (
    <button type="button" className={s.trigger}>
      {children}
    </button>
  );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;

export default Tabs;