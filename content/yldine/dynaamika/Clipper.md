---
publish: true
---
# Clipper

- Kõik signaal mis läheb üle clipperi thresholdi lõigatakse ära. Tekib [[Saturatsioon]] kui teha agressiivselt.
	- Clipper on kasulik siis kui tegu on ebaharmoonilise materjaliga. Nt lühiajalised suvalised peakid, trummid, perkussioon jne, sest clippimisest tekkivad ülemhelid ei pruugi langeda algtooni ülemhelide jadasse ([[Saturatsioon#Ülemhelide struktuur]]). Kui tegu on tonaalsema materjaliga siis võib limiter kõlada paremini.
- **Hard clip** - Sama mis digitaalne clip kui ekspordite loo mille signaal läheb üle 0-i (ja bit depth ei ole floating point). Hea väga lühiajaliste peakide kõrvaldamiseks.
- **Soft clip** - lõikab peakid ära aga ei jäta kandilisi lõikepunkte, vaid ümardab. Võib kõlada naturaalsemalt ja nö musikaalsemalt. Satureerib rohkem kui hard clip, sest signaali mis läheb thresholdi on rohkem, sama mis kompressori knee muutmise puhul.
- [[Masterdamine|Masterdamises]] kasutatakse tihtipeale clipperit enne [[Limiter]]i, et vähendada hästi kiireid lühiajalisi peake. Võimaldab limitteril töödelda stabiilsemat signaali.

---