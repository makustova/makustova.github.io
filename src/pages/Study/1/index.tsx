import * as React from "react";
import "./style.css";

export const Study1: React.FC = () => {
  return (
    <div>
      <h1>1</h1>

      <h2>Подготовительновое</h2>

      <ul>
        <li>
          Создать в корне проекта файл <code>reset.css</code> с{" "}
          <a href="https://gist.github.com/JeffCohen/3958673" target="_blank">
            таким
          </a>{" "}
          содержимым
        </li>
        <li>
          Добавить в <code>index.html</code> строку, которая будет подключать
          этот файл (точно так же, как подключается <code>index.css</code>)
        </li>
        <p>
          Это сброс стилей, который убирает все стили по умолчанию у браузера.
        </p>
        <li>
          Скачать{" "}
          <a href="https://www.sketch.com/downloads/mac/" target="_blank">
            Sketch
          </a>{" "}
          (бесплатный триал на 30 дней покатит)
        </li>
      </ul>

      <br />
      <br />

      <h2>Вёрстка</h2>
      <p>
        Попробуй начать верстать макет из тг, начинай с любого момента где хотя
        бы примерно понимаешь что делать.
      </p>
      <p>Что может пригодиться:</p>
      <ul>
        <li>
          <a
            href="https://www.w3schools.com/html/html_images.asp"
            target="_blank"
          >
            Как добавлять картиночки
          </a>{" "}
          -- нужно сохранить картинку из макета и добавить её в проект
        </li>
        <li>
          <a href="https://www.w3schools.com/cssref/pr_font_font-family.php">
            Шрифты
          </a>{" "}
          -- посмотреть на макете и подключить на страницу такие же при помощи
          стиля <code>font-family</code> в css
        </li>
        <li>
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
            Флексы!
          </a>{" "}
          Сложная штука, но очень нужная, почитай про них, не обязательно сразу
          всё запоминать -- на занятиях ещё разберём
        </li>
      </ul>

      <br />
      <br />

      <p>
        Нужно использовать всё что мы уже прошли + материалы по ссылкам выше +
        гуглить и/или спрашивать у меня.
      </p>
      <p>
        На этом макете научимся верстать, и когда закончим -- перейдём к JS.
      </p>
    </div>
  );
};
