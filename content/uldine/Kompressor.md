---
publish: true
---
# Kompressor

- Kompressor võimaldab meil kontrollida **mikrodünaamikat**, vähendades dünaamilist ulatust. Keerates lävendi ehk *treshold*'i ületanud signaali (enamasti transientid) vaiksemaks. Hiljem kompenseeritakse volüümi kaotus, *make-up gain*'iga.
- Kasutada siis kui on kuuldav dünaamiline ebaütlus. Mingid perkussiivsed löögid "löövad liiga välja" või kui mingid spetsiifilised noodid partiis kaovad miksi sisse ära, võrreldes teiste nootidega.

<!-- hide -->
NOTE:
>- näide trummiseti ja bassipartii puhul [Over You DEMO.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Over%20You%20DEMO/Over%20You%20DEMO.RPP)

<!-- /hide -->

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

<!-- hide -->
NOTE: 
>- Näidata visuaalselt, Pro-C2 ja occularScope

<!-- /hide -->

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
# Upward & Downward & Parallel

- Downward compression - tavaline kompressioon
	- Kui lisada make-up gaini siis "uplift compression".
- Upward compression - võimendab signaali mis jääb alla tresholdi. Ehk toob vaiksed kohad valjemaks.
- Parallel compression - Kompresseeritud signaali *blend*'imine kuiva signaaliga. Tuntud kui ka "New York Compression". Lõpptulemus võib kõlada naturaalsemalt kui uplift compression, hea viis "liimi" lisamiseks, sest säilib algse signaali transientid suhe ning lisandub kompresseeritud signaali punch ja sustain.

![[Pasted image 20251006173142.png|800]]

<!-- hide -->
NOTE:
>- Ozone Dynamics'is on hästi aru saada

<!-- /hide -->

---
# Pro-d kasutavad:

*Mix With The Masters konspekt:*

Most mixers use the same compressors for the same results. Almost all of them mix top down (Bus compression on to start the mix)Compression often 0-4dB at this level of pro mixing as their tracks are already processed!

- CL1B for slightly softer sustain typically lead vocal (In between LA2A soft and 1176 aggressive).
- VARI-MU (STA-LEVEL, 660, others) for smooth sustain and tube coloration. Often barely compressing.
- 1176 for grit, rock, snares, aggressive vocals, vocal tracking and vibe. Often parallel.
- LA2A for softest sustaining tone. Common for BGV or soft vocals.
- RenComp for background vocals. Smooth, subtle pull forward.
- LA3A for instruments to pull them forward.
- Distressor - Agressive comp., bite, thickness, vibe.
- Retro 176 (Josh uses for tracking vocals)
- Fatso - Tape, heavy thick. Sometimes parallel.
- NEVE 33609 for weight, and gravity. Often bus or vocals.
- SSL Alan Smart C2. Bus compressor typically 1-4dB of compression.

For parallel compression, use eq to filter what bothers you, then squash it and bring it up to taste.

Even Michael Brauer uses comps from this list, but in a unique way to utilize specific colors and tones on each group.

---