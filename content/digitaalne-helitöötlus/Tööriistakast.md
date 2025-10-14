---
aine: "[[04 - Õpetamine/content/digitaalne-helitöötlus/index|Digitaalne Helitöötlus]]"
jrk: "3"
kodutöö: "[[Tööriistakast#Multitracki miksimine]]"
publish: true
---
## Volüüm ja amplituud

- Volüüm - Heli tajutav valjus, mõjutatud amplituudist, psühhoakustikast, keskkonnast jne.
- Amplituud - Reaalne mõõdetav laine magnituud.
- Level ja nivoo - Mõlema sünonüüm, üldine termin.
- Gain - Signaali võimenduse kogus.
- Levinud amplituudi mõõtühikud:
	- Peak (dBFS) - Maksimaalne hetkeline laine amplituud, visuaalselt nähtav *waveform*'ides ja valdavalt mõõdavad DAWide *meter*'id ka vaikimisi *peak*'i.
	- RMS (*Root Mean Squared*) - Enamasti 300ms vältel mõõdetud amplituudi [ruutkeskmine](https://et.wikipedia.org/wiki/Ruutkeskmine). 

NOTE:
>- Näita DAWis metereid

---

# Dünaamika

- **Mikrodünaamika** ja **makrodünaamika**
	- Mikrodünaamika - Lühiajaline *transient-sustain* suhe. 
		- Transient - Terav, kõrge energiaga heli alguspunkt, kestab millisekundeid. Näiteks, trummilöögi klikk. *Impact*. Hästi nähtav *peak meter*'il.
		- Sustain - Peale transienti, heliallika toon/karakter. *Body*
	- Makrodünaamika - Pikaajaline dünaamika, nt laulude eri sektsioonide vaheline valjuse erinevus.

NOTE:
>- näide dünaamilise ja vähese dünaamikaga masteri vahel [Dünaamika Võrdlus](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Dünaamika%20Võrdlus)

---

## Amplituudi automatsioon 

- Kõige "puhtam" viis **makrodünaamikat** kontrollida.
- Sobib ka väga hästi **mikrodünaamika** kontrolliks, kui on mingid üksikud hetked loo või partii vältel mis vajavad korrektuuri.
- Ei teki mingit kvaliteedi kadu, lihtsalt "heebliga sõitmine" (*fader riding*).
- Probleeme lahendades tuleks automeerida enne efekte. Post-fader volüümi automatsioon ainult siis, kui efektid töötavad nii nagu soovitud ja nende kõla ei tohi muutuda. [[DAW Signal Flow.canvas|Signal Flow]]

NOTE:
>- makro näide laulu sektsioonide puhul, mikro näide vokaali valjude nootide puhul.
>- levinumalt tuntud kui ka volüümi automatsioon, on okei kasutada sünonüümina, lihtsalt olge teadlikud sõna erinevustest.

---

## Kompressor

- Kompressor võimaldab meil kontrollida **mikrodünaamikat**, vähendades dünaamilist ulatust. Keerates lävendi ehk *treshold*'i ületanud signaali (enamasti transientid) vaiksemaks. Hiljem kompenseeritakse volüümi kaotus, *make-up gain*'iga.
- Kasutada siis kui on kuuldav dünaamiline ebaütlus. Mingid perkussiivsed löögid "löövad liiga välja" või kui mingid spetsiifilised noodid partiis kaovad miksi sisse ära, võrreldes teiste nootidega.

NOTE:
>- näide trummiseti ja bassipartii puhul [Over You DEMO.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Over%20You%20DEMO/Over%20You%20DEMO.RPP)

---
## Kompressori tähtsamad seaded

- **Treshold**
	- Kui sisend signaali amplituud ületab tresholdi lävendi siis kompressor hakkab tööle. Ehk mida madalamal treshold, seda rohkem kompressor töötab, sest seda ületab rohkem signaali.
- **Ratio**
	- Määrab ära suhte, kui palju tresholdi ületanud amplituudi vaiksemaks keeratakse. Ehk mida kõrgem, seda agressiivsem.
	- 1:1 = kompressor ei tee midagi; 2:1 kompressor vähendab tresholdi ületanud signaali 2x jne.
		- Näiteks, signaal ületab tresholdi 8dB võrra, 4:1 ratio puhul keeratakse signaal 6dB vaiksemaks. Sest iga 4db mis ületab tresholdi keeratakse 1dB peale. Ehk tekib 6dB *gain reduction*.
- **Make-up gain**
	- Gain peale töötlust, volüümi kaotuse kompenseerimiseks.

NOTE: 
>- Näidata visuaalselt, Pro-C2 ja occularScope

---
## Ratio visuaalselt

![[Pasted image 20250826174816.png|600]]

---

## Täiendavad seaded

- **Attack**
	- Aeg millisekundites, kui kaua läheb, et kompressor tööle hakkaks peale tresholdi lävendi ületust.
- **Release**
	- Aeg millisekundites, kui kaua läheb, et *gain reduction* taastuks. Mida kiirem release, seda rohkem on signaali *sustain* võimendatud.
- **Knee**
	- Võimaldab tresholdil olla "paindlikum" või "sujuvam". Selle asemel, et treshold on üks konkreetne punkt (hard knee, 0.0), siis pehmema *knee* (soft knee, 1.0) puhul läheb signaal kompressorisse sujuvamalt.
	- Hard knee = täpsus; Soft knee = pehme, *subtle*

---

## Attack-Release visuaalselt

![[Pasted image 20251008134517.png|800]]

---

## Sõnavara

| Pigem negatiivne                   | Pigem positiivne vastand          |
| ---------------------------------- | --------------------------------- |
| Ülekompresseeritud                 | Dünaamiline                       |
| "*loose*" / ebaühtlane             | *glued* / liimitud                |
| "vorst"                            | "pakitud"                         |
| kompressor "hammustab" liiga palju | kompressor töötab "kontrollitult" |
| pumpamine                          |                                   |

NOTE:
>- Näita visuaalselt waveforme.
>- Mis veel?

---

# Efektid

- Insert - Kui kasutada insertidena siis kasutada *dry-wet knob*'i. Ehk suhe "kuiva" ja "märja" signaali vahel, töötlemata ja töödeldud. Efekt asub signaaliahelas kindlal kohal, ehk kõik eelnev mõjutab seda ja kõik järgnev on mõjutatud sellest.
- Send, Return - Kui kasutad efekti *return* kanalil siis efekt on ise *100% wet* ja kanalisse saadad soovitud koguses signaali, mis soovid et läheks läbi efekti. Signaal saadetud sendiga, kas pre- või post-fader. Efekt on eraldiseisval return kanalil, mis võimaldab täiendavat kontrolli selle kõla üle. Säilib ka algne signaal, enda algsel kanalil, ilma efektita.

NOTE:
>- [[DAW Signal Flow.canvas|Signal Flow]]
>- [Insert vs Send, Pre vs Post.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Insert%20vs%20Send,%20Pre%20vs%20Post/Insert%20vs%20Send,%20Pre%20vs%20Post.RPP) / [Insert vs Send, Pre vs Post.als](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Insert%20vs%20Send,%20Pre%20vs%20Post/Insert%20vs%20Send,%20Pre%20vs%20Post%20Project/Insert%20vs%20Send,%20Pre%20vs%20Post.als)

---

## Reverb

- Tehislikult ruumi või keskkonna tekitamine. Võimaldab asetada elementi ruumi. Samuti ka ette ja taha, ehk mängida kõlalise sügavusega.
- Hea reverb on see mille olemasolule sa ei mõtle aga selle puudumist igatsed. Sulandub saundi ja miksiga ühte.
- Levinud tüübid:
	- Algorütmilised - Valdav enamus reverbi pluginatest, tehislikud aga väga paindlikud enda kasutuses
	- IR, Impulse Response - Kõige naturaalsem, sest salvestatud päris asukohti.
- Enimlevinud stiilid:
	- Room - Kõlab nagu ruum, justkui oleks salvestusel lisa ruumimikrid olnud.
	- Hall - Kõlab nagu "sügav" saal.
	- Plate - Kõlab tehislikult ja laialt, puudub sügavus, kuid hea "laiendus" efekt.
	- Spring - Kidravõimudel populaarne.
- Ärge kutsuge **kaja**ks!

NOTE:
>- Näita enda enimkasutatud pluginaid.

---

## Peamised reverbi seaded

- Decay - Kui pikk on reverbi saba
- Pre-delay - Aeg algse signaali ja reverbi saba alguse vahel, mida pikem seda "kaugemalt" kõlab signaal. Võimaldab hoida signaali transiendi puhtana, et reverb seda ära ei *smear*'iks. Näiteks tähtis vokaali kaashäälikutel, et nad ei kõlaks "uduselt".
- Size - Ruumi suurus, klaustrofoobne vs avar jne

NOTE:
![[Reverb]]

---

## Delay

- Kaja tekitamine, pigem tehislik efekt. Lisab põnevat rütmikat produktsioonile.
- Enamasti *synced*, ehk noodi pikkused on seotud loo tempoga (määratud DAWi poolt). 
- Levinud stiilid:
	- Normal - Tavaline kaja
	- Ping-Pong - Delay põrkab vasaku ja parema kanali vahel
	- Slapback - Väga lühikese noodivältusega delay, lisab elemendile laiust, enamasti kitarridel või *indie* vokaalidel. 

NOTE:
>- Näita enda enimkasutatud pluginaid.

![[Delay]]

---

## Peamised delay seaded

- Time - Noodivältus või millisekundid. Vahe algsignaali ja kaja vahel.
- Feedback - Kui palju kaja signaali läheb kordusesse / *feedbacki*, tekitades kajale täiendavaid korduseid.

---

## Kõlakarakter ja presetid

- EQ enne ja/või pärast efekti võimaldab määrata tooni mida manipuleeritakse või on manipuleeritud.
- Presetide kasutamine loovamates pluginates julgustatud! Pigem vältida täpsemates töötluspluginates, nt EQ ja kompressorid, sest nende kasutamine on nii situatsiooniline ja sõltuv algsignaalist.

---

## Sõnavara

| Väljend                       | Vastand               |
| ----------------------------- | --------------------- |
| Märg / *Wet* / Atmosfääriline | Kuiv / *Dry*          |
| Ees / Lähedal / *Upfront*     | Taga / Eemal / Kaugel |
| Lai                           | Kitsas                |
| Sügavus                       | 2D                    |

NOTE:
>- Mis veel?

---

# Kodutöö
## Multitracki miksimine

1. Lae alla multitrack: [Toored failid, balansseerimata](https://www.dropbox.com/scl/fi/f7sf6apbhd5w5omuzxaml/AVEC-Home.zip?rlkey=arca54dbbuxmxpshu3ehev3jd&dl=1) (Kui soovite ise katsetada) või [Balansseeritud rajad](https://www.dropbox.com/scl/fi/8exib83xrhyoh83r3j2a9/Balanced-Tracks.zip?rlkey=iamm3lp7xj52ao9awmu87tzug&dl=1) (Kui tunnete end DAWis ebakindlalt), projekti tempo on 125. Kui laul ei sobi siis [siit lingilt](https://is.gd/MJ7iNi) leiate teisi multitracke ja allikaid kust multitracke leida.
2. Importi multitrack enda valitud DAWi, kuula ja analüüsi materjali, saa aru iga raja funktsioonist laulus.
3. Katseta radade ekvaliseerimisega, kompresseerimisega ning reverbi ja delay pluginatega. 
	- Laul võiks kõlada atmosfäärilisemalt (kasutades reverbe, soovi korral ka delaysid)
	- Lead vokaali dünaamiline ebaühtlus võiks kontrollitum olla (Kompressor > VOX LEAD) 
	- Kui trummipartiil lisandub soolotrumm, alates teisest refräänist, siis on nad enda kõla poolest natuke liiga esil, võiksid kõlada soojemalt ja rohkem nagu oleks teki all. (EQ > DRUMS OVERHEAD)
	- Floor tomil võiks olla rohkem madalat otsa ja kõlada nagu tal oleks "keha" rohkem. (EQ > DRUMS FLOOR TOM)
	- Kõik muu seadke enda maitse järgi.
4. Export / Bounce / Render enda töödeldud versioon laulust üheks WAV failiks ja lae see [SIIA](https://www.dropbox.com/request/WDUkrqufv7TzTWDv8zeU). 
	- Failinimega: Eesnimi_Projektinimi.wav 
	- Veendu, et fail laadis üles!
5. Kirjuta minu meilile vastuseks: kuidas protsess läks, kui takerdusite siis mille taha ja kas ülesanne aitas sul hoomata paremini tööriistade otstarvet ja kasutust. Kui midagi jäi segaseks siis kirjutage üles küsimused mida soovite veel arutada!

NOTE:
>- Hea võimalus teil oma DAWiga tutvust teha

