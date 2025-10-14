---
aine: "[[04 - Õpetamine/content/digitaalne-helitöötlus/index|Digitaalne Helitöötlus]]"
publish: true
jrk: "5"
kodutöö: "[[Salvestamine ja Produktsioon#Loop]]"
---
## Meenutuseks

![[Sissejuhatus Digitaalsesse Helitöötlusse#1. Laulukirjutamine ja demo tegemine]]

![[Sissejuhatus Digitaalsesse Helitöötlusse#2. Salvestus ja produktsioon]]

## Salvestamine

- Heli ja instrumente saab salvestada DAWi kasutades helikaarti. Mis võimaldab teha analoogheli digitaalseks ja võimendab signaali eelvõimendiga.
- Elektrilised instrumendid (elektri-, basskitarr) pulkkaabliga (TS) ja INSTRUMENT LEVEL (INST / Hi-Z / DI).
- Mikrofonid XLR kaabliga ja MIC LEVEL.
	- Kondensaator mikrofonidel on vaja FANTOOMTOIDET (+48v)
- Instrumendid millel on konkreetne LINE OUT väljund (süntesaatorid jne), pulkaabliga ja LINE LEVEL.

NOTE:
> - võta 5 58t kaasa ja jaga laiali
> - näita ka RODE mikrit peamaja foonikast

---

## Level? Gain? Ah?

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

![[Stuudio ja tehnika, produtsendi töövoog#Signal Flow]]

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

NOTE:
>- klõbista midi klahvil mõned noodid sisse
>- joonista piano rollis

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

## Harjutus

- Kõik salvestavad enda DAWi:
	- Mikrisignaali
	- Instrumendi signaali
	- MIDI signaali

---

# Kodutöö
## Loop

- Kõik produtseerivad enda DAWis 4, 8 või 16 taktilise loop'i. Loop ehk tükike muusikat mis kõlab loogiliselt kui ta kordub/loopib. Võite mõelda sellest ka kui laulu sektsioonist.
- Loop **PEAB** koosnema vähemalt neljast elemendist.
- Vähemalt üks elementidest **PEAB** olema ise sisse salvestatud helisignaal, ülejäänud võivad olla MIDI või helisamplid.
- Loop **VÕIKS** koosneda järgnevast:
	1. Akordijärgnevus - Näiteks MIDI klaver
	2. Meloodia - Näiteks sisse ümisetud meloodia, või MIDIga sisse mängitud meloodia jupp.
	3. Trummid - Trummi samplite loop, või MIDI instrumendi trummid
	4. Bass - MIDIga sisse mängitud, või instrumendi kaabliga salvestatud basskitarr
- Mängige ka eelnevas loengus katsetatud efektidega (eq, compressor, reverb, delay).
- Saatke eksporditud loop [SIIA](https://www.dropbox.com/request/WDUkrqufv7TzTWDv8zeU "https://www.dropbox.com/request/WDUkrqufv7TzTWDv8zeU") 
- Kirjutage mis elemente kasutasite, millised neist olid salvestatud ja kuidas. Kuidas protsess läks, kas produtseerides takerdusite millegi taha ja kas ülesanne aitas sul hoomata paremini enda DAWi ja tööriistade otstarvet ja kasutust. Kui midagi jäi segaseks siis kirjutage üles küsimused mida soovite veel arutada!
