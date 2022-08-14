import { useState } from "react";

const useToggle = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => setStatus((status) => !status);

  return { status, setStatus, toggle };
};
export default useToggle;
