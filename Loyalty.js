class Loyalty {
  // ITA:
  // Quando un utente si registra, viene creato un oggetto Loyalty
  // in questo anno l'utente potrà accumulare punti.
  // Esistono degli scaglioni basati su una quantità di punti che permetto di ottenere dei sconti.
  // Per esempio poniamo che gli scaglioni siano:
  // 0 punti: nessuno sconto - status 0
  // 500 punti: 10% di sconto - status 1
  // 1000 punti: 20% di sconto - status 2
  // 1500 punti: 30% di sconto - status 3
  //
  // Ogni volta che viene raggiunto un nuovo scaglione, partirà un nuovo anno (resettando quello precedente).
  //
  // Se durante l'anno l'utente non raggiunge lo scaglione successivo, verrà resettato lo status dell'utente in base al numero di punti accumulati durante quest'ultimo.
  //
  // Esempio:
  // Durante il primo hanno l'utente guadagna 510 punti > nel momento in cui supera i 500 punti, parte un nuovo anno e l'utente viene portato allo status 1.
  // Da questo momento l'utente guadanga altri 600 punti, arrivando a 1110 punti totali. Al raggiungimento dei 1000 punti, parte un nuovo anno e l'utente viene portato allo status 2.
  // A questo punto però, l'utente non guadagna altri punti e quindi non raggiunge lo status 3. Al termine dell'anno corrente, l'utente viene portato allo status 0, con 110 punti. (1110 - 1000 [status attuale] = 110)
  //
  //
  // ENG:
  // When a user registers, a Loyalty object is created
  // in this year the user will be able to accumulate points.
  // There are some levels based on a quantity of points that allow you to get discounts.
  // For example, let's say the levels are:
  // 0 points: no discount - level 0
  // 500 points: 10% discount - level 1
  // 1000 points: 20% discount - level 2
  // 1500 points: 30% discount - level 3
  //
  // Every time a new level is reached, a new year will start (resetting the previous one).
  //
  // If during the year the user does not reach the next level, the user's level will be reset based on the number of points accumulated during the last one.
  //
  // Example:
  // During the first year the user earns 510 points > when he exceeds 500 points, a new year starts and the user is brought to level 1.
  // From this moment the user earns another 600 points, reaching 1110 total points. When he reaches 1000 points, a new year starts and the user is brought to level 2.
  // At this point, however, the user does not earn any more points and therefore does not reach level 3. At the end of the current year, the user is brought to level 0, with 110 points. (1110 - 1000 [current level] = 110)
}

export default Loyalty
