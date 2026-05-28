# Content-guide – driva-foretag.se

Regler för att skriva artiklar. Följ exakt. Sajten är **YMYL** (företagsekonomi, skatt, juridik) – felaktig fakta får direkta konsekvenser för läsaren.

## Kanonisk mall

Använd **generation A** som mall: `src/content/personal-hr/semesterlagen.mdx`.
(Det finns äldre, trasiga "gen C"-filer med fel frontmatter – kopiera ALDRIG dem.)

### Frontmatter (endast dessa fält läses av koden – `src/lib/content.ts`)

```yaml
---
title: "..."              # renderas som <h1> av templaten
description: "..."        # meta description (INTE metaDescription)
category: "skatt"         # måste matcha mappnamnet
type: "cluster"           # pillar | cluster
publishedAt: "2026-05-28" # INTE date
updatedAt: "2026-05-28"   # INTE updated
author: "Anna Ekström"    # måste vara en av de 4 nedan, exakt stavning
readTime: "9 min"
tags: ["...", "..."]
reviewedBy: "..."
---
```

Fält som `metaDescription`, `date`, `updated`, `slug`, `faqSchema` **ignoreras** av koden – använd dem inte.

### Filnamn = URL-slug

- Filnamnet bestämmer URL:en: `src/content/{category}/{slug}.mdx` → `/{category}/{slug}`.
- En `slug:`-rad i frontmatter ignoreras helt. Sätt slug via filnamnet.
- Inga slug-dubbletter mellan kategorier.

## Body-regler

- **INGEN `# H1` i body.** Templaten renderar `<h1>` från `frontmatter.title`. En `#` i body ger dubbel H1 = SEO-fel.
- Sektioner börjar på `## ` (H2). TOC byggs automatiskt från H2-rubriker (visas vid >2 st). H3 indexeras inte i TOC.
- Rubrik-id genereras automatiskt: gemener, `å/ä→a`, `ö→o`, övrigt → bindestreck.

### Struktur

```
## Introduktion
## H2-sektioner (innehåll, ### H3, tabeller, **fetstil**, exempel)
## Vanliga frågor
### Ren fråga som slutar med frågetecken?
Svar direkt under, ingen prefix.
## Sammanfattning            (avsluta med CTA till /hitta-radgivare)
## Källor och referenser     (av.se, riksdagen.se, skatteverket.se m.fl.)
```

### FAQ-schema (viktigt)

`FAQPage` JSON-LD genereras automatiskt från `### fråga?`-rubriker under `## Vanliga frågor` (eller `## FAQ`).

- Skriv: `### Ren fråga?` följt av svaret.
- Skriv **INTE** `### H: fråga?` / `**S:** svar` – "H:"-prefixet hamnar i schemat och förstör det.

## Författare (måste matcha `src/lib/authors.ts` exakt, annars ingen författarruta)

| Kategori | Författare |
|---|---|
| `skatt` | Anna Ekström |
| `juridik` | Maria Berggren |
| `personal-hr` | Maria Berggren |
| `marknadsforing` | Johan Wikström |
| `ai-effektivisering` | Johan Wikström |
| `bokforing-ekonomi` | Erik Lindström |
| `starta-foretag` | välj närmast relevant (Erik/Maria) |
| `finansiering` | välj närmast relevant (Erik/Anna) |

Namn som "Driva Företag" / "Redaktion…" matchar ingen författare → ingen författarruta. Undvik.

## YMYL – verifiera ALL fakta vid skrivning

**Webbsök varje siffra och paragraf. Lita ALDRIG på träningsdata för dessa:**

- Momssatser och momsregistreringsgräns (Skatteverket)
- Bolagsverkets avgifter (bolagsverket.se – ändras)
- Aktiekapital (AB-minimum)
- Arbetsgivaravgifter och egenavgifter (årliga procentsatser)
- 3:12-regler, gränsbelopp, utdelning fåmansföretag
- Skattetillägg, representationsavdrag, reseavdrag m.m.
- Lagparagrafer (ML, SemL, LAS, ABL) – kontrollera att hänvisningarna stämmer
- Årtal i titlar – matcha mot `publishedAt`

## Intern länkning (silo)

- Länka till relaterade artiklar **inom samma kategori**: `[text](/kategori/slug)`.
- Länka till konverteringsmålet `/hitta-radgivare` i CTA.
