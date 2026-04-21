export type Article = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  category: "algemeen" | "utiliteit" | "woningbouw" | "vacature";
  cover: string; // "/images/actueel/<slug>/cover.jpg"
  body: string; // markdown
  /** Optional Vimeo video rendered above the article body (just the numeric ID) */
  vimeoId?: string;
};

export const articles: Article[] = [
  {
    "slug": "interview-met-projectleider-patrick-passie-en-vakmanschap-in-de-praktijk",
    "title": "Interview met projectleider Patrick over nieuwbouw tandartspraktijk in Hengelo",
    "date": "2025-10-31",
    "category": "utiliteit",
    "cover": "/images/actueel/interview-met-projectleider-patrick-passie-en-vakmanschap-in-de-praktijk/cover.jpg",
    "body": "## Passie en vakmanschap in de praktijk\n\n**Bij de nieuwbouw van tandartspraktijk Passie en Liefde in Hengelo vierden we onlangs het hoogste punt. Een feestelijke mijlpaal in een traject waarin samenwerking, vakmanschap en nuchter bouwen centraal staan. In dit project speelt Patrick, projectleider bij Bouwbedrijf Homan, een centrale rol. Hij deelt zijn kijk op het ontwerp en de samenwerking. Ook vertelt hij wat deze tandartspraktijk zo bijzonder maakt.**\n\n![](/images/actueel/interview-met-projectleider-patrick-passie-en-vakmanschap-in-de-praktijk/01.jpg)\n\n\n\n*De vlag wappert: het hoogste punt van de nieuwe tandartspraktijk is bereikt*\n\n## **Wie ben je en wat is jouw rol binnen dit project?**\n\n“Ik ben Patrick, projectleider bij Bouwbedrijf Homan. Voor dit project heb ik de calculatie, werkvoorbereiding en projectleiding op me genomen. Van begin tot eind ben ik betrokken geweest bij de uitvoering. Dat maakt het extra mooi om nu het hoogste punt te vieren.”\n\n![](/images/actueel/interview-met-projectleider-patrick-passie-en-vakmanschap-in-de-praktijk/02.jpg)\n\n\n\n*Het team van tandartspraktijk Passie en Liefde viert samen het bereiken van het hoogste punt van de bouw*\n\n## **Wat is het doel van deze praktijk en hoe zie je dat terug in het ontwerp?**\n\n‘’Het gaat om een ​​nieuwe tandartspraktijk met zes behandelkamers, een röntgenruimte en een flexibele indeling. Voor de röntgenkamer wordt in het ontwerp rekening gehouden met stralingswerende maatregelen, zoals lood in muren en deuren. Ook installatietechnisch is het maatwerk: van afzuiging tot behandelstoelen. Alles is afgestemd op de praktijkfunctie. De gevel is uitgevoerd in aluminium. Dat zorgt voor een industrieel karakter. De architect heeft daarin goed meegedacht. En wat fijn is: de indeling is aanpasbaar, zodat de praktijk ook in de toekomst mee kan bewegen.”\n\n![](/images/actueel/interview-met-projectleider-patrick-passie-en-vakmanschap-in-de-praktijk/03.jpg)\n\n![](/images/actueel/interview-met-projectleider-patrick-passie-en-vakmanschap-in-de-praktijk/04.jpg)\n\n\n\n*3D-ontwerp tandartspraktijk *\n\n## **Hoe verloopt de samenwerking?**\n\n“De samenwerking verloopt prettig. We werken in een bouwteam met de opdrachtgever, bouwbegeleider van NSNK, installateur Vennegoor, en Eissink voor de wanden en plafonds. Iedereen weet waar hij mee bezig is. Mijn rol is om heldere uitgangspunten te stellen en te zorgen voor een pragmatische uitvoering. En dan heb je mensen nodig die graag samenwerken en de schouders eronder zetten. Dat werkt.”\n\n## **Wat hoop je dat de gebruikers straks zullen ervaren?**\n\n“Ik hoop dat ze binnenkomen in een fijne, lichte werkplek. Dat ze voelen dat er met kennis, ervaring en vakmanschap is gebouwd en dat ze hier nog jarenlang met plezier kunnen werken aan mooie dingen.”\n\n## **Wat neem je mee uit dit project naar een volgend project?**\n\n“Dat prettig samenwerken begint bij mensen met kennis van zaken. Mensen die weten wat ze doen. Twentse nuchterheid en vakmanschap, daar draait het om. Laat de volgende tandartspraktijk maar komen!”"
  },
  {
    "slug": "zomertijd-bij-bouwbedrijf-homan",
    "title": "Zomertijd bij Bouwbedrijf Homan",
    "date": "2025-07-23",
    "category": "algemeen",
    "cover": "/images/actueel/zomertijd-bij-bouwbedrijf-homan/cover.jpg",
    "body": "## Bouwhelm af, slippers aan\n\nVan vrijdag 25 juli t/m vrijdag 15 augustus genieten wij van een welverdiende (bouw)vakantie. Even opladen, zodat we er straks weer vol energie tegenaan kunnen.\n\n## **We bouwen straks weer verder**\n\nVanaf maandag 18 augustus zijn we weer aan het werk en staan we graag voor je klaar. Heb je tijdens je vakantie bouwplannen gekregen? Mail gerust naar info@bouwbedrijfhoman.nl. We denken graag met je mee en nemen zo snel mogelijk contact met je op.\n\nFijne zomer!"
  },
  {
    "slug": "unieke-dronevlucht-door-opgeleverd-zorgcomplex-de-herbergier-in-enter",
    "title": "Unieke dronevlucht door opgeleverd zorgcomplex De Herbergier in Enter",
    "date": "2025-06-30",
    "category": "utiliteit",
    "cover": "/images/actueel/unieke-dronevlucht-door-opgeleverd-zorgcomplex-de-herbergier-in-enter/cover.jpg",
    "vimeoId": "1097453219",
    "body": "## 20 comfortabele appartementen\n\nIn opdracht van Scala Pojects bouwden we hier een modern zorgcomplex met 20 appartementen. Bekijk hoe comfort en een moderne, huiselijke sfeer samenkomen in dit bijzondere pand.\n\n## Meer weten?\n\nWe staan je graag te woord. Neem gerust contact met ons op door te bellen naar 0547 38 10 35 of een mailtje te sturen naar info@bouwbedrijfhoman.nl."
  },
  {
    "slug": "opvallend-onderscheidend-in-details",
    "title": "Interview met Luc Velten en Justin Hoek in het Ondernemersmagazine",
    "date": "2025-06-26",
    "category": "algemeen",
    "cover": "/images/actueel/opvallend-onderscheidend-in-details/cover.jpg",
    "body": "## Opvallend onderscheidend in details\n\n**Nergens in Nederland vind je zoveel bouwbedrijven bij elkaar als in Enter en Rijssen. Je moet dan wel van goeden huize komen wanneer je het als vierentwintigjarige aandurft om een compleet bouwbedrijf inclusief 32 man personeel over te nemen en je dan ook nog weet te onderscheiden met hoogwaardige bouw. Luc Velten bewijst met Bouwbedrijf Homan in Enter nu al ruim acht jaar, waarvan de laatste vier samen met partner Justin Hoek, dat het kan. En met succes. **\n\nLuc had er al op jonge leeftijd zijn vakantiebaantjes, werkte er op zaterdagen en liep er ook nog stage. Dus toen Gerben Homan hem in 2017 vroeg om het bedrijf over te nemen, hoefde hij er niet al te lang over na te denken: “Dat was net voor de bouwvak en drie maanden later waren we eruit. De plannen voor de nieuwbouw aan de Vonderweg waren ook al in kannen en kruiken, we moesten alleen nog een bouwer vinden”, zegt Luc lachend. En het huidige bedrijfspand verraadt dan ook al meteen wat hij bedoelt met “je moet je weten te onderscheiden”. Want er zou ook maar zo een architectenbureau gehuisvest kunnen zijn.\n\n## **Kwaliteit vóór budget**\n\nAchter het moderne pand, dat op het eerste oog in niets aan een bouwbedrijf doet denken, vind je een 75 meter lange hal. Ze hebben al het bouwmaterieel in eigen beheer en huren nagenoeg niks in. Zo hebben ze drie 24 meter hijskranen en een grote 40 meter torenkraan voor grootschalige projecten. Luc is inmiddels 34 en het bedrijf telt nu 43 medewerkers, waarvan ongeveer een kwart op kantoor, een kwart metselaar en de helft timmerman is. De groei maakte ook een uitbreiding van de directie noodzakelijk, waardoor in 2021 Justin Hoek (37) toetrad als operationeel directeur. Luc houdt zich sindsdien als algemeen directeur vooral bezig met ontwikkeling en klantenbegeleiding in het voortraject en Justin coördineert en begeleidt alle lopende projecten. Justin: ”Wat mij het meest aansprak is dat hier vooral de kwaliteit van werk vooropstaat, terwijl bij de meeste bouwbedrijven het budget leidend is. Door vakmensen op de bouw, een goede aansturing vanaf kantoor en het gebruik van mooie materialen zijn we in staat om voortdurend kwaliteit te leveren. Dat vinden we belangrijk, want zowel de klant als wij willen tevreden zijn. Als je rondrijdt hier in Enter kun je eigenlijk gewoon zien wat door Homan is gebouwd. De afwerking, het straalt er vanaf. En toch werken ook wij met marktconforme prijzen hoor.”\n\n## ** ****Rollaag, hanekam en boerenvlechtwerk**\n\n“De lat ligt hier best wel hoog. Dat is goed voor de opdrachtgever, maar onze mensen vinden het ook heel prettig werken. Het is voor iedereen een uitdaging, van projectleider tot timmerman en metselaar. Seriematige woningbouw kan iedereen, maar zodra het lastig wordt komen wij vaak in beeld. We zijn hier gek op moeilijke details zoals een rollaag, boerenvlechtwerk of hanekam. Dus metselaars: kom maar op. We hebben nog een vacature!”, zegt Luc. “En dat er leveranciers en onderaannemers zijn die ook hun eigen huis met ons willen bouwen, is ook wel veelzeggend. Zij werken natuurlijk niet alleen voor ons, maar zien ook hoe wij te werk gaan en welke materialen wij gebruiken.”\n\n## **Van woningbouw tot utiliteitsbouw**\n\nBij Bouwbedrijf Homan kunnen opdrachtgevers niet alleen terecht voor luxe woningbouw, maar ook voor twee-onder-een-kapwoningen, verbouwingen en bedrijfspanden. Zo werden er op Berghorst fase 2 in Enter 25 woningen gebouwd voor ontwikkelaars, waarbij Homan ook betrokken was bij de kopersbegeleiding. Ook zijn ze daar nu nog bezig met de realisatie van zeven vrijstaande woningen. En in Hengelo worden vier fraaie woningen in de wijk Dalmeden neergezet. “Maar ook het zorgcomplex De Herbergier, op de plek van het bekende café De Kröl in Enter, wordt door ons gerealiseerd. Het wordt een modern complex met 21 appartementen”, zegt Luc trots.\n\n## **Onderscheid ook in personeelsbeleid**\n\nHoman is voornamelijk werkzaam in Twente. Je zult ze niet snel elders in het land tegenkomen. “Het is voor onze werknemers prettig dat ze dicht bij huis werken en dus weinig reistijd hebben. We hebben ook nauwelijks verloop en dat komt daarnaast ook door het soort werk waarmee we ons willen onderscheiden, evenals de afwisseling erin”, aldus Luc. Als metselaar draag je niet alleen je steentje bij aan het gevelmetselwerk, maar werk je in een team met de timmerlieden samen om het beste resultaat neer te zetten. Als timmerman beslis je echt mee over de details, planning en heb je klantcontact. “Met plezier naar je werk gaan en werken in een goede sfeer zie je terug. Ook daarin onderscheiden we ons”, zegt  Justin tot slot.\n\n*Dit artikel is eerder gepubliceerd op [www.ondernemers-magazine.nl.](http://www.ondernemers-magazine.nl/)*"
  },
  {
    "slug": "fijne-kerstdagen-en-een-gezond-en-gelukkig-2025",
    "title": "Fijne kerstdagen en een gezond en gelukkig 2025!",
    "date": "2024-12-18",
    "category": "algemeen",
    "cover": "/images/actueel/fijne-kerstdagen-en-een-gezond-en-gelukkig-2025/cover.jpg",
    "body": "## We zijn er even tussenuit\n\nVan maandag 23 december tot en met vrijdag 3 januari zijn we er even niet. Heb je ons voor die tijd nog nodig? Laat het ons dan weten door een mail te sturen naar info@bouwbedrijfhoman.nl of te bellen naar 0547 38 1035. We helpen je graag!\n\n## Heb je in de tussentijd bouwplannen gekregen?\n\nStuur dan even een mail naar info@bouwbedrijfhoman.nl. We nemen zo snel mogelijk contact met je op in het nieuwe jaar!\n\n## Fijne feestdagen\n\nOp maandag 6 januari staat ons hele team weer klaar om aan de slag te gaan. We wensen je een fijne kerst en een gelukkig en bovenal gezond nieuwjaar. Tot in 2025!"
  },
  {
    "slug": "collegas-in-actie-enorme-glazen-wand-geplaatst-in-nieuwbouwwoning-hengelo",
    "title": "Collega’s in actie: enorme glazen wand geplaatst in nieuwbouwwoning Hengelo",
    "date": "2024-12-16",
    "category": "woningbouw",
    "cover": "/images/actueel/collegas-in-actie-enorme-glazen-wand-geplaatst-in-nieuwbouwwoning-hengelo/cover.jpg",
    "body": "In Hengelo plaatsen we onlangs een enorme glazen wand in een nieuwbouwvilla. Het glas loopt van maar liefst de kelder tot aan de verdiepingsvloer. Een echte eyecatcher waardoor de bewoners genieten van veel natuurlijk licht in hun villa. Vanwege de grote oppervlakte van de ruit was het een uitdagende klus die we daarom van begin tot eind vast lieten leggen in deze video.  In dit project werkten we samen met [Versteeg Glas](https://www.versteeg.com/). Bekijk de video en zie onze collega’s samen met de mannen van Versteeg Glas in actie."
  },
  {
    "slug": "zomervakantie-we-sluiten-onze-deuren-even",
    "title": "Zomervakantie: we sluiten onze deuren even",
    "date": "2024-07-25",
    "category": "algemeen",
    "cover": "/images/actueel/zomervakantie-we-sluiten-onze-deuren-even/cover.jpg",
    "body": "## Tijd voor ontspanning\n\nWe kijken terug op een mooie eerst helft van 2024. We realiseerden mooie projecten met als resultaat veel tevreden opdrachtgevers. Daar zijn we trots op! Die goede lijn hopen we in het komende half jaar door te trekken. Maar eerst is het tijd voor een welverdiende vakantie voor onze collega’s.\n\n## We sluiten onze deuren even\n\nVan maandag 29 juli tot en met vrijdag 16 augustus zijn we gesloten. We kijken ernaar uit om daarna opgeladen en vol energie weer voor je aan de slag te gaan.\n\n## Tijdens je vakantie bouwplannen gekregen?\n\nDan horen we graag van je. Stuur even een mailtje naar info@bouwbedrijfhoman.nl en we nemen zo snel mogelijk contact met je op."
  },
  {
    "slug": "woonproject-op-een-bijzondere-plek-in-enter",
    "title": "Woonproject op een bijzondere plek in Enter",
    "date": "2024-04-12",
    "category": "woningbouw",
    "cover": "/images/actueel/woonproject-op-een-bijzondere-plek-in-enter/cover.jpg",
    "body": "## Een thuis voor mensen met dementie\n\nHet zorgcomplex krijgt de naam ‘De Herbergier’ en wordt een fijne, kleinschalige woonvoorziening voor mensen met dementie. Om dit te realiseren wordt de bestaande bebouwing gesloopt. Hier komt nieuwbouw voor in de plaats.\n\n## Lokale aannemer\n\nWe zijn trots dat we als Enters bouwbedrijf deze opdracht gegund hebben gekregen. De bouw van een pand met een mooie bestemming op een plek waar veel Enternaren warme herinneringen aan hebben.\n\n## Vooruitblik\n\nHet 3D ontwerp (gemaakt door Arco Architecten BNA) laat op een realistische manier zien hoe het nieuwe pand eruit komt te zien. De sloopwerkzaamheden zijn inmiddels gestart in maart. We streven ernaar om halverwege 2024 te beginnen met de bouw, om vervolgens in 2025 het nieuwe zorgcomplex op te leveren.\n\n## Meer weten?\n\nWe staan je graag te woord. Neem gerust contact met ons op door te bellen naar 0547 38 10 35 of een mailtje te sturen naar info@bouwbedrijfhoman.nl."
  },
  {
    "slug": "bouwvak-van-maandag-31-juli-tot-en-met-vrijdag-18-augustus",
    "title": "Bouwvak van maandag 31 juli tot en met vrijdag 18 augustus",
    "date": "2023-07-28",
    "category": "algemeen",
    "cover": "/images/actueel/bouwvak-van-maandag-31-juli-tot-en-met-vrijdag-18-augustus/cover.jpg",
    "body": "## Even opladen\n\nVanwege de bouwvak(vakantie) is het de komende weken wat rustiger op onze bouwplaatsen. Op vrijdag 28 juli sluiten we het eerste half jaar van 2023 gezellig af tijdens de jaarlijkse bouwvakborrel. Daarna gaan onze collega’s met hun familie of vrienden genieten van een welverdiende vakantie.\n\n## We gaan er even tussenuit\n\nVan maandag 31 juli tot en met vrijdag 18 augustus zijn we gesloten.\n\n## Heb je in de tussentijd bouwplannen gekregen?\n\nStuur dan even een mailtje naar info@bouwbedrijfhoman.nl. We nemen zo snel mogelijk contact met je op!\n\nGeniet van de zomer!"
  },
  {
    "slug": "40-jaar-echt-homan-een-jaar-lang-feest",
    "title": "40 jaar Echt Homan: een jaar lang feest",
    "date": "2023-05-24",
    "category": "algemeen",
    "cover": "/images/actueel/40-jaar-echt-homan-een-jaar-lang-feest/cover.jpg",
    "body": "## **Gezellige feestavond**\n\nWe trapten vorig jaar af bij ’t Rheins in Enter onder het genot van een heerlijke BBQ. Samen met onze collega’s, partners en oud-collega’s vierden we ons 40-jarig bestaan. We blikten aan de hand van een spelshow ‘Ik hou van Homan’ terug op de afgelopen jaren. Leuke foto’s passeerden de revue en dat leverde natuurlijk een hoop ‘daar-had-je-bij-moeten-zijn’ momenten op.\n\n## **3-daags personeelsfeest in Maastricht**\n\nOp Hemelvaartsdag vertrokken we met alle collega’s in een grote touringcar richting het zuiden van ons land voor een 3-daags jubileumfeest. Gave activiteiten stonden op het programma. Zo daalden we af in de mergelgrotten van Valkenburg voor een ondergronds mountainbike avontuur. En zochten we het avontuur op door met 4×4 Landrovers een offroad terrein te rijden. Maastricht stond voor ons in het teken van gezelligheid, humor en een terugblik op ‘40 jaar Echt Homan’. Maar bovenal in het teken van nieuwe herinneringen maken. Een weekend waar we ongetwijfeld nog lang over napraten!\n\n![](/images/actueel/40-jaar-echt-homan-een-jaar-lang-feest/01.jpg)\n\n## **Al 40 jaar vol prachtige verhalen**\n\nWe vierden dit jaar een hele bijzondere mijlpaal waar we ontzettend trots op zijn. Terugkijkend is er veel veranderd de afgelopen jaren. Maar wat altijd bleef is ons ‘hart voor de bouw’. We mogen al jarenlang met veel plezier opdrachtgevers blij maken met een luxe woning of bedrijfspand. Daar gaan we vol energie mee door: op naar het volgende jubileum!\n\n![](/images/actueel/40-jaar-echt-homan-een-jaar-lang-feest/02.jpg)"
  },
  {
    "slug": "aanbod-4-royale-vrijstaande-kavels-berghorst-fase-2-verkoop-bijna-van-start",
    "title": "Aanbod 4 royale vrijstaande kavels Berghorst fase 2: verkoop gestart!",
    "date": "2023-03-28",
    "category": "woningbouw",
    "cover": "/images/actueel/aanbod-4-royale-vrijstaande-kavels-berghorst-fase-2-verkoop-bijna-van-start/cover.jpg",
    "body": "**Aan de noordkant van Enter ligt de mooie woonwijk ‘De Berghorst’. Een wijk die in aanbouw is met een dorps en groen karakter. Op Berghorst fase 2 bieden we 4 ruime kavels aan. Dé kans om jouw droomhuis te bouwen op een royale kavel met veel leefruimte. **\n\n## **4 luxe en royale vrijstaande kavels**\n\nRoyaal, modern en energiezuinig wonen aan de rand van Enter? Dan is een vrijstaande kavel op Berghorst fase 2 misschien iets voor jou. Op deze kavels kun je geheel naar eigen wens jouw unieke droomhuis laten ontwerpen en bouwen. Bij Bouwbedrijf Homan begeleiden we je van ontwerp tot aan de oplevering. Ook kunnen we de bouwvergunningsaanvraag voor je verzorgen. Dit complete pakket aan informatie levert qua sfeer, techniek en financiën het meest optimale resultaat. Heb je al een ontwerp? Ook dan kun je uiteraard bij ons terecht.\n\n## Kavelgrootte en prijzen\n\nIn totaal bieden we ruime 4 kavels aan. De kavels hebben een grootte van 420 m2, 552 m2, 453 m2 en 513 m2. Meer informatie over de prijzen van de kavels vind je op de [website van Uniek Makelaars](https://www.uniekmakelaars.nl/woningen/wierdenseweg-ong-de-berghorst-fase-ii-te-enter/).\n\n[Prijsinformatie](https://www.uniekmakelaars.nl/woningen/wierdenseweg-ong-de-berghorst-fase-ii-te-enter/)\n\n## **Over woonwijk de Berghorst**\n\nDe woonwijk Berghorst in Enter wordt in meerdere fases aangelegd. Fase 1 is al enige tijd afgerond en nu wordt er gestart met de verkoop van fase 2. De komende jaren worden er in totaal 118 woningen van verschillende woningtypen gebouwd. Door het hele plan zijn er prachtige groene ruimtes gepland. De hele omgeving krijgt daardoor een natuurlijk karakter. Meer informatie over het groenplan van de Berghorst vind je op de [website van de gemeente Wierden](https://www.wierden.nl/groenplan-de-berghorst).\n\n[Over groenplan de Berghorst](https://www.wierden.nl/groenplan-de-berghorst)\n\n## **Energiezuinig wonen**\n\nKlimaat en duurzaamheid zijn met de stijgende energieprijzen actueler dan ooit. Ook in de bouw. Om energiezuinig bouwen te stimuleren, is per januari 2021 een nieuwe wet van kracht: BENG. Dat staat voor ‘Bijna Energie Neutraal Gebouw’ en bestaat uit vier energieprestatie-indicatoren.\n\nDe woningen die we realiseren op de Berghorst overtreffen deze gestelde BENG-eisen. Zo voorzien we de woningen standaard van vloerkoeling om oververhitting van de woning te voorkomen. Daarnaast zorgen we door een zorgvuldige keuze in installatiewerk voor een gebouw gebonden energieverbruik dat uitkomt op 0. Dat wil zeggen dat we de energiebehoefte van de woningen dekken met opgewekte energie. Zo ben je met de aanschaf van een nieuwe woning volledig voorbereid op een duurzame toekomst.\n\n## **Geïnteresseerd?**\n\nWil je ook dichtbij het buitengebied van Enter wonen en toch centraal ten opzichte van het dorpscentrum? Neem dan vrijblijvend contact met ons op en wij vertellen je graag over de mogelijkheden*. Je kunt bellen naar 0547 38 10 35 of mailen naar [info@bouwbedrijfhoman.nl](mailto:info@bouwbedrijfhoman.nl). We staan je graag te woord!\n\nHeb je wel interesse in een royale woning op de Berghorst, maar past een vrijstaande woning niet bij jouw/jullie woonwensen? We bieden ook 18 royale twee-onder-een-kapwoningen aan op Berghorst fase 2.\n\n[Lees hier meer over op onze website](https://www.bouwbedrijfhoman.nl/verkoop-18-twee-onder-een-kapwoningen-berghorst-fase-2/)\n\n* *Per november 2022 zit er op een aantal kavels een of meerdere opties.*"
  },
  {
    "slug": "duurzaam-inkopen-stip-certificering-voor-bouwbedrijf-homan",
    "title": "Duurzaam inkopen: STIP-certificering voor Bouwbedrijf Homan",
    "date": "2023-03-02",
    "category": "algemeen",
    "cover": "/images/actueel/duurzaam-inkopen-stip-certificering-voor-bouwbedrijf-homan/cover.jpg",
    "body": "*V.l.n.r.: Oscar van Doorn en Justin Hoek. *\n\nOp dinsdag 28 februari ontving operationeel directeur Justin Hoek het STIP-certificaat uit handen van Oscar van Doorn van certificatie-instelling [SKH](https://www.skh.nl/nl/).\n\n![](/images/actueel/duurzaam-inkopen-stip-certificering-voor-bouwbedrijf-homan/01.jpg)\n\n## Verantwoord hout inkopen\n\nJustin Hoek: “Met het STIP-bedrijfskeurmerk laten we zien dat we als bouwbedrijf bewust kiezen voor duurzaamheid. Dat betekent dat we kritisch zijn op waar we hout inkopen en kiezen voor verantwoord geproduceerd hout. Zo leveren we een positieve bijdrage aan een duurzamere wereld”.\n\n## Gezonde leefomgeving\n\nHet gebruik van verantwoord geproduceerd hout draagt direct bij aan de bescherming van bossen wereldwijd. Er wordt bijvoorbeeld niet meer hout uit het bos gehaald dan dat er bijgroeit. Belangrijk, want bossen zorgen voor een gezonde leefomgeving voor nu én later!\n\n## Meer weten?\n\nMeer weten over STIP of over verantwoord geproduceerd hout? Bekijk dan de website van STIP of neem contact met ons op. We staan je graag te woord!\n\n[Naar de website van STIP](https://www.stip.org/)"
  },
  {
    "slug": "fijne-kerstvakantie",
    "title": "Fijne kerstvakantie!",
    "date": "2022-12-23",
    "category": "algemeen",
    "cover": "/images/actueel/fijne-kerstvakantie/cover.jpg",
    "body": "Het jaar 2022 zit er bijna op. We kijken terug op een extra bijzonder jaar vanwege ons jubileum: al ‘[𝟒𝟎 𝐣𝐚𝐚𝐫 𝐄𝐜𝐡𝐭 𝐇𝐨𝐦𝐚𝐧](https://www.bouwbedrijfhoman.nl/bouwbedrijf-homan-bestaat-40-jaar/)‘. Een hele mooie mijlpaal die we op meerdere momenten vieren.\n\nDankzij onze opdrachtgevers hebben we ook in 2022 weer veel mooie projecten mogen realiseren. Daar zijn we trots op en dankbaar voor: op naar volgend jaar! Maar nu eerst genieten van de gezellige feestdagen die voor ons liggen. Van maandag 26 december tot maandag 9 januari sluiten we onze deuren. Heb je in deze periode een vraag? Stuur dan een mail naar info@bouwbedrijfhoman.nl. We nemen zo snel mogelijk contact met je op!\n\nNamens het hele team van Bouwbedrijf Homan wensen we je alvast een gelukkig en gezond 2023!"
  },
  {
    "slug": "verkoop-18-twee-onder-een-kapwoningen-berghorst-fase-2",
    "title": "Verkoop 18 twee-onder-een-kapwoningen Berghorst fase 2",
    "date": "2022-11-24",
    "category": "woningbouw",
    "cover": "/images/actueel/verkoop-18-twee-onder-een-kapwoningen-berghorst-fase-2/cover.png",
    "body": "**Aan de noordkant van Enter ligt de mooie woonwijk ‘De Berghorst’. Een wijk die in aanbouw is met een dorps en groen karakter. Binnen Berghorst fase 2 bouwen we in samenwerking met ontwikkelaar [Reggehave](https://www.reggehave.nl/) 18 luxe en royale twee-onder-een-kapwoningen. Modern, energiezuinig en veel leefruimte zijn dé sleutelwoorden voor de woningen. **\n\n## **Kavelgrootte en prijzen**\n\nIn totaal zijn er 18 kavels te koop waarbij de kavelgrootte varieert tussen 285 m2 en 370 m2. Met een vanaf verkoopprijs van € 459.500, – v.o.n. ben je de trotse eigenaar van één van deze woningen (inclusief kavel). De allereerste, enthousiaste kopers hebben de overeenkomst van hun gloednieuwe twee-onder-een-kap-woning op de Berghorst in Enter inmiddels getekend. Daarnaast staat een aantal woningen onder optie. Dat zien we graag, want dat betekent dat we nog meer mensen blij kunnen maken met een nieuwe woning. Hieronder zie je welke kavels nog vrij zijn.\n\n![](/images/actueel/verkoop-18-twee-onder-een-kapwoningen-berghorst-fase-2/01.jpg)\n\n\n\n*Laatste update: 24 november 2023*\n\n## **Over woonwijk de Berghorst**\n\nDe woonwijk wordt in meerdere fases aangelegd. Fase 1 is al enige tijd afgerond en nu wordt er gestart met de verkoop van fase 2. De komende jaren worden er in totaal 118 woningen van verschillende woningtypen gebouwd. Door het hele plan zijn er prachtige groene ruimtes gepland. De hele omgeving krijgt daardoor een natuurlijk karakter. Meer informatie over het groenplan van de Berghorst vind je op de website van de gemeente Wierden.\n\n[Over groenplan de Berghorst](https://www.wierden.nl/groenplan-de-berghorst)\n\n## **Bouw zeker met BouwGarant**\n\nDe 18 luxe twee-onder-een-kapwoningen worden standaard gebouwd met toepassing van het BouwGarant keurmerk. De BouwGarant Nieuwbouwgarantieregeling Eengezinswoning 2013 beschermt kopers van nieuwbouwwoningen die in het bezit zijn van het Waarborgcertificaat tegen de risico’s van een eventueel faillissement van de ondernemer tijdens de bouw.\n\n## **Energiezuinig wonen**\n\nKlimaat en duurzaamheid zijn met de stijgende energieprijzen actueler dan ooit. Ook in de bouw. Om energiezuinig bouwen te stimuleren, is per januari 2021 een nieuwe wet van kracht: BENG. Dat staat voor ‘Bijna Energie Neutraal Gebouw’ en bestaat uit vier energieprestatie-indicatoren.\n\nDe woningen die we realiseren op de Berghorst overtreffen deze gestelde BENG-eisen. Zo voorzien we de woningen standaard van vloerkoeling om oververhitting van de woning te voorkomen. Daarnaast zorgen we door een zorgvuldige keuze in installatiewerk voor een gebouw gebonden energieverbruik dat uitkomt op 0. Dat wil zeggen dat we de energiebehoefte van de woningen dekken met opgewekte energie. Zo ben je met de aanschaf van deze woning volledig voorbereid op een duurzame toekomst.\n\nVanwege de energiebesparende maatregelen kom je bij veel hypotheekverstrekkers in aanmerking voor een aantrekkelijke rentekorting!\n\n## Impressie\n\n![](/images/actueel/verkoop-18-twee-onder-een-kapwoningen-berghorst-fase-2/02.jpg)\n\n## **Geïnteresseerd?**\n\nWil je ook wonen dicht bij het buitengebied van Enter en toch centraal ten opzichte van het dorpscentrum? Neem dan vrijblijvend contact met ons op en wij vertellen je graag over de mogelijkheden*. Je kunt bellen naar 0547 38 10 35 of mailen naar [info@bouwbedrijfhoman.nl](mailto:info@bouwbedrijfhoman.nl). We staan je graag te woord!\n\nHeb je wel interesse in een woning op de Berghorst, maar past een twee-onder-een-kapwoning niet bij jouw/jullie woonwensen? We bieden ook 4 royale vrijstaande kavels aan op de Berghorst.\n\n[Lees hier meer over op onze website](https://www.bouwbedrijfhoman.nl/aanbod-4-royale-vrijstaande-kavels-berghorst-fase-2-verkoop-bijna-van-start/)"
  },
  {
    "slug": "bouwbedrijf-homan-bestaat-40-jaar",
    "title": "Bouwbedrijf Homan bestaat 40 jaar!",
    "date": "2022-09-24",
    "category": "algemeen",
    "cover": "/images/actueel/bouwbedrijf-homan-bestaat-40-jaar/cover.jpg",
    "body": "# Bouwbedrijf Homan bestaat 40 jaar\n\n## **Al ’40 jaar Echt Homan’**\n\nEen hele bijzondere mijlpaal waar we ontzettend trots op zijn! In 1982 onder leiding van oprichter Henk Homan klein begonnen en inmiddels uitgegroeid tot een begrip in de regio. Dat hebben we te danken aan het vertrouwen van onze opdrachtgevers. En natuurlijk aan het enthousiasme, de vakkundigheid en de jarenlange betrokkenheid van onze medewerkers.\n\n## **In 40 jaar tijd is er veel veranderd**\n\nWe zijn gegroeid, een paar keer verhuisd en hebben twee overnames meegemaakt (Gerben Homan in 1994 en Luc Velten in 2017). Maar de rode draad is én blijft dat kwaliteit en een fijne werksfeer centraal staat. We mogen al jarenlang met veel plezier opdrachtgevers blij maken met een luxe woning of bedrijfspand. Daar gaan we vol energie mee door: op naar het volgende jubileum!\n\n## **Hoogste tijd voor een feestje!**\n\nDe komende maanden vieren we op verschillende momenten ’40 jaar Echt Homan’. Heb je nog leuke foto’s van vroeger van Bouwbedrijf Homan? We ontvangen ze graag: info@bouwbedrijfhoman.nl!\n\n\n\n![](/images/actueel/bouwbedrijf-homan-bestaat-40-jaar/01.jpg)"
  },
  {
    "slug": "bouwen-in-het-oosten-2022",
    "title": "Bouw bedrijfspand Kottink Groep uitgelicht in vakblad Bouwen in het Oosten",
    "date": "2022-05-06",
    "category": "utiliteit",
    "cover": "/images/actueel/bouwen-in-het-oosten-2022/cover.jpg",
    "body": "Dylan Kottink startte in juni 2015 op eigen initiatief, maar met zijn vader Johan als mede aandeelhouder en motivator, Kottink Personeelsdiensten. Vijf jaar later werd de bedrijfsnaam gewijzigd in Kottink Groep vanwege de veranderende dienstverlening. Dylan: “Kottink Groep werkt tegenwoordig met een vaste groep collega’s en ZZP’ers aan uiteenlopende projecten in de bouw”.\n\n**Geschikte bouwkavel**\n\nDe afgelopen zeven jaar heeft Dylan Kottink zich als ondernemer in de dienstverlening duidelijk bewezen. Het geheim achter het succes van zijn organisatie wijdt hij aan de eerlijke en duidelijke communicatie tussen hem en zijn opdrachtgevers, maar niet in de laatste plaats ook naar zijn werknemers: “Wellicht heb ik daar de uitbreiding en stabiliteit aan te danken, maar uiteraard heeft de markt de laatste jaren ook een positieve rol gespeeld. Beide factoren maakten dat ik me -al voor de coronacrisis- oriënteerde op een andere locatie. Deze vond ik op  industrieterrein Oosterweilanden in Vriezenveen waar een bouwkavel vrij kwam van 3.200 m². Het is gelegen aan praktische uitvalswegen waardoor we straks een stuk centraler gepositioneerd zijn en zodoende beter bereikbaar.”\n\n**Flexibele houding**\n\nBouwbedrijf Homan uit Enter kwam al snel in beeld tijdens de voorbereidingsfase. Daar lagen volgens Dylan Kottink een aantal redenen aan ten grondslag: “De huidige directeur van Bouwbedrijf Homan, Luc Velten, kende ik al voordat hij in 2017 het bedrijf overnam. De samenwerking met Bouwbedrijf Homan werd geïntensiveerd toen Luc de leiding kreeg. Er ontstond een goede band op basis van wederzijds vertrouwen waardoor we op zakelijk vlak echt wat voor elkaar betekenen en elkaar voorthelpen bij vraagstukken. Bouwbedrijf Homan is ervaren op het gebied van luxe woning- en utiliteitsbouw en heeft een aantal fantastische bedrijfspanden op haar naam staan. Bovendien is Bouwbedrijf Homan in staat om ons volledig te ontzorgen; van ontwerp (architectuur) tot de complete bouwkundige uitvoering. Zo verzorgden ze bijvoorbeeld ook de vergunningsaanvraag voor ons. Ze denken goed met ons mee en stellen zich flexibel op. Dit houdt in dat we, -als Kottink Groep-, volledig vrij zijn om ook onze eigen onderdelen op te pakken. Het metselwerk en de afbouw voeren we zelf uit en, wanneer nodig, springen we bij tijdens het ruwbouwtraject. Deze vorm van samenwerken verloopt uitstekend en is voor beide partijen een schot in de roos.”\n\n**Twee A4-tjes\n\n**Luc Velten is het er over eens dat Kottink Groep en Bouwbedrijf Homan duurzame partners zijn: “Naast het feit dat we de casco bouw op ons nemen, hebben we ons ook ontfermd over het ontwerp. Het resultaat is een in het oog springend en chique pand geworden. Hoewel de gemeente bepaalde voorwaarden stelde, verliep het traject voorspoedig. Van de 3.200 m² wordt 1.400 m² bebouwd en 1.800 m² zal worden bestraat en deels ingericht als parkeerterrein. Ons bedrijf kenmerkt zich doordat we bouwen aan langdurige relaties die verder reiken dan het moment van oplevering. Kottink Groep maakt daar zeker onderdeel van uit. Het feit dat we de kennis van opdrachtgever, ontwerper, voorbereider en uitvoerend team bundelen, dragen qua sfeer, techniek en financiën bij aan het meest optimale resultaat. Bovendien zorgen de korte lijnen en het nakomen van heldere afspraken voor wederzijds vertrouwen. Dat geldt ook voor dit project. Voor Dylan Kottink was van begin af aan duidelijk dat het nieuwe bedrijfspand door ons zou worden gebouwd. Dat vertrouwen waarderen we enorm. Het feit dat de bouwovereenkomst bestaat uit twee A4-tjes zegt denk ik voldoende.”\n\n[Lees het hele artikel in Bouwen in het Oosten hier (PDF)](https://www.bouwbedrijfhoman.nl/wp-content/uploads/2022/05/Artikel-bouw-bedrijfspand-Kottink-Groep.pdf)\n\n*Bron: [Bouwen in het Oosten](https://www.bouweninhetoosten.nl/) (editie: april 2022). Bouwen in het Oosten werd in 1992 als titel geïntroduceerd. In de zevenentwintig jaar van haar bestaan heeft het magazine inmiddels een toonaangevende positie in de Overijsselse en Gelderse bouw- en installatiewereld veroverd.*"
  },
  {
    "slug": "fijne-zomervakantie",
    "title": "Fijne zomervakantie!",
    "date": "2021-07-20",
    "category": "algemeen",
    "cover": "/images/actueel/fijne-zomervakantie/cover.jpg",
    "body": "Nog een paar dagen werken en dan begint de bouwvak. Een periode waarin we even een stapje terug mogen doen. Of je nu thuis blijft of op reis gaat: we wensen je een hele fijne vakantie!\n\nVan maandag 26 juli tot en met vrijdag 13 augustus is ons bedrijf gesloten. Heb je in deze periode een vraag? Stuur dan een mail naar info@bouwbedrijfhoman.nl. Op maandag 16 augustus staan we vanaf 08.30 uur weer voor je klaar en bouwen we verder aan de mooiste woon- en werkplekken voor onze opdrachtgevers.\n\n## **Fijne vakantie!**"
  },
  {
    "slug": "artikel-industriebouw",
    "title": "Opvallend bedrijfspand aan de Westerval in Enschede uitgelicht in vakblad Industriebouw",
    "date": "2021-04-28",
    "category": "utiliteit",
    "cover": "/images/actueel/artikel-industriebouw/cover.jpg",
    "body": "“Elders in Twente vind je dit soort bijzondere gebouwen ook”, vertelt Luc Velten, directeur bij Bouwbedrijf Homan die het opvallende bedrijfsverzamel gebouw bouwt. “We werken namelijk vaker samen met RG Investments en Reggehave Projectrealisatie en dan krijg je een synergie die zowel een lust is voor het oog als een zegen voor de calculatie.” Het bedrijfsverzamelgebouw aan de Westerval in Enschede dat dit voorjaar ontstaat, biedt plaats aan vijf ondernemingen. De eerste vier hebben al getekend, vertelt Velten verder. “RJ Security, Kitt Engineering, Zandvoort Verf\n\n& Groothandel en BGT Bio Liquids. Met de vijfde zijn we in onderhandeling.”\n\n**Bijzondere gevelsteen**\n\nBouwbedrijf Homan onderscheidt zich graag door onverwachte en creatieve vondsten, zowel in de particuliere bouw als in de utiliteitsbouw. Velten: “We willen ons op ons vakgebied onderscheiden. De gevelsteen die gebruikt is voor de opvallende gevel aan de Westerval, is afkomstig van de enige fabriek in Nederland die nog met een kolengestookte\n\noven werkt, Steenfabriek Vogelensangh in Deest. En dat maakt het gebouw meteen heel bijzonder.” Ondanks de bijna ambachtelijke manier waarop Bouwbedrijf Homan aan de Westerval Enschede aan het bouwen is, vordert de bouw heel gestaag omdat het bouwproces strak gepland is. Velten: “We zijn in december 2020 begonnen en de planning is dat we voor de bouwvak klaar zullen zijn.”\n\n**Duurzame energievoorziening**\n\nNaast de opvallende gevel heeft Bouwbedrijf Homan ook veel aandacht aan de binnenkant van het pand gegeven. “Efficiency is daarbij doorslaggevend. Het is van binnen een praktisch ingedeeld pand met een rechttoe-rechtaan staalconstructie en muren en vloeren van prefabbeton. De buitenkozijnen zijn weer van aluminium, geleverd door Polybouw. Wat mij betreft is deze manier van bouwen the best of both worlds.” De engineering heeft Bouwbedrijf Homan voor eigen rekening genomen: de creatieve architectuur is verzorgd door STUDIO • NL. Daarbij is met name ook naar de footprint gekeken. “We gaan 800 zonnepanelen op het dak leggen waardoor er een duurzame energievoorziening is.”\n\n[Lees het hele artikel in Industriebouw hier (PDF)](https://www.bouwbedrijfhoman.nl/wp-content/uploads/2021/04/Artikel-Bedrijfspand-Westerval-Enschede.pdf)\n\n*Bron: [Industriebouw](https://industriebouw-online.nl/) (editie: april 2021). Industriebouw is hét vakblad voor de bouwsector. Elf keer per jaar verschijnt Industriebouw met informatie en achtergronden over actuele bouwprojecten in Nederland. *"
  },
  {
    "slug": "fijne-feestdagen",
    "title": "Fijne feestdagen!",
    "date": "2020-12-18",
    "category": "algemeen",
    "cover": "/images/actueel/fijne-feestdagen/cover.jpg",
    "body": "**De feestdagen staan voor de deur**\n\nWe kijken terug op een bijzonder jaar. Het hebben van een fijne woon- en werkplek had nog nooit zoveel betekenis. Gelukkig konden wij de afgelopen maanden doorbouwen aan mooie projecten. En daar zijn we heel dankbaar voor. Opdrachtgevers, collega’s en samenwerkingspartners: bedankt voor jullie inzet daarvoor!\n\nNamens het team van Bouwbedrijf Homan wensen we je fijne feestdagen en bovenal een gezond 2021. Zorg extra goed voor elkaar!\n\n**Bereikbaarheid\n\n**Van 21 december tot en met 1 januari gaan we er even tussenuit. Op maandag 4 januari staan we graag weer voor je klaar.\n\n![](/images/actueel/fijne-feestdagen/01.jpg)"
  },
  {
    "slug": "vacature-projectleider-werkvoorbereider-40-uur",
    "title": "Vacature projectleider / werkvoorbereider (40 uur)",
    "date": "2020-11-05",
    "category": "vacature",
    "cover": "/images/actueel/vacature-projectleider-werkvoorbereider-40-uur/cover.jpg",
    "body": "Als projectleider / werkvoorbereider bij Bouwbedrijf Homan werk je aan mooie en hoogwaardige nieuwbouwprojecten in de regio Twente. Er is veel ruimte voor eigen initiatief en ontwikkeling.\n\n[Bekijk de vacature hier](https://www.bouwbedrijfhoman.nl/werken-bij/)\n\n![](/images/actueel/vacature-projectleider-werkvoorbereider-40-uur/01.jpg)"
  },
  {
    "slug": "bouwvak-we-gaan-er-even-tussenuit",
    "title": "Bouwvak: we gaan er even tussenuit",
    "date": "2020-07-16",
    "category": "algemeen",
    "cover": "/images/actueel/bouwvak-we-gaan-er-even-tussenuit/cover.png",
    "body": "Van maandag 20 juli tot en met vrijdag 7 augustus is ons bedrijf gesloten. Heb je in deze periode een vraag? Stuur dan een mail naar info@bouwbedrijfhoman.nl.\n\nOp maandag 10 augustus staan we vanaf 08.30 uur weer voor je klaar.\n\n## **Een fijne vakantie!**"
  },
  {
    "slug": "interview-luc-velten-over-het-karakteristieke-project-het-middenplein",
    "title": "Interview met Luc Velten over Centrumplan Het Middenplein",
    "date": "2020-05-11",
    "category": "woningbouw",
    "cover": "/images/actueel/interview-luc-velten-over-het-karakteristieke-project-het-middenplein/cover.jpg",
    "body": "In de mei editie van het vakblad [Bouwen in het Oosten](https://www.bouweninhetoosten.nl/) is onze directeur Luc Velten geïnterviewd. Een uniek inkijkje in de ontwikkeling van het karakteristieke Middenplein in Enter.\n\n[Lees het interview hier](https://www.bouwbedrijfhoman.nl/wp-content/uploads/2020/05/BIHO_2020_4_HOMAN.pdf)"
  },
  {
    "slug": "fijne-feestdagen-2019",
    "title": "Gewijzigde openingstijden",
    "date": "2019-12-17",
    "category": "algemeen",
    "cover": "/images/actueel/fijne-feestdagen-2019/cover.png",
    "body": "Van 23 december tot en met 3 januari gaan we er even tussenuit. Namens het team van Bouwbedrijf Homan wensen we je fijne feestdagen en een gelukkig en succesvol 2020!\n\nOp maandag 6 januari staan we graag weer voor je klaar."
  },
  {
    "slug": "vacature-metselaar",
    "title": "Vacature metselaar",
    "date": "2019-09-04",
    "category": "vacature",
    "cover": "/images/actueel/vacature-metselaar/cover.jpg",
    "body": "Als metselaar bij Bouwbedrijf Homan werk je aan mooie en hoogwaardige nieuwbouwprojecten in de regio Twente. Je werkt dus altijd dicht bij huis. Er is veel ruimte voor eigen initiatief en ontwikkeling.\n\nHeb je veel ervaring als metselaar? Of wil je het vak graag leren? We gaan graag met je in gesprek om de mogelijkheden te bespreken!\n\n[Bekijk de vacature hier](https://www.bouwbedrijfhoman.nl/werken-bij/metselaar)\n\n[![](/images/actueel/vacature-metselaar/01.png)](https://www.bouwbedrijfhoman.nl/werken-bij/metselaar/)"
  },
  {
    "slug": "gewijzigde-openingstijden-vanwege-de-bouwvak",
    "title": "Gewijzigde openingstijden vanwege de bouwvak",
    "date": "2019-07-24",
    "category": "algemeen",
    "cover": "/images/actueel/gewijzigde-openingstijden-vanwege-de-bouwvak/cover.jpg",
    "body": "We hebben de afgelopen tijd aan mooie projecten mogen werken. Onze collega’s gaan nu genieten van een welverdiende vakantie. Vanaf maandag 29 juli zijn we gesloten. Op maandag 19 augustus starten we weer.\n\n## Een hele fijne zomer!"
  },
  {
    "slug": "vernieuwde-centrum-enter-krijgt-steeds-meer-vorm",
    "title": "Vernieuwde centrum Enter krijgt steeds meer vorm",
    "date": "2019-07-02",
    "category": "woningbouw",
    "cover": "/images/actueel/vernieuwde-centrum-enter-krijgt-steeds-meer-vorm/cover.jpg",
    "body": "Daarnaast wordt het parkeerprobleem in het centrum van Enter opgelost door een financiële bijdrage van de gemeente. Projectontwikkelaar Reggehave heeft het plan ontworpen en is op dit moment druk bezig met de uitvoering van de tweede fase.\n\n“Het heeft even geduurd, maar het einde van de ontwikkeling van het Middenplein is in zicht. Het eindresultaat geeft straks het centrum van Enter een mooie impuls”, vertelt wethouder Johan Coes. Naar verwachting zijn de werkzaamheden voor het Middenplein medio 2020 afgerond.\n\nBron: www.entersnieuws.nl\n\n![](/images/actueel/vernieuwde-centrum-enter-krijgt-steeds-meer-vorm/01.png)"
  },
  {
    "slug": "gewijzigde-openingstijden-feestdagen",
    "title": "Gewijzigde openingstijden feestdagen",
    "date": "2018-12-17",
    "category": "algemeen",
    "cover": "/images/actueel/gewijzigde-openingstijden-feestdagen/cover.jpg",
    "body": "Het einde van 2018 is weer in zicht! We kijken terug op een jaar met mooie projecten en fijne samenwerkingen.\n\nIn verband met de feestdagen hebben we gewijzigde openingstijden. Van maandag 24 december tot maandag 7 januari is ons bedrijf gesloten.\n\n## *Een fijne kerst en een gezond en succesvol 2019!*"
  },
  {
    "slug": "stageplekken-beschikbaar",
    "title": "Kom stagelopen bij Bouwbedrijf Homan!",
    "date": "2018-11-14",
    "category": "algemeen",
    "cover": "/images/actueel/stageplekken-beschikbaar/cover.jpg",
    "body": "We hebben een aantal leuke en leerzame stageplekken op mooie projecten in de regio Twente. We zijn een erkend leerbedrijf. Startdatum stage in overleg.\n\nBen je enthousiast? En wil je meer weten over een stage bij ons bedrijf? Bel dan 0547 1035 of stuur een mailtje naar info@bouwbedrijfhoman.nl. We horen graag van je!\n\n![](/images/actueel/stageplekken-beschikbaar/01.png)\n\n[Meer over werken bij Bouwbedrijf Homan](https://www.bouwbedrijfhoman.nl/werken-bij/)"
  },
  {
    "slug": "alweer-een-jaar-in-ons-nieuwe-pand",
    "title": "Alweer een jaar in ons nieuwe pand",
    "date": "2018-11-02",
    "category": "algemeen",
    "cover": "/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/cover.jpg",
    "body": "![](/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/01.jpg)\n\n![](/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/02.jpg)\n\n![](/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/03.jpg)\n\n\n\n![](/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/04.jpg)\n\n\n\n![](/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/05.jpg)\n\n\n\n![](/images/actueel/alweer-een-jaar-in-ons-nieuwe-pand/06.jpg)\n\nWil je meer zien? Loop dan gerust eens bij ons binnen. De koffie staat klaar!"
  },
  {
    "slug": "project-in-beeld-landelijke-villa-met-exclusief-badhuis",
    "title": "Project in beeld: Landelijke villa met exclusief badhuis",
    "date": "2018-09-20",
    "category": "woningbouw",
    "cover": "/images/actueel/project-in-beeld-landelijke-villa-met-exclusief-badhuis/cover.jpg",
    "body": "Nadat we in Enter een prachtig landhuis opgeleverd hebben, kregen we ook de opdracht voor een landelijk badhuis. Een gebouw dat volgens woonplatform [The Art of Living](https://theartofliving.nl/) alle verwachtingen overtreft. En daar kunnen we ons helemaal bij aansluiten.\n\n## Laat je inspireren\n\n[The Art of Living](https://theartofliving.nl/) brengt dit project met al haar mooie details op een stijlvolle manier in beeld. Bekijk het project en laat je inspireren!\n\n[Naar The Art of Living](https://theartofliving.nl/villa-en-poolhouse-met-stalen-deuren-stalendeurenhuys/)"
  },
  {
    "slug": "zomervakantie2018",
    "title": "We gaan er even tussenuit…",
    "date": "2018-08-01",
    "category": "algemeen",
    "cover": "/images/actueel/zomervakantie2018/cover.jpg",
    "body": "Op maandag 27 augustus staan onze collega’s vanaf 08.30 uur weer voor u klaar. Alle medewerkers van Bouwbedrijf Homan wensen u een fijne zomer!"
  },
  {
    "slug": "open-bedrijvendag-enter-2018",
    "title": "Deelname Open Bedrijvendag Enter 30 juni",
    "date": "2018-06-25",
    "category": "algemeen",
    "cover": "/images/actueel/open-bedrijvendag-enter-2018/cover.jpg",
    "body": "De Open Bedrijvendag Enter 2018 vieren wij samen met Gerbri Plastics B.V. en Letink Design. Bezoek ons aan de Vonderweg 19 en maak kans op mooie prijzen!\n\nZien we jou ook aanstaande zaterdag?\n\n![](/images/actueel/open-bedrijvendag-enter-2018/01.png)"
  },
  {
    "slug": "start-bouw-buitengebied-enter",
    "title": "Start bouw woning buitengebied Enter",
    "date": "2018-05-18",
    "category": "woningbouw",
    "cover": "/images/actueel/start-bouw-buitengebied-enter/cover.jpg",
    "body": "Wederom een mooi project waar we vol enthousiasme aan gaan werken.  Heeft u interesse in een soortgelijke woning? Neem dan gerust contact met ons op via onderstaande contactgegevens. We gaan graag vrijblijvend met u in gesprek om de mogelijkheden te bespreken.\n\n![](/images/actueel/start-bouw-buitengebied-enter/01.jpg)\n\n![](/images/actueel/start-bouw-buitengebied-enter/02.jpg)\n\n[![](/images/actueel/start-bouw-buitengebied-enter/03.jpg)](https://www.bouwbedrijfhoman.nl/wp-content/uploads/2018/08/Woning-Enter.jpg)"
  },
  {
    "slug": "nieuwe-bedrijfsfilm-online",
    "title": "Nieuwe bedrijfsfilm online!",
    "date": "2018-04-05",
    "category": "algemeen",
    "cover": "/images/actueel/nieuwe-bedrijfsfilm-online/cover.jpg",
    "body": "Met trots presenteren we onze nieuwe bedrijfsfilm! We laten u van A tot Z zien hoe wij op traditionele wijze toewerken naar een hoogwaardig pand.\n\n[Bekijk onze bedrijfsfilm](/over-ons/)"
  }
];
