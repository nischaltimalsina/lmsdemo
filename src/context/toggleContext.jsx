import { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const ToggleContext = createContext({});

const { Provider } = ToggleContext;

const ToggleProvider = ({ children }) => {
  const {
    status: expand,
    setStatus: setExpand,
    toggle: toggleExpand,
  } = useToggle();

  return (
    <Provider value={{ expand, setExpand, toggleExpand }}>{children}</Provider>
  );
};
export default ToggleProvider;
