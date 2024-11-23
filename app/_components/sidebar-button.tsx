"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChartLine } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const SidebarButton = ({ title, icon, href }: SidebarButtonProps) => {
  const pathName = usePathname();

  return (
    <div>
      <Button
        className="justify-start w-full"
        variant={pathName === `${href}` ? "secondary" : "ghost"}
        asChild
      >
        <Link href={href}>
          {icon}
          {title}
        </Link>
      </Button>
    </div>
  );
};

export default SidebarButton;
