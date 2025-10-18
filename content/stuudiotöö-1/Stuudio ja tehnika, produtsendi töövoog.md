---
aine: "[[04 - Õpetamine/content/stuudiotöö-1/index|Stuudiotöö 1]]"
jrk: 1 & 2
kodutöö: "[[Stuudio ja tehnika, produtsendi töövoog#Salvestuse ettevalmistus]]"
publish: false
---
![[Sissejuhatus Digitaalsesse Helitöötlusse#Kuidas saab laul Sinu peast teiste kõrva(klappi)desse?]]

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

![[Panorama Mail - Niche]]

---

## Salvestamise head tavad

- Salvesta nii palju kui saad, salvesta ka scratch trackid. Hea päästerõngas hädaolukordades.
	- Võimalusel kasuta "pre record audio input"i (Logicus "Quick Punch-In" ja "Flashback Recording"), et DAW salvestaks signaali juba enne salvestusnupu vajutamist. Et fraasi algused ei kaoks ära punch-inides.
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
- Salvestusvõimalused, Pro Tools vs teised DAWid.
	- Pro Toolsiga zero latency, teiste DAWidega latency. Variant ka oma läpakaga patchbayst signaali võtta enda helikaarti.

---

## Signal Flow

%% [[Salvestamise Signal Flow.canvas|Salvestamise Signal Flow]] %% ![Salvestamise Signal Flow.png|700](file:///Users/mattiasprt/Library/CloudStorage/GoogleDrive-mattiasprt@gmail.com/My%20Drive/ÕPETAMINE/Salvestamise%20Signal%20Flow.png)

### ![[TÜVKA Stuudio Signal flow.canvas|TÜVKA Signal flow]][LINK](https://mattiasprt.notion.site/T-VKA-Stuudio-Signal-Flow-27adc1e62ee08009a68bce50470ab0c3?pvs=143)

---

## DADman

- Meie stuudio monitor controller programm.
- Kui kasutate 001 arvutit siis Monitors > Sources > HDX
- Kui patchite enda helikaardi STEREO IN'i siis Monitors > Sources > Stereo In
- Kui soovite kõrvaklappe kasutada MTRXi paneelil siis Headphones > Sources (kui heli 001 arvutist siis HDX, kui oma Stereo Inist siis Stereo In)

---

## Pro Tools 101

- Pro Toolsi käivitades hoidke N-i all.
	- Audio engine: HDX, kui ei näita siis tähendab et süsteem on väljas, või on mingi bug. Tehke arvutile resa, kui olete veendunud, et kõik peaks korrektne olema. 
	- Buffer size ja kõik muu jätke puutumata. Sest läbi HDXi on meil niikuinii zero latency salvestamine.
- File > New
	- Määrake Bit Depth ja Sample Rate. 
	- I/O settings valige kõige uuem TYVKA STUUDIO. (hetkel TYVKA STUUDIO 2025 KEVAD)
	- Prompt for location > Create > Tehke projekt enda kausta
- Uus track: Cmd + Shift + N
	- Tehke ka Stereo Master Fader
	- Click track, Track > Create Click Track
- Pro Tools HDX võib kaduda Maci sound settingutest ära kui Pro Tools on aktiivne. 
- Monitooring läbi behringeri: Sends > Mon 1-15 > Fader 0 ja PRE
	- PRE fader send, sest siis saab muusik ise enda Behringeri puldi peal enda kõrvamixi teha.
- Reverbi kanali tegemine: Sends > New track > Auxi kanalile Insert FX
	- Pro Toolsis käib signaalide saatmine "bus"idega. Kui teha uus Aux kanal niisama siis ei ole bus'i mis sinna signaali saadaks, peab manuaalselt tegema.
- Salvestamine: QuickPunch, PreRoll
- Et peale salvestust materjal välja saada, on kõige mugavam valida kõik materjal ja Edit > Consolidate Clip > siis leiate failid projekti kaustast Audio Files > tehke projektis Undo, et kõik cutid jne säiliksid projektis, teie consolidated failid säilivad kaustas.

NOTE:
>- Näita mingeid kasulikke stock pluginaid

---

## Inputlist

- Ideaalne abivahend kui tekib probleeme ja on vaja inpute vahetada. Saate hoida silma peal, mis sisendisse mis signaal läheb.
- [TÜ VKA Stuudio Inputlist TEMPLATE](https://docs.google.com/spreadsheets/d/1BCbxRhaKBFH1tdbhUe7F7zAMbtVsWFcL5hDuThUsKoI/edit?usp=sharing)

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

## Praktikumide käigus õpime:

- Kuidas salvestada, heade tavadega. Gainimine, faasi kuulamine jne
- Stereotehnikaid salvestusel. (https://sengpielaudio.com/HejiaE.htm)
- Mikrite eripärasid ja nende kasutamist. Dünaamiline, kondensaator, ribbon.
- Eelvõimendite eripärasid ja nende kasutamist.
- Patchbay ja välise raudvara kasutamist.
- Bleedi vähendamine mikrofoni *polar patternitega*

---

![[04 - Õpetamine/Ained/Stuudiotöö (1. osa)#Üldinfo]]

---
# Kodutöö
## Salvestuse ettevalmistus

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
- Selleks vaja, enne järgmist kohtumist:
	- Inputlist, et oleksime stuudiosse jõudes valmis kohe kaableid seina ühendama ja kõik signaalid jookseksid Pro Toolsis õigetesse kanalitesse.
	- Ettevalmistatud Pro Toolsi projekt. Tühjade placeholder kanalitega salvestatava materjali jaoks, korrektsete inputidega, valmis monitoorimiseks. Preppima ei pea 001s, Pro Tools on ka arvutiklassis ja peamaja foonikas.
	- Sessioonimuusik või kaasprodutsent kes on valmistunud partiid esitama.
	- Oma projekt 001s või oma läpakas kuhu peale salvestust importida salvestatud materjal.


17.10 Pepi projekti Lisanna ja Pepi vox
31.10 Lisanna projekti Pepi el.gtr
07.11 Oskari projekti Lisanna klaver kammersaalist
14.11 Maaria projekti trummiset