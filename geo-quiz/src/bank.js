/* ---------- question bank ----------
   Levels: 'easy' (Chill), 'normal', 'hard' (Hardkor).
   A question may appear one level above its own, never below it
   and never two levels up (see ALLOWED). */
const FLAGS = [
  /* easy */
  ['Polska', 'easy', { h: eq('#FFFFFF', '#DC143C') }, ['Monako', 'Indonezja', 'Austria'], 'Warszawa', 'Biel i czerwień to barwy z herbu: biały orzeł na czerwonym polu.'],
  ['Niemcy', 'easy', { h: eq('#000000', '#DD0000', '#FFCE00') }, ['Belgia', 'Austria', 'Litwa'], 'Berlin', ''],
  ['Francja', 'easy', { v: eq('#0055A4', '#FFFFFF', '#EF4135') }, ['Holandia', 'Włochy', 'Rosja'], 'Paryż', 'Trikolor pochodzi z czasów rewolucji francuskiej.'],
  ['Włochy', 'easy', { v: eq('#009246', '#FFFFFF', '#CE2B37') }, ['Irlandia', 'Meksyk', 'Węgry'], 'Rzym', ''],
  ['Japonia', 'easy', { bg: '#FFFFFF', circle: ['#BC002D', 30, 20, 12] }, ['Bangladesz', 'Korea Południowa', 'Chiny'], 'Tokio', 'Flaga nazywa się Hinomaru, czyli „krąg słońca”.'],
  ['Ukraina', 'easy', { h: eq('#0057B7', '#FFD700') }, ['Szwecja', 'Kazachstan', 'Rumunia'], 'Kijów', 'Niebo nad łanami zboża.'],
  ['Szwecja', 'easy', { bg: '#006AA7', cross: [['#FECC00', 6]] }, ['Finlandia', 'Norwegia', 'Dania'], 'Sztokholm', ''],
  ['Hiszpania', 'easy', { h: [['#AA151B', 1], ['#F1BF00', 2], ['#AA151B', 1]] }, ['Portugalia', 'Kolumbia', 'Andora'], 'Madryt', 'Flaga państwowa ma jeszcze herb, tu pokazana jest wersja bez niego.'],
  ['Wielka Brytania', 'easy', { bg: '#012169', shapes: [
    ['poly', '#FFFFFF', [[0, 0], [6, 0], [60, 36], [60, 40], [54, 40], [0, 4]]],
    ['poly', '#FFFFFF', [[60, 0], [60, 4], [6, 40], [0, 40], [0, 36], [54, 0]]],
    ['line', '#C8102E', 0, 0, 60, 40, 2], ['line', '#C8102E', 60, 0, 0, 40, 2],
    ['rect', '#FFFFFF', 0, 15, 60, 10], ['rect', '#FFFFFF', 25, 0, 10, 40],
    ['rect', '#C8102E', 0, 17, 60, 6], ['rect', '#C8102E', 27, 0, 6, 40]] }, ['Australia', 'Nowa Zelandia', 'Norwegia'], 'Londyn', 'Union Jack łączy krzyże Anglii, Szkocji i Irlandii.'],
  ['Szwajcaria', 'easy', { w: 40, bg: '#DA291C', shapes: [['rect', '#FFFFFF', 16, 8, 8, 24], ['rect', '#FFFFFF', 8, 16, 24, 8]] }, ['Dania', 'Gruzja', 'Austria'], 'Berno', 'To jedna z dwóch kwadratowych flag państwowych, obok flagi Watykanu.'],
  ['Grecja', 'easy', { h: eq('#0D5EAF', '#FFFFFF', '#0D5EAF', '#FFFFFF', '#0D5EAF', '#FFFFFF', '#0D5EAF', '#FFFFFF', '#0D5EAF'), shapes: [
    ['rect', '#0D5EAF', 0, 0, 22, 22], ['rect', '#FFFFFF', 9, 0, 4, 22], ['rect', '#FFFFFF', 0, 9, 22, 4]] }, ['Urugwaj', 'Finlandia', 'Izrael'], 'Ateny', 'Dziewięć pasów to podobno dziewięć sylab greckiego hasła „Wolność albo śmierć”.'],
  ['Czechy', 'easy', { h: eq('#FFFFFF', '#D7141A'), shapes: [['poly', '#11457E', [[0, 0], [30, 20], [0, 40]]]] }, ['Słowacja', 'Filipiny', 'Polska'], 'Praga', 'Słowacja ma te same kolory, ale w poziomych pasach i z herbem.'],
  ['Turcja', 'easy', { bg: '#E30A17', shapes: [['circle', '#FFFFFF', 21, 20, 10], ['circle', '#E30A17', 23.5, 20, 8], ['star', '#FFFFFF', 35, 20, 5.5, 180]] }, ['Tunezja', 'Pakistan', 'Azerbejdżan'], 'Ankara', 'Półksiężyc i gwiazda były symbolem już w czasach Imperium Osmańskiego.'],
  ['Stany Zjednoczone', 'easy', { h: eq('#B22234', '#FFFFFF', '#B22234', '#FFFFFF', '#B22234', '#FFFFFF', '#B22234', '#FFFFFF', '#B22234', '#FFFFFF', '#B22234', '#FFFFFF', '#B22234'),
    shapes: [['rect', '#3C3B6E', 0, 0, 24, 22]].concat(usStars()) }, ['Liberia', 'Kuba', 'Wielka Brytania'], 'Waszyngton', '50 gwiazd to 50 stanów, a 13 pasów to 13 pierwszych kolonii.'],
  ['Chiny', 'easy', { bg: '#EE1C25', shapes: [['star', '#FFFF00', 10, 10, 6.5], ['star', '#FFFF00', 20, 4, 2.2], ['star', '#FFFF00', 24, 8, 2.2], ['star', '#FFFF00', 24, 14, 2.2], ['star', '#FFFF00', 20, 18, 2.2]] }, ['Wietnam', 'Kirgistan', 'Maroko'], 'Pekin', 'Duża gwiazda oznacza partię, a cztery małe klasy społeczne.'],
  /* normal */
  ['Irlandia', 'normal', { v: eq('#169B62', '#FFFFFF', '#FF883E') }, ['Włochy', 'Wybrzeże Kości Słoniowej', 'Indie'], 'Dublin', 'Wybrzeże Kości Słoniowej ma te same kolory w odwrotnej kolejności.'],
  ['Belgia', 'normal', { v: eq('#000000', '#FDDA24', '#EF3340') }, ['Niemcy', 'Rumunia', 'Czad'], 'Bruksela', 'Kolory są podobne do niemieckich, tylko ułożone w pionie.'],
  ['Holandia', 'normal', { h: eq('#AE1C28', '#FFFFFF', '#21468B') }, ['Francja', 'Rosja', 'Jemen'], 'Amsterdam', 'Luksemburg ma prawie taką samą flagę, z jaśniejszym błękitem.'],
  ['Austria', 'normal', { h: eq('#C8102E', '#FFFFFF', '#C8102E') }, ['Łotwa', 'Polska', 'Peru'], 'Wiedeń', ''],
  ['Rosja', 'normal', { h: eq('#FFFFFF', '#0039A6', '#D52B1E') }, ['Słowenia', 'Serbia', 'Holandia'], 'Moskwa', ''],
  ['Finlandia', 'normal', { bg: '#FFFFFF', cross: [['#003580', 8]] }, ['Szwecja', 'Islandia', 'Grecja'], 'Helsinki', 'Śnieg i jeziora, stąd biel i błękit.'],
  ['Norwegia', 'normal', { bg: '#BA0C2F', cross: [['#FFFFFF', 8], ['#00205B', 4]] }, ['Islandia', 'Dania', 'Wielka Brytania'], 'Oslo', ''],
  ['Dania', 'normal', { bg: '#C8102E', cross: [['#FFFFFF', 6]] }, ['Szwajcaria', 'Norwegia', 'Anglia'], 'Kopenhaga', 'Dannebrog uchodzi za najstarszą wciąż używaną flagę państwową.'],
  ['Litwa', 'normal', { h: eq('#FDB913', '#006A44', '#C1272D') }, ['Boliwia', 'Ghana', 'Etiopia'], 'Wilno', ''],
  ['Węgry', 'normal', { h: eq('#CE2939', '#FFFFFF', '#477050') }, ['Bułgaria', 'Włochy', 'Iran'], 'Budapeszt', ''],
  ['Bangladesz', 'normal', { bg: '#006A4E', circle: ['#F42A41', 27, 20, 12] }, ['Japonia', 'Palau', 'Pakistan'], 'Dhaka', 'Czerwone koło jest lekko przesunięte w stronę masztu.'],
  ['Estonia', 'normal', { h: eq('#0072CE', '#000000', '#FFFFFF') }, ['Łotwa', 'Finlandia', 'Botswana'], 'Tallinn', ''],
  ['Islandia', 'normal', { bg: '#02529C', cross: [['#FFFFFF', 8], ['#DC1E35', 4]] }, ['Norwegia', 'Finlandia', 'Szwecja'], 'Reykjavik', 'To flaga Norwegii z zamienionymi kolorami.'],
  ['Izrael', 'normal', { bg: '#FFFFFF', shapes: [['rect', '#0038B8', 0, 4, 60, 6], ['rect', '#0038B8', 0, 30, 60, 6],
    ['line', '#0038B8', 30, 11, 38, 25, 1.6], ['line', '#0038B8', 38, 25, 22, 25, 1.6], ['line', '#0038B8', 22, 25, 30, 11, 1.6],
    ['line', '#0038B8', 30, 29, 38, 15, 1.6], ['line', '#0038B8', 38, 15, 22, 15, 1.6], ['line', '#0038B8', 22, 15, 30, 29, 1.6]] }, ['Grecja', 'Finlandia', 'Argentyna'], null, 'Pośrodku jest Gwiazda Dawida, a niebieskie pasy nawiązują do żydowskiego szala modlitewnego.'],
  ['Wietnam', 'normal', { bg: '#DA251D', shapes: [['star', '#FFFF00', 30, 20.5, 11]] }, ['Chiny', 'Maroko', 'Kirgistan'], 'Hanoi', 'Pięć ramion gwiazdy to pięć grup społecznych: robotnicy, chłopi, żołnierze, inteligencja i młodzież.'],
  ['Kuba', 'normal', { h: eq('#002A8F', '#FFFFFF', '#002A8F', '#FFFFFF', '#002A8F'), shapes: [['poly', '#CF142B', [[0, 0], [34, 20], [0, 40]]], ['star', '#FFFFFF', 11.5, 20.5, 6.5]] }, ['Chile', 'Filipiny', 'Czechy'], 'Hawana', 'Portoryko ma bardzo podobną flagę, z zamienionymi kolorami pasów i trójkąta.'],
  ['Chile', 'normal', { h: eq('#FFFFFF', '#D52B1E'), shapes: [['rect', '#0039A6', 0, 0, 20, 20], ['star', '#FFFFFF', 10, 10.5, 6]] }, ['Kuba', 'Czechy', 'Liberia'], 'Santiago', 'Flaga Teksasu jest bardzo podobna, ale ma pionowy niebieski pas.'],
  ['Argentyna', 'normal', { h: eq('#74ACDF', '#FFFFFF', '#74ACDF'), shapes: [
    ['line', '#F6B40E', 30, 12.5, 30, 27.5, 1.4], ['line', '#F6B40E', 22.5, 20, 37.5, 20, 1.4], ['line', '#F6B40E', 24.7, 14.7, 35.3, 25.3, 1.4], ['line', '#F6B40E', 35.3, 14.7, 24.7, 25.3, 1.4],
    ['circle', '#F6B40E', 30, 20, 4.2], ['circle', '#85340A', 30, 20, 1]] }, ['Urugwaj', 'Nikaragua', 'Salwador'], 'Buenos Aires', 'Słońce Majowe upamiętnia rewolucję z maja 1810 roku.'],
  ['Jamajka', 'normal', { bg: '#000000', shapes: [['poly', '#009B3A', [[0, 0], [60, 0], [30, 20]]], ['poly', '#009B3A', [[0, 40], [60, 40], [30, 20]]],
    ['line', '#FED100', 0, 0, 60, 40, 5.5], ['line', '#FED100', 60, 0, 0, 40, 5.5]] }, ['Tanzania', 'Gujana', 'Burundi'], 'Kingston', 'To jedyna flaga państwowa bez czerwieni, bieli i błękitu.'],
  /* hard */
  ['Mauritius', 'hard', { h: eq('#EA2839', '#1A206D', '#FFD500', '#00A551') }, ['Gabon', 'Madagaskar', 'Seszele'], 'Port Louis', 'Jedna z niewielu flag z czterema poziomymi pasami.'],
  ['Gabon', 'hard', { h: eq('#009E60', '#FCD116', '#3A75C4') }, ['Sierra Leone', 'Rwanda', 'Mauritius'], 'Libreville', 'Zieleń lasu, żółć równika i błękit oceanu.'],
  ['Sierra Leone', 'hard', { h: eq('#1EB53A', '#FFFFFF', '#0072C6') }, ['Gabon', 'Nigeria', 'Sudan'], 'Freetown', ''],
  ['Kolumbia', 'hard', { h: [['#FCD116', 2], ['#003893', 1], ['#CE1126', 1]] }, ['Ekwador', 'Wenezuela', 'Hiszpania'], 'Bogota', 'Ekwador ma podobną flagę, ale z herbem pośrodku.'],
  ['Łotwa', 'hard', { h: [['#9E3039', 2], ['#FFFFFF', 1], ['#9E3039', 2]] }, ['Austria', 'Polska', 'Liban'], 'Ryga', 'Ten ciemny karmin to tak zwana łotewska czerwień.'],
  ['Nigeria', 'hard', { v: eq('#008751', '#FFFFFF', '#008751') }, ['Irlandia', 'Pakistan', 'Sierra Leone'], 'Abudża', ''],
  ['Czad', 'hard', { v: eq('#002664', '#FECB00', '#C60C30') }, ['Andora', 'Belgia', 'Mołdawia'], 'Ndżamena', 'Prawie identyczna z flagą Rumunii, różni się tylko odcieniem niebieskiego.'],
  ['Rumunia', 'hard', { v: eq('#002B7F', '#FCD116', '#CE1126') }, ['Andora', 'Belgia', 'Mołdawia'], 'Bukareszt', 'Prawie identyczna z flagą Czadu.'],
  ['Bułgaria', 'hard', { h: eq('#FFFFFF', '#00966E', '#D62612') }, ['Węgry', 'Litwa', 'Tadżykistan'], 'Sofia', ''],
  ['Armenia', 'hard', { h: eq('#D90012', '#0033A0', '#F2A800') }, ['Kolumbia', 'Litwa', 'Gruzja'], 'Erywań', ''],
  ['Jemen', 'hard', { h: eq('#CE1126', '#FFFFFF', '#000000') }, ['Egipt', 'Syria', 'Irak'], 'Sana', 'Egipt i Irak mają te same pasy, ale z godłem albo napisem pośrodku.'],
  ['Laos', 'hard', { h: [['#CE1126', 1], ['#002868', 2], ['#CE1126', 1]], circle: ['#FFFFFF', 30, 20, 8] }, ['Kambodża', 'Tajlandia', 'Kostaryka'], 'Wientian', 'Białe koło to księżyc w pełni nad Mekongiem.'],
  ['Palau', 'hard', { bg: '#4AADD6', circle: ['#FFDE00', 26, 20, 10] }, ['Bangladesz', 'Japonia', 'Mikronezja'], 'Ngerulmud', 'Żółte koło to księżyc w pełni nad Pacyfikiem.'],
  ['Gwinea', 'hard', { v: eq('#CE1126', '#FCD116', '#009460') }, ['Mali', 'Senegal', 'Kamerun'], 'Konakry', 'Flaga Mali ma te same kolory w odwrotnej kolejności.'],
  ['Mali', 'hard', { v: eq('#14B53A', '#FCD116', '#CE1126') }, ['Gwinea', 'Senegal', 'Etiopia'], 'Bamako', ''],
  ['Boliwia', 'hard', { h: eq('#D52B1E', '#F9E300', '#007934') }, ['Litwa', 'Ghana', 'Gwinea'], 'Sucre (siedziba rządu: La Paz)', ''],
  ['Tajlandia', 'hard', { h: [['#A51931', 1], ['#FFFFFF', 1], ['#2D2A4A', 2], ['#FFFFFF', 1], ['#A51931', 1]] }, ['Kostaryka', 'Laos', 'Holandia'], 'Bangkok', 'Kostaryka ma odwrócony układ: czerwony pas w środku i niebieskie brzegi.'],
  ['Tanzania', 'hard', { bg: '#1EB53A', shapes: [['poly', '#00A3DD', [[60, 0], [60, 40], [0, 40]]], ['line', '#FCD116', 0, 40, 60, 0, 13], ['line', '#000000', 0, 40, 60, 0, 8.5]] }, ['Kongo', 'Namibia', 'Trynidad i Tobago'], 'Dodoma', 'Największym miastem i portem jest Dar es Salaam.'],
  ['Seszele', 'hard', { shapes: [
    ['poly', '#003F87', [[0, 40], [0, 0], [20, 0]]], ['poly', '#FCD856', [[0, 40], [20, 0], [40, 0]]], ['poly', '#D62828', [[0, 40], [40, 0], [60, 0], [60, 13.3]]],
    ['poly', '#FFFFFF', [[0, 40], [60, 13.3], [60, 26.7]]], ['poly', '#007A3D', [[0, 40], [60, 26.7], [60, 40]]]] }, ['Mauritius', 'Gabon', 'Komory'], 'Wiktoria', 'Promienie rozchodzą się z dolnego rogu, symbolizując kraj idący w przyszłość.'],
  ['Benin', 'hard', { shapes: [['rect', '#008751', 0, 0, 24, 40], ['rect', '#FCD116', 24, 0, 36, 20], ['rect', '#E8112D', 24, 20, 36, 20]] }, ['Madagaskar', 'Gwinea', 'Mali'], 'Porto-Novo', 'Siedziba rządu mieści się w Kotonu.'],
  ['Madagaskar', 'hard', { shapes: [['rect', '#FFFFFF', 0, 0, 20, 40], ['rect', '#FC3D32', 20, 0, 40, 20], ['rect', '#007E3A', 20, 20, 40, 20]] }, ['Benin', 'Mauritius', 'Gwinea Bissau'], 'Antananarywa', ''],
  ['Botswana', 'hard', { bg: '#75AADB', shapes: [['rect', '#FFFFFF', 0, 15, 60, 10], ['rect', '#000000', 0, 17, 60, 6]] }, ['Estonia', 'Sierra Leone', 'Gambia'], 'Gaborone', 'Błękit to deszcz, w tym suchym kraju najcenniejsza rzecz.'],
  ['Surinam', 'hard', { h: [['#377E3F', 2], ['#FFFFFF', 1], ['#B40A2D', 4], ['#FFFFFF', 1], ['#377E3F', 2]], shapes: [['star', '#ECC81D', 30, 20.5, 6.5]] }, ['Gujana', 'Boliwia', 'Gambia'], 'Paramaribo', 'Żółta gwiazda symbolizuje jedność wszystkich mieszkańców.']
].map(([name, level, spec, wrong, capital, note]) => ({
  id: 'flag:' + name, kind: 'flag', level, spec, text: 'Do jakiego kraju należy ta flaga?', a: name, wrong,
  fact: `To flaga: ${name}.${capital ? ` Stolica: ${capital}.` : ''}${note ? ' ' + note : ''}`
}));

const FACTS = [
  /* easy */
  ['easy', 'Która rzeka jest najdłuższa w Europie?', 'Wołga', ['Dunaj', 'Ren', 'Dniepr'], 'Wołga ma ok. 3 530 km i uchodzi do Morza Kaspijskiego. Dunaj jest drugi, ok. 2 850 km.'],
  ['easy', 'Który ocean jest największy?', 'Spokojny', ['Atlantycki', 'Indyjski', 'Arktyczny'], 'Ocean Spokojny zajmuje mniej więcej jedną trzecią powierzchni Ziemi.'],
  ['easy', 'Który szczyt jest najwyższy na świecie?', 'Mount Everest', ['K2', 'Kangczendzonga', 'Mont Blanc'], 'Everest ma 8 849 m n.p.m. K2 jest drugi, ma 8 611 m.'],
  ['easy', 'Jak nazywa się stolica Australii?', 'Canberra', ['Sydney', 'Melbourne', 'Perth'], 'Canberrę zbudowano od zera jako kompromis między rywalizującymi Sydney i Melbourne.'],
  ['easy', 'Na którym kontynencie leży większość Egiptu?', 'Afryka', ['Azja', 'Europa', 'Australia'], 'Tylko Półwysep Synaj leży w Azji, reszta kraju jest w Afryce.'],
  ['easy', 'Która pustynia jest największą gorącą pustynią świata?', 'Sahara', ['Gobi', 'Kalahari', 'Atakama'], 'Sahara ma ok. 9 mln km². Największą pustynią w ogóle jest lodowa Antarktyda.'],
  ['easy', 'Jaki jest najwyższy szczyt Polski?', 'Rysy', ['Śnieżka', 'Babia Góra', 'Giewont'], 'Polski wierzchołek Rysów ma 2 499 m n.p.m. Najwyższy wierzchołek, 2 503 m, leży po stronie słowackiej.'],
  ['easy', 'Jak nazywa się stolica Kanady?', 'Ottawa', ['Toronto', 'Vancouver', 'Montreal'], 'Ottawę wybrała na stolicę królowa Wiktoria w 1857 roku.'],
  ['easy', 'Która rzeka przepływa przez Kraków i Warszawę?', 'Wisła', ['Odra', 'Warta', 'Bug'], 'Wisła to najdłuższa rzeka Polski, ma ponad 1 000 km.'],
  ['easy', 'Który kontynent jest największy?', 'Azja', ['Afryka', 'Ameryka Północna', 'Europa'], 'Azja zajmuje prawie jedną trzecią lądów Ziemi.'],
  ['easy', 'Stolicą którego kraju jest Reykjavik?', 'Islandia', ['Norwegia', 'Finlandia', 'Irlandia'], 'To najdalej na północ położona stolica niepodległego państwa.'],
  ['easy', 'W którym kraju znajduje się Wielki Kanion?', 'USA', ['Meksyk', 'Kanada', 'Australia'], 'Kanion wyrzeźbiła rzeka Kolorado w stanie Arizona.'],
  ['easy', 'Nad jakim morzem leży Polska?', 'Bałtyckim', ['Północnym', 'Czarnym', 'Śródziemnym'], 'Bałtyk ma niskie zasolenie, bo zasilają go liczne rzeki.'],
  ['easy', 'Który kraj ma kształt buta?', 'Włochy', ['Grecja', 'Hiszpania', 'Chorwacja'], 'Półwysep Apeniński wygląda jak but z obcasem i czubkiem.'],
  ['easy', 'Nad jaką rzeką leży Kair?', 'Nil', ['Eufrat', 'Kongo', 'Niger'], 'Kair to jedno z największych miast Afryki.'],
  ['easy', 'Który ocean leży między Europą a Ameryką Północną?', 'Atlantycki', ['Spokojny', 'Indyjski', 'Arktyczny'], 'Atlantyk jest drugim co do wielkości oceanem świata.'],
  ['easy', 'Jak nazywa się najwyższy szczyt Alp?', 'Mont Blanc', ['Matterhorn', 'Grossglockner', 'Zugspitze'], 'Mont Blanc ma ok. 4 806 m n.p.m. i leży na granicy Francji i Włoch.'],
  /* normal */
  ['normal', 'Które państwo jest najmniejsze na świecie?', 'Watykan', ['Monako', 'San Marino', 'Liechtenstein'], 'Watykan ma ok. 0,44 km², mniej niż wiele parków miejskich.'],
  ['normal', 'Ile państw ma dostęp do Morza Kaspijskiego?', '5', ['3', '4', '6'], 'Rosja, Kazachstan, Turkmenistan, Iran i Azerbejdżan.'],
  ['normal', 'Które jezioro jest najgłębsze na świecie?', 'Bajkał', ['Tanganika', 'Titicaca', 'Wiktorii'], 'Bajkał ma ok. 1 640 m głębokości i mieści ok. 20% niezamarzniętej słodkiej wody powierzchniowej na Ziemi.'],
  ['normal', 'Który kraj ma najwięcej mieszkańców?', 'Indie', ['Chiny', 'USA', 'Indonezja'], 'Według szacunków ONZ Indie wyprzedziły Chiny w 2023 roku.'],
  ['normal', 'Przez które miasto przepływa Tamiza?', 'Londyn', ['Dublin', 'Edynburg', 'Manchester'], 'Tamiza ma ok. 346 km i uchodzi do Morza Północnego.'],
  ['normal', 'W jakim kraju leży Machu Picchu?', 'Peru', ['Boliwia', 'Chile', 'Ekwador'], 'Miasto Inków leży w Andach na wysokości ok. 2 430 m.'],
  ['normal', 'Który kraj ma najdłuższą linię brzegową?', 'Kanada', ['Rosja', 'Australia', 'Norwegia'], 'Wybrzeże Kanady ma ponad 200 tys. km, głównie dzięki tysiącom wysp.'],
  ['normal', 'Jaka rzeka jest najdłuższa w Afryce?', 'Nil', ['Kongo', 'Niger', 'Zambezi'], 'Nil ma ok. 6 650 km, a jego dorzecze obejmuje 11 krajów.'],
  ['normal', 'Która cieśnina oddziela Europę od Afryki?', 'Gibraltarska', ['Bosfor', 'Kaletańska', 'Mesyńska'], 'W najwęższym miejscu ma tylko ok. 14 km.'],
  ['normal', 'W jakim kraju jest najwyższy wodospad świata, Salto Angel?', 'Wenezuela', ['Brazylia', 'Kanada', 'Zambia'], 'Salto Angel spada z wysokości 979 m.'],
  ['normal', 'Jak nazywa się stolica Turcji?', 'Ankara', ['Stambuł', 'Izmir', 'Antalya'], 'Ankara jest stolicą od 1923 roku, choć największym miastem pozostaje Stambuł.'],
  ['normal', 'Jak nazywa się stolica Brazylii?', 'Brasília', ['Rio de Janeiro', 'São Paulo', 'Salvador'], 'Brasílię zbudowano od podstaw i otwarto w 1960 roku.'],
  ['normal', 'Która rzeka niesie najwięcej wody na świecie?', 'Amazonka', ['Nil', 'Jangcy', 'Missisipi'], 'Amazonka odprowadza do oceanu więcej wody niż kilka kolejnych największych rzek razem wziętych.'],
  ['normal', 'Który kraj ma najwięcej wysp?', 'Szwecja', ['Grecja', 'Filipiny', 'Chorwacja'], 'Szwecja ma ponad 260 tysięcy wysp, większość bezludnych.'],
  ['normal', 'Jak nazywa się najwyższy szczyt Afryki?', 'Kilimandżaro', ['Kenia', 'Ruwenzori', 'Atlas'], 'Kilimandżaro w Tanzanii ma 5 895 m n.p.m.'],
  ['normal', 'Jak nazywa się najwyższy szczyt Ameryki Południowej?', 'Aconcagua', ['Chimborazo', 'Huascarán', 'Ojos del Salado'], 'Aconcagua w Argentynie ma ok. 6 961 m, to najwyższy szczyt poza Azją.'],
  ['normal', 'W jakim kraju leży świątynia Angkor Wat?', 'Kambodża', ['Tajlandia', 'Laos', 'Wietnam'], 'Angkor Wat jest nawet na fladze Kambodży.'],
  ['normal', 'Jak nazywa się stolica Nowej Zelandii?', 'Wellington', ['Auckland', 'Christchurch', 'Queenstown'], 'To najdalej na południe położona stolica niepodległego państwa.'],
  ['normal', 'Które państwo jest największe w Afryce?', 'Algieria', ['Sudan', 'Kongo (DRK)', 'Libia'], 'Algieria jest największa od 2011 roku, gdy podzielił się Sudan.'],
  ['normal', 'Nad jakim zbiornikiem leży najniżej położony ląd na Ziemi?', 'Morze Martwe', ['Morze Kaspijskie', 'Morze Czerwone', 'Jezioro Asal'], 'Brzeg Morza Martwego leży ok. 430 m poniżej poziomu morza.'],
  /* hard */
  ['hard', 'Jak nazywa się stolica Kazachstanu?', 'Astana', ['Ałmaty', 'Biszkek', 'Taszkent'], 'Stolicę przeniesiono z Ałmaty w 1997 roku. W latach 2019–2022 miasto nazywało się Nur-Sułtan.'],
  ['hard', 'Która pustynia jest najsuchszą niepolarną pustynią świata?', 'Atakama', ['Sahara', 'Namib', 'Gobi'], 'W niektórych miejscach Atakamy nigdy nie zanotowano deszczu.'],
  ['hard', 'Który kraj ma najwięcej stref czasowych, licząc terytoria zamorskie?', 'Francja', ['Rosja', 'USA', 'Wielka Brytania'], 'Francja ma 12 stref czasowych dzięki terytoriom rozsianym po całym świecie.'],
  ['hard', 'Która stolica (siedziba rządu) leży najwyżej na świecie?', 'La Paz', ['Quito', 'Bogota', 'Katmandu'], 'La Paz leży na ok. 3 600 m n.p.m. Konstytucyjną stolicą Boliwii jest Sucre.'],
  ['hard', 'Który z tych krajów nie ma dostępu do morza?', 'Paragwaj', ['Urugwaj', 'Ekwador', 'Gujana'], 'Mimo to Paragwaj ma marynarkę wojenną, która pływa po rzekach.'],
  ['hard', 'Na granicy jakich krajów leży jezioro Titicaca?', 'Peru i Boliwia', ['Chile i Argentyna', 'Peru i Ekwador', 'Boliwia i Chile'], 'To najwyżej położone żeglowne jezioro świata, ok. 3 810 m n.p.m.'],
  ['hard', 'Ile państw leży w Afryce (członków ONZ)?', '54', ['48', '50', '58'], 'Najmłodszy z nich to Sudan Południowy, niepodległy od 2011 roku.'],
  ['hard', 'Jak nazywa się stolica Tuvalu?', 'Funafuti', ['Majuro', 'Tarawa', 'Nukuʻalofa'], 'Tuvalu ma tylko ok. 26 km² i jest jednym z najmniejszych państw świata.'],
  ['hard', 'Jak nazywa się stolica Mongolii?', 'Ułan Bator', ['Ałmaty', 'Irkuck', 'Biszkek'], 'To najzimniejsza stolica świata, średnia roczna temperatura jest bliska zera.'],
  ['hard', 'Które państwo leży w całości wewnątrz RPA?', 'Lesotho', ['Eswatini', 'Botswana', 'Namibia'], 'Cały kraj leży powyżej 1 000 m n.p.m., jego najniższy punkt ma ok. 1 400 m.'],
  ['hard', 'Jak nazywa się stolica Bhutanu?', 'Thimphu', ['Katmandu', 'Dhaka', 'Lhasa'], 'To jedna z nielicznych stolic bez sygnalizacji świetlnej, ruchem kierują policjanci.'],
  ['hard', 'Które państwo jest „podwójnie śródlądowe” (graniczy tylko z krajami bez morza)?', 'Uzbekistan', ['Kazachstan', 'Mongolia', 'Afganistan'], 'Poza nim takim państwem jest tylko Liechtenstein.'],
  ['hard', 'Jak nazywa się stolica Madagaskaru?', 'Antananarywa', ['Port Louis', 'Moroni', 'Maputo'], 'Miasto leży na wyżynie, ok. 1 280 m n.p.m.'],
  ['hard', 'Jak nazywa się stolica Burkina Faso?', 'Wagadugu', ['Bamako', 'Niamey', 'Akra'], 'Co dwa lata odbywa się tu FESPACO, największy festiwal filmowy Afryki.'],
  ['hard', 'Jak nazywa się pustynia w Namibii słynąca z czerwonych wydm?', 'Namib', ['Kalahari', 'Karoo', 'Ogaden'], 'Namib uchodzi za najstarszą pustynię świata, ma kilkadziesiąt milionów lat.'],
  ['hard', 'Jak nazywa się stolica Kirgistanu?', 'Biszkek', ['Duszanbe', 'Aszchabad', 'Ałmaty'], 'Ponad 90% Kirgistanu zajmują góry.'],
  ['hard', 'W którym kraju Ameryki Południowej językiem urzędowym jest niderlandzki?', 'Surinam', ['Gujana', 'Urugwaj', 'Paragwaj'], 'Surinam był holenderską kolonią do 1975 roku.']
].map(([level, text, a, wrong, fact]) => ({ id: 'fact:' + text, kind: 'fact', level, text, a, wrong, fact }));

/* ---------- drawing a round ---------- */
/* Which question levels each game level may use, and how strongly.
   A question migrates at most one level up: easy -> normal, normal -> hard. */
const ALLOWED = {
  chill: { easy: 1 },
  normal: { normal: 1, easy: 0.5 },
  hard: { hard: 1, normal: 0.5 }
};
/* Questions already shown this browser session are far less likely to come back. */
const SEEN_KEY = 'gq-seen';
const REPEAT_FACTOR = 0.08;
function loadSeen() { try { return JSON.parse(sessionStorage.getItem(SEEN_KEY) || '{}') || {}; } catch (e) { return {}; } }
function saveSeen(seen) { try { sessionStorage.setItem(SEEN_KEY, JSON.stringify(seen)); } catch (e) {} }
const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function pick(pool, level, n, seen) {
  const allowed = ALLOWED[level];
  return pool
    .filter((q) => allowed[q.level])
    .map((q) => ({ q, key: Math.pow(Math.random(), 1 / (allowed[q.level] * Math.pow(REPEAT_FACTOR, seen[q.id] || 0))) }))
    .sort((x, y) => y.key - x.key)
    .slice(0, n)
    .map((x) => x.q);
}
function buildRound(cat, level) {
  const seen = loadSeen();
  let qs;
  if (cat === 'flags') qs = pick(FLAGS, level, 10, seen);
  else if (cat === 'facts') qs = pick(FACTS, level, 10, seen);
  else qs = pick(FLAGS, level, 5, seen).concat(pick(FACTS, level, 5, seen));
  qs.forEach((q) => { seen[q.id] = (seen[q.id] || 0) + 1; });
  saveSeen(seen);
  return shuffle(qs).map((q) => {
    const answers = shuffle([q.a].concat(q.wrong));
    return Object.assign({}, q, { answers, correct: answers.indexOf(q.a) });
  });
}
window.__geoQuiz = { questions: FLAGS.concat(FACTS), flagSVG, buildRound, ALLOWED };
