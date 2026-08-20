---
publish: true
---
# Masterdamine vinüülile

- [Lugemiseks, helinäidetega](https://www.izotope.com/community/blog/mastering-for-vinyl-tips-for-digital-mastering-engineers)
- Vinüülidel on 2 poolt, A ja B. Trükki tuleb saata 2 faili, 1 per pool, lood peavad maha mängima sellises järjestuses ja selliste pausidega nagu soovitud.
- Lisaks tuleks saata *cue sheet* ehk fail kus on kirjas laulude ajalised algused ja lõpud.

---
# Kompromissid

- Et vinüülimängija nõel saaks mööda vinüüli *groove*'e mängida maha võimalikult tõhusalt ja hea kõlaga, siis tuleb teha muusika kõlas mõned kompromissid võrreldes digitaalse masteriga.

## Plaadi kestvus

- Ühele 12" 33 1/3 RPM plaadi poolele **teoreetiliselt** saaks maksimaalselt mahtuda kuni ~26min aga mida pikem kestvus seda rohkem kompromisse. Sest groove'i laius on mõjutatud tonaalsusest, stereo panoraamist ja valjusest. Ideaalis võiks üks pool olla ~24min.
	- Lihtsustatult - mida valjem signaal, seda rohkem ruumi plaadil kulub.
- Mida pikem pool, seda kitsamad on plaadi sisemised groove'id/vaod, ehk poole viimase laulu kõlakvaliteet võib kannatada. Selle jaoks võiksid olla poolte viimased laulud natuke vaiksemad või pehmemad, et vältida probleeme.

## Dünaamika ja valjus

- Vinüülile ei tohiks printida väga clipitud ja limiteeritud dünaamikaga masterit, sest "lapikud" laineharjad võivad tekitada kuulamisel moonutusi0.
- Ehk vinüülile masterdades peaks alustama võimalikult dünaamiliste miksidega. "[[Valjus ja LUFS'id#Valjuse sõda ja Normaliseerimine|Valjuse Sõda]]" ei kehti siin.
- Mida valjemad laulud, seda rohkem ruumi võtavad vaod, et ennustada kui valjud masterid olla saavad vaata [[Masterdamine vinüülile#Kuidas veenduda, et plaadi masterid toimivad vinüülil?|kuidas simuleerida vinüüli]].
- Mida vaiksem master, seda rohkem on kuulda müra, sest *signal-to-noise ratio* ehk müralävend on kõrgemal.

## Tonaalne

- Madal ots
	- Madalatele sagedustele low-cut ~20Hz
	- Vajadusel madalatele Side kanali sagedustele low-cut ~200Hz, et madal ots oleks monos.
- Kõrge ots
	- Vajadusel kõrgetele high-cut ~18kHZ
	- Kõrged võiksid olla natuke pehmemad, sest essid jne lähevad kergemalt distortima.
		- Vinüülplaadid lõigatakse vaiksema madala otsaga ja valjema kõrge otsaga, vinüülimängija teeb vastupidise EQ. ![[RIAA.png]]
		- Seda tehakse selleks, et plaadile mahuks rohkem materjali ajaliselt ja vähendada *signal-to-noise ratio* mõju. Kõrge otsa boostimise tõttu võivad tekkida plaadile keerukad vaod, mida on mängijal keeruline maha mängida, ehk sibilantsidele võib tekkida moonutus.
- Vastavalt simulatsioonile võiks neid filtreid ka kasutada ainult kohtades või lauludes kus neid on vaja.

## Panoraam

- Signaal ei tohiks palju vastandfaasi minna, ehk tihtipeale tuleb masteri panoraam kitsamaks keerata. Ehk korrelatsioon võiks valdavalt olla 0 kuni +1 vahemikus.

---
# Kuidas veenduda, et plaadi masterid toimivad vinüülil?

- [TDR Simulathe REF](https://www.tokyodawn.net/tdr-simulathe-ref/) on plugin mis võimaldab simuleerida vinüüli lõikamist.
- [Kasutamine](https://youtu.be/Ee9rkGV5KSA) ja [juhend](https://docs.tokyodawn.net/simulathe-ref-manual/#The_Concept)
	- Excursion - groove'i liikumine küljelt küljele. Saab kontrollida low-cutiga.
	- Width - groove'i laius. Saab kontrollida panoraami kitsamaks tõmbamisega.
	- Velocity - kõrge otsa tõlgendumine. Saab kontrollida high-cutiga.

---
# Kus saab Eestis vinüüle trükkida?

- https://vinylplant.ee/vinyl_templates/
- https://tossrecords.com/guides/