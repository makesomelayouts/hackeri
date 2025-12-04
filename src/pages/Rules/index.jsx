// src/pages/Rules/Rules.jsx
import React from "react";
import cards from "@pages/Rules/assets/cards.png";
import nishtyak1 from "@pages/Rules/assets/nishtyak1.png";
import nishtyak2 from "@pages/Rules/assets/nishtyak2.png";
import nishtyak3 from "@pages/Rules/assets/nishtyak3.png";
import nishtyak4 from "@pages/Rules/assets/nishtyak4.png";
import row_sites from "@pages/Rules/assets/row_sites.png";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import character1 from "@pages/Rules/assets/character1.png";
import character2 from "@pages/Rules/assets/character2.png";
import character3 from "@pages/Rules/assets/character3.png";
import character4 from "@pages/Rules/assets/character4.png";
import character5 from "@pages/Rules/assets/character5.png";
import new_level from "@pages/Rules/assets/new_level.png";
import ready_to_charg from "@pages/Rules/assets/ready_to_charg.png";
import sites_wth_coins from "@pages/Rules/assets/sites_wth_coins.png";
import big_trap from "@pages/Rules/assets/big_trap.png";
import bosses from "@pages/Rules/assets/bosses.png";
import distruct from "@pages/Rules/assets/distruct.png";
import end from "@pages/Rules/assets/end.png";
import room_wth_trbls1 from "@pages/Rules/assets/room_wth_trbls1.png";
import room_wth_trbls2 from "@pages/Rules/assets/room_wth_trbls2.png";
import room_wth_trbls3 from "@pages/Rules/assets/room_wth_trbls3.png";
import trap1 from "@pages/Rules/assets/trap1.png";
import trap2 from "@pages/Rules/assets/trap2.png";
import trap3 from "@pages/Rules/assets/trap3.png";
import trap4 from "@pages/Rules/assets/trap4.png";
import trap5 from "@pages/Rules/assets/trap5.png";

/**
 * Rules.jsx
 * Полностью адаптивный компонент страницы правил (React + Tailwind).
 *
 * Комментарии:
 * - Я использовал гибкие контейнеры (flex / grid / flex-wrap) и адаптивные брейкпоинты (sm/md/lg).
 * - Все ширины картинок ограничены через w-full + max-w-*, чтобы картинки никогда не вылезали.
 * - Для списка с картинками справа применён grid (1fr auto) — текст будет переноситься под картинку на узких экранах.
 *
 * Просто положи файл в проект и используй как раньше.
 */

function Rules() {
  return (
    <>
      <section className="snap-start flex flex-col bg-[#0c0014] min-h-screen text-white">
        <Header />

        {/* Top container for the main content */}
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* ====== RULES INTRO ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1 min-w-0">
                  <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                    Правила игры
                  </h2>
                  <p className="leading-relaxed text-base md:text-lg text-gray-200">
                    В каждой вкладке игроки будут разыгрывать одну из своих 5 карт
                    реакций, которые позволяют получить коины, победить трудности
                    или запустить трапу. В карте памяти игроки могут получить
                    ништяки, которые позволяют воспользоваться специальной
                    однoразовой способностью при прохождении.
                    <br />
                    <br />
                    В конце уровня игроки отдыхают и возвращают потраченные
                    карты силы обратно в руку. После того как будут пройдены все
                    пять вкладок, игрок, обладающий наибольшим количеством коинов
                    и зарядов, побеждает в игре. Игроки, потерявшие все заряды,
                    до конца игры считаются выбывшими и выиграть не могут.
                  </p>
                </div>

                <div className="flex-1 min-w-0 flex justify-center items-start">
                  <img
                    src={cards}
                    alt="Карты игры"
                    className="w-full max-w-[450px] rounded-lg object-contain"
                  />
                </div>
              </div>
            </section>

            {/* ====== PREPARE GAME ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Подготовка к игре
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
                <div className="lg:col-span-2 min-w-0">
                  <p className="leading-relaxed text-base md:text-lg text-gray-200">
                    Подготовьте карты сайтов.
                    <br />
                    <br />
                    Возьмите все 30 карт сайтов, перемешайте их и создайте колоду.
                    Случайным образом выберите из колоды 6 карт сайтов и не глядя
                    уберите их в коробку. Они больше не понадобятся. Переверните
                    верхние 12 карт колоды лицом вверх и положите их обратно на
                    верх колоды. Вновь перемешайте всю колоду. При этом следите,
                    чтобы карты, лежащие лицом вверх, случайно не перевернулись.
                    Затем не глядя положите одну случайную карту вируса рубашкой
                    вверх под низ колоды.
                  </p>
                </div>

                <div className="min-w-0 flex justify-center">
                </div>
                {/* ПОДГОТОВЬТЕ РЯД САЙТОВ */}
                <div className="flex flex-wrap items-start justify-between gap-10">

                {/* ТЕКСТОВЫЙ БЛОК */}
                    <div className="flex-1 min-w-full sm:min-w-[300px] sm:max-w-[600px]">
                        <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                        Подготовьте ряд сайтов
                        </h2>

                        <p className="leading-relaxed text-base md:text-lg">
                        Положите карту загрузки наверх перемешанной колоды карт сайтов. Теперь
                        возьмите верхние 6 карт из этой колоды (5 карт подземелий и 1 дверь,
                        которую вы только что добавили) и положите их в отдельную стопку с
                        картой загрузки сверху.
                        <br />
                        <br />
                        Проведите это действие ещё 4 раза, чтобы в итоге было 5 стопок по 5
                        карт каждая, на каждой из которых лежит карта загрузки. Расположите
                        эти стопки в один ряд — это будущие сайты. После открытия каждой
                        стопки игроки переходят к следующей и продолжают игру до конца.
                        </p>
                    </div>

                    {/* КАРТИНКА */}
                    <div className="flex min-w-full sm:min-w-[250px] flex justify-center">
                        <img
                        src={row_sites}
                        alt="Ряд сайтов"
                        className="w-full max-w-[1000px] rounded-lg object-contain"
                        />
                    </div>

                </div>

              </div>
            </section>

{/* ====== NISHTYAKS ====== */}
<section className="bg-[#0b0b14] p-6 rounded-2xl">
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
    
    {/* ТЕКСТ */}
    <div className="lg:col-span-2 min-w-0">
      <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
        Подготовьте ништяки
      </h2>
      <p className="leading-relaxed text-base md:text-lg text-gray-200">
        Отсортируйте карты ништяков по типу. Положите получившиеся стопки карт
        каждого типа лицом вверх недалеко от ряда сайтов.
      </p>
    </div>

    {/* КАРТИНКИ */}
    <div className="min-w-0 flex flex-row flex-wrap justify-center gap-4">
      {[
        nishtyak1,
        nishtyak2,
        nishtyak3,
        nishtyak4
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Карты ништяков ${i + 1}`}
          className="w-28 sm:w-32 md:w-36 rounded-lg object-contain"
        />
      ))}
    </div>

  </div>
</section>
            {/* ====== CHARACTERS ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Выберите персонажей
              </h2>
              <p className="leading-relaxed text-base md:text-lg text-gray-200 mb-6">
                Возьмите 6 карт персонажей вслепую и перемешайте их. Сдайте
                каждому игроку по одной случайной карте. Получившиеся карты —
                ваши персонажи.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {[character1, character2, character3, character4, character5].map(
                  (src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Персонаж ${i + 1}`}
                      className="w-[110px] sm:w-[130px] md:w-[150px] rounded-lg object-contain"
                    />
                  )
                )}
              </div>
            </section>

            {/* ====== TOKENS ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div className="min-w-0">
                  <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                    Подготовьте жетоны заряда и коинов
                  </h2>
                  <p className="leading-relaxed text-base md:text-lg text-gray-200">
                    Положите карту персонажа перед собой лицом вверх на месте
                    персонажа. Разместите на пустых слотах меню столько жетонов
                    заряда и коинов, сколько указано на карте персонажа.
                  </p>
                </div>

                <div className="min-w-0 flex justify-center">
                  <img
                    src={ready_to_charg}
                    alt="Жетоны и персонаж"
                    className="w-full max-w-[400px] rounded-lg object-contain"
                  />
                </div>
              </div>
            </section>

            {/* ====== TAKE CARDS ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <div className="min-w-0">
                  <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                    Возьмите карты реакций и карты ништяков
                  </h2>
                  <p className="leading-relaxed text-base md:text-lg text-gray-200">
                    Каждый игрок берёт в руку набор карт реакций, пронумерованных
                    от 1 до 5. Также он берёт случайные карты ништяков, указанные
                    на его карте персонажа. Не показывайте свои карты реакций
                    другим игрокам.
                  </p>
                </div>

                <div className="min-w-0 flex flex-wrap justify-center gap-4">
                  <img
                    src={cards}
                    alt="Карты реакций"
                    className="w-full max-w-[310px] rounded-lg object-contain"
                  />
                  <img
                    src={nishtyak4}
                    alt="Карты ништяков пример"
                    className="w-full max-w-[210px] rounded-lg object-contain"
                  />
                </div>
              </div>
            </section>

            {/* ====== COINS & INJURIES ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Коины и ранения
              </h2>
              <p className="leading-relaxed text-base md:text-lg text-gray-200">
                В течение игры жетоны коинов используются для того, чтобы
                следить за количеством коинов персонажа, а жетоны заряда
                используются для того, чтобы следить за количеством зарядов
                персонажа.
                <br />
                <br />
                Когда вы получаете ранение, уберите с меню своего персонажа
                соответствующее количество жетонов заряда.
                <br />
                <br />
                Когда вы должны восстановить заряды, возьмите из запаса столько
                жетонов заряда, сколько вам полагается, и верните на меню.
                <br />
                <br />
                У персонажа не может быть больше 12 жизней.
                <br />
                <br />
                Когда вы получаете или теряете коины, возьмите или уберите
                жетоны коинов в зависимости от того, что требуется сделать:
                прибавить или отнять их.
              </p>
            </section>

            {/* ====== NEW LEVEL ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="min-w-0">
                  <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                    Подготовка нового уровня
                  </h2>
                  <p className="leading-relaxed text-base md:text-lg text-gray-200">
                    После прохождения уровня игроки возвращают себе в руку все 5
                    карт реакций. Сыгранные карты из предыдущей стопки идут в
                    сброс, ведущий открывает новую загрузку и прохождение сайтов
                    продолжается до последнего босса-вируса.
                  </p>
                </div>
                <div className="min-w-0 flex justify-center">
                  <img
                    src={new_level}
                    alt="Карты нового уровня"
                    className="w-full max-w-[300px] rounded-lg object-contain"
                  />
                </div>
              </div>
            </section>

            {/* ====== MAIN GAME FLOW SECTION ====== */}
            <main className="space-y-10">
              {/* HOD IGRY */}
              <section className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl border border-[rgba(120,50,255,0.06)]">
                <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                  Ход игры
                </h2>

                <div className="prose prose-invert max-w-none text-sm md:text-base">
                  <p>В каждом сайте игроки проходят следующие шаги:</p>
                  <ul className="list-disc ml-6">
                    <li>Входят в сайт.</li>
                    <li>Каждый игрок разыгрывает карту реакций.</li>
                    <li>Отыгрывается эффект вкладки.</li>
                    <li>Вкладка сбрасывается.</li>
                  </ul>

                  <p className="mt-4">
                    1. Вход в сайт — игроки входят во вкладку сайта в ряду уровней.
                    Переверните карту, если она лежит рубашкой вверх.
                  </p>

                  <p className="mt-2">
                  2. Каждый игрок разыгрывает карту реакции — каждый игрок
                  должен выбрать карту реакции, которая будет разыграна в этой
                  вкладке, из своей руки. Чем выше число, тем ярче реакцию ваш
                  персонаж использует Разыгранные карты реакций возвращаются к
                  вам только в конце уровня, так что выбирайте с умом! Игроки
                  разыгрывают свои карты силы лицом вниз. Когда все игроки
                  выложили карты, они одновременно переворачиваются, и
                  отыгрывается вкладка.
                  </p>
                  <p className="mt-2">
                  3. Отыгрывается эффект вкладки. Когда все игроки выложили карты
                  реакций, должен быть отыгран эффект вкладки. В зависимости от
                  типа вкладки совершите следующие шаги:
                </p>

                </div>
              </section>

              {/* SITE WITH COINS */}
              <section className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl border border-[rgba(120,50,255,0.06)]">
                <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                  Сайт с коинами
                </h2>

                <div className="prose prose-invert max-w-none text-sm md:text-base">
                  <p>
Игрок с самым ярким значением на карте реакций получает коины! <br /> <br />
Сравните значения на картах реакций, выложенных игроками. Игрок с наибольшим значением получает коины из самого ценного криптокошелька во вкладке.  <br /> <br />

Если у нескольких игроков одинаковые значения реакций, то они делят содержимое кошелька поровну, округляя вниз. Если коинов в криптокошельке меньше, чем претендентов, никто ничего не получит. На сайте может находиться второй кошелёк, содержащий меньше коинов. В таком случае игрок, разыгравший вторую по величине карту реакций, получает коины из такого криптокошелька. Если у нескольких игроков ничья, они делят коины поровну, округляя вниз. Возможна ситуация, когда игрок получит больше коинов, заняв второе место, чем заняв первое. <br /> <br />

Пример: на сайте два криптокошелька с четырьмя и двумя коинами. Игроки А, Б и В разыгрывают карту реакций со значением 4. Игрок Г разыгрывает двойку, и игрок Д разыгрывает единицу. У А, Б и В ничья, но также у них наибольшее значение на карте, таким образом, они делят между собой криптокошелёк с четырьмя коинами. Каждый из них получает по одному коину (округляется вниз). Игрок Г выложил вторую по значению карту реакций, так что ему достается весь кошелёк с двумя коинами. Игрок Д не получает ничего. <br />
                  </p>
<br />
                  <div className="mt-4 flex justify-center">
                    <img
                      src={sites_wth_coins}
                      alt="Сайт с коинами"
                      className="w-full max-w-[550px] rounded-lg object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* ROOM WITH DIFFICULTY + TRAPS */}
              <section className="bg-[rgba(255,255,255,0.015)] p-6 rounded-2xl border border-[rgba(120,50,255,0.04)] shadow-lg">
                <h3 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                  Комната с трудностью
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                  {/* left text column */}
                  <div className="lg:col-span-2 min-w-0 text-sm text-gray-200 space-y-3">
                    <p>
                      Все игроки должны сложить свои реакции, чтобы победить
                      трудности. В противном случае игрок, разыгравший наименьшую
                      карту реакции, получит ранение!
                    </p>

                    <p>
Сначала игроки выясняют, на сколько велика трудность. Она указана в нижней части карты сайта, на чипе с количеством точек, равным числу живых игроков. Затем игроки складывают значения на всех разыгранных на этом сайте карт реакций. Если их сумма больше или равна величине трудности, она считается побеждённой, а вкладка — закрытой. Если же сумма меньше, чем величина трудности, она остаётся нерешённой. Трудность давит на игрока, который разыграл карту реакции с наименьшим значением                    </p>

                    <p className="mt-4">
                      Такой игрок теряет заряды в количестве, указанном в нижней
                      части карты сайта. Если несколько игроков разыграли
                      наименьшие карты, они получают ранения в полном объеме (не делите их между игроками).
                    </p>

                    {/* small gallery */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[room_wth_trbls1, room_wth_trbls2, room_wth_trbls3].map(
                        (src, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-b from-[#0b0820]  p-2 rounded-lg border border-[rgba(255,255,255,0.03)]"
                          >
                            <img
                              src={src}
                              alt={`room example ${i + 1}`}
                              className="w-full h-70 object-contain rounded-md"
                            />
                          </div>
                        )
                      )}
                    </div>

                    <p className="mt-4 font-semibold">Комната с трапом:</p>
                    <p className="mt-2">
                      Некоторые ловушки вредят лидирующим игрокам, остальные
                      вредят вообще всем!
                    </p>

                    {/* Trap list where each item has an image on the right */}
                    <ul className="mt-3 space-y-3">
                      {[
                        {
                          text:
                            "Вылет программы без сохранения: игрок с наибольшим количеством коинов теряет одно, два или три из них, если наибольшая разыгранная карта в этой комнате равна тройке, четверке или пятерке. Если у нескольких игроков наибольшее количество коинов, они несут потери.",
                          img: trap1,
                        },
                        {
                          text:
                            "Страница не найдена: игрок с наибольшим количеством зарядов теряет один, два или три заряда, если наибольшая разыгранная карта в этой комнате равна соответственно тройке, четверке или пятерке. Если у нескольких игроков наибольшее количество зарядов, они несут потери.",
                          img: trap2,
                        },
                        {
                          text:
                            "Лабиринт страха: если наименьшая разыгранная в этой комнате карта равна 3, все теряют по одному коину. Если это двойка, все теряют по два коина. И, наконец, если это единица, все теряют половину своих коинов, округляя вниз.",
                          img: trap3,
                        },
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="grid grid-cols-[1fr_auto] gap-3 items-start text-sm text-gray-200"
                        >
                          <span>{item.text}</span>
                          <img
                            src={item.img}
                            alt={`trap ${idx + 1}`}
                            className="w-16 h-20 object-contain rounded-md"
                          />
                        </li>
                      ))}
                    </ul>

                    {/* additional traps (disk memory + no connection) with two images to the right */}
                    <div className="mt-6 flex flex-col md:flex-row gap-6">
                      <div className="text-sm text-gray-200 space-y-3 md:w-2/3">
                        <p className="font-semibold">Память диска заполнена:</p>
                        <p>
                          Если наименьшая разыгранная в этой комнате карта равна
                          3, все теряют один заряд. Если это двойка, все теряют
                          два заряда. И, наконец, если это единица, все теряют
                          половину своих зарядов, округляя вниз. Или же, другими словами, они уже одной ногой в могиле!
                        </p>

                        <p className="mt-2 font-semibold">Отсутствие соединения:</p>
                        <p>
                          Игрок с наибольшим количеством зарядов теряет один, два
                          или три заряда, если наибольшая разыгранная карта в этой
                          комнате равна соответственно тройке, четверке или
                          пятерке. Если у нескольких игроков наибольшее количество
                          зарядов, они несут потери.
                        </p>

                        <p className="mt-2">
                          На всех сайтах с трапами имеет значение только
                          наибольшее или наименьшее число среди всех разыгранных
                          карт — неважно, кто ее выложил или как много их было
                          сыграно. Так что вы можете случайно прикончить самого себя, запустив трапу!
                        </p>

                        <p className="mt-2 font-semibold">Карта памяти:</p>
                        <p>Каждый игрок получает преимущество в зависимости от значения разыгранной им карты.</p>
                      </div>

                      {/* Column with two stacked images (trap4 + trap5) — aligns to right on wide screens */}
                      <div className="flex flex-col items-end gap-3">
                        <img
                          src={trap4}
                          alt="trap 4"
                          className="w-28 sm:w-32 md:w-40 object-contain rounded-md"
                        />
                        <img
                          src={trap5}
                          alt="trap 5"
                          className="w-28 sm:w-32 md:w-40 object-contain rounded-md"
                        />
                      </div>
                    </div>

                    {/* cards & items final block */}
                    <div className="mt-6 flex flex-col lg:flex-row gap-6 items-start">
                      <div className="flex-1 min-w-0 text-sm text-gray-200">
                        <p className="mt-2">
                          - Сисадмин, антивирус, адблок, автосохранение, новый
                          процессор: возьмите в руку одну карту из соответствующей
                          колоды. Если несколько игроков хотят получить один и тот
                          же предмет, а карт в колоде недостаточно, то никто не
                          берет предмет.
                        </p>

                        <p className="mt-4">
                          Важно: Нет ограничения на количество карт, которые вы
                          можете держать в руке. Стопка с 1/2/3 коинами — получите одно/два/три коина. <br /> Если несколько игроков хотят получить их, они получают их в полном объеме (не делят). <br /><br /> - Автосохранение: получите столько жизней, сколько нарисовано на нём. Если несколько игроков выбрали автосохранение, они получают заряды в полном объеме (не делят). <br /><br />Важно! Помните, что у вас не может быть больше 12 жизней. <br /> <br /> 
                        </p>

                        <p className="mt-4 font-semibold">
                          Все игроки оставляют разыгранные ими карты силы лежать
                          лицом вверх перед собой до конца уровня. Это означает,
                          что прежде чем принимать решение, все могут посмотреть,
                          какие карты уже были разыграны другими игроками.
                        </p>
                      </div>

                      <div className="flex-1 min-w-0 flex justify-center lg:justify-end">
                        <img
                          src={big_trap}
                          alt="Большая карта ловушки"
                          className="w-full max-w-[320px] rounded-2xl object-contain shadow-lg"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* USING ITEMS */}
              <section className="bg-[rgba(255,255,255,0.01)] p-6 rounded-2xl border border-[rgba(120,50,255,0.03)]">
                <h3 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                  Использование предметов
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
                  <div className="text-sm text-gray-200 space-y-3 font-medium">
                    <p>
- Антивирус: можно разыграть в любой момент (хотя наилучшим решением будет разыграть его в начале уровня с множеством неосвещенных комнат). Когда вы разыгрываете Антивирус, посмотрите все лежащие рубашкой вверх карты уровня. Не показывайте эти карты другим игрокам! Это действие даст вам бесценную информацию о том, с какими вкладками вам предстоит встретиться в ближайшее время. Разыгранный Антивирус возвращается в колоду ништяков после шага «Сброс вкладки».                    </p>

                    <p>
- Сисадмин: можно разыграть вместо карты реакции. Это позволит вам разыграть еще одну карту реакции после того, как остальные игроки откроют свои карты. После Сисадмина может быть разыгран Новый процессор, Адблок или даже еще один Сисадмин. Если несколько игроков использовали Сисадмина, то они вскрывают свои вторые карты одновременно. Разыгранный Сисадмин возвращается в колоду ништяков после шага «Сброс вкладки».
Если игрок использует Сисадмина, он пасует и таким образом может посмотреть, что выложат остальные, прежде чем разыграть свою карту. После того как другие игроки разыграли все свои карты, он должен, как обычно, разыграть карту реакции. Если несколько игроков использовали Сисадмина в одной вкладке, они должны разыграть свою вторую карту в порядке очередности хода (по часовой стрелке начиная с первого игрока).                    </p>

                    <p>
- Адблок: можно разыграть вместо карты реакции. Он является картой реакции со значением 5, но может быть разыгран только в комнате с криптокошельком. Разыгранный Адблок возвращается в колоду предметов после шага «Сброс вкладки».                    </p>

                    <p>
                      Новый процессор: можно разыграть вместо карты реакции. Он
                      является картой со значением 5, но может быть разыгран только
                      в вкладке с трудностью. Разыгранный Новый процессор
                      возвращается в колоду предметов после шага «Сброс вкладки».
                    </p>
                  </div>

                </div>
                <br /><br />
                                  <div className="min-w-0 flex flex-row flex-wrap justify-center gap-4">
                    {[
                      nishtyak1,
                      nishtyak2,
                      nishtyak3,
                      nishtyak4
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Карты ништяков ${i + 1}`}
                        className="w-28 sm:w-32 md:w-36 rounded-lg object-contain"
                      />
                    ))}
                  </div>

              </section>
            </main>

            {/* ====== FINAL SECTIONS (RESET / BOSSES / END) ====== */}
            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <div className="max-w-4xl mx-auto space-y-8 text-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Сброс комнаты</h3>
                  <p className="leading-relaxed">После того как карта сайта отыграна, она выходит из игры. Если в ряду уровня остались еще карты, игра возвращается к первому шагу, и хакеры входят в новую вкладку. В ином случае уровень завершается.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Завершение уровня</h3>
                  <p className="leading-relaxed">Уровень завершен, когда все пять карт сайта в ряду уровня были
              отыграны. Первым делом все должны перезарядиться! Каждый игрок
              возвращает обратно в руку все пять карт реакций. Если в ряду сайта
              еще остались стоики, подготовьте новый уровень и продолжайте
              играть. Если нет, сайт считается полностью исследованным, и игра
              заканчивается!</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Поломка</h3>
                  <p className="leading-relaxed">Если по любой причине в процессе игры заряды вашего персонажа достигли нуля, немедленно выходите из игры и не можете победить в игре! Переверните карту вашего персонажа, чтобы показать, что он сломан, и верните все предметы в соответствующие колоды.</p>
                    <p className="text-sm text-gray-500 italic">
                Важно! Величина трудности определяется количеством работающих на
                данный момент персонажей, а не количеством персонажей на начало
                игры.
                </p>

                </div>

                <div className="flex justify-center">
                  <img src={distruct} alt="Поломка" className="w-full max-w-[350px] rounded-lg object-contain" />
                </div>
              </div>
            </section>

            <section className="bg-[#0b0b14] p-6 rounded-2xl">
              <div className="max-w-4xl mx-auto space-y-8 text-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Боссы</h3>
                  <p className="leading-relaxed">Босс поджидает вас в конце пятого уровня. Босс разыгрывается как трудность, за тем исключением, что каждый игрок может сыграть против него две карты вместо одной.Сложите значения обеих карт. Любой предмет, кроме Нового процессора, обладает значением 0.</p>
                  <div className="flex justify-center mt-4">
                    <img src={bosses} alt="Боссы" className="w-full max-w-[300px] rounded-lg object-contain" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">Окончание игры</h3>
                  <p className="leading-relaxed">Когда пятый уровень сайта пройден, игра завершается. Выжившие игроки подсчитывают свои заряды и коины. Игрок с наибольшим количеством зарядов и коинов побеждает.</p>
                  <div className="flex justify-center mt-4">
                    <img src={end} alt="Конец игры" className="w-full max-w-[450px] rounded-lg object-contain" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Rules;
