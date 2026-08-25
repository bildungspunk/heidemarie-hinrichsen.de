# heidemarie-hinrichsen.de

Technikneutrale Ausgangsbasis für die Website `heidemarie-hinrichsen.de`.

## Aktueller Stand

- Veröffentlichung über GitHub Pages aus dem Root-Verzeichnis des Branches `main`
- eigene Domain über `CNAME`
- vorläufige Platzhalterseite ohne externe Abhängigkeiten
- Suchmaschinen-Indexierung bis zur inhaltlichen Freigabe deaktiviert

## Domain und DNS

Die Domain ist im GitHub-Pages-Projekt als `heidemarie-hinrichsen.de` hinterlegt.
Beim Domainanbieter sind folgende DNS-Einträge konfiguriert:

- `heidemarie-hinrichsen.de` A → `185.199.108.153`
- `heidemarie-hinrichsen.de` AAAA → `2606:50c0:8000::153`
- `www.heidemarie-hinrichsen.de` CNAME → `bildungspunk.github.io`

GitHub leitet `www` automatisch auf die Hauptdomain um. Nach DNS-Änderungen kann
die weltweite Auflösung aufgrund bestehender Caches bis zu 24 Stunden dauern.

## Später Inhalte oder einen Generator einhängen

Die Dateien `index.html` und `styles.css` können direkt ersetzt werden. Falls später Hugo oder ein anderer Static-Site-Generator eingesetzt wird, wird dessen Build-Ausgabe über GitHub Actions veröffentlicht. Domain und DNS bleiben dabei unverändert.

Vor der öffentlichen inhaltlichen Freigabe:

1. echte Inhalte und Gestaltung ergänzen
2. Impressum und Datenschutzerklärung passend zum Einsatzzweck prüfen
3. `noindex` in `index.html` entfernen
4. `robots.txt` anpassen oder entfernen
