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

<iframe width="560" height="315" src="https://www.youtube.com/embed/ue_5Z7itovw?si=pncvtZH51_pr4t0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---