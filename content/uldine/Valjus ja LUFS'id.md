---
publish: true
---
# Valjuse sõda ja Normaliseerimine

- Traditsioonilised masterid võistlesid valjuse nimel, sest valjem CD kõlas paremini. https://forums.vaikene.ee/viewtopic.php?t=46
- Tänapäeval on voogedastusplatvormidel **valjuse normaliseerimine**. Ehk kõik lood keeratakse vaikimisi võrdsele mõõdetud valjusele (Integrated LUFS).
	- Ehk väga valjuks töödeldud master'id kõlavad vähem dünaamilisemalt ja elutult, sest neid keeratakse rohkem vaiksemaks.
	- Kui see seade välja lülitada, siis valjem master köidab endiselt rohkem tähelepanu kui dünaamilisem master. Aga vaikimisi on see seade kõigil sees.
	- Normaliseerimine kaotab valjusega seotud "eelised" ning kaotatud dünaamikat tagasi ei saa.
	
<!-- hide -->
>NOTE:
>- peenesta mingi mix limitterisse, et tekiks seos valjuse võitmise ja dünaamika kaotamise suhtes. gainmatch ja võrdle dünaamilist versiooni, väiksema dünaamikaga versiooniga. SEMINARITÖÖ materjal
>- näita exposeis paar näidet, et kui palju keeratakse vaiksemaks.
>- lase muusikat ja näita Youleanis mõõteid

<!-- /hide -->

---
# Praktikas

- Masterdamise pool tööd on "kuidas saada mix konkurentsivõimeliselt valjuks, ilma kriitiliste moonutusteta". Pole nii kerge kui võib tunduda.
> *"It's not how loud you make it, it's how you make it loud."*

---
## True peak

- Ehk *intersample peaks*. Samplite vaheline reaalne lainehari.
- Lihtsalt ärge laske üle 0-i, te ei võida sellest midagi.
- Voogedastusplatvormid soovitavad hoida seda -1, et jätta headroomi peale kadudega kodeerimist (*lossy encoding*). Reaalsuses on see overkill. -0.5 on ok, -0.3 on piiripealne.
- Reaalsuses mängivad enamus kuulamissüsteemid intersample peakid maha ja ei distorti. Kuid mingid odavamad seadmed distortivad.

<!-- hide -->
>NOTE:
>- [Kings Of The Rollers - Don't Wanna Wake Up.wav](file:///Users/mattiasprt/Music/HQ%20REFERENCES/_MINU/Kings%20Of%20The%20Rollers%20-%20Don't%20Wanna%20Wake%20Up.wav)
>- clippiva laulu näide: https://tidal.com/browse/track/188802769?u al. 6:00
>- VALI 
>	- https://tidal.com/track/393309860/u
>	- https://tidal.com/track/446936321/u

<!-- /hide -->

---
## LUFS

- Viis mõõta *tajutavat* valjust, mitte lihtsalt laine amplituudi. Sagedusspetsiifiline valjuse mõõtmine.
	- Kuid: 1 dBFS = 1 LUFS
- Momentary - 400ms vältel mõõde
- Short Term - 3s vältel mõõde
- Integrated - Terve loo momentary LUFS mõõdete keskmine.

---
## Kogumik vs Singel

- Singlid keeratakse kõik samale valjuse astmele. Ehk valdavalt -14 int. LUFS.
- Kogumikke kuulates keeratakse kõik lood vastavalt kõige valjemale loole vaiksemaks. Et säiliks laulude vaheline valjuse ja dünaamika erinevus. 
	- Ehk kõige valjem lugu keeratakse -14 int. LUFS, ning kõik teised lood keeratakse sama palju dB vaiksemaks.

<!-- hide -->
>NOTE:
>- Loudness Penalty Studio albumi näide

<!-- /hide -->

---