---
publish: true
---
# Salvestamine

- Heli ja instrumente saab salvestada DAWi kasutades helikaarti. Mis võimaldab teha analoogheli digitaalseks ja võimendab signaali eelvõimendiga.
- Elektrilised instrumendid (elektri-, basskitarr) pulkkaabliga (TS) ja INSTRUMENT LEVEL (INST / Hi-Z / DI).
- Mikrofonid XLR kaabliga ja MIC LEVEL.
	- Kondensaator mikrofonidel on vaja FANTOOMTOIDET (+48v)
- Instrumendid millel on konkreetne LINE OUT väljund (süntesaatorid jne), pulkaabliga ja LINE LEVEL.

<!-- hide -->
>NOTE:
> - võta 5 58t kaasa ja jaga laiali
> - näita ka RODE mikrit peamaja foonikast

<!-- /hide -->

---
## Level ja gain

- Gaini (ehk signaali võimendust) pane nii palju, et DAWis oleks keskmine peak amplituud -12dB kandis. Nähtav *meter*i pealt. Jätab ruumi (*headroom*) ootamatult valjudeks hetkedeks.

- Signaali takistuse (impedance) erinevused:
	- MIC Level > Preamp + Gain +  PHANTOM (kui vaja) > LINE Level
	- INSTRUMENT Level > Preamp + Gain > LINE Level
	- LINE Level, kõige valjem, ei vaja võimendust. 
		- Näiteks helikaardi ja kõlarite vaheline ühendus, või süntesaator Line Outiga.

- Enamikel helikaartidel on *combo* sisendid, ehk võimaldavad kõike ülalolevat.

---
## Monitooring

- ..ehk kuidas enda signaali kuulda?
- Signaali monitoorimine kas DAWi siseselt või helikaardi pealt "direct monitoring".

---
## Salvestamise signaaliahel

<!-- hide -->
[[Salvestamise Signal Flow Canvas.canvas|Salvestamise Signal Flow Canvas]]
<!-- /hide -->

![[Salvestamise Signal Flow.png]]

---
## *Latency*

- Määratud DAWi buffer size'ist. Mida madalam seda vähem viidet, kuid raskem arvutil hoomata. 
- Mõõdetud millisekundites, enamasti kuni 10ms on ok.
- Peale salvestust DAW kompenseerib viite automaatselt. *Latency compensation*

---
## MIDI

- Virtuaalsete instrumentide kasutamine on läbi MIDI.
- MIDI noote saab salvestada DAWi kasutades MIDI instrumente, enamasti ühendatud arvutisse USBga.
	- Saab ka kasutada arvuti klaviatuuri
- MIDI noote saab joonistada ja redigeerida "piano rolli" vaates.
- MIDI nootide ajastust saab korrigeerida *quantize*'inguga.

<!-- hide -->
>NOTE:
>- klõbista midi klahvil mõned noodid sisse
>- joonista piano rollis

<!-- /hide -->

---
## Produktsioon

- Salvestatud materjali töötlemine loovalt ja eesmärgipäraselt. 
- MIDI heliallikate valimine, kasutamine ja vormimine, helidisain.
- Helisamplite kasutamine, nt trummid jne.

---
## ..ehk

- Salvestamine - esituse püüdmine
- Produktsioon - püüdud esituse vormimine

---
# Pro Tools 101

- Pro Toolsi käivitades hoidke N-i all.
	- Audio engine: HDX, kui ei näita siis tähendab et süsteem on väljas, või on mingi bug. Tehke arvutile restart, kui olete veendunud, et kõik peaks korrektne olema. 
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

---
## Salvestamine Pro Toolsis

- Rajale materjali salvestamiseks, pange rajal record enable nupp sisse.
- Input monitoring nupp sees = kui tahad kuulda tracki live inputi, väljas kui tahad kuulda salvestatud materjali.
<!-- hide -->
- Katsetada teha eraldi aux track mikri mõlemapoolseks monitooringuks. Siis ei lähe signaal kunagi mutesse kuulaja poolelt, sest selle saab saata otse behringeri ja ei ole mõjutatud rec enable või input monitoringust.
<!-- /hide -->
- Multimic salvestustel trackide gruppimine: Select tracks > cmd + G
- Punch-in: 
	- QuickPunch REC mode
- Loop recording:
	- Loop recording mode peale
	- Preferences -> Operation -> “Create New Playlists on Loop Record"
- DSP efektid ei lisa latencyt, saab kasutada salvestusel.
- Duplicate track, ilma klippideta: 
	- Right click, duplicate track (cmd + shift + D)
		- Uncheck "Playlist" - siis ei kopeeri klippe.
	- Mõistlik teha kohe alguses mitu tracki ja siis jooksvalt nimetada neid sobivalt.
- Playlistide kasutamine, compimiseks: 
	- Playlisti vaade tracki pealt. Vaikimisi on waveformi vaade.
	- alt + shift + down - kopeerib valitud klipi uude playlisti
	- alt + shift + up - kopeerib valitud take'i main track'ile.
- Fadeid: Fade in / out tuleb klipi ülemisest nurgast drag'ides, crossfade kahe kattuva klipi vahel tuleb klippide alt nurgast drag'ides
- Eksport:
	- Selecti kõik materjal, veendu, et alguspunkt oleks sama mis importitud materjali alguspunkt. Siis kui tõmbate materjali enda projekti on kõik ajaliselt õiges kohas.
	- Consolidate: 
		- Edit -> Consolidate VÕI cmd + shift + 5 (või 3?)
		- Vaadake kuhu failid tekkisid ja copyge endale kuhugi sobivasse kohta. Siis võite Pro Toolsis undo teha ja kõik materjal on un-consolidated kujul tagasi.
	- VÕI File > Export > Selected Tracks as Files (või Bounce selected tracks)