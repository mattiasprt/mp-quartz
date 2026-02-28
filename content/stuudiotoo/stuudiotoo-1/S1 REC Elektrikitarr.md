---
aine: "[[Õpetamine/content/stuudiotoo/stuudiotoo-1/index|Stuudiotöö 1]]"
jrk: "4"
publish: true
kodutöö: "[[S1 Salvestuse ettevalmistus]]"
tehtud: true
---
<!-- hide -->
>NOTE:
>-  https://www.sweetwater.com/insync/best-guitar-amp-mics/

<!-- /hide -->
# Elektrikitarri salvestamine

- Kõik järgnev kehtib valdavalt ka elektribassi salvestustele.
- Tooni saab mõjutada ka pilli enda pealt tooni potekaga ja pickupi valikuga. Hea tava on leida kiiresti mingi sound mis ruumis kuulates meeldib, ning siis ülejäänud materjaliga kooskõlas katsetada erinevaid pickup-e jne. 
	- Tooni pehmemaks keeramine kitarri pealt, võib tekitada meeldivama distortioni tooni võimust.

---
## Direct Injection (DI) Box

- Teeb balansseerimata signaal balansseerituks, võimaldab "link"'ida väljundi võimu sisendisse. 
- Võimaldab salvestada paralleelselt puhast ja võimu signaali. Puhas signaal tuleb DI boxi XLR väljundist, signaal läheb võimu läbi "through" või "link" väljundi.
- Kui kitarrist kasutab tänapäevaseid pedaale/emulaatoreid mis simuleerivad ampi (nt meie Kemper), siis võib lihtsalt DI boxiga ka salvestada.
- DI signaali järgi on võimalik distortitud signaali ajastust waveformil paremini näha. Sest distortitud signaalil on keeruline näha transiente, DI signaalil aga on väga selgelt noodi alguseid näha.

---
## Amp

- Kuna võimu peab enamasti valjuks keerama, et sealt tuleks hea toon välja, lambid töötaksid korralikult jne, siis kasutame võimu ees mikrofone mis taluvad kõrget SPLi (Sound Pressure Level). 
- Mikri asetus on tähtsam kui mikri valik! Mikri kaugus umbes 1 inch.
	- Kui mikker on suunatud kõlari koonuse suhtes:
		- Keskele - terav ja bright
		- Äärde - tuhmim, rohkem "keha" ja pehmem
		- Vahepeale - balansis, võimalik ka mängida mikrofoni keeramisega kõlari suhtes.
	- Kui mitu mikrit, siis veenduge et kõikide mikrite kaugus kõlarist on sama, siis on nende signaal faasis.
- Tõstke võim üles, näiteks tooli peale. Vähendab põranda peegeldusi, madala otsa "boomysust".
- On ka levinud võimu teise ruumi tõstmine, nö "amp room", saab keerata mõnusalt valjuks ja ei bleedi teistesse mikritesse, kui nt live salvestus.

---
## Mikrid

- Dünaamilised - Asetada võimalikult lähedale võimule, sõrme kaugus
	- Shure SM57 - *edge, bite*
	- Sennheiser MD 421 - mõnus mid-range
- Teatud ribbonid, mis taluvad kõrget SPLi - lisavad mõnusa low-midi, ribbonid on tundlikud, ärge asetage liiga lähedale.
- Kondensaatorid, mis taluvad kõrget SPLi - puhas ja särav kõrge ots, nt AKG 414, U87

---
## Müra???

- Kui tegu on 50Hz elektrivooluga mida mingi trafo või instrumendi pickup korjab üles, ehk "Ground loop", siis on tegu elektrilise/maanduse probleemiga. 
- Kui tegu on hissiga, siis on tõenäoliselt mingi pedaal mürane.
- Kui ragisemine, siis tõenäoliselt mingi vigane kaabel.
- Samm sammult probleemi leidmine
	- Esiteks katsetage DI boxil "ground" või "earth" nupu vajutamist. 
	- Siis asetage muusik ruumis ümber, äkki tema pilli pickupid korjavad seda üles. Kui pilli pealt keerata vol maha ja noise jääb järgi, siis on tegu pilli pickupidega. 
	- Veenduge, et kaabli liigutamine ei muudaks midagi, kui muudab siis vahetage kaabel välja.
	- Siis katsetage asjade ümber tõstmisega, võim, pedaalid, kaablid jne. Vaadake et ei oleks vooluallikate lähedal.
	- Katsetage teisi pistikupesasid võimule ja pedaalidele. Katsetage nii et kõik pedaalid ja võim jne oleks sama kaitsme all, katsetage nii et kõik on erinevate kaitsmete all.

---
## Reampimine

- Kasutades kuiva DI signaali, saame reampida signaali. Ehk salvestada olemasolevat salvestist uuesti, näiteks uue võimu või teiste seadetega. 
- Selleks tuleb kasutada reamp boxi, mis teeb väljundist sisendi. Saadame DAWist signaali välja, reamp boxi, boxi väljundist saadame signaali tagasi võimu TS kaabliga.
	- Ehk teeb balansseeritud signaalist balansseerimata signaali.

---
# vt. ka [[Pro Tools#Salvestamine Pro Toolsis]]