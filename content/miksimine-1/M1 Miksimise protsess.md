---
aine: "[[Õpetamine/content/miksimine-1/index|Miksimine 1]]"
jrk: 2 & 3
kodutöö: "[[Mix 1 V1]]"
publish: true
tehtud: true
---
<!-- hide -->
> [!note]
> - Tulevikus võiks see olla 3h loeng, jõuab ühe korraga ja rahulikult kõik tehtud.
> - ÄRGE KUNAGI NÄPPIGE MASTER FADERIT

---
<!-- /hide -->
# Kuidas enda produtseeritud muusikat miksimiseks üle anda?

- Tõmbab selge piiri produktsiooni ja miksimise faasi vahele.
- Trackid ehk rajad EI OLE Stemid!
	- Rajad - individuaalsed, (enamasti) töötlemata rajad.
	- Stemid - instrumentide grupeeringud, töödeldud, üks grupp = üks fail (nt. kõik trummid on ühte stemi kokkumängitud).
- Eksportides veenduge, et radade või stemide kokkumäng kõlaks võimalikult sarnaselt teie demoga. Tõmmake materjal uude projekti ja võrrelge demo eksporditud materjaliga.
	- Miksija tahab üle võtta sealt, kus produktsioon pooleli jäi. Miksija ei taha tööd uuesti teha, kui see juba kõlab hästi. Alati saab tagantjärgi saata "kuivasid" tracke.
	- Kui te olete produktsiooni käigus kasutanud master kanalil dünaamikast mõjutatud tööriistu, siis radu eksportides, võib nende kokkumäng teisiti kõlada.
- Nimetage enda trackid või stemid loogiliselt, instrumendi gruppide kaupa. Kui insener tõmbab materjali enda projekti, siis on tal kohe hea ülevaade.

---
# Miksimise protsess
## Failihaldus

Minu projekti kausta ülesehitus:
![[Pasted image 20250826134106.png]]
- IMPORT kausta tõmban kõik failid mida projekt kasutab, et failid oleks projekti kaustas olemas, tuleviku kindel. Impordi kaustast tõmban failid enda projekti. 
- Iga mixdowniga salvestan ka projektifaili koopia Mixdowni kausta. Juhuks kui ma tahan varasemasse projekti staadiumisse hiljem tagasi minna, või vaadata mis ma teinud olen.

---
## Algne DAWi seadistus

- Buffer size - Mida kõrgem, seda rohkem latencyt aga projekt on arvutile kergem seedida. Muidu hoidke madalal, kui arvutil on raske, siis tõstke.

---
- Sample rate ja bit depth. Sõltuv failidest. Projekt peaks olema samade sätungitega, mis failid. Siis ei toimu ühtegi konversiooni.
- Sample rate - Mitu "punkti" sekundis helist salvestatud on, mõõdetud Hertsides. Analoog helil on "lõpmatu" detail, digitaalselt heli peab *quantize*'ima.
	- Mida rohkem punkte, seda kõrgemaid sagedusi on võimalik salvestada. 
		- CD kvaliteet ehk 44.1kHz võimaldab salvestada kuni 22.5kHz (Nyquisti sagedus), inimkõrv kuuleb max. 18kHz. 
	- Kuid määrab ka töötlemise kvaliteedi, kui kõrgem sample rate, siis heli manipuleerimisel on rohkem resolutsiooni ja see põhjustab vähem *artifacte*.
	- Paralleel videomaailmaga, FPS. 30 kaadrit sekundis on ok aga 60 on oluliselt sujuvam.
	- Kuid mida kõrgem sample rate, seda kõrgem CPU ja kettaruumi kasutus.
	- Hoidke lihtsalt 48kHz, set and forget.

---
- Bit depth - Kui palju detaili üks "punkt" saab omada (amplituudi astmed). Jällegi, analoog helil on "lõpmatu" detail, digitaalselt heli peab *quantize*'ima.
	- 16-bit (CD) = 65,536 possible volume levels; 24-bit (digitaalne standard) = 16.7 million levels
		- Ehk määrab dünaamilise ulatuse: vahe kõige vaiksema salvestatava signaali ja kõige valjema vahel. 
			- Dynamic range, Noise floor (dB) ≈ bit depth × 6
				- 16-bit: 16 × 6 = 96 dB (Kõik mis jääb alla -96dB kaob *kvantimismüra* sisse)
				- 24-bit: 24 × 6 = 144 dB
			- Noise floor tähtis, kui salvestatud liiga vaikselt ja tahate tagantjärgi signaali valjemaks keerata. [24 vs 16bit.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/24%20vs%2016bit/24%20vs%2016bit.RPP)
	- Hoidke lihtsalt 24bit, set and forget.

---
- Alati saab kvaliteeti vähendada aga hiljem "juurde panna" ei saa.
- Mida kõrgemad sätungid, seda rohkem kulub kettamahtu.

NOTE:
> - Oma projekte salvestades hoian 48_24, rohkem pole vaja, 44.1_16 ka okei. Ärge mõelge üle.

---
## Projektihaldus

1. Projekti BPM paika. Kontrolli üle, et audio warpimine oleks maas. Siia saab nt. demo faili sisse tõmmata: https://tunebat.com/Analyzer. Kui demo faili pole siis tap tempoga leiab ka enamasti üles. Kerge vaadata kas trummilöögid langevad grid'i peale.
2. Impordi trackid projekti. Tähtis teada kas DAW kopeerib failid projektikausta, või refereerib kuskilt mujalt. Kui refereeri mujalt, siis ole kindel, et tulevikukindlast kohast!
3. Käi trackide nimed üle, et kõik oleks selge.
4. Grupeeri trackid instrumentide või partiide järgi. 
5. Värvi trackid endale sobilikult ära, et aitaks visuaalset navigatsiooni.
6. Lisa tühjad träkid eelmistele versioonidele, referents lauludele jne. Vaata et nad ei jookseks masterist läbi, vaid otse helikaardi outputi!

<!-- hide -->
NOTE: 
> - organiseerimine ja hügieen! püstitatud struktuur võiks püsida kõikide projektide vältel, future proofing
> - olge teadlikud mis on kliendi ootused miksile, kui oled ise produnud siis küsi endalt ja teistelt enne miksima hakkamist, kuidas see lugu saaks paremini kõlada?
> 	- kui muidu on backseat produmine tüütu, siis selles etappide üleminekus on igasugune tagasiside oodatud

<!-- /hide -->

---
![[Dünaamika#Volüüm ja amplituud]]
## Signal flow

- **Kõik eelnev mõjutab järgnevat!**
- Clip > Clip Gain > Clip FX > (Prefader Pre-FX Send) > Insert FX > (Pre-fader Post-FX Send) > Fader, Pan > (Post-fader Send) > Group / Bus > Master
	- [[DAW Signal Flow Canvas.canvas|Signal Flow joonis]] - [LINK](https://www.dropbox.com/scl/fi/1weowpx8lyjo36epkoubj/Signal-Flow.png?rlkey=ojh0frlwvq3qrdk82bd4hm111&dl=0)
- EHK fader määrab kanali volüümi, clip gain määrab kanali amplituudi!
	- Clip gain määrab FXide sisendi valjuse. Kui FX clipib siis hiljem fader seda ei muuda.

<!-- hide -->
NOTE: 
> - seleta erinevus clipgainil ja faderil, variant ka esimese insert FXina gain pluginat kasutada
> - näide: saturator kanalile, clipgain ja fader erinevused
> - pre ja postfader sendide erinevusest räägime reverb/delay loengus

<!-- /hide -->

---
## Gainstaging

- Ehk balansi loomine maast ja madalast, ehk radade gainist, ärge fadereid näppige!
- Vaata metereid, **veendu kas pre-fader või post-fader metering**. Ideaalis pre-fader.
	- Miksides hea tava master kanalil hoida max -6dB peak ja ligikaudu -18dB RMS.
	
---
1. Pange laulu kõige tihedam / valjem sektsioon loopima. 
2. Valides kõik klipid, tooge kõikide clip gain alla (vajadusel üles), kuni master kanali keskmine max peak on -6dB.
3. Pange kõik klipid mutesse.
4. Hakake ükshaaval unmutema radu tähtsuse järjekorras ja balansseerima unmutetud radade suhtes.
	- Isiklik eelistus: Trummid ja kõik perkussiivne > Bass > Main vokaal > Lead instrumendid > Täitvad instrumendid > Bäkid > FXid
	1. *Unmute* track
	2. Kuula millega tegu
	3. Analüüsi mis selle elemendi funktsioon miksis on
	4. Multimic'ed või leierdatude elementide puhul, kontrolli üle kanalitevaheline faasisuhe.
	5. Balansseeri teiste *unmuted* elementide suhtes, kasutades clip gaini ja panimist.
5. Kui kõik rajad unmutetud, siis vajadusel valige jälle kõik klipid ja tooge kõige clip gain alla, kuni master kanali max peak on taaskord ligikaudu -6dB. Siis on juba miks balansseeritud ja on ka mõnusalt headroomi edasiseks.

---
- Gainstageimine võimaldab hiljem fadereid hoida nulli lähedal, sest seal on neil kõige parem "resolutsioon", ehk täpne mänguruum.
	- Kui rajal ei ole dünaamilisi tööriistu, siis võite ka miksimise ajal balansseerida elemente gain'idega.
	- Master fader'it ärge näppige! Sellega võib teha loo fade-in'e või fade-out'e, muidu selle liigutamine (nt olukorras kus mix läheb liiga valjuks) ei ole hea tava. Protsessi lõpu poole võib sellega teha maksimaalselt paari dB'lisi laulu sektsioonide automatsioone.
- Peale gainstageimist, kustuta radadelt vaikus, aitab visuaalset navigeerida.
---
![[Faas#Faas]]
## Panoraam

- Mis on mono ja stereo?
	- Mono: L ja R sisaldavad täpselt sama informatsiooni, täpselt sama valjult.
	- Stereo: L ja R sisaldavad erinevat infot.
- Erinevad panimise meetodid. Balance, Stereo pan, Dual pan. [Pan Modes.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Pan%20Modes/Pan%20Modes.RPP)
- Pan law-id, kui palju keeratakse keskele pan'itud signaali vaiksemaks võrreldes L ja Riga. Kuna muidu on mono signaal mõlemast kõlarist mängides 3dB valjem, helide summeerumise tõttu.
- Kui kõik on "hard left" / "hard right" siis elemendid istuvad endiselt üksteise otsas ja ei lase üksteisel hingata, leidke instrumentidele oma tasku panoraamis.

NOTE:
> - Pan law, tähtis kui liigutad projekti erinevate DAWide vahel ja ootad et su lugu kõlaks samamoodi, muidu set and forget, soovitatakse 3dB, ableton kasutab ka 3e, ei saagi muuta vist seal.
> - Trummi spoti mikrite pannimise saab aru OHde järgi. Pannes OH solosse, kuulad kus element asub, pan'id spot mikri samasse kohta.
> 	- Kui OH signaalid eraldi radadel siis panida nii, et kick oleks keskel ja snr seal lähedal, veits paremal või vasakul olenevalt kas trummari või publiku poolt vaade.

---
## Nüüd alles hakkame miksima..

- Efektide kasutus ei tohiks kriitiliselt gainstage'i muuta! Ehk plugina bypassimisel ei tohiks selle raja tajutav valjus muutuda. Valjuse kontrollimiseks on faderid.
- Solotada on kerge aga miksimises loeb kogu üldpildi kõla! Mine solosse siis kui te teate MIKS te solosse lähete!
- Keera nuppe, liiguta fadereid ja tee julgeid EQ lükkeid. Proovi viia visuaalsed liigutused kuuldeliste erinevustega kooskõlla. Mis juhtub kui sa keerad käesoleva tracki vaiksemaks? - valjemaks? - kuidas see EQ lüke muudab kõlakarakterit? Olge julgeid ja kuulake erinevusi.

---
## Render / Export / Bounce ja Print

- Millal on mix valmis?
- Mis juhtub ekspordiga kui master clipib? [klippiva projekti näide.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/M102%20Clippiv%20projekt/klippiva%20projekti%20näide.RPP)
- Miksitud eksporditud fail = Mixdown
- Eksportimis sätungid:
	- Online print vs offline export
		- Printides kuuled kohe tulenevat eksporti, offlineis pead hiljem üle kuulama, nõudlikel projektidel võivad mõlemad jamada, siis printimine kindlam.
	- Sample rate ja bit depth hoia sama milles projekt salvestatud/produtud. 
		- Dither ainult siis peale kui vähendad bit depthi ekspordiga (nt. 24bit > 16bit). [24 vs 16bit.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/24%20vs%2016bit/24%20vs%2016bit.RPP)
	- Mis failitüüpi eksportida? (järgmisel slaidil)
- Salvestage enda mikside versioonid eraldi kausta projektikaustas. Võimaldab kuulata versioonidevahelisi muutuseid.
- Kasuta **save as**-i ja tee kriitilisi mixi muudatusi, ole julge!
- Levinud valearusaam: Helikaart ei mõjuta exporti, ega selle kvaliteeti! Ainuke mõjutaja on arvuti, mida võimsam - seda kiirem export.

NOTE: 
>- render, export, bounce, print: valdavalt sünonüümid, sama lõpptulem, erinevad DAWid kasutavad erinevaid sõnu. print on ainuke selge erinevus, sest see tähendab mixdowni "online" salvestamist.

---
![[Failitüübid#Miks on vaja digitaalses helitöötluses "kõrgkvaliteediga" faile?]]
## Jagamine

- Tehke kliendile kuulamine ja tagasisidestamine võimalikult mugavaks!
- [Samply](https://samply.app/) või [Highnote](https://www.highnote.fm/), [Boombox](https://boombox.io/)
- Vältige Google Drive'i linke, hästi aeglased ja kohmakad. Dropbox on parem. 
- Võite ka kasutada nt. [SwissTransfer'it](https://www.swisstransfer.com/en-us) (parem WeTransfer)

---
![[Tagasisidestamine#Tagasisidestamine]]
<!-- hide -->

---
# Kodutöö

![[Mix 1 V1]]
<!-- /hide -->