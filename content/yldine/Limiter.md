---
publish: true
---
# Limiter

- Sisuliselt sama mis kompressor, peamine eesmärk on, et signaal ei ületaks määratud nivood. **Kõik** signaal mis läheb üle ceiling-u keeratakse vaiksemaks. Võrreldes kompressoriga:
	- **Ratio** on *infinity*, ehk "brickwall".
	- **Attack ja release** töötavad teistmoodi. Attack määrab ära millal release algab, sest limitterid on üldiselt brickwall ja ei lase peake läbi vastavalt attackile.
	- Gainitakse **ceiling**u-sse/thresholdi, mitte ei tooda thresholdi alla.
	- **Output gain** määrab väljundi maksimaalse *peak*i.
	- **True peak**, lisab limiterile oversamplingu, et ta püüaks kinni samplite vahelised peak-id. Tähtis masterdamisel.
	
---