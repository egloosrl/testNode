class Loyalty {
  // ITA:
  // Quando un utente si registra, viene creato un oggetto Loyalty
  // in questo anno l'utente potrà accumulare punti.
  // Esistono degli scaglioni basati su una quantità di punti che permetto di ottenere dei sconti.
  // Per esempio poniamo che gli scaglioni siano:
  // 0 punti: nessuno sconto
  // 100 punti: 10% di sconto
  // 200 punti: 20% di sconto
  // 300 punti: 30% di sconto
  // Ecc...
  //
  // Ogni volta che viene raggiunto un nuovo scaglione, partirà un nuovo anno (resettando quello precedente).
  //
  // Se durante l'anno l'utente non raggiunge lo scaglione successivo, verrà resettato lo status dell'utente in base al numero di punti accumulati durante quest'ultimo.
  //
  // Per esempio, se un utente accumula 150 punti, ma non raggiunge lo scaglione successivo, allora l'utente avrà uno status di 50 punti.
  //
  //
  // ENG:
  // When a user registers, a Loyalty object is created
  // in this year the user will be able to accumulate points.
  // There are some tiers based on a quantity of points that allow you to get discounts.
  // For example, let's say the tiers are:
  // 0 points: no discount
  // 100 points: 10% discount
  // 200 points: 20% discount
  // 300 points: 30% discount
  // Etc...
  //
  // Every time a new tier is reached, a new year will start (resetting the previous one).
  //
  // If during the year the user does not reach the next tier, the user's status will be reset based on the number of points accumulated during the last one.
  //
  // For example, if a user accumulates 150 points, but does not reach the next tier, then the user will have a status of 50 points.
}

export default Loyalty
