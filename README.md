# heidemarie-hinrichsen.de

Markdown-basierte Website für Heidi Hinrichsens Kurse und Inhalte. Die statische
Website wird mit Astro gebaut und über GitHub Pages veröffentlicht.

## Inhalte pflegen

Die redaktionellen Inhalte liegen in normalen Markdown-Dateien:

- `src/content/pages/startseite.md` – Startseitenangaben; der freie Text unter dem zweiten `---` ist ausschließlich Heidis eigener Profiltext
- `src/content/courses/*.md` – ein Kurs pro Datei; daraus entstehen automatisch Kurskarte und Kursseite
- `src/content/empfehlungen/*.md` – Produkt-/Affiliate-Empfehlungen
- `src/content/rechtliches/*.md` – Impressum und Datenschutz

### Neuen Kurs anlegen

1. Eine vorhandene Datei unter `src/content/courses/` kopieren.
2. Dateinamen, Angaben im Kopf der Datei und den Fließtext ändern.
3. Datei committen. GitHub Pages baut und veröffentlicht die neue Kursseite automatisch.

### Empfehlung veröffentlichen

Die Datei `src/content/empfehlungen/_vorlage.md` kopieren und umbenennen. Titel,
Beschreibung, Kurs-ID sowie den Affiliate-Link eintragen und `draft: false`
setzen. Affiliate-Links werden auf der Website als solche gekennzeichnet.

## Lokal ansehen

Erforderlich ist Node.js 24.19 oder neuer. Die gewünschte Version steht in
`.nvmrc`.

```bash
npm install
npm run dev
```

Der Produktions-Build wird mit `npm run build` geprüft und in `dist/` erzeugt.

## Veröffentlichung

Ein Push auf `main` startet den GitHub-Pages-Workflow. `public/CNAME` hält die
eigene Domain `heidemarie-hinrichsen.de` im Build. Bis Texte, Kontaktdaten,
Impressum und Datenschutz final freigegeben sind, bleiben Suchmaschinen durch
`noindex` und `public/robots.txt` ausgesperrt.

## Noch offen vor der finalen Freigabe

- Heidi-Porträt oder anderes rechtlich geklärtes Bildmaterial
- vollständige Anbieterangaben für das Impressum
- endgültige Datenschutzerklärung passend zu Vimeo, Amazon und weiteren Diensten
- echte Amazon-Partnerlinks und der vorgeschriebene Amazon-Partnerhinweis
- geschützter Teilnehmerinnenbereich und Vimeo-Konfiguration
- Aufhebung von `noindex`, sobald alle Inhalte freigegeben sind
