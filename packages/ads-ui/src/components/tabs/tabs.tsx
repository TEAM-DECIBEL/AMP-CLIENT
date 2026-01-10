import type { ReactNode } from "react";
import * as s from "./tabs.css"

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <div className={s.root}>{children}</div>;
}

const TabsList = ({ children }: { children: ReactNode }) => {
  return <div className={s.list}>{children}</div>;
};

Tabs.List = TabsList;

export default Tabs;