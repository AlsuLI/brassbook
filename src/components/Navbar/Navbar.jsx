import React from "react";
import { Button } from "../../ui/Button/Button";
import s from "./Navbar.module.scss";
import trumpet from "./трубаtrumpet.png";
import notes from "./ноты (convert.io).webp"
export const Navbar = () => {
  return (
    <header>
      <div className={s.header__wrapper}>
        <div className={s.navigation__wrapper}>
          <p>BrassBook</p>
          <nav>
            {" "}
            <a href="">О проекте</a>
            <a href="">Команда</a>
            <a href="">Галерея</a>
            <a href="">Связаться с нами</a>
          </nav>
          <div>
            <Button variant="second">Войти</Button>
            <Button variant="second">Зарегистрироваться</Button>
          </div>
        </div>
        <div className={s.header__text__img__wrapper}>
          <div className={s.header__text}>
            {" "}
            <h1>Попробуй играть с нами</h1>
            <p>
              Попробуйте огромную библиотеку цифровых фонограмм и найдите свои
              любимые произведения.{" "}
            </p>
            <Button variant="yellow">Начать обучение</Button>
          </div>
          <img className={s.trumpet} src={trumpet} alt="trumpet" />
          <img className={s.notes} src={notes} alt="" />
        </div>
      </div>
    </header>
  );
};
