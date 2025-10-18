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
## Sõnavara

| Pigem negatiivne                   | Pigem positiivne vastand          |
| ---------------------------------- | --------------------------------- |
| Ülekompresseeritud                 | Dünaamiline                       |
| "*loose*" / ebaühtlane             | *glued* / liimitud                |
| "vorst"                            | "pakitud"                         |
| kompressor "hammustab" liiga palju | kompressor töötab "kontrollitult" |
| pumpamine                          |                                   |
<!-- hide -->
NOTE:
>- Näita visuaalselt waveforme.
>- Mis veel?

<!-- /hide -->

---
