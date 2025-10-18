---
publish: true
---
# Limiter

- Sisuliselt sama mis kompressor, erinevused:
	- Ratio on *infinity*
	- Attack ja release töötavad teistmoodi. Attack määrab ära millal release algab, sest limitterid on üldiselt brickwall ja ei lase peake läbi vastavalt attackile.
	- Tihtipeale gainitakse ceilingu-sse, mitte ei tooda tresholdi alla.
	- Output gain määrab väljundi maksimaalse *peak*i.
	- True peak, räägime täpsemalt masteringus, ärge muretsege.
	
---