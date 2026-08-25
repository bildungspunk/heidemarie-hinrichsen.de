# heidemarie-hinrichsen.de

Technikneutrale Ausgangsbasis für die Website `heidemarie-hinrichsen.de`.

## Aktueller Stand

- Veröffentlichung über GitHub Pages aus dem Root-Verzeichnis des Branches `main`
- eigene Domain über `CNAME`
- vorläufige Platzhalterseite ohne externe Abhängigkeiten
- Suchmaschinen-Indexierung bis zur inhaltlichen Freigabe deaktiviert

## Später Inhalte oder einen Generator einhängen

Die Dateien `index.html` und `styles.css` können direkt ersetzt werden. Falls später Hugo oder ein anderer Static-Site-Generator eingesetzt wird, wird dessen Build-Ausgabe über GitHub Actions veröffentlicht. Domain und DNS bleiben dabei unverändert.

Vor der öffentlichen inhaltlichen Freigabe:

1. echte Inhalte und Gestaltung ergänzen
2. Impressum und Datenschutzerklärung passend zum Einsatzzweck prüfen
3. `noindex` in `index.html` entfernen
4. `robots.txt` anpassen oder entfernen
