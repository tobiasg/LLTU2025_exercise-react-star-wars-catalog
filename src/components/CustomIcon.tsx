import type { ReactElement } from "react";

interface ICustomIconProps {
  icon: string;
  large?: true;
}

export const CustomIcon = ({ icon, large }: ICustomIconProps): ReactElement => {
  const classses: string[] = ["material-symbols-outlined", "custom-icon"];
  if (large) classses.push("large");
  return <span className={classses.join(" ")}>{icon}</span>;
};
