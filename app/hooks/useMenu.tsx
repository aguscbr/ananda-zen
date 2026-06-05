import { useState, useEffect } from "react";

export const useMenu = ({
  menuRef,
  mobileNavRef,
}: {
  menuRef: React.RefObject<HTMLButtonElement | null>;
  mobileNavRef: React.RefObject<HTMLElement | null>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && mobileNavRef.current) {
        const isClickOutsideMenu = !menuRef.current.contains(
          event.target as Node,
        );
        const isClickOutsideMobileNav = !mobileNavRef.current.contains(
          event.target as Node,
        );

        if (isClickOutsideMenu && isClickOutsideMobileNav) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, menuRef, mobileNavRef]);

  return {
    isOpen,
    toggleMenu,
  };
};
