import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

const Section = ({ children, className, id, darker = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 relative overflow-hidden",
        darker ? "bg-black" : "bg-[#050505]",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
