import React from "react";
import { AccordionProps, AccordionHeaderProps, AccordionBodyProps } from "@/contexts/Types";

export const Accordion: React.FC<AccordionProps> = ({ children, open, className, ...props }) => {
  return (
    <div className={`${className} ${open ? 'open' : ''}`} {...props}>
      {children}
    </div>
  );
};

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children, onClick, className, ...props }) => {
  return (
    <div className={className} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export const AccordionBody: React.FC<AccordionBodyProps> = ({ children, className, open }) => {
  return (
    <div className={`${className} ${open ? 'block' : 'hidden'}`}>
      {children}
    </div>
  );
};
