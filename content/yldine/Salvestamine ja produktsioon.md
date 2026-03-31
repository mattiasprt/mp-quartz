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
## Impedance

- Preampidel saab reguleerida *impedance*-it, ehk takistust. Lihtsustatult:
	- Kõrge pre takistus = signaalil rohkem kõrget otsa
	- Madal pre takistus = signaalil rohkem madalat ja keskmisi
	- Veidike nagu tilt EQ, mõnel mikril mõjub soundile rohkem (ribbonid ja dünaamilised), mõnel vähem
- Igal mikril on väljund takistus igal prel on sisend takistus. Kui pre takistus on 5-10x kõrgem mikri takistusest, siis on tegu justkui "optimaalse" soundiga.
- Kui võimalik pre pealt kruttida, siis alustage kõrgelt ja liikuge madalamaks, usaldage oma kõrvu!

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
# Produktsioon

- Salvestatud materjali töötlemine loovalt ja eesmärgipäraselt. 
- MIDI heliallikate valimine, kasutamine ja vormimine, helidisain.
- Helisamplite kasutamine, nt trummid jne.

---
## ..ehk

- Salvestamine - esituse püüdmine
- Produktsioon - püüdud esituse vormimine

---