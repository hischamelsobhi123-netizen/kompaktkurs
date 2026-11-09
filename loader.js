/* Lädt den Kompaktkurs in ein GHL-Code-Element. Einbau in GHL (eine Zeile):
   <script src="https://hischamelsobhi123-netizen.github.io/kompaktkurs/loader.js"></script>
   Änderungen an der Seite: nur ins Repo pushen, GHL bleibt unverändert. */
(function(){
  var me = document.currentScript, box = document.createElement('div');
  me.parentNode.insertBefore(box, me);
  /* GHL legt Abschnitt, Zeile und Spalte mit Innenabstand und Maximalbreite um das Code-Element:
     auf volle Breite ohne Rand setzen, sonst sitzt die Seite mit weißem Rahmen da. */
  for (var e = box.parentNode; e && e !== document.body; e = e.parentNode) {
    if (e.style) { e.style.padding = '0'; e.style.margin = '0'; e.style.maxWidth = 'none'; e.style.width = '100%';e.style.overflow = 'visible'; }
  }
  fetch('https://hischamelsobhi123-netizen.github.io/kompaktkurs/index.html', {cache: 'no-cache'}).then(function(r){ return r.text(); }).then(function(html){
    var d = new DOMParser().parseFromString(html, 'text/html');
    d.head.querySelectorAll('style, meta[name="robots"]').forEach(function(n){ document.head.appendChild(n.cloneNode(true)); });
    Array.prototype.forEach.call(d.body.childNodes, function(n){ box.appendChild(document.importNode(n, true)); });
    var alte = Array.prototype.slice.call(box.querySelectorAll('script'));
    alte.forEach(function(alt){ var neu = document.createElement('script'); neu.text = alt.text; alt.parentNode.replaceChild(neu, alt); });
  });
})();
