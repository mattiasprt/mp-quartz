---
aine: "[[04 - Õpetamine/content/stuudiotoo-1/index|Stuudiotöö 1]]"
jrk: 1 & 2
kodutöö: "[[Salvestuse ettevalmistus]]"
publish: true
tehtud: true
---
![[Sissejuhatus Digitaalsesse Helitöötlusse#Kuidas saab laul Sinu peast teiste kõrva(klappi)desse?]]

![[Salvestamine ja produktsioon#Salvestamine]]
## Produtsendi roll stuudios

- Produtsent = Salvestus insener, vaimse tervise spetsialist / psühholoog, hääleseade spetsialist, nähtamatu (ära räägi esimesena peale take'i, las artist reageerib)
- Kuidas suhelda artistidega, muusikutega. Kuidas hoida sessioonis toredat ja loovat keskkonda, ilma produktiivsust kaotamata?
	- Konfliktide lahendamine, kui ideed põrkuvad.
- Aja efektiivne kasutus ja sessiooni eelne ettevalmistus.
	- Sämplitele kiire ligipääs ja sämplipanga tundmine. 
	- VSTde ja FXide kiire kasutus.
- Troubleshootimise oskus ajalise pinge all:
	- Latency;
	- Müra mikris;
	- Kaablitesteri kasutamine.

---
## Artist + Produtsent

- Kõige levinum koostöö formaat. Ühes ruumis, produtsent arvuti taga, artist mikri taga.
- Vaibi vs perfektsuse püüdmine. Kuidas leida balanss?
- Ideaalne keskkond usalduse loomiseks.
- https://arc.net/l/quote/twzrzddm

---
## Produtsent ja/või artist + Sessiooni muusik

- Muusik kes on tulnud ühte instrumenti või partiid esitama
- Olenevalt instrumendist asub muusik tihtipeale stuudioruumis, produtsent foonikas. 
	- Kuidas oleks muusikul võimalikult mugav eraldatud ruumis olla?
		- 001 ja 002
		- 001 ja 301

---
## Professionaalne pool

- Kui klient on aja eest maksnud siis ole ettevalmistatud ja õigel ajal kohal!
- Produtsendile makstakse teenuse ja loovuse eest. Sa ei tee endale laulu, sa teed seda kellelegi teisele, kes on usaldanud ennast sinu kätesse.
- Sinu maine määrab sinu tööeetika.

---
<!-- hide -->
![[Panorama Mail - Niche#**Here’s what actually affects how people perceive your brand **]]

---
<!-- /hide -->
## Salvestamise head tavad

- Salvesta nii palju kui saad, salvesta ka scratch trackid. Hea päästerõngas hädaolukordades.
	- Võimalusel kasuta "pre record audio input"i (Logicus "Flashback Recording"), et DAW salvestaks signaali juba enne salvestusnupu vajutamist. Et fraasi algused ei kaoks ära punch-inides ja sul oleks võimalik head esitust kinni püüda.
- Ärge laske kanali **keskmist** peaki üle -12dB, siis jääb veel headroomi kui peaks mingi üllatavalt vali hetk tulema.
- Subjektiivsed ja situatsioonilised mõtted:
	- Salvestusel võiks sound kõlada võimalikult sarnaselt nagu see ruumis kõlab.
	- Enne salvestus sessiooni võiks demo kuulata, et sessioonil sound kiiresti paika saada.
- Objektiivne mõte:
	- Lõpuks loeb see mis salvestatud saab, mitte see toon mis on ruumis.

---
## 001 + 002

- Kuidas kogu asi käima lükata?
	- Mac > Konverterid ja Monitooring (kui salvestate) > Master lüliti Black Lioni peal
	- Mac - user: SOUND, password: hsadmin, kõik projektid mille kallal tegutsete elavad teienimelises kaustas 
		- Projects > Tudengid > Teie Nimi. Desktopile ei salvesta!
- Salvestusvõimalused, Pro Tools vs teised DAWid:
	- Pro Toolsiga zero latency, teiste DAWidega latency. Variant ka oma läpakaga patchbayst signaali võtta enda helikaarti.

---
![[TÜ VKA Stuudio Signal Flow#TÜ VKA Stuudio Signal Flow]]

## DADman

- Meie stuudio monitor controller programm.
- Kui kasutate 001 arvutit siis Monitors > Sources > HDX
- Kui patchite enda helikaardi STEREO IN'i siis Monitors > Sources > Stereo In
- Kui soovite kõrvaklappe kasutada MTRXi paneelil siis Headphones > Sources (kui heli 001 arvutist siis HDX, kui oma Stereo Inist siis Stereo In)

---
![[Salvestamine ja produktsioon#Pro Tools 101]]
## Input list

- Ideaalne abivahend kui tekib probleeme ja on vaja inpute vahetada. Saate hoida silma peal, mis sisendisse mis signaal läheb.
- [TÜ VKA Stuudio Input List TEMPLATE](https://docs.google.com/spreadsheets/d/1BCbxRhaKBFH1tdbhUe7F7zAMbtVsWFcL5hDuThUsKoI/edit?usp=sharing)

<!-- hide -->

---
## Harjutus: Monitooring

- 001te paneme switchi ja jagame kõikidele Behringeri pultidesse heli. 
- Saadame Pro Toolsis audio eri kanalitesse audiot ja õpime Behringeri pulte kasutama. 
1. Recall empty slot (resetib puldi)
2. Default: EQ keskele, limiter kõige paremal, level keskel
3. Linkimine stereo kanalitele. Hoia link nuppu all ja vajuta kanalipaarist esimest, lase link nupp lahti.

---
## Harjutus: Overdub, Comp, Punch-in

- Overdub salvestamine ja tulemuste compimine:
	- Trackil Playlist vaade > Dragi takeid playlisti radadele (Grid mode)(alt + shift + ⬇️) > Noole nupuke raja peal, et compida parim take (alt + shift + ⬆️)

- Setupime mõned mikrofonid, et nende signaali võrrelda ja "group salvestust" teha.
	- Trackide gruppimine: Select tracks > cmd + G
- Mina lähen 002te ja loen mingi teksti 4 rida, te teete 001s Pro Toolsis 4 takei.
- Siis igaüks teist compib neljast takeist ühe rea kokku. Tehes korrektsed fadeid jne. 
	- Fadeid: Fade in / out tuleb klipi ülemisest nurgast drag'ides, crossfade kahe kattuva klipi vahel tuleb klippide alt nurgast drag'ides
- Tahan kuulda enda häälel ka lühikest ruumireverbi. 

- Punch-in poole salvestuse pealt. Input monitoring sees vs väljas. Quick punch-in recording mode.

---
<!-- /hide -->
## Praktikumide käigus õpime:

- Kuidas salvestada, heade tavadega. Gainimine, faasi kuulamine jne
- Stereotehnikaid salvestusel. (https://sengpielaudio.com/HejiaE.htm)
- Mikrite eripärasid ja nende kasutamist. Dünaamiline, kondensaator, ribbon.
- Eelvõimendite eripärasid ja nende kasutamist.
- Patchbay ja välise raudvara kasutamist.
- Bleedi vähendamine mikrofoni suunakarakteristikaga.

<!-- hide -->

---
![[04 - Õpetamine/content/stuudiotoo-1/index#Üldinfo]]

---
# Kodutöö

- Uuri kuidas sinu DAWis radade või stemide eksportimine käib. Veendu, et sinu eksporditud materjal kõlab samamoodi nagu eksporditud mixdown.
- Üks tudeng on valmis järgmiseks loenguks enda projekti jaoks midagi 002st salvestama. Salvestades kas kaasprodutsenti või kutsutud sessioonimuusikut (kui loeng hakkab 16:00 siis kutsuda nt 16:30, et meil oleks rahulikult ettevalmistus aega). 
- Hea viis kontrollitud ja turvalises keskkonnas enda projekti jaoks midagi salvestada.
- Valikud:
	- [x] Elektrikitarr / Basskitarr
	- [ ] Nord / Analoog süntesaator 
	- [x] Klaver (Võime ka kammersaalist)
	- [x] Vokaalid
	- [ ] Akustiline kitarr
	- [ ] Keelpill (Viiul / vioola / tšello / kontrabass)
	- [ ] Perkussiivsed elemendid / Vabalt valitud x instrument
	- [x] Trummiset (kõige keerukam)

- 17.10 Pepi projekti Lisanna ja Pepi vox
- 31.10 Lisanna projekti Pepi el.gtr
- 07.11 Oskari projekti Lisanna klaver kammersaalist
- 14.11 Maaria projekti trummiset

---
![[Salvestuse ettevalmistus]]

<!-- /hide -->