# PDF-Excel Signer — Portable Windows EXE

Wynikiem kompilacji jest **jeden plik EXE** dla Windows x64, z osadzonym Chromium, interfejsem i bibliotekami PDF/Excel. Odbiorca nie musi instalować Node.js, .NET, WebView2 ani bibliotek. Aplikacja działa bez internetu (kompilacja wymaga internetu).

## Jednorazowe budowanie na GitHubie

1. Utwórz repozytorium na GitHubie.
2. Wgraj **zawartość** tego ZIP-a (nie sam ZIP), koniecznie z ukrytym katalogiem `.github/workflows`.
3. W zakładce **Actions** uruchom workflow „Zbuduj samodzielny EXE” (lub poczekaj na uruchomienie po push).
4. Pobierz artefakt `PDF-Excel-Signer-Portable`, rozpakuj go i wyślij sam `PDF-Excel-Signer-Portable.exe`.

EXE nie uruchamia serwera ani zewnętrznej przeglądarki. Zamknięcie okna kończy aplikację. Portable EXE może podczas uruchamiania rozpakowywać zasoby do katalogu tymczasowego. Program nie jest podpisany certyfikatem — SmartScreen może wyświetlić ostrzeżenie. Windows x64.

## Lokalna kompilacja (opcjonalnie)

`npm install` a następnie `npm run build:win` na Windows.

## Uwagi

To projekt do kompilacji, nie gotowy plik EXE. Nie został przetestowany na Windows. Przed dystrybucją należy sprawdzić wczytywanie i zapis PDF/XLSX oraz eksport podpisów. Electron jest dołączany do EXE; plik może być duży. Oryginalny kod aplikacji zachowano, zmieniono ścieżki bibliotek na lokalne. Zależności npm mają własne licencje.
