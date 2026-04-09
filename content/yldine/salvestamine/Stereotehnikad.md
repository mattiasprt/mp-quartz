---
publish: true
---
# Stereotehnikad

- Korrektsete stereotehnikate kasutamine salvestamisel aitab meil luua naturaalsema panoraami, "sügavuse" ja vältida faasiprobleeme.
- [Stereotehnikate visualiseerimine](https://sengpielaudio.com/HejiaE.htm)
- Enamike stereotehnikate puhul peaks mikritel olema preampi pealt pandud gaini sama palju. Nt. MSi puhul ärge vaadake DAWi metereid, sest selle järgi te gainite Side'i liiga palju. 
	- Kui üks pool on valjem kui teine, siis te võiksite korrigeerida mikrite või heliallika asukohta, mitte gainima ühte poolt rohkem kui teist.

---
## Coincident

Mikrite kapslid on kohakuti, vältimaks faasiprobleeme peaaegu täielikult.
### XY

- 2 cardioidi, kapslite vahel 90 kraadi.
- Konkreetne, täpne.

![[Pasted image 20260324114113.png]]

### Blumlein

- 2 figure 8-i, kapslite vahel 90 kraadi.
- Korjab väga hästi ruumi kõla / reverbi, kõlab väga naturaalselt.

![[Pasted image 20260324114137.png]]

### MS

- Mid/Side
	- Mid - 1 direktsionaalne mikker mis on suunatud heliallika suunas
	- Side - 1 figure 8, mis on suunatud külgedele, null point heliallika suunas. Mikri esikülg tõlgendub vasakuks kanaliks.
- Signaalid on DAWis kokkumängitud läbi "dekooderi". Mis tõlgendab mikrite signaalid korrektselt. 
	- Enamasti leidub see plugina vormis, nt. https://www.voxengo.com/product/msed
		- Salvestate stereo tracki, L on Mid ja R on Side, pluginas panete "Decode mode" peale.
	- Manuaalne dekodeerimine (kui grupeerida track 2 ja 3 siis nende volüümi muutes saab mängida signaali laiusega):
		- Track 1 - Mid - pan C
		- Track 2 - Side - pan hard L
		- Track 3 - Side, duplicate - pan hard R - flip phase
- Ainuke stereotehnika mis võimaldab hiljem korrektselt digitaalselt heliallika laiust reguleerida. 

![[Pasted image 20260324115514.png]]

---
## Near-Coincident
### ORTF

- 2 kardioidi, 110 kraadi ja 17 cm kapslite vahel.

![[Pasted image 20260324114046.png]]

---
## Spaced pair
### AB

- Kaks mikrit erinevates asukohtades, kuid kui pan-ida üks L ja teine R siis heliallika panoraam on naturaalne.

![[Pasted image 20260324114159.png]]

### Decca tree

- Orkestri salvestusel väga levinud. 
- 3 omnit, T kujuliselt, üks ees, kaks külgedel.

### 3:1 reegel

- Tähtis spaced pair tehnikate kasutamisel.
- Kui kaks mikrit salvestavad sama heliallikat aga nad on erineval kaugusel allikast, siis heli jõuab mikritesse erinevatel aegadel, põhjustades osalist faasi tühistust. Seda saab parandada tagantjärgi helifailide paika lohistamisega, et faasid kattuksid, või juba **salvestusel kasutades korrektset tehnikat**.
- Iga kaugusühiku kohta, mis jääb mikrofoni ja tema heliallika vahele, peaksid kõik teised lähedalasuvad mikrofonid asuma esimesest mikrofonist vähemalt **kolm korda kaugemal**.
	- Kui mikrofon A asub heliallikast kaugusel d, siis järgmine mikrofon B peab asuma mikrofonist A vähemalt kaugusel 3d
- Kui te kasutate mitu *coincident* tehnikat ühe heliallika salvestusel, siis üks coincident paar on selle reegli järgi justkui üks mikker.