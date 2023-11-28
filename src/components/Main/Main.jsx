import React from "react";
import { Card } from "../../ui/Card/Card";
import trampeter from "../../ui/Card/assets/Rectangle 12.png";
import s from "./Main.module.scss";
import { Button } from "../../ui/Button/Button";
import trumbon from "./assets/9544027 1.png";
import lavr from "./assets/лауреат.svg";
import cup from "./assets/Group 1.svg";
import azamat from "./assets/Azamat.png";
import notes from "./assets/notes.svg"
import piano from "./assets/piano.png"
import pic from "./assets/Rectangle 17.png"
import wave from "./assets/Union.png"
export const Main = () => {
  return (
    <>
      <section>
        <div className={s.section__one__wrapper}>
          <div>
            <p className={s.text__28px}>
              <span>«BrassBook» - </span>
              образовательная платформа, созданная для учеников классов медных
              духовых и ударных инструментов детских музыкальных школ и школ
              искусств Российской Федерации.
            </p>
            <p className={s.text__24px}>
              Платформа состоит из музыкальных дидактических материалов,
              созданных преподавателями Санкт-Петербургской детской школы
              искусств имени С.С. Прокофьева Азаматом Анваровичем Латыповым и
              Татьяной Александровной Савиновой.
            </p>
          </div>
          <Card variant={trampeter}></Card>
        </div>
      </section>
      <section>
        <div className={s.section__one__wrapper}>
          <Card variant={trampeter}></Card>
          <div>
            <p className={s.text__24px}>
              С помощью наших фонограмм музыканты могут играть в домашних
              условиях в сопровождении качественного цифрового аккомпанемента.
            </p>
            <p className={s.text__24px}>
              Использование нашей разработки вовлекает исполнителей в активную
              форму музицирования, поэтому мы рекомендуем играть дома используя
              наше сопровождение на протяжении всего времени обучения, но на
              концертах исполнять произведения под аккомпанемент
              концертмейстера.
            </p>
            <Button variant="yellow">попробовать</Button>
          </div>
        </div>
      </section>
      <section>
        <div className={s.section__three__wrapper}>
          <img src={trumbon} alt="" />
          <div>
            {" "}
            <span>
              {" "}
              <img src={lavr} alt="" />
              <p className={s.text__20px}>
                Лауреат всероссийских и международных конкурсов
              </p>
            </span>
            <span>
              <img src={cup} alt="" />
              <p className={s.text__20px}>
                Победитель Всероссийского конкурса молодёжных проектов
                «Росмолодёжь»
              </p>
            </span>
            <Button variant="third">Подробнее</Button>
          </div>

          <Card variant={azamat}></Card>
        </div>
      </section>
      <section>
        <div className={s.section__four__wrapper}>
          <Card variant={azamat}></Card>

          <div>
            {" "}
            <span>
              {" "}
              <img src={notes} alt="" />
              <p className={s.text__20px}>
                Концертмейстер проекта «Река талантов» Санкт-Петербургского Дома
                музыки
              </p>
            </span>
            <span>
              <img src={lavr} alt="" />
              <p className={s.text__20px}>
                {" "}
                Лауреат всероссийских и международных конкурсов
              </p>
            </span>
            <Button variant="third">Подробнее</Button>
          </div>
          <img src={piano} alt="" />
        </div>
      </section>
      <section>
        <img className={s.wave} src={wave} alt="" />
        <div className={s.section__five__wrapper}>
          <p className={s.text__48px}>Узнай о нас больше!</p>
          <img  src={pic} alt="" />
        </div>
      </section>
    </>
  );
};
