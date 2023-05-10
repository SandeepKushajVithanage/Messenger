"use client";

import clsx from "clsx";
import Link from "next/link";

type Props = {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
};

const DesktopItem = ({ label, icon: Icon, href, onClick, active }: Props) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick}>
      <Link href={href} className={clsx()}>
        <Icon className="h-6 w-6 shrink-0" />
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
