import { useState } from "react";

export const useToggleMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(!isOpen);

  return { closeMenu, isOpen, openMenu, toggleMenu };
};
