---
publish: true
---
# EQ

> [!important] Tähtis!
> Kõikide tulevaste tööriistadega ära karda kruttida nuppe ja efekte "üle teha", see võimaldab sul aru saada mis reaalselt käesolev tööriist teeb.

- Muusikal on žanripõhised tonaalsuse tavad. Kuid läbivalt tähtis on **tonaalse balansi leidmine**.
- Tonaalsust saab järeltöötluses mõjutada ekvaliseerimisega (EQ, equalizer).
- EQga saab mõjutada ainult eksisteerivat materjali. Instrumendi kõlale ei saa "bassi juurde panna", kui seal füüsiliselt ei ole neid madalaid sagedusi algmaterjalis.
- Ideaalis, selle asemel, et üritada soundi parandada EQga, on soovituslik muuta soundi allikat, mikri asetust, süna soundi jne. Kuid kui see enam võimalik ei ole, siis tasub võtta EQ.
- Alati ei olegi vaja EQt kasutada! Ole teadlik, kas selle kasutamine lisab loo kõlale väärtust või mitte.

<!-- hide -->
>NOTE:
> - Tehke EQ liigutus muusika ajal ja analüüsige kuidas spektrum ja kõla muutub.

<!-- /hide -->

---
## Filtritüübid

- Bell - Kõige levinum, mõjutab spetsiifilist sagedusvahemikku, meenutab küngast, või orgu. 
	- Roheline "boost", sinine "cut":  
![[Pasted image 20250915160834.png]]<!-- .element: style="max-height:50%;" -->

---

- Shelf - boostib või cutib kõike alates määratud sagedusest.
	- Low shelf: ![[Pasted image 20250915161131.png]]<!-- .element: style="max-height:50%;" --> 

---
- High shelf: ![[Pasted image 20250915161210.png]]<!-- .element: style="max-height:50%;" -->

---
- Cut/Pass - "Lõikab" kõik sagedused enne või pärast määratud sagedust välja.
	- Low cut/High pass: ![[Pasted image 20250915162646.png]]<!-- .element: style="max-height:50%;" --> 

---
- High cut/Low pass: ![[Pasted image 20250915162705.png]]<!-- .element: style="max-height:50%;" --> 

---
- "Q" factor - mida nulli lähedasem number, seda "laiem" filter. Mida laiem filter, seda naturaalsem kõla.
	- "Lai" Q: ![[Pasted image 20250915170146.png]]<!-- .element: style="max-height:50%;" --> 

---
- Kitsas Q. Mida kitsam filter seda "kirurgilisem" ja täpsem see on.: ![[Pasted image 20250915170223.png]]<!-- .element: style="max-height:50%;" --> 

---
## Tonaalsuse sõnadesse panemine

- Tonaalsuse sõnastamist on kergem õppida kasutades iseloomustavat sõnavara.
- Ei pea olema terve laulu kõrakarakteri kohta, saab ka kasutada individuaalsetel elementide kohta!
- Sõnastades seda, mis sulle materjali tonaalsuse põhjal meeldib/ei meeldi, on võimalik läheneda signaalile EQga teadlikumalt ja taotuslikumalt.

<!-- hide -->
[[Tonaalsuse Sõnastamine.canvas|Tonaalsuse Sõnastamine]]
<!-- /hide -->
![[Tonaalsuse Sõnastamine.png]]<!-- hide -->
>NOTE:
> - Lase mussi, boosti või cuti sagedusvahemikku, küsi iseloomustavat sõna

<!-- /hide -->

---
# Põhjalikumalt
---
## Võta ära või lisa juurde

- Subtractive vs Additive (cut vs boost)
	- Võta ära koledused, võimenda kõike mis ilus <3 "Koleduste eemaldamine" ehk *corrective EQ*.
	- Signal flow (ehk signaali järjekord) on jällegi tähtis! Corrective EQ esialgu, siis näiteks dünaamiline töötlus, "värvi" lisamine ja siis alles boostimine.
- "Yin-Yang" mentaliteet. Boostid on cutid ja cutid on boostid
	- Kõrgsageduslike boostide asemel kontrolli enne madalat otsa! Sest madal ots sööb rohkem dB headroomi kui kõrge ots.
	- Näiteks, 250Hz vähendamine annab kuuldeliselt sama efekti, kui 5kHz tõstmine. Kujutage ette, et spektrumil on 1khz peal peegel.

>NOTE: 
> - EQ vaatamise asemel rõhuda analüütilisele kuulamisele
> - üldine tava on cuttimise eelistus üle boostimise

---
## Masking

- Kui kaks elementi hõlmavad sama sagedusvahemikku, siis nad võivad võidelda oma koha nimel. Selle tulemusel on ühte elementi raskem kuulda kui teist.
	- Sest inimkõrv suudab keskenduda ainult ühele dominantsele sagedusele *per critical frequency band*.
- Laul jääb "tühjaks" kui midagi ei kattu sageduseliselt, ehk masking ei ole alati ainult negatiivne.
- Kuidas lahendada negatiivsed maskingut?
	- Balanss, panoraam, EQ "carving".

<!-- hide -->
>NOTE:
> - Näita TDR Prism'ist Auditory masking
> - Näita Newfangled EQuivocate critical bands
> - keera **maskiv saund** valjuks, pane tähele mida maskib, siis vaikseks ja pane tähele mis seda katab, eq vastavalt

<!-- /hide -->

---
## Erinevad EQ-d

- Kõige levinumad on digitaalsed **parameetrilised EQ**-d (Pro-Q)
- Analoog emulatsioonid (Pultec, BAX, SSL jne)
	- Kuidas analoog võtteid teha digitaalse EQga: Pultec trick, Baxandal boost
	- Kurvi mitte nägemine muudab EQ otsuseid. 
- Analüüs: [EQ Curve Analyzer](https://bertomaudio.com/eq-curve-analyzer.html)(Tasuta) või [Plugin Doctor](https://ddmf.eu/plugindoctor/)(Tasuline)

---
## Muusika tonaalsuse analüüsimine

- Tasuta **spectrum analyzer**-id:
	- [TDR Prism](https://www.tokyodawn.net/tdr-prism/)
	- [SPAN](https://www.voxengo.com/product/span/)
- Slope 4.5dB/Oct, näitab üldiselt lineaarset pilti tänapäeva muusika puhul.
- Tasuline aga väga kasulik:
	- [iZotope Tonal Balance Control](https://www.izotope.com/en/products/tonal-balance-control-2)

<!-- hide -->
>NOTE: 
> - Kuulata muusikat mis hetkel Spotify Chartsis või Radiomonitori topis. Tonaalne balanss on hea kõla alus.

<!-- /hide -->

---
# Dünaamiline EQ

- Sisuliselt multiband compressor aga piiratumate võimalustega. 
- Kasulikum kui vaja spetsiifilisi noote töödelda.

---
# Harjutamine

## https://webtet.net/apcl/#/parametric

1. Lae fail üles.
2. Määra testi parameetrid, lehe ülaosas.
3. Harjutamine:
	- Bypass = Töötlemata audio; 
	- Question = EQ, mille peate ära arvama;
	- Your Response = Teie EQ, määratud ekraani keskel olevatest parameetritest.
4. Kui Teie arust Question = Your Response siis: -> Check Answer -> Next Question

<!-- hide -->
>NOTE:
> - kui tudenge kasutab kooli arvutit, veendu et kaust oleks õiges kohas
> - näita ekraanil sõnavara harjutuse ajal

<!-- /hide -->

---