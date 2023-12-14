setInterval(() => {
  d = new Date(); // object mit aktuellem datum inkl. Uhrzeit
  hr = d.getHours(); // anwendung von Methoden
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr; // 3 satz um Winkel des Uhrzeigers zu berechnen
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  // Analog
  // Css update des transforms
  // rotate property wird gesetzt zu berechnetem Winkel
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;

  // Digital
  // schneidet Uhrzeit aus Datumstring in 8 Zeichen
  // 19:13:49 GMT+0100 (Mitteleuropäische Normalzeit)
  t = d.toTimeString().slice(0, 8);
  // wenn sec durch 2 teilbar normal anzeigen
  if (sec % 2 == 0) digital.innerHTML = t;
  // ansonsten : durch leerzeichen ersetzen
  else digital.innerHTML = t.replaceAll(":", " ");
}, 1000);
