import React, {FC} from 'react';
import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";
import {UserPage} from "../../components/user-page/user-page";
import {FieldText} from "../../components/field-text/field-text";

export const SignIn: FC = () => {
  return (
    <UserPage>
      <Header
        imgAvatar='img/avatar.jpg'
        mainTitle="Sign in"
        className="user-page__head"
      />
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <FieldText
              text="Email address"
              name="user-email"
              type="email"
            />
            <FieldText
              text="Password"
              name="user-password"
              type="password"
            />
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </UserPage>
  )
};
