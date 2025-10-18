---
publish: true
---
# Kuulamissüsteem

- Igal kuulamissüsteemil ja ruumil on oma "kõlakarakter" või tonaalsus. Seda saab parandada või täiendada süsteemi kalibreerimisega ning akustilise töötlusega. 
	- Professionaalses keskkonnas peab süsteem olema **kalibreeritud** ning ruum akustiliselt töödeldud, et seal töödeldud muusika **tõlgenduks** ka teistele süsteemidele.
- Inimkõrv harjub väga kiiresti ära kuulamiskeskkonnaga. Kui kuulamiskeskkond ei ole kalibreeritud, siis miksides võib üle kompenseerida sagedusi mida ei peaks kompenseerima. 
- Et säilitada objektiivsus: vaheta keskkonda, tee pause ja puhka kõrvu, kuula muud muusikat.

<!-- hide -->
NOTE:
>- "Car test" fenomen, loogiline ainult siis kui oled autos palju muusikat kuulanud ja oled ära õppinud kuidas süsteem kõlab.
>- Hea näide: annõun R-10 vs R-11. r11 panin airpodsid ja kuulsin vilinat, nüüd r10s midagi muud ei kuulegi, haige et lasin selle enne läbi. Kuulamissüsteemide vahetamine on tähtis!

<!-- /hide -->

---
# Kalibreerimine 

- Kõlarid - SoundID Reference, IK Multimedia ARC jne
	- [Tasuta tarkvara Room EQ Wizard kasutamine ja ruumi EQ tekitamine](https://www.youtube.com/watch?v=Ev1bSSL8tRA) Vana video aga palju sellest endiselt kehtib, REWi tasub uurida endiselt!
- Klapid - SoundID Reference, Toneboosters Morphit, [AutoEQ](https://www.autoeq.app/) + EQ
	- Mac - [SoundSource](https://rogueamoeba.com/soundsource/)
	- Windows - [Equalizer APO](https://sourceforge.net/projects/equalizerapo/)
		- Valikuline lisand Equalizer APO-le: [Peace GUI](https://sourceforge.net/projects/peace-equalizer-apo-extension/)
	- Klappidel crossfeed - Peace GUI sisseehitatud, GHz Can Opener plugin. Simuleerib kõlaritega kuulamise olukorda, ehk vasakule bleedib paremat signaali ja vastupidi, tekib naturaalsem panoraam.
- Kõlarite kalibreerimine on justkui plaastri haavale peale panemine, tähtsam on ruumi akustika. Kõrvaklappide kalibreerimine ja crossfeedi kasutamine annab konkreetsema tulemuse.

---
# Kuulamise volüüm

 - Miks kõlakarakter muutub vastavalt kuulamis valjusele?
	- Madalad ja kõrged sagedused vajavad rohkem "võimendust" kui kõrg-kesksagedused, et neid võrdselt kuulda oleks. (Fletcher-Munson graafik)
	- Ei vaja korrigeerimist, lihtsalt olge teadlikud, et nt. võite madalal kuulamis valjusel kompenseerida bassiga üle, lihtsalt kuna seda ei kuule nii hästi.
- "Valjem kõlab paremini" tõenäoliselt ka selle tõttu, et siis lihtsalt kõrv kuuleb rohkem võrdset tonaalset spektrumit.

<!-- hide -->
NOTE: 
>- APU Loudness Contoursi näitel Equal Loudness Curves'ide tutvustus.

<!-- /hide -->

---