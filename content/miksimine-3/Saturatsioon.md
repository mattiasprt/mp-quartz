---
aine: "[[04 - Õpetamine/content/miksimine-2/index|Miksimine 2]]"
publish: true
jrk:
---
<!-- hide -->
> [!NOTE] Note
> - PLUGIN DOCTOR analüüs
> - Intermodulation jutt

---
<!-- /hide -->
# Saturatsioon

- Tegu on ülemhelide lisamisega, et täita sagedusspektrumit ja lisada täidlust ning *liimi*.
	- Ülemhelid lisatakse vastavalt sisend *waveform*ile, saturatsioon ei vaata spetsiifilisi noote, vaid pigem reageerib konstantsele sageduste summale. Tugevama amplituudiga elemendid saavad suurema saturatsiooni osaliseks. 
- Excitement = Saturation, ehk sünonüümid
- Distortioni efekt on sisuliselt agressiivne satureerimine.
- Satureerimine ka "kompresseerib" dünaamikat. Sest, et saturatsioon on dünaamika / gaini tundlik efekt. Peakid ja teravad transiendid pehmendatakse.
- Alati level matchige enda satureerimine, ärge laske valjusel end petta!

---
## Ülemhelide struktuur

- Odd harmonics
	- 100Hz puhul 300, 500, 700 jne
- Even harmonics
	- 100Hz puhul 200, 400, 600 jne
- Ebamusikaalsed ülemhelid
	- Ei ühti toonika ülemhelide struktuuriga. Tekivad kui signaal on liigselt distortitud.

---
## Saturatsiooni tüübid

- Tape
	- Pehmendab kõrgeid sagedusi, teeb veidike kompenseerivat EQt, lisab soojust, *punchy*, *fatness*-i. Väga hea liimija.
	- Jälgige VU metereid, üle 0-i võib lisada koledat distortionit, leidke sweetspot. Enamasti RMS -18 või -12.
	- Mida kõrgem IPS seda puhtam, mida madalam - seda räpasem ja lofim.
	- Ampex, Studer jne
- Tube / Lamp
	- Kidravõimud, Black Box jne
- Transistor
	- Kui pushida siis *fuzzy, gritty*, kompressioon on tugevam.
- Kuna kõlakarakter on subjektiivne ja suhteline siis lihtsalt keerake nuppe, lõpuks saate aru kuidas mingi plugin kõlab ja mis olukorras kasutada on mõistlik.
- Saturatsioon peitub ka enamikes analoog emu pluginates. Nt Pulteci EQ, 2A või 76 kompressorid jne

<!-- hide -->
>NOTE:
>- Neutron Exciteris on hea odd ja even harmonics näide
>- Näita populaarseid pluginaid ja räägi kuidas töötavad

<!-- /hide -->

---
- Mõned pluginad võimaldavad sihtida spetsiifilisi sagedusvahemikke saturatsiooniga. Täidab spektrumit ja lisab täidlust. 
	- Kui kick on juba massiivne ja punchy siis ärge seda satureerige, satureerige näiteks mid-e. Kui lool on presence-it puudu satureerige high-mide jne. 
	- Kuid olge ettevaatlikud väga kõrgete sageduste satureerimisega! Sest...

---
## Nyquisti sagedus ja oversampling

- Sample rate / 2 = Nyquisti sagedus
- Kui tekitatud ülemhelid tahavad minna sellest kõrgemale, siis nad põrkuvad tagasi ebaharmooniliselt / dissoneeruvalt.
- Selle parandamiseks saab mõnel pluginal kasutada **oversampling**-u, mis tõstab plugina sisest sample rate-i, et tekitatud ülemhelidel oleks võimalik kõrgemale ulatuda. Siis filtreeritakse kõik mis on üle projekti sample rate-i välja. Tekib puhtam kõla. Enamasti kuuldav kõrgetel sagedustel.
	- Liigub paarisarvu kordsete kaupa 2x, 4x, 8x, 16x jne. 
		- 48k puhul: 96, 192 jne. Enamasti 4x on piisav, sealt edasi overkill.
	- Lülitage sisse siis kui kuulete erinevust (eriti kõrgetes sagedustes), muidu lihtsalt sööb arvuti jõudlust. 

---
![[Dünaamika 3#Top-down mixing]]