---
aine: "[[04 - Õpetamine/content/stuudiotöö-1/index|Stuudiotöö 1]]"
jrk: "3"
publish: false
kodutöö:
---
## Salvestuse ettevalmistus

- Eksportige enda DAWist materjal mille peale me salvestama hakkame. 
- Importige see Pro Toolsi projekti. Ideaalis valmistage projekt ette 001s, siis saate juba saata signaali ka Behringeri süsteemi.
	- Sama sample rate ja bit depth mis sinu projekt! Vältige ebavajalikke konversioone.
- Tehke Pro Toolsis tühjad rajad, ideaalis korrektsete inputidega (määratud 001s), kuhu me hakkame salvestama.
- Proovige ka inputlisti tegemist: [TEMPLATE](https://docs.google.com/spreadsheets/d/1BCbxRhaKBFH1tdbhUe7F7zAMbtVsWFcL5hDuThUsKoI/edit?usp=sharing "https://docs.google.com/spreadsheets/d/1BCbxRhaKBFH1tdbhUe7F7zAMbtVsWFcL5hDuThUsKoI/edit?usp=sharing") 
	- Eriti kui teil ei ole võimalik 001s projekti ette valmistada!
- Veenduge, et teie muusik on valmistunud enda partiid esitama.

---
## Vokaalide salvestus

Hea artikkel: https://mastering.com/recording-vocals-how-to-record-vocals

- Ruum
	- Ära aseta mikrit täpselt ruumi keskele ega seinte äärde! Akustika värk, seisulained ja värki. Mikker võiks olla seintest eemal aga mitte täpselt ruumi keskel.
	- Võimalik kasutada ringi liigutatavaid akustilisi paneele. Juhuks kui trummid või klaver vms resoneeruvad kaasa. Tõmmake vokalisti selja taha näiteks.
	- Kui akustika mängib ruumis rolli siis cardioid. Kui akustiga on korras, siis võib ka kasutada omnit.
		- Omniga ei ole proximity efekti.
- Mikri valik
	- Vokaalide salvestuse tava on kasutada suure kapsliga kondensaator mikreid.
		- Dünaamilist mikrit võib proovida siis kui tegu on valjude vokaalidega, karjumised jne. Dünaamilised on ka paremad juhul kui ruum ei kõla hästi.
- Mikri asetus
	- Enamasti kõlab hästi kui mikker on natuke huultest kõrgemal ja allapoole suunatud. Siis ei löö essid otse kapslisse. Sest hääl liigub nö allapoole suunatud koonuses. 
		- Mida kõrgemal mikker seda rohkem on saund mid-range
		- Mida madalamal seda rohkem on low- ja high range. Sest mikker on ka lähemal rinnale.
	- Mikri keeramine, off-axis aitab vältida sibilantsi ja plosiveid. Pluss mõnel vokalistil kõlab parem pool paremini kui vasak.
	- Ligikaudu 15-20cm kardioid kondensaator mikrist eemal on enamasti sweet spot.
		- Kardioid
			- Lähemal, soe ja intiimne
			- Kaugemal, avatud ja õhuline
		- Omni
			- Võib lähemal olla, sest puudub proximity effect aga mida lähemalt salvestada seda suurem mõju on vokalisti liikumisel dünaamikale. Ehk tasub endiselt hoida tervislikku distantsi.
			- Omniga on hea salvestada lähedal intiimset vokaali, sosistusi jne.
	- Dünaamilisel mikril peabki lähedal olema. Sest neile on sisseehitatud bass cut, et kompenseerida proximity efekti mõju.
- Bäkid ja duublid
	- Proovi kasutada tumedama saundiga mikrit.
	- Proovige nii, et vokalist on kaugemal kui main voxi takeidel. Juba eos asetab bäkid mixis "tahapoole".
- Jne
	- Stuudio salvestustes alati pop filter ette! See võimaldab ka hoida vokalistil mikri "söömist", pop filtriga määrad vokalisti kauguse mikrist ja selle taga saab ka natuke mikri asetusega mängida.
	- Vokalisti monitooring peab olema talle mugav ja meeldiv.
	- Kui tuleb mitu halba take'i järjest, siis tehke paus.
	- Tehke vähemalt üks täispikkuses take, et oleks mingi visuaalne referents DAWis ja vokalist saaks hääle soojaks.

---
## Pro Tools

Hea lühike video: https://www.youtube.com/watch?v=Cakn-t4Izqo

- Input monitoring nupp sees = kui tahad kuulda live inputi, väljas kui tahad kuulda salvestatud materjali.
	- Katsetada teha eraldi aux track mikri monitooringuks. Siis ei lähe signaal kunagi mutesse kuulaja poolelt, sest selle saab saata otse monitooringusse.
- DSP efektid ei lisa latencyt, saab kasutada salvestusel.
- Duplicate track, ilma klippideta: 
	- Right click, duplicate track (cmd + shift + D)
		- Uncheck "Playlist" - siis ei kopeeri klippe.
	- Mõistlik teha kohe alguses mitu tracki ja siis jooksvalt nimetada neid sobivalt.
- Playlistide kasutamine, compimiseks: 
	- Playlisti vaade trackide alt.
	- ctrl + backslash??
- Punch-in: 
	- QuickPunch REC mode
	- Punch-in ja punch-out markerid
- Loop recording:
	- Loop playback peale
	- Preferences -> Operation -> “Create New Playlists on Loop Record"
- Eksport:
	- Selecti kõik materjal, veendu, et alguspunkt oleks sama mis importitud materjali alguspunkt. Siis kui tõmbate materjali enda projekti on kõik ajaliselt õiges kohas.
	- Consolidate: 
		- Edit -> Consolidate VÕI cmd + shift + 5 (või 3?)
		- Vaadake kuhu failid tekkisid ja copyge endale kuhugi sobivasse kohta. Siis võite Pro Toolsis undo teha ja kõik materjal on un-consolidated kujul tagasi.
	- VÕI File > Export > Selected Tracks as Files (või Bounce selected tracks)