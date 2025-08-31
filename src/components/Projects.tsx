import InfiniteSlider from "./InfiniteSlider";
import OpenSection from "./OpenSection";
import styles from "./InfiniteSlider.module.scss";
import SlideCard from "./SlideCard";
import img1 from "../assets/photos/Implementations/zlecenie_1.jpg";
import img2 from "../assets/photos/Implementations/zlecenie_2.jpg";
import img3 from "../assets/photos/Implementations/zlecenie_3.jpg";
import img5 from "../assets/photos/Implementations/zlecenie_5.jpg";
import img6 from "../assets/photos/Implementations/zlecenie_6.jpg";

const dataSlides = [{
	image: img1,
	serviceTitle: "Ogród w naturalnym stylu",
	textContent:
		"Tradycyjny ogród w schludnym, estetycznym wydaniu – krótko skoszony trawnik, kwitnące drzewa, z ładnie przyciętymi gałęziami, gęste żywopłoty ukształtowane na wzór prostokątna. Całość tworzy przytulną przestrzeń sprzyjającą odpoczynkowi. Każdy zakątek zachęca do spędzania czasu na świeżym powietrzu.",
},
{
  image: img2,
	serviceTitle: "Rabata przy budynku z akcentami lawendy",
	textContent:
		"Nowoczesna aranżacja frontowej części ogrodu, w której dominują rośliny posadzone w otoczeniu jasnego żwiru. Geometryczne linie rabaty współgrają z architekturą budynku, a delikatne akcenty lawendy wprowadzają subtelny kolor i zapach. To elegancka wizytówka domu, która zachwyca prostotą i harmonią.",
},
{
  image: img3,
	serviceTitle: "Ścieżka żwirowa z lawendą",
	textContent:
		"Ta realizacja łączy praktyczność z pięknem. Żwirowa ścieżka prowadząca wzdłuż domu otoczona jest lawendą, której intensywny zapach i fioletowe kwiaty tworzą unikalny klimat. W tle schludnie przycięty żywopłot. Niskie nasadzenia i starannie dobrane formy krzewów nadają tej przestrzeni lekkości oraz elegancji.",
},
{
  image: img5,
	serviceTitle: "Rabata żwirowa z kolorowymi nasadzeniami",
	textContent:
		"Połączenie barwnych nasadzeń z naturalnym żwirem i kamieniami nadaje ogrodowi nowoczesny i lekki wygląd. Wydzielone rabaty podkreślają formy roślin, a ozdobne kamienie wprowadzają element kontrastu i równowagi. To doskonałe rozwiązanie dla osób, które cenią estetykę oraz łatwość pielęgnacji.",
},
{
  image: img6,
	serviceTitle: "Kompozycja kamienna z centralnym głazem",
	textContent:
		"Kamień w ogrodzie to symbol trwałości i naturalnej siły. W tej realizacji centralny głaz otoczony mniejszymi kamieniami tworzy efektowną, minimalistyczną aranżację. Żwirowe podłoże pełni rolę zarówno dekoracyjną, jak i praktyczną – ułatwia utrzymanie porządku i podkreśla monumentalny charakter kompozycji.",
},


];

export default function Projects() {
	return (
		<section>
			<OpenSection
				title="Realizacje"
				beforeSpan="Ogrody, które zostały przez nas stworzone z najwyższą starannością oraz precyzją."
				spanTxt=" Poniżej przykładowe realizacje"
			/>

			<InfiniteSlider
				items={[
					<SlideCard {...dataSlides[0]} />,
					<SlideCard {...dataSlides[1]} />,
					<SlideCard {...dataSlides[2]} />,
					<SlideCard {...dataSlides[3]} />,
					<SlideCard {...dataSlides[4]} />,
				]}
        durationMs={5000}
			/>
		</section>
	);
}