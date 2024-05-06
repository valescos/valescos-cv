import { Dice1, Dice2, Dice3 } from "lucide-react";

function Hello() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-x-12 gap-y-12">
      <div>
        <h3 className="text-center md:text-left text-xl font-semibold mb-2 tracking-wide flex gap-2">
          <Dice1 />
          <span>Немного обо мне</span>
        </h3>
        <p>
          Более 12 лет я занимался вёрсткой и дизайном полиграфической продукции
          и однажды решил расширить компетенции WEB-технологиями. После
          небольшого погружения в вопрос стало понятно, что именно с
          Frontend-разработкой я хочу связать дальнейшую карьеру — настолько эта
          тема меня захватила.
        </p>
      </div>
      <div>
        <h3 className="text-center md:text-left text-xl font-semibold mb-2 tracking-wide flex gap-2">
          <Dice2 />
          <span>Предыдущий опыт</span>
        </h3>
        <div>
          <ul className="list-disc">
            <span>Может быть полезен следующим образом:</span>
            <li className="ml-4">
              Композиция, цвета, шрифты, векторная и растровая графики — это то
              чем я занимался всю жизнь.
            </li>
            <li className="ml-4">
              Уважение к срокам — работал только в периодических изданиях
              (еженедельных и ежемесячных).
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-center md:text-left text-xl font-semibold mb-2 tracking-wide flex gap-2">
          <Dice3 />
          <span>Чем могу быть полезен</span>
        </h3>
        <p>
          Хорошо разбираюсь в базовых технологиях и понятиях Frontend'а и хочу
          укрепить свои знания настоящей, живой практикой. Умею работать над
          собой, доводить поставленную задачу до конца, хорошо реагирую на
          конструктивную критику.
        </p>
      </div>
    </div>
  );
}

export default Hello;
