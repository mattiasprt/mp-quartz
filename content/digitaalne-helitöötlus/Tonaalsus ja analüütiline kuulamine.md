---
aine: "[[04 - Õpetamine/content/digitaalne-helitöötlus/index|Digitaalne Helitöötlus]]"
jrk: "2"
kodutöö: "[[Tonaalsus ja analüütiline kuulamine#EQ kuulamine]]"
publish: true
---
## Miks on vaja digitaalses helitöötluses "kõrgkvaliteediga" faile?

- Lossy vs lossless, ehk kaduteta ja kadudega failitüübid.
	- Kõige levinum lossy failitüüp: MP3
	- Levinud lossless failitüübid: WAV, FLAC

|              | Lossy                                                                                                                              | Lossless                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Millega tegu | Failitüüp, mis "eemaldab" helist osad mida inimkõrv ei kuule, madalama kvaliteedi korral on kuulda moonutusi ehk *artifact*'e.     | Kadudeta failitüüp, mis sisaldab endas kõike infot, mis sellesse algselt salvestatud |
| Miks?        | Et vähendada failimahtu, näiteks failide jagamiseks.                                                                               | Et töötada kõige kõrgema kvaliteediga mis võimalik.                                  |
| Miinused     | Kui heli on "tihendatud" siis algset kvaliteeti tagasi enam ei saa. Korduvalt tihendades, kaotab fail aina rohkem enda kvaliteeti. | Suurem failimaht, kuigi tänapäeval pole probleem                                     |

NOTE:
> - Näita kellegi laulu põhjal näidet visuaalsest ja kuuldelisest erinevusest lossy ja losslessi vahel.
> 	- Erinevusteks: failimaht, spektrum, waveform, kõlalised artifactid

---

## Tonaalsus

- Igal kuulamissüsteemil ja ruumil on oma "kõlakarakter". Saab parandada kalibreerimisega. 
	- Professionaalses keskkonnas peab süsteem olema **kalibreeritud**, et töödeldud muusika **tõlgenduks** ka teistele süsteemidele.
- Muusikal on žanripõhised tonaalsuse tavad. Kuid läbivalt tähtis on **tonaalse balansi leidmine**.

NOTE:
> - Inimkõrv harjub väga kiiresti ära kuulamiskeskkonnaga. Kui kuulamissüsteem ei ole kalibreeritud, siis miksides võib kompenseerida sagedusi mida ei peaks kompenseerima. 
> - "Car test" fenomen, loogiline ainult siis kui oled autos palju muusikat kuulanud ja oled ära õppinud kuidas süsteem kõlab. 
> - Keerulisem peatükk: [[Sissejuhatus Miksimisse#Kuulamissüsteem]]

---

## Kuulamis valjus

> [!note]
> [[NotebookLM - Miksimise ja masterdamise põhimõtted]] - https://forums.vaikene.ee/viewtopic.php?t=427

- Miks kõlakarakter muutub vastavalt kuulamis valjusele?
	- Madalad ja kõrged sagedused vajavad rohkem "võimendust" kui kõrg-kesksagedused, et neid võrdselt kuulda oleks.
	- Ei vaja korrigeerimist, lihtsalt olge teadlikud, et nt. võite madalal kuulamis valjusel kompenseerida bassiga üle, lihtsalt kuna seda ei kuule nii hästi.

NOTE: 
>- APU Loudness Contoursi näitel Equal Loudness Curves'ide tutvustus.
>- Selle tõttu võib ka valjem muusika kõlada "paremini", sest kõrv kuuleb lihtsalt rohkem täis spektrumit.

---

# EQ

> [!important] Tähtis!
> Kõikide tulevaste tööriistadega ära karda kruttida nuppe ja efekte "üle teha", see võimaldab sul aru saada mis reaalselt käesolev tööriist teeb.

- Tonaalsust saab järeltöötluses mõjutada ekvaliseerimisega (EQ, equalizer).
- EQga saab mõjutada ainult eksisteerivat materjali. Instrumendi kõlale ei saa "bassi juurde panna", kui seal füüsiliselt ei ole neid madalaid sagedusi olemas või salvestatud.
- Ideaalis, selle asemel, et üritada soundi parandada EQga, on soovituslik muuta soundi allikat, mikri asetust, süna soundi jne. Kuid kui see enam võimalik ei ole, siis tasub võtta kätte EQ.

NOTE:
> - Teha EQ liigutus muusika ajal ja analüüsida kuidas spektrum ja kõla muutub.

---

## Filtritüübid

- Bell - Kõige levinum, mõjutab spetsiifilist sagedusvahemikku, meenutab küngast, või orgu:  ![[Pasted image 20250915160834.png]]<!-- .element: style="max-height:50%;" -->

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
- "Q" factor - mida nulli lähedasem number, seda "laiem" filter. Mida laiem, seda naturaalsem kõla.
- "Lai" Q: ![[Pasted image 20250915170146.png]]<!-- .element: style="max-height:50%;" --> 

---
- Kitsas Q: ![[Pasted image 20250915170223.png]]<!-- .element: style="max-height:50%;" --> 

---

## Tonaalsuse sõnadesse panemine

[[Tonaalsuse Sõnastamine.canvas|Tonaalsuse Sõnastamine]] - [LINK](https://mattiasprt.notion.site/Tonaalsuse-s-nastamine-27edc1e62ee08041acd0d77c6671b0ec?source=copy_link)

NOTE:
> - Õppimine läbi sõnavara, lase mussi, boosti või cuti sagedusvahemikku, küsi iseloomustavat sõna
> - Ei pea olema terve laulu kõrakarakteri kohta, saab ka kasutada individuaalsetel elementidel!

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

NOTE:
> - failide jagamine https://www.snap-drop.net/ kaudu
> - kui tudenge kasutab kooli arvutit, veendu et kaust oleks õiges kohas
> - näita ekraanil sõnavara harjutuse ajal

---

# Kodutöö

## EQ kuulamine

- Saavutage \>50% "Average accuracy" ja lisage meili screenshot: https://www.sonarworks.com/soundid-reference/match-the-mix
- Läbige <u>vähemalt</u> 10 "küsimust" ja >50% "Average Score", lisage meili screenshot kus on näha nii parameetreid, kui ka tulemust: https://webtet.net/apcl/#/parametric
	- Parameetrid: Matching, 1 Octave, One Band, +12/-12, 2, 63Hz - 16000Hz. Kui tunnete end hästi, võite ka keerulisemaid "gain combinatione'id" katsetada :)

- Screenshot Macis: Cmd + Shift + 5
- Windowsis Win + Shift + S
	- Copy'ge pildid ja paste'ige meili.