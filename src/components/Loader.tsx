import type { ReactElement } from "react";

interface ILoaderProps {
  small?: true;
}

export const Loader = ({ small }: ILoaderProps): ReactElement => {
  const classes: string[] = ["loader-wrapper"];

  if (small) {
    classes.push("small");
  }

  return (
    <div className={classes.join(" ")}>
      <div className="loader" />
    </div>
  );
};
