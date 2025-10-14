---
aine: "[[04 - Õpetamine/content/miksimine-1/index|Miksimine 1]]"
jrk: "7"
publish: false
---
> [!note]
> [[NotebookLM - Miksimise ja masterdamise põhimõtted]] - https://forums.vaikene.ee/viewtopic.php?t=12
> https://www.digido.com/portfolio-item/analog-saved-my-life-the-good-the-bad-and-the-ugly/
> https://www.digido.com/portfolio-item/compression/
# Dünaamika 1
---
![[Tööriistakast#Dünaamika]]

## Limitter

- Sisuliselt sama mis kompressor, erinevused:
	- Ratio on *infinity*
	- Attack ja release töötavad teistmoodi. Attack määrab ära millal release algab, sest limitterid on üldiselt brickwall ja ei lase peake läbi vastavalt attackile.
	- Tihtipeale gainitakse ceilingu-sse, mitte ei tooda tresholdi alla.
	- Output gain määrab väljundi maksimaalse *peak*i.
	- True peak, räägime täpsemalt masteringus, ärge muretsege.
---

## Gain Reduction

- Kui palju on okei oleneb algmaterjalist. Hästi töödeldud produktsiooni puhul mida vähem - seda parem.
- https://webtet.net/apcl/#/compression

NOTE: 
>- senikaua kuni halvasti ei kõla on okei

---

## Headroom

- Digitaalne headroom: Vahe 0dBFS ja lühiajalise amplituudi vahel. DAWi sisene signaal ei tohi minna üle 0dBFS, sest eksportides tekib muidu digitaalne klippimine. [klippiva projekti näide.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Klippiv%20Projekt/klippiva%20projekti%20näide.RPP)
	- Kompresseerides signaali saame enda loo valjemaks teha, sest tekitame headroomi juurde, mille saame "täis gainida".

---

## Loudness bias

- Valjem =/= Parem
- Platseebo mõju otsustusvõimele
- GainMatch plugin

NOTE: 
>- Teha test: 2 mixi kus üks smiley eq ja valjem, teine tavaline. küsida kumb kõlab paremini, siis loudness normalizeida ja küsida uuesti
>- Logic Pro compressoril on by default autogain peal, mis teeb materjali valjemaks kui treshold alla tõmmata, pole loogiline.

---

# Kodutöö

- Vali laul: [https://is.gd/MJ7iNi](https://is.gd/MJ7iNi) või ekspordi enda produtud demost trackid.
- Tee uus projekt, korrektsete sätungitega ja tõmba trackid sisse.
    - Ekspordi kohe "Before" versioon.
- Lähene miksile gainstagingust, panimisest ja faderite balanseerimisest.
- Katseta elementide ekvaliseerimisega, proovi leida negatiivset maskimist ja korrigeerida seda EQga.
- Katseta elementide ja masteri kompresseerimisega. Katseta erinevaid attack ja release kiiruseid, et saavutada soovitud tulemus.
	- Tekita headroomi ja kasuta limitterit, et teha lugu valjuks. 
- Lae miksi enne ja pärast failid: [https://www.dropbox.com/request/1gsszcjaKfxgbTnTMMmo](https://www.dropbox.com/request/1gsszcjaKfxgbTnTMMmo)
    - Eesnimi_Perenimi_Projektinimi_Before.wav
    - Eesnimi_Perenimi_Projektinimi_After.wav
- Kui failid üleslaetud, vasta minu meilile:
    - Kirjelda kuidas lähenesid projekti dünaamikaga töötlemisse. Miks kompresseerisid või limiteerisid valitud elemente? Mis sätungitega ja miks?
- Vaatamiseks: https://www.youtube.com/watch?v=fnLL8Qo8S-w