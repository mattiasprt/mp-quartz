---
publish: true
---
# Reverb

- Tehislikult ruumi või keskkonna tekitamine. Võimaldab asetada elemente ruumi, ning lisada laiust ja sustaini. 
	- Samuti ka ette ja taha, ehk mängida kõlalise sügavusega.
- Hea reverb on see mille olemasolule sa ei mõtle aga selle puudumist igatsed. Sulandub saundi ja miksiga ühte.
- Levinud tüübid:
	- Algorütmilised - Valdav enamus reverbi pluginatest, tehislikud aga väga paindlikud enda kasutuses
	- *Convolution* - Kõige naturaalsem, sest salvestatud päris asukohti. Kasutab IR (Impulse Response) salvestusi.
- Levinud stiilid:
	- Room / Chamber - Kõlab nagu ruum, justkui oleks salvestusel lisa ruumimikrid olnud. Naturaalne ja hea elementide *blend*-imiseks.
	- Hall - Kõlab nagu "sügav" saal.
	- Plate - Kõlab tehislikult ja laialt, puudub sügavus, kuid hea "laiendus" efekt.
	- Spring - Kidravõimudel populaarne.
- Ärge kutsuge **kaja**ks!

<!-- hide -->
>NOTE:
>- Näita enda enimkasutatud pluginaid.
>- Helinäited

<!-- /hide -->

---
## Peamised reverbi seaded

- **Decay** - Kui pikk on reverbi saba. Liiga pikk varjutab detaili, liiga lühike võib kõlada armetult, leidke kesktee. Kui kiiresti kukub reverbi signaal 60 dB.
- **Pre-delay** - Aeg algse signaali ja reverbi saba alguse vahel. Võimaldab hoida signaali transiendi puhtana, et reverb seda ära ei *smear*'iks. Näiteks tähtis vokaali kaashäälikutel, et nad ei kõlaks reverbi tõttu "uduselt".
- **Size** - Ruumi suurus, klaustrofoobne vs avar jne
- **Dampening** seaded - Kui kiiresti mingi sagedusvahemik volüümis kukub, enamasti seotud mingite EQ parameetritega.
- **Diffusion** - Kui madal siis reverbil on vähe peegeldusi ja kõlab hõredalt, kui kõrge - siis on reverbi sound "tihedam".
- **Width** - Verbi laius. Ärge tehke kõike verbe maksimaalselt laiaks! Kaob kontrast ja reverbid hakkavad omavahel võitlema. Kitsam reverb võib tajutavalt ka kesta kauem.
- Reverbi saba on enamasti jaotatud kaheks:
	- **Early Reflections** - Esimesed peegeldused. Saab kontrollida kogust/tihedust.
	- **Late Reflections** - Reverbi saba, hilisemad peegeldused. Saab kontrollida kogust/tihedust.

>NOTE:
> - ER, LR näiteks, lihtsalt võtta üks impulss ja keerata ER ja LR nuppe kui verb on 100% wet.
> - Kuidas tempo syncida: 60000 : BPM = 1/4 noot millisekundites
>	- Või lihtsalt zoomi sisse, selecti noodi pikkus snap gridil ja vaata mitu ms selection kestab

---
# Vaata ka:

- [[Efektide kasutamine]]