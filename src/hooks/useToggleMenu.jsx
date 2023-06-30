import { useState } from "react";

export const useToggleMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const toggle = () => setOpen(!isOpen);

  return { close, isOpen, open, toggle };
};
