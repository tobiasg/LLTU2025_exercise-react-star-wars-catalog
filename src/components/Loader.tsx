import type { ReactElement } from "react";

export const Loader = (): ReactElement => {
  return (
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
  );
};
