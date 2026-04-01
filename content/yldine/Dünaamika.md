---
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

<!-- hide -->
>NOTE:
>- Näita DAWis metereid

<!-- /hide -->

---
# Dünaamika

- **Mikrodünaamika** ja **makrodünaamika**
	- Mikrodünaamika - Lühiajaline *transient-sustain* suhe. 
		- Transient - Terav, kõrge energiaga heli alguspunkt, kestab millisekundeid. Näiteks, trummilöögi klikk. *Impact*. Hästi nähtav *peak meter*'il.
		- Sustain - Peale transienti, heliallika toon/karakter. *Body*
	- Makrodünaamika - Pikaajaline dünaamika, nt laulude eri sektsioonide vaheline valjuse erinevus.

<!-- hide -->
>NOTE:
>- näide dünaamilise ja vähese dünaamikaga masteri vahel [Dünaamika Võrdlus](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Dünaamika%20Võrdlus)

<!-- /hide -->

---
## Amplituudi automatsioon 

- Kõige "puhtam" viis **makrodünaamikat** kontrollida.
- Sobib ka väga hästi **mikrodünaamika** kontrolliks, kui on mingid üksikud hetked loo või partii vältel mis vajavad korrektuuri.
- Ei teki mingit kvaliteedi kadu, lihtsalt "heebliga sõitmine" (*fader riding*).
- Probleeme lahendades tuleks automeerida enne efekte. Post-fader volüümi automatsioon ainult siis, kui efektid töötavad nii nagu soovitud ja nende kõla ei tohi muutuda.

<!-- hide -->
>NOTE:
>- makro näide laulu sektsioonide puhul, mikro näide vokaali valjude nootide puhul.
>- levinumalt tuntud kui ka volüümi automatsioon, on okei kasutada sünonüümina, lihtsalt olge teadlikud sõna erinevustest.

<!-- /hide -->

---
# Tööriistad

- [[Kompressor]]
- [[Limiter]]
- [[Gate]]
- [[Expander]]
- [[Multiband Compression]]
- [[Channel Strip]]
- [[Transient Shaper]]
- [[Clipper]]

---
# Põhjalikumalt
## Gain Reduction

- Kui palju keeratakse thresholdi ületanud signaali vaiksemaks.
- Kui palju on okei oleneb algmaterjalist. Hästi töödeldud produktsiooni puhul mida vähem - seda parem.
	- Senikaua kuni halvasti ei kõla on okei.
- Harjutamine: https://webtet.net/apcl/#/compression

---
## Headroom

- Digitaalne headroom: Vahe 0dBFS ja lühiajalise amplituudi vahel. DAWi sisene signaal ei tohi minna üle 0dBFS, sest eksportides tekib muidu digitaalne klippimine. [klippiva projekti näide.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Klippiv%20Projekt/klippiva%20projekti%20näide.RPP)
	- Vähendades signaalide dünaamilist ulatust saame enda loo valjemaks teha, sest tekitame headroomi juurde, mille saame "täis gainida".

<!-- hide -->
<mark style="background:#ff4d4f">TÄIENDADA:</mark>
<mark style="background:#ff4d4f">MIKS on vaja digihelis headroomi ja dünaamilist töötlust? mingi hea bypass projektis, kus dünaamiline töötlus on/off.</mark>
<!-- /hide -->

---
## Loudness bias

- Valjem =/= Parem
- Platseebo mõju otsustusvõimele
- GainMatch plugin

>NOTE: 
>- Teha test: 2 mixi kus üks smiley eq ja valjem, teine tavaline. küsida kumb kõlab paremini, siis loudness normalizeida ja küsida uuesti
>- Logic Pro compressoril on by default autogain peal, mis teeb materjali valjemaks kui threshold alla tõmmata, pole loogiline.

---
# Side chain
## External side chain

- Raja välise signaali dünaamikaga raja enda dünaamilise töötluse aktiveerimine.
- Võimekus ei ole ainult kompressoritel.
- Kompressori sisendsignaali välja vahetamine.

![[Pasted image 20260401103434.png]]

---
## Internal side chain EQ / Filter

- Et dünaamiline tööriist kuuleks sisendsignaali mis on spetsiifliselt filterdatud. Väldib kicki või madalsageduste liigse kompressori töötluse, sest nad on tihtipeale keeratud valjemaks ja juba eos on pikema lainepikkusega. Üldjuhul löövad madalad sagedused dünaamilised tööriistad käima rohkem kui kõik muud sagedusvahemikud.
- Sagedusvahemiku boostimine on sisuliselt sama mis thresholdi langetamine ainult selles spetsiifilises sagedusvahemikus.

<!-- hide -->
>NOTE:
>- drumbuss high shelf boost, keerab taldrikud vaiksemaks.

<!-- /hide -->

---
# Dünaamika mõõtmine

- Dünaamika mõõtmine digitaalses helis: Vahe keskmise/pikajalise (*RMS, LUFS-M, LUFS-S*) ja lühiajalise amplituudi (*peak, true peak*) vahel, tuntud kui ka *crest factor*.
	- Dünaamika suhe ei muutu kui amplituudi vähendada. Peaki ja keskmise valjuse vaheline suhe on täpselt sama.
- Lahti kirjutatud [minu seminaritöös.](https://docs.google.com/document/d/1LaAj2Piu4tHgqFNTMTxYnq1NFn1Rn19j8gWvSxWsUs8/edit?tab=t.0#heading=h.o4k988dzj5kz)

---
%% # Sõnavara

| Pigem negatiivne                   | Pigem positiivne vastand          |
| ---------------------------------- | --------------------------------- |
| Ülekompresseeritud                 | Dünaamiline                       |
| "*loose*" / ebaühtlane             | *glued* / liimitud                |
| "vorst"                            | "pakitud"                         |
| kompressor "hammustab" liiga palju | kompressor töötab "kontrollitult" |
| pumpamine                          |                                   |
<!-- hide -->
>NOTE:
>- Näita visuaalselt waveforme.
>- Mis veel?

<!-- /hide -->

--- %%