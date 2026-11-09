/* Lädt den Kompaktkurs in ein GHL-Code-Element. Einbau in GHL (eine Zeile):
   <script src="https://hischamelsobhi123-netizen.github.io/kompaktkurs/loader.js"></script>
   Änderungen an der Seite: nur ins Repo pushen, GHL bleibt unverändert. */
(function(){
  var me = document.currentScript, box = document.createElement('div');
  me.parentNode.insertBefore(box, me);
  fetch('https://hischamelsobhi123-netizen.github.io/kompaktkurs/index.html', {cache: 'no-cache'}).then(function(r){ return r.text(); }).then(function(html){
    var d = new DOMParser().parseFromString(html, 'text/html');
    d.head.querySelectorAll('style, meta[name="robots"]').forEach(function(n){ document.head.appendChild(n.cloneNode(true)); });
    Array.prototype.forEach.call(d.body.childNodes, function(n){ box.appendChild(document.importNode(n, true)); });
    var alte = Array.prototype.slice.call(box.querySelectorAll('script'));
    alte.forEach(function(alt){ var neu = document.createElement('script'); neu.text = alt.text; alt.parentNode.replaceChild(neu, alt); });
  });
})();
