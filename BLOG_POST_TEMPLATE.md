# Blog Post Template

Copy this template when adding a new blog post to `src/data/blogPosts.ts`

## Template

```typescript
{
  id: 7, // ← Increment this number (next available ID)
  title: "Вашиот Наслов Овде",
  excerpt: "Краток опис на статијата во 1-2 реченици...",
  category: "Категорија", // Examples: "Животно Осигурување", "Авто Осигурување", "Здравство"
  date: "15 Јануари 2026", // Macedonian date format
  readTime: "8 мин", // Estimated reading time
  coverImage: "https://images.unsplash.com/photo-XXXXXX?w=1200&h=600&fit=crop", // Optional: Unsplash or other image URL
  ctaTitle: "Наслов на CTA",
  ctaDescription: "Опис на повик за акција на крајот од статијата.",
  ctaButtonText: "Побарајте понуда",
  content: `
    <p class="lead">Вовед во статијата со lead параграф...</p>

    <h2>Прв Поднаслов</h2>
    <p>Содржина на првиот дел...</p>
    <p>Дополнителни параграфи...</p>

    <h2>Втор Поднаслов</h2>
    <p>Содржина на вториот дел...</p>
    <p><strong>Важно:</strong> Користете <strong>bold</strong> за нагласок.</p>

    <h2>Трет Поднаслов</h2>
    <p>Заклучок или дополнителни информации...</p>
  `
},
```

## Categories Used So Far

- "Животно Осигурување" (Life Insurance)
- "Авто Осигурување" (Auto Insurance)
- "Имотно Осигурување" (Property Insurance)
- "Здравство" (Health)
- "Деловно Осигурување" (Business Insurance)
- "Патничко Осигурување" (Travel Insurance)

## Finding Cover Images

Use Unsplash for free high-quality images:

1. Go to https://unsplash.com
2. Search for relevant topic (e.g., "insurance", "family", "car", "health")
3. Click on image → "Copy link" → Paste into `coverImage` field
4. Format: Add `?w=1200&h=600&fit=crop` to the end for consistent sizing

Example:
```
https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=600&fit=crop
```

## HTML Content Guidelines

- Use `<p class="lead">` for the first paragraph (larger, emphasis)
- Use `<h2>` for main sections
- Use `<p>` for paragraphs
- Use `<strong>` for bold text
- Use `<ul>` and `<li>` for bullet lists (if needed)
- Keep content in Macedonian language
- Include 3-5 main sections (H2 headings)
- Aim for 500-1000 words total

## Quick Example - New Blog Post

```typescript
{
  id: 7,
  title: "Пензиско осигурување: Планирајте ја вашата иднина",
  excerpt: "Пензиското осигурување обезбедува финансиска сигурност во старост. Дознајте како да изберете најдобра полиса.",
  category: "Животно Осигурување",
  date: "2 Јануари 2026",
  readTime: "7 мин",
  coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop",
  ctaTitle: "Обезбедете мирна пензија",
  ctaDescription: "Контактирајте нè за консултација за пензиско осигурување и планирање на иднината.",
  ctaButtonText: "Побарајте понуда за пензиско осигурување",
  content: `
    <p class="lead">Пензиското осигурување е клучно за финансиска сигурност во годините на пензионирање.</p>

    <h2>Зошто е важно пензиското осигурување</h2>
    <p>Државната пензија често не е доволна за одржување на стандардот на живот...</p>

    <h2>Видови на пензиски полиси</h2>
    <p>Постојат неколку опции за пензиско осигурување...</p>

    <h2>Како да изберете полиса</h2>
    <p>Клучни фактори при изборот...</p>
  `
},
```
