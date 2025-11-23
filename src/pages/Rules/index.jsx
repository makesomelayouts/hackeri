import cards from "@pages/Rules/assets/cards.png";
import nishtyak1 from "@pages/Rules/assets/nishtyak1.png";
import nishtyak2 from "@pages/Rules/assets/nishtyak2.png";
import nishtyak3 from "@pages/Rules/assets/nishtyak3.png";
import nishtyak4 from "@pages/Rules/assets/nishtyak4.png";
import row_sites from "@pages/Rules/assets/row_sites.png";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
// import nishtyak4 from "@pages/Rules/assets/nishtyak4.png";
import character1 from "@pages/Rules/assets/character1.png";
import character2 from "@pages/Rules/assets/character2.png";
import character3 from "@pages/Rules/assets/character3.png";
import character4 from "@pages/Rules/assets/character4.png";
import character5 from "@pages/Rules/assets/character5.png";
import new_level from "@pages/Rules/assets/new_level.png";
import ready_to_charg from "@pages/Rules/assets/ready_to_charg.png";
import sites_wth_coins from "@pages/Rules/assets/sites_wth_coins.png";
// import room_wth_trbls from "@pages/Rules/assets/room_wth_trbls.png";
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
import { motion } from "motion/react";

function Rules() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        className="snap-start flex flex-col bg-[#0c0014] min-h-screen"
      >
        <Header />

        <section className=" text-white px-6 py-16 max-w-[1200px] mx-auto bg-[#0b0b14]">
          {/* ПРАВИЛА ИГРЫ */}
          <div className="flex flex-wrap items-start justify-between gap-10 mb-20">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Правила игры
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                В каждой вкладке игроки будут разыгрывать одну из своих 5 карт
                реакций, которые позволяют получить коины, победить трудности
                или запустить трапу. В карте памяти игроки могут получить
                ништяки, которые позволяют воспользоваться специальной
                однoразовой способностью при прохождении.
                <br />
                <br />В конце уровня игроки отдыхают и возвращают потраченные
                карты силы обратно в руку. После того как будут пройдены все
                пять вкладок, игрок, обладающий наибольшим количеством коинов и
                зарядов, побеждает в игре. Игроки, потерявшие все заряды, до
                конца игры считаются выбывшими и выиграть не могут.
              </p>
            </div>
            <div className="flex-1 min-w-[350px] flex justify-center bg-[#0c0014]">
              <img
                src={cards}
                alt="Карты игры"
                className="w-full max-w-[450px] rounded-lg"
              />
            </div>
          </div>

          {/* ПОДГОТОВКА К ИГРЕ */}
          <div className="mb-16 bg-[#0c0014] bg-[#0c0014]">
            <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
              Подготовка к игре
            </h2>
            <p className="leading-relaxed text-base md:text-lg">
              Подготовьте карты сайтов.
              <br />
              <br />
              Возьмите все 30 карт сайтов, перемешайте их и создайте колоду.
              Случайным образом выберите из колоды 6 карт сайтов и не глядя
              уберите их в коробку. Они больше не понадобятся. Переверните
              верхние 12 карт колоды лицом вверх и положите их обратно на верх
              колоды. Вновь перемешайте всю колоду. При этом следите, чтобы
              карты, лежащие лицом вверх, случайно не перевернулись. Затем не
              глядя положите одну случайную карту вируса рубашкой вверх под низ
              колоды.
            </p>
          </div>

          {/* ПОДГОТОВЬТЕ РЯД САЙТОВ */}
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Подготовьте ряд сайтов
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                Положите карту загрузки наверх перемешанной колоды карт сайтов.
                Теперь возьмите верхние 6 карт из этой колоды (5 карт подземелий
                и 1 дверь, которую вы только что добавили) и положите их в
                отдельную стопку с картой загрузки сверху.
                <br />
                <br />
                Проведите это действие ещё 4 раза, чтобы в итоге было 5 стопок
                по 5 карт каждая, на каждой из которых лежит карта загрузки.
                Расположите эти стопки в один ряд — это будущие сайты. После
                открытия каждой стопки игроки переходят к следующей и продолжают
                игру до конца.
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[250px] flex justify-center">
            <img
              src={row_sites}
              alt="Ряд сайтов"
              className="w-full max-w-[1100px] rounded-lg"
            />
          </div>
        </section>
        <section className="bg-[#0b0b14] text-white px-6 py-16 max-w-[1200px] mx-auto">
          {/* ПОДГОТОВЬТЕ НИШТЯКИ */}
          <div className="flex flex-wrap items-start justify-between gap-10 mb-20">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Подготовьте ништяки
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                Отсортируйте карты ништяков по типу. Положите получившиеся
                стопки карт каждого типа лицом вверх недалеко от ряда сайтов.
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[250px] flex justify-center">
            <img
              src={nishtyak1}
              alt="Карты ништяков"
              className="w-full max-w-[220px] rounded-lg"
            />
            <img
              src={nishtyak2}
              alt="Карты ништяков"
              className="w-full max-w-[220px] rounded-lg"
            />
            <img
              src={nishtyak3}
              alt="Карты ништяков"
              className="w-full max-w-[220px] rounded-lg"
            />
            <img
              src={nishtyak4}
              alt="Карты ништяков"
              className="w-full max-w-[220px] rounded-lg"
            />
          </div>
          <br />
          <br />
          <br />

          {/* ВЫБЕРИТЕ ПЕРСОНАЖЕЙ */}
          <div className="mb-20">
            <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
              Выберите персонажей
            </h2>
            <p className="leading-relaxed text-base md:text-lg mb-8">
              Возьмите 6 карт персонажей вслепую и перемешайте их. Сдайте
              каждому игроку по одной случайной карте. Получившиеся карты — ваши
              персонажи. Если игроков меньше 6, оставшиеся карты уберите в
              коробку. Игроки должны обладать разными типами персонажей!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src={character1}
                alt="Персонаж 1"
                className="w-[150px] rounded-lg"
              />
              <img
                src={character2}
                alt="Персонаж 2"
                className="w-[150px] rounded-lg"
              />
              <img
                src={character3}
                alt="Персонаж 3"
                className="w-[150px] rounded-lg"
              />
              <img
                src={character4}
                alt="Персонаж 4"
                className="w-[150px] rounded-lg"
              />
              <img
                src={character5}
                alt="Персонаж 5"
                className="w-[150px] rounded-lg"
              />
            </div>
          </div>

          {/* ПОДГОТОВЬТЕ ЖЕТОНЫ ЗАРЯДА И КОИНОВ */}
          <div className="flex flex-wrap items-start justify-between gap-10 mb-20">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Подготовьте жетоны заряда и коинов
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                Положите карту персонажа перед собой лицом вверх на месте
                персонажа. Разместите на пустых слотах меню столько жетонов
                заряда и коинов, сколько указано на карте персонажа.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] flex justify-center">
              <img
                src={ready_to_charg}
                alt="Жетоны и персонаж"
                className="w-full max-w-[400px] rounded-lg"
              />
            </div>
          </div>

          {/* ВОЗЬМИТЕ КАРТЫ РЕАКЦИЙ И КАРТЫ НИШТЯКОВ */}
          <div className="flex flex-wrap items-start justify-between gap-10">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Возьмите карты реакций и карты ништяков
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                Каждый игрок берёт в руку набор карт реакций, пронумерованных от
                1 до 5. Также он берёт случайные карты ништяков, указанные на
                его карте персонажа. Не показывайте свои карты реакций другим
                игрокам.
              </p>
            </div>
            <div className="flex-1 min-w-[250px] flex justify-center">
              <img
                src={cards}
                alt="Карты реакций"
                className="w-full max-w-[310px] rounded-lg"
              />
              <img
                src={nishtyak4}
                alt="Карты реакций"
                className="w-full max-w-[210px] rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#0b0b14] text-white px-6 py-16 max-w-[1200px] mx-auto">
          <div className="flex flex-wrap items-start justify-between gap-10 mb-20">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Коины и ранения
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
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
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-10 mb-20">
            <div className="flex-1 min-w-[300px] max-w-[600px]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                Подготовка нового уровня
              </h2>
              <p className="leading-relaxed text-base md:text-lg">
                После прохождения уровня игроки возвращают себе в руку все 5
                карт реакций. Сыгранные карты из предыдущей стопки идут в сброс,
                ведущий открывает новую загрузку и прохождение сайтов
                продолжается до последнего босса-вируса.
              </p>
              <br />
              <div className="flex-1 min-w-[250px] flex justify-center">
                <img
                  src={new_level}
                  alt="Карты игры"
                  className="w-full max-w-[300px] rounded-lg"
                />
              </div>
            </div>
          </div>
          <main className="space-y-16">
            <section className="bg-[rgba(255,255,255,0.02)] p-8 rounded-2xl shadow-lg border border-[rgba(120,50,255,0.08)]">
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase ">
                ХОД ИГРЫ
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
                  1. Вход в сайт — игроки входят во вкладку сайта в ряду
                  уровней. Переверните карту, если она лежит рубашкой вверх.
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
                  Отыгрывается эффект вкладки. Когда все игроки выложили карты
                  реакций, должен быть отыгран эффект вкладки. В зависимости от
                  типа вкладки совершите следующие шаги:
                </p>
              </div>
              <br /> <br />
              <h2 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4">
                САЙТ С КОИНАМИ
              </h2>
              <div className="prose prose-invert max-w-none text-sm md:text-base">
                <p className="mt-2">
                  Игрок с самым ярким значением на карте реакций получает коины!
                  Сравните значения на картах реакций, выложенных игроками.
                  Игрок с наибольшим значением получает коины из самого ценного
                  криптокошелька во вкладке.
                </p>
                <p className="mt-2">
                  Если у нескольких игроков одинаковые значения реакций, то они
                  делят содержимое кошелька поровну, округляя вниз. Если коинов
                  в криптокошельке меньше, чем претендентов, никто ничего не
                  получит. На сайте может находиться второй кошелёк, содержащий
                  меньше коинов. В таком случае игрок, разыгравший вторую по
                  величине карту реакций, получает коины из такого
                  криптокошелька. Если у нескольких игроков ничья, они делят
                  коины поровну, округляя вниз. Возможна ситуация, когда игрок
                  получит больше коинов, заняв второе место, чем заняв первое.
                </p>
                <p className="mt-2">
                  Пример: на сайте два криптокошелька с четырьмя и двумя
                  коинами. Игроки А, Б и В разыгрывают карту реакций со
                  значением 4. Игрок Г разыгрывает двойку, и игрок Д разыгрывает
                  единицу. У А, Б и В ничья, но также у них наибольшее значение
                  на карте, таким образом, они делят между собой криптокошелёк с
                  четырьмя коинами. Каждый из них получает по одному коину
                  (округляется вниз). Игрок Г выложил вторую по значению карту
                  реакций, так что ему достается весь кошелёк с двумя коинами.
                  Игрок Д не получает ничего.
                </p>
                <br />
                <div className="flex-1 min-w-[250px] flex justify-center">
                  <img
                    src={sites_wth_coins}
                    alt="Жетоны и персонаж"
                    className="w-full max-w-[400px] rounded-lg"
                  />
                </div>
              </div>
              {/* Inline small gallery from screenshot */}
            </section>

            {/* Section: Комната с трудностью + трап (long text) */}
            <section className="p-8 rounded-2xl bg-[rgba(255,255,255,0.015)] border border-[rgba(120,50,255,0.04)] shadow-lg">
              <h3 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                КОМНАТА С ТРУДНОСТЬЮ:
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 text-sm text-gray-200 space-y-3">
                  <p>
                    Все игроки должны сложить свои реакции, чтобы победить
                    трудности. В противном случае игрок, разыгравший наименьшую
                    карту реакции, получит ранение!
                  </p>

                  <p>
                    Сначала игроки выясняют, на сколько велика трудность. Она
                    указана в нижней части карты сайта, на чипе с количеством
                    точек, равным числу живых игроков. Затем игроки складывают
                    значения на всех разыгранных на этом сайте карт реакций...
                  </p>

                  <p className="mt-4">
                    Такой игрок теряет заряды в количестве, указанном в нижней
                    части карты сайта. Если несколько игроков разыграли
                    наименьшие карты, они получают ранения в полном объеме (не
                    делите их между игроками).
                  </p>
                  <div className="flex-1 min-w-[250px] flex justify-center">
                    <div className="flex flex-col items-center gap-6">
                      <div className="mt-6 grid grid-cols-3 gap-4 items-start">
                        <div className="bg-gradient-to-b from-[#0b0820] to-[#15062a] p-2 rounded-lg border border-[rgba(255,255,255,0.03)]">
                          <img
                            src={room_wth_trbls1}
                            alt="screenshot 1"
                            className="w-full h-40 object-contain rounded-md"
                          />
                        </div>
                        <div className="bg-gradient-to-b from-[#0b0820] to-[#15062a] p-2 rounded-lg border border-[rgba(255,255,255,0.03)]">
                          <img
                            src={room_wth_trbls2}
                            alt="screenshot 2"
                            className="w-full h-40 object-contain rounded-md"
                          />
                        </div>
                        <div className="bg-gradient-to-b from-[#0b0820] to-[#15062a] p-2 rounded-lg border border-[rgba(255,255,255,0.03)]">
                          <img
                            src={room_wth_trbls3}
                            alt="screenshot 3"
                            className="w-full h-40 object-contain rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 font-semibold">Комната с трапой:</p>
                  <p className="mt-2">
                    Некоторые ловушки вредят лидирующим игрокам, остальные
                    вредят вообще всем!
                  </p>

                  <ul className="space-y-3 text-sm text-gray-200 mt-2">
                    <li className="flex items-start gap-3">
                      <span className="list-disc ml-6">
                        - Вылет программы без сохранения: игрок с наибольшим
                        количеством коинов теряет одно, два или три из них, если
                        наибольшая разыгранная карта в этой комнате равна
                        тройке, четверке или пятерке. Если у нескольких игроков
                        наибольшее количество коинов, они несут потери.
                      </span>
                      <img
                        src={trap1}
                        alt="difficulty card 1"
                        className="float-right ml-3 mb-2 w-16 object-contain ml-auto"
                      />
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="list-disc ml-6">
                        - Страница не найдена: игрок с наибольшим количеством
                        зарядов теряет один, два или три заряда, если наибольшая
                        разыгранная карта в этой комнате равна соответственно
                        тройке, четверке или пятерке. Если у нескольких игроков
                        наибольшее количество зарядов, они несут потери.
                      </span>
                      <img
                        src={trap2}
                        alt="difficulty card 2"
                        className="float-right ml-3 mb-2 w-16 object-contain ml-auto"
                      />
                    </li>
                    <img
                      src={trap3}
                      alt="difficulty card 3"
                      className="float-right ml-3 mb-2 w-16 object-contain ml-auto"
                    />

                    <li className="flex items-start gap-3">
                      <span className="list-disc ml-6">
                        - Лабиринт страха: если наименьшая разыгранная в этой
                        комнате карта равна 3, все теряют по одному коину. Если
                        это двойка, все теряют по два коина. И, наконец, если
                        это единица, все теряют половину своих коинов, округляя
                        вниз.
                      </span>
                    </li>
                  </ul>
                  <br />
                  {/* Дополнительные ловушки: Память диска и Отсутствие соединения */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    <div className="text-sm text-gray-200 space-y-2">
                      <p className="font-semibold">- Память диска заполнена:</p>
                      <p className="">
                        Если наименьшая разыгранная в этой комнате карта равна
                        3, все теряют один заряд. Если это двойка, все теряют
                        два заряда. И, наконец, если это единица, все теряют
                        половину своих зарядов, округляя вниз. Или же, другими
                        словами, они уже одной ногой в могиле!
                      </p>

                      <p className="mt-3 font-semibold">
                        - Отсутствие соединения:
                      </p>
                      <p>
                        Игрок с наибольшим количеством зарядов теряет один, два
                        или три заряда, если наибольшая разыгранная карта в этой
                        комнате равна соответственно тройке, четверке или
                        пятерке. Если у нескольких игроков наибольшее количество
                        зарядов, они несут потери.
                      </p>
                      <br />
                      <p>
                        На всех сайтах с трапами имеет значение только
                        наибольшее или наименьшее число среди всех разыгранных
                        карт, причем неважно, кто ее выложил или как много их
                        было сыграно. Так что вы можете случайно прикончить
                        самого себя, запустив трапу!
                      </p>

                      <p className="font-semibold">- Карта памяти:</p>
                      <p>
                        Каждый игрок получает преимущество в зависимости от
                        значения разыгранной им карты.
                      </p>
                    </div>

                    {/* Справа от этих пунктов — две маленькие картинки CARD_4 и CARD_5 */}
                    <div className="flex flex-col items-end gap-3">
                      <img
                        src={trap4}
                        alt="card small 4"
                        className="w-40 object-contain rounded-md shadow-sm"
                      />
                      <img
                        src={trap5}
                        alt="card small 5"
                        className="w-40 object-contain rounded-md shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start gap-10">
                    {/* Блок про карты памяти / предметы и финальное замечание */}
                    <div className="flex-1 min-w-[410px] mt-6 text-sm text-gray-200">
                      <p className="mt-3">
                        - Сисадмин, антивирус, адблок, автосохранение, новый
                        процессор: возьмите в руку одну карту из соответствующей
                        колоды. Если несколько игроков хотят получить один и тот
                        же предмет, а карт в колоде недостаточно, то никто не
                        берет предмет.
                      </p>

                      <p className="mt-4">
                        Важно: Нет ограничения на количество карт, которые вы
                        можете держать в руке. <br />- Стопка с 1/2/3 коинами —
                        получите одно/два/три коина. Автосохранение: получите
                        столько жизней, сколько нарисовано на нём.
                      </p>
                      <p className="mt-4">
                        - Автосохранение: получите столько жизней, сколько
                        нарисовано на нём. Если несколько игроков выбрали
                        автосохранение, они получают заряды в полном объеме (не
                        делят). <br /> Важно! Помните, что у вас не может быть
                        больше 12 жизней.
                      </p>

                      <p className="mt-4 font-semibold">
                        Все игроки оставляют разыгранные ими карты силы лежать
                        лицом вверх перед собой до конца уровня. Это означает,
                        что прежде чем принимать решение, все могут посмотреть,
                        какие карты уже были разыграны другими игроками.
                      </p>
                    </div>
                    {/* Правая колонка — примерные карточки и набор небольших карт */}
                    <div className="flex-1 min-w-[250px] flex justify-end">
                      <img
                        src={big_trap}
                        alt="Карта памяти"
                        className="w-75  object-contain rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Использование предметов */}
            <section className="p-8 rounded-2xl bg-[rgba(255,255,255,0.01)] border border-[rgba(120,50,255,0.03)] shadow-lg">
              <h3 className="text-[#b94cf6] text-2xl md:text-3xl font-semibold mb-4 uppercase">
                ИСПОЛЬЗОВАНИЕ ПРЕДМЕТОВ
              </h3>

              <div className="text-sm text-gray-200 space-y-3 font-semibold">
                <p>
                  Антивирус: можно разыграть в любой момент (хотя наилучшим
                  решением будет разыгрывать его в начале уровня в множестве
                  несохранённых комнат)...
                </p>

                <p>
                  Сисадмин: можно разыграть вместо карты реакции. Это позволит
                  вам разыграть ещё одну карту реакции после того, как остальные
                  игроки откроют свои карты...
                </p>
                <p>
                  - Адблок: можно разыграть вместо карты реакции. Он является
                  картой реакции со значением 5, но может быть разыгран только в
                  комнате с криптокошельком. Разыгранный Адблок возвращается в
                  колоду предметов после шага «Сброс вкладки».
                </p>
                <p>
                  - Новый процессор: можно разыграть вместо карты реакции. Он
                  является картой со значением 5, но может быть разыгран только
                  в вкладке с трудностью. Разыгранный Новый процессор
                  возвращается в колоду предметов после шага «Сброс вкладки».
                </p>
                <br />
                <div className="flex-1 min-w-[250px] flex justify-center">
                  <img
                    src={nishtyak1}
                    alt="Карты ништяков"
                    className="w-full max-w-[352px] rounded-lg"
                  />
                  <img
                    src={nishtyak2}
                    alt="Карты ништяков"
                    className="w-full max-w-[325px] rounded-lg"
                  />
                  <img
                    src={nishtyak3}
                    alt="Карты ништяков"
                    className="w-full max-w-[325px] rounded-lg"
                  />
                  <img
                    src={nishtyak4}
                    alt="Карты ништяков"
                    className="w-full max-w-[325px] rounded-lg"
                  />
                </div>
              </div>
            </section>
          </main>
        </section>
        <div className=" text-white bg-[#0c0014] min-h-screen ">
          {/* First section */}
          <section className="max-w-5xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Сброс комнаты
            </h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
              После того как карта сайта отыграна, она выходит из игры. Если в
              ряду уровня остались еще карты, игра возвращается к первому шагу,
              и хакеры входят в новую вкладку. В ином случае уровень
              завершается.
            </p>

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Завершение уровня
            </h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
              Уровень завершен, когда все пять карт сайта в ряду уровня были
              отыграны. Первым делом все должны перезарядиться! Каждый игрок
              возвращает обратно в руку все пять карт реакций. Если в ряду сайта
              еще остались стоики, подготовьте новый уровень и продолжайте
              играть. Если нет, сайт считается полностью исследованным, и игра
              заканчивается!
            </p>

            <h2 className="text-3xl font-bold text-purple-400 mb-6">Поломка</h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
              Если по любой причине в процессе игры заряды вашего персонажа
              достигли нуля, немедленно выходите из игры и не можете победить в
              игре! Переверните карту вашего персонажа, чтобы показать, что он
              сломан, и верните все предметы в соответствующие колоды.
            </p>
            <p className="text-sm text-gray-500 italic">
              Важно! Величина трудности определяется количеством работающих на
              данный момент персонажей, а не количеством персонажей на начало
              игры.
            </p>
            <div className="flex-1 min-w-[250px] flex justify-center">
              <img
                src={distruct}
                alt="Поломка"
                className="w-full max-w-[350px] rounded-lg"
              />
            </div>
          </section>

          {/* Second section */}
          <section className="max-w-5xl mx-auto py-16 px-6 border-t border-purple-800 bg-[#0c0014]">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Боссы</h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
              Босс поджидает вас в конце пятого уровня. Босс разыгрывается как
              трудность, за тем исключением, что каждый игрок может сыграть
              против него две карты вместо одной. Сложите значения обеих карт.
              Любой предмет, кроме Нового процессора, обладает значением 0.
            </p>
            <div className="flex-1 min-w-[250px] flex justify-center">
              <img
                src={bosses}
                alt="Боссы"
                className="w-full max-w-[300px] rounded-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Окончание игры
            </h2>
            <p className="mb-8 text-gray-300 leading-relaxed">
              Когда пятый уровень сайта пройден, игра завершается. Выжившие
              игроки подсчитывают свои заряды и коины. Игрок с наибольшим
              количеством зарядов и коинов побеждает.
            </p>
            <div className="flex-1 min-w-[250px] flex justify-center">
              <img
                src={end}
                alt="Конец игры"
                className="w-full max-w-[450px] rounded-lg"
              />
            </div>
          </section>
          <Footer />
        </div>
      </motion.section>
    </>
  );
}

export default Rules;
