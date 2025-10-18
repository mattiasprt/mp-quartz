---
aine: "[[04 - Õpetamine/content/miksimine-2/index|Miksimine 2]]"
publish: false
jrk:
---
## Faas

- Faas on helilainete omavaheline suhe. Kui kaks signaali on "faasis" siis nende lained kattuvad ja toetavad üksteist. Kui "faasist väljas", siis lained "tühistavad üksteist", ehk toimub *phase cancellation*. Kokkumäng kõlab nõrgalt ja õhukeselt.
	- Faasi probleemid on tajutavamad madalates sagedustes, sest lainepikkused on pikemad, ehk ajaline nihkumine võib põhjustada suuremaid sageduslikke *cancellation*'eid. Tähtis soundide leierdamisel.
- Faas mängib eriti rolli *multimic* salvestustel. Enimlevinud on nt. Snare top ja Snare bottom mikrite vastandfaasi suhe.
- Phase ja Polarity ei ole sünonüümid! 
	- Faas on mõõdetud kraadides, millisekundites või samplites. 360° on signaali täis tsükkel.
	- Polarity on laine "suund" kas tavapärane või inverted, ehk plussidest saavad miinused ja vastupidi. Ehk polarity flip on faasi 180° keeramine. 
	- Phase flip / invert ja polarity flip / invert on sünonüümid, sest tegu on sama tegevusega.

NOTE: 
>- Kui lained pikemad, faasinihked tajutavamad. Kui nt leierdada kicki ja bassi.
>- Comb filter ja faasinihe näide - [faas.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/faas/faas.RPP)

---

## *Phase alignment* meetodid

- Kõige kindlam on lihtsalt käsitsi paika lohistada.
- Kui pluginaid kasutada, siis tuleb nende töö üle kontrollida.

NOTE:
>- Trummidel kõige kergem OHde järgi spot mikreid nihutada, sest OHdesse jõuab signaal kõige hiljem, kuna mikrid on kõige kaugemal. Kui trummipartii *feel* läheb paigast ära siis saab kogu seti tagasi nihutada ühiselt, nii et faasisuhted on paigas.
>- Drum alignment näide

---

## Mõõtmine

- Correlation meter - L ja R kanali faasisuhte mõõtmiseks.
	- +1 - mono signaal
	- 0 - L ja R sisaldavad täiesti erinevat signaali
	- -1 - L ja R on täiesti omavahel faasist väljas
- Tasuta: [TB_GonioMeter](https://www.toneboosters.com/tb_goniometer_v1.html)

NOTE:
>- Goniometer näide

---

## Faas kui tööriist

- Null test - Kahe signaali erinevuste kuulamiseks. Kaks signaali, ühel *polarity flip*, kõik tühistub ära peale signaalide erinevuste. 
- Delta nupp - Pluginates. Plugina sisend ja väljund signaali erinevuse kuulamiseks, sama mis null test.

NOTE:
>- Delta hea gainstaginguks, delta peal - keerake väljundit niipalju vaiksemaks, kuni signaal on kõige vaiksem.
>- Null test näide, näita ka delta nuppu eri pluginates

---

## Faasi loov ära kasutamine

- Haas delay - Ühe kanali viitamine teise suhtes. "Laiendav" efekt. Väärkasutamine viib "faasise soundini" ning halva mono tõlgendumiseni. Hea kasutada mitte kandvatel elementidel, mis tahate laiemaks teha. ([kHs Haas](https://kilohearts.com/products/haas))
- Comb filter - L ja R kanali peale komplimenteerivate sagedustega comb filter. Võimaldab teha mono signaali laiaks, perfektse mono compatibilityga. ([kHs Comb Filter](https://kilohearts.com/products/comb_filter))

NOTE:
>- Näita efekte nt bäkk voxidel ja kitradel - [Home DEMO.RPP](file:///Users/mattiasprt/Library/CloudStorage/Dropbox/ÕPETAMINE/Home%20DEMO/Home%20DEMO.RPP)

---

## Faas ja EQ

- Kõik tavapärased EQ'd on *minimum phase*.
- Iga Minimum Phase EQ liigutus mõjutab faasi. Sest EQ põhjustab sagedus-spetsiifilist ajaviidet. Tegu ei ole probleemiga, kõlab enamasti naturaalselt!
- Selletõttu võib muutuda ka *peak* mõõde. Iga *cut* ei tähenda, et võidate *headroom*i.

NOTE:
>- EQ ja faas näide

---

## Linear phase EQ

- EQ mis ei mõjuta faasi. Viitab kõiki sagedusi võrdselt. Väga *transparent* ja kasulik multimic elementide agressiivsel EQ-misel ja masterdamisel.
- Tähtis paralleel töötluses, kui EQte paralleelset rada, siis algse ja paralleelse raja vaheline faasisuhe peaks püsima sama!
- Võib põhjustada *transient*'ide pehmendust (*pre-ringing*ut). Kuid kui ei kuule, siis on ok :)
- Kasutab rohkem CPUd ja võib põhjustada väga kõrget *latency*t.

- **Kuldreegel**: Kasutage tavalist EQt, kui muretsete faasi üles siis kuulake linear settinguga. Kui tajute et kõla läks paremaks siis kasutage linear phase EQt, kui erinevus pole tajutav siis ärge muretsege.

---

## Mid-Side

- Mid / Sum - Kõik signaal mis korreleerub L ja R kanali suhtes, sama signaal mis tekib kui stereo monoks flippida. Ehk signaal mis on L ja R kanalis identne või väga sarnane, panoraami poolest keskel.
- Side / Difference - Kõik signaal mis ei korreleeru L ja R kanali suhtes. Ehk signaal mis ei ole sarnane L ja R kanali vahel, kõik mis on pan'itud või lai.
- MS EQ - Kasulik masterdamisel või stereo elementide korrigeerimisel.
	- Kui kasutate MS EQt siis katsetage linear phase'iga. Sest olenevalt signaalist, võib Mid ja Side kanalite faasisuhe olla väga tähtis.

NOTE:
>- lase helinäiteid Midist ja Sideist

---
# Kodutöö
## Mix 1 V2

- Tagasisidestastan teie mikse, tehke vastavalt tagasisidele korrektuurid ja saatke enne järgmist loengut miksi V2.
- Kirjutage mis muudatusi te arvesse võtsite ja mille kallal töötasite.

- Vaatamiseks - [EQ: Linear Phase vs Minimum Phase](https://www.youtube.com/watch?v=efKabAQQsPQ)
