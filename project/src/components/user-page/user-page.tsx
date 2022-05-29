import React, {FC} from "react";

interface IUserPage {
  children?: React.ReactNode
}

export const UserPage: FC<IUserPage> = ({children}) => {
  return (
    <div className="user-page">
      {children}
    </div>
  );
};
