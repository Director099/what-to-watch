import React, {FC} from "react";

interface ICatalog {
  className?: string,
  title?: string,
  titleVisuallyHidden?: boolean,
  children?: React.ReactNode
}

export const Catalog: FC<ICatalog> = ({
  className = '',
  title,
  titleVisuallyHidden = true,
  children
}) => {
  return (
    <section className={`catalog ${className}`}>
      <h2 className={`catalog__title ${titleVisuallyHidden ? "visually-hidden" : ""}`}>{title}</h2>
      {children}
    </section>
  );
};
