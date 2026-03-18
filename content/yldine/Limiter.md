---
publish: true
---
# Limiter

- Sisuliselt sama mis kompressor, peamine eesmärk on, et signaal ei ületaks määratud nivood. Võrreldes kompressoriga:
	- Ratio on *infinity*, ehk "brickwall".
	- Attack ja release töötavad teistmoodi. Attack määrab ära millal release algab, sest limitterid on üldiselt brickwall ja ei lase peake läbi vastavalt attackile.
	- Gainitakse ceilingu-sse/thresholdi, mitte ei tooda thresholdi alla.
	- Output gain määrab väljundi maksimaalse *peak*i.
	- True peak, räägime täpsemalt masteringus, ärge muretsege.
	
---