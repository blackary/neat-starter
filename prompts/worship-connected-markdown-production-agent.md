# Worship Connected Markdown Production Agent

## Mission

Convert one source Word document and eight Markdown templates into exactly eight publication-ready Markdown files.

The source Word document contains the weekly and daily content. The Markdown templates define the exact structure and formatting of the final pages.

Your highest-priority requirement is **template fidelity**. Each final file must be created from a verbatim copy of its corresponding template. Modify only the approved fields and placeholders identified in this prompt. Do not reconstruct, restyle, normalize, clean up, or reformat any template.

Read this prompt and every attachment in full before producing output.

---

## Expected Attachments

You will receive:

1. One `.docx` source file containing:
   - The weekly date range
   - Lord’s Day sermon information
   - Monday through Saturday readings and content
   - Notes
   - Praise and prayer material
   - Westminster Shorter Catechism assignments
   - Any guest contributor information
   - The special Saturday attribution note

2. Eight Markdown templates (these are attached as an appendix at the very end of the file):
   - `weekly-template.md`
   - `template-lords-day.md`
   - `template-mon.md`
   - `template-tue.md`
   - `template-wed.md`
   - `template-thu.md`
   - `template-fri.md`
   - `template-sat.md`

### Template Relationships

- `weekly-template.md` is the parent-level weekly page to which all seven daily pages point.
- `template-lords-day.md` corresponds to the Lord’s Day content in the Word document and has a structure different from the other daily templates.
- `template-mon.md` through `template-sat.md` correspond to their respective days in the Word document.
- `template-sat.md` contains a special attribution placeholder at the bottom that must be populated without altering its surrounding formatting.

If any required attachment is missing or unreadable, stop before generating files and clearly identify the missing or unreadable attachment. Do not guess, invent missing content, or build partial outputs.

---

# Non-Negotiable Immutable-Template Rule

Treat every Markdown template as an immutable source file.

For each output file:

1. Make a verbatim copy of the corresponding template.
2. Work only in that copy.
3. Replace only the approved front-matter values and designated placeholder text.
4. Do not generate or reconstruct the page from scratch.
5. Do not rewrite, normalize, reflow, serialize, beautify, minify, clean up, or otherwise reformat the template.
6. Do not use a Markdown formatter, HTML formatter, YAML serializer, document-wide converter, or other process that may rewrite unchanged portions of the template.
7. Use targeted substitutions or similarly localized edits only.
8. Every character outside an approved replacement region must remain unchanged.

Except within approved replacement regions, preserve exactly:

- HTML elements
- HTML opening and closing tags
- HTML attributes
- Attribute order
- Attribute spacing
- Markdown syntax
- Markdown emphasis markers
- Markdown link syntax
- Markdown image syntax
- URLs
- Image paths
- Image dimensions
- Headings
- Heading levels
- List markers
- List indentation
- YAML indentation
- Tabs
- Spaces
- Blank lines
- Line breaks
- Punctuation
- Capitalization
- Comments
- Unmodified template wording
- End-of-file newline behavior
- Line-ending style, whenever technically possible

**Preserving formatting means preserving the source markup, not merely creating visually equivalent rendered output.**

For example, if the template contains:

```html
<div><small><i>Especially for the littles in your household.</i></small></div>
```

it must remain exactly in that form. Do not replace it with:

```markdown
_Especially for the littles in your household._
```

Similarly:

- Do not replace existing HTML with Markdown.
- Do not replace existing Markdown with HTML.
- Do not add `<span>` elements or other styling elements that are absent from the template.
- Do not consolidate several HTML elements into one.
- Do not alter an HTML wrapper when replacing the text inside it.
- Do not change indentation because another form would also render correctly.

When a placeholder is inside existing markup, replace only the placeholder text. Preserve all surrounding markup exactly.

Example:

```html
<div><small><i>PasteInFromSaturdayInThePrintedWC</i></small></div>
```

Only this text may be replaced:

```text
PasteInFromSaturdayInThePrintedWC
```

The `<div>`, `<small>`, `<i>`, closing tags, spacing, and line placement must remain untouched.

---

# Approved Modifications

Only the following changes are permitted.

## Approved Front-Matter Changes

- `title`
- `description`
- `author`, only according to the author rules below
- `date`
- `weekly_post`, where present in the template
- Additions to `tags`

Do not change `type`.

Do not remove existing tags. Add new tags to the existing list using the exact indentation and list style already present in that template.

## Approved Body Placeholder Changes

- Weekly summary content
- AM sermon text and title
- PM sermon text and title
- Listen-for word or words
- Primary Reading
- Optional Reading
- Keys for Kids entries
- Daily question entries
- Westminster Shorter Catechism number
- Catechism question
- Catechism answer
- Catechism proof-text references
- Notes content
- Praise selection
- The first Prayer entry
- Saturday attribution placeholder

Everything not listed above is immutable.

Do not alter fixed instructional text, fixed prayer entries, Swedish Method content, image syntax, existing links, authorship directions, or other template content merely because it appears to be boilerplate.

---

# Required Workflow

Follow this sequence exactly.

## Phase 1: Read and Map the Source

1. Read the Word document in its entirety, including:
   - Its first page
   - Every daily section
   - Headers and footers if they contain relevant content
   - Tables
   - Footnotes and endnotes
   - Text boxes or callouts
   - Hyperlinks
   - Bold and italic runs
   - The Saturday attribution note

2. Read all eight Markdown templates in their entirety.

3. Create an internal content map containing:
   - Weekly date range
   - Dates for Lord’s Day and Monday through Saturday
   - AM sermon text and title
   - PM sermon text and title
   - Each day’s primary reading text and title
   - Each day’s optional reading
   - Listen-for wording
   - Three Keys for Kids entries
   - Three daily questions
   - Catechism assignment
   - Notes paragraphs and inline formatting
   - Praise selection
   - First prayer entry
   - Author or guest contributor
   - Saturday attribution
   - Bible-book tags

4. Do not generate final files until the source map is complete.

## Phase 2: Copy Templates

Create each final file by copying the corresponding template:

- Weekly output from `weekly-template.md`
- Lord’s Day output from `template-lords-day.md`
- Monday output from `template-mon.md`
- Tuesday output from `template-tue.md`
- Wednesday output from `template-wed.md`
- Thursday output from `template-thu.md`
- Friday output from `template-fri.md`
- Saturday output from `template-sat.md`

Never use one day’s template to construct a different day’s file.

## Phase 3: Make Targeted Substitutions

Modify only the approved values and placeholders. Do not make document-wide formatting changes.

Where matching a placeholder, use enough surrounding context to ensure the intended placeholder is replaced and no unrelated occurrence of the same word is changed.

For example, do not globally replace every instance of the word `notes`. Replace only the standalone Notes placeholder in the Notes section.

## Phase 4: Validate Against the Original Templates

Before delivery, compare each output with its corresponding original template using the validation requirements below.

If validation reveals any change outside an approved replacement region, discard that output, recopy the original template, and repeat the targeted substitutions correctly.

---

# Front-Matter Requirements

## Title

### Lord’s Day

Use:

```yaml
title: Lord's Day <abbreviated month> <date>
```

Example:

```yaml
title: Lord's Day Aug 30
```

### Monday Through Saturday

Use the abbreviated day of the week, abbreviated month, and unpadded calendar date:

```yaml
title: <abbreviated day> <abbreviated month> <date>
```

Examples:

```yaml
title: Mon Aug 31
title: Tue Sep 1
```

Use these day abbreviations:

- `Mon`
- `Tue`
- `Wed`
- `Thu`
- `Fri`
- `Sat`

Use these month abbreviations:

- `Jan`
- `Feb`
- `Mar`
- `Apr`
- `May`
- `Jun`
- `Jul`
- `Aug`
- `Sep`
- `Oct`
- `Nov`
- `Dec`

### Weekly Page

Follow the title pattern already demonstrated in `weekly-template.md`, using the correct abbreviated month or months and date range.

Examples:

```yaml
title: Sep 6-12 2026
```

```yaml
title: Aug 30-Sep 5 2026
```

Do not add leading zeroes to day numbers in titles.

## Description

### Lord’s Day

Use the AM and PM sermon **texts only**, in AM-then-PM order, as a comma-separated list.

Do not include sermon titles in the description.

Example:

```yaml
description: Psalm 110, Matthew 5
```

Preserve the Scripture-reference punctuation used in the source.

### Monday Through Saturday

Use the primary reading text and title exactly as they appear in the Word document.

Example:

```yaml
description: Isaiah 40:1-11—Prepare the Way of the Lord
```

Do not normalize hyphens, en dashes, em dashes, ellipses, capitalization, or spacing in the source title.

### Weekly Page

Use the AM and PM sermon texts as shown by the weekly template’s description pattern, unless the source or template clearly specifies a different weekly description convention.

## Author

Keep:

```yaml
author: Ed Blackwood
```

unless a guest contributor is explicitly specified for that particular day.

If a guest contributor is explicitly specified:

- Use the contributor wording exactly as required by the source.
- Change only that day’s `author` value.
- Do not infer a guest contributor solely from general sources listed in the Saturday attribution.
- Do not treat quoted or consulted authors as contributors.

## Date

Use the calendar date assigned to the page and set the time to 8:00 AM in this exact ISO 8601 format:

```yaml
YYYY-MM-DDT08:00:00.000Z
```

Example:

```yaml
date: 2026-08-31T08:00:00.000Z
```

Requirements:

- Use four digits for the year.
- Use two digits for the month.
- Use two digits for the day.
- Use exactly `T08:00:00.000Z` after the date.
- Do not preserve a template’s sample timestamp.
- Do not convert the requested time to another time zone.

## Weekly Post

Determine the week’s date range from the first page of the Word document.

For a week within one month, use:

```text
<month>-<beginning-date>-<ending-date>-<year>
```

Example:

```yaml
weekly_post: aug-23-29-2026
```

For a week spanning two months, use:

```text
<month1>-<beginning-date>-<month2>-<ending-date>-<year>
```

Example:

```yaml
weekly_post: aug-30-sep-5-2026
```

Requirements:

- Use lowercase three-letter month abbreviations.
- Do not use leading zeroes in day numbers.
- Use hyphens exactly as shown.
- The value must exactly match the weekly output filename without `.md`.
- Apply the same value to the Lord’s Day and all Monday-through-Saturday outputs.
- Do not add `weekly_post` to a template that does not contain that field unless the original instructions explicitly require it there.

## Tags

Preserve every tag already present in the template.

Add Bible-book tags as follows.

### Lord’s Day

Add the Bible books from which the AM and PM sermon texts are taken.

If both are from the same Bible book, add that book only once.

### Monday Through Saturday

Add the Bible book for:

- The primary Reading
- The Optional Reading, if present

If both readings are from the same book, add the book only once.

### Tag Rules

- Use only values from the Valid Tags section at the end of this prompt.
- Do not infer testament-level tags unless the source or existing template requires them.
- Do not remove `Family Worship` or any other existing tag.
- Do not duplicate a tag already present.
- Preserve the template’s tag indentation and YAML list style exactly.
- Use canonical Bible-book names from the valid list, such as `Psalms`, not `Psalm`.

## Type

Leave `type` exactly as it appears in each corresponding template.

Do not change its value, spacing, indentation, or location.

---

# Word-to-Markdown Content Transfer Rules

Transfer source wording accurately. Do not paraphrase, summarize, improve, modernize, correct, or editorialize text from the Word document.

Preserve:

- Wording
- Spelling
- Capitalization
- Punctuation
- Apostrophes
- Quotation marks
- Parentheses
- Scripture references
- Dashes
- Ellipses
- Numbering
- Paragraph boundaries
- Intentional emphasis
- Hyperlink destinations

If the source appears to contain a typo, preserve it unless the user explicitly instructs you to correct errors.

## Inline Formatting Mapping for Newly Inserted Text

When inserting content from Word into a plain-text Markdown placeholder:

- Word bold becomes `**bold**`
- Word italics becomes `*italics*`
- Word bold italics becomes `***bold italics***`
- Word hyperlinks become `[linked text](URL)`
- Word bulleted items retain the list marker style used by the template
- Word numbered items retain the numbering structure used by the template

Apply Markdown markers only to the words formatted in Word. Do not extend emphasis into adjacent punctuation or text unless that punctuation or text is also formatted in Word.

If a placeholder is already wrapped in HTML or Markdown formatting, replace only its text and preserve the wrapper. Do not add a second, redundant formatting layer.

Do not convert Word font family, font size, color, highlighting, margins, page breaks, table borders, or other print-layout properties into invented HTML. Only preserve formatting that has a meaningful and requested Markdown representation, unless the template already provides the exact HTML structure in which the content belongs.

---

# Weekly Page Requirements

Use `weekly-template.md` as the sole structural source.

Update only:

- `title`
- `description`
- `author`, if explicitly required
- `date`
- Bible-book additions to `tags`
- Weekly summary placeholder or sample summary text

Leave `type` unchanged.

Preserve the filename-format HTML comment exactly, including its wording, spacing, and location.

Construct the weekly summary according to the grammatical pattern already present in the template. Replace only the source-specific sermon texts and forthcoming reading reference. Do not otherwise rewrite the sentence.

---

# Lord’s Day Page Requirements

Use `template-lords-day.md` as the sole structural source.

Update only:

- Approved front-matter fields
- AM sermon text and title placeholder
- PM sermon text and title placeholder
- Praise placeholder, if the template provides one
- Any other source-content placeholder explicitly present in the template

Preserve exactly:

- All SermonAudio links
- The number and order of links
- Empty Markdown link-label syntax such as `[](...)`
- Swedish Method HTML
- `<p>` elements
- `<img>` elements
- Image paths
- Image widths and heights
- `<a>` elements
- `href` values
- `target` attributes
- Fixed discussion questions
- List indentation
- Fixed prayer wording
- Psalm-source HTML
- Every unchanged blank line

Do not use the standard Monday-through-Saturday structure for the Lord’s Day page.

For the AM and PM sermon lines, replace only the sample sermon text and title. Do not modify the links following them.

---

# Monday Through Saturday Requirements

Use the corresponding template for each day.

## Listen Up, Little Ones

Replace only the listen-for placeholder sentence or the placeholder words within it.

Preserve the template’s fixed heading and explanatory HTML exactly.

Preserve italics for source words that are intended to appear in italics.

Do not add color spans or other HTML styling.

## Reading

Replace the primary Reading placeholder with the text and title exactly as they appear in the source.

Do not add formatting not present in the source.

## Optional Reading

If an Optional Reading exists, replace only the optional-reading placeholder with it.

If no Optional Reading exists:

1. Remove only the Optional Reading heading, the placeholder line, and the blank-line structure belonging exclusively to that section.
2. Do not alter the next section’s heading or any surrounding fixed content.
3. Preserve all remaining template formatting.

Do not leave instructional placeholder text in the final output.

## Keys for Kids

Replace the three key placeholders in order.

Requirements:

- Keep the template’s list markers.
- Keep the template’s indentation.
- Keep the explanatory HTML unchanged.
- Preserve inline emphasis from Word.
- Do not alter the heading.

## Questions

Replace the three question placeholders in order.

Requirements:

- Keep the template’s numbering.
- Keep the explanatory HTML unchanged.
- Do not renumber fixed sections elsewhere.
- Preserve wording and punctuation from the source.

## Catechism

Use the catechism assignment specified in the Word document.

Retrieve the corresponding material from a reliable edition of the Westminster Shorter Catechism. Include:

- Catechism number
- Complete question
- Complete answer
- Proof-text references

Format the proof-text references as a semicolon-separated list.

Example:

```text
Matthew 28:19; Romans 6:4; Galatians 3:27
```

Requirements:

- Preserve the template’s catechism heading.
- Preserve the template’s explanatory HTML.
- Preserve the question’s existing Markdown wrapper.
- Preserve the proof-text HTML wrapper.
- Replace only the placeholder inside each wrapper.
- Do not add a source citation, URL, footnote, commentary, or bibliography to the final Markdown.
- Use canonical Bible-book names in the references.
- Do not place each proof text on a separate line.

## Notes

Replace only the Notes placeholder with the corresponding day’s Notes from the Word document.

Mandatory requirements:

- Preserve all source wording.
- Preserve bold text.
- Preserve italic text.
- Preserve bold-italic text.
- Preserve hyperlinks.
- Preserve paragraph order.
- Preserve paragraph boundaries.
- Place exactly one blank line between source paragraphs.
- Do not merge separate paragraphs.
- Do not split a source paragraph unless required to preserve a source list.
- Preserve source lists as lists.
- Do not add HTML styling unless it is part of the template surrounding the placeholder.
- Preserve the fixed authorship direction above the placeholder exactly, including any tab or trailing whitespace.
- Do not change Monday-through-Friday wording that directs readers to Saturday.
- Do not change Saturday wording that directs readers below.

## Praise

Replace only the Praise placeholder with the source Praise selection.

Preserve the heading and surrounding blank lines.

Do not normalize the source’s Psalm labels or punctuation unless required by an explicit output rule.

## Prayer

Replace only the first prayer placeholder with the source’s first prayer item.

Preserve all fixed subsequent prayer items exactly as written in that day’s template, even if their wording differs slightly between days.

Do not rewrite fixed prayer wording for consistency.

---

# Saturday Attribution Requirement

Saturday’s template contains a special attribution placeholder at the bottom.

Replace only the attribution placeholder with the full corresponding note from the Word document.

Preserve its surrounding HTML exactly.

Do not:

- Remove the wrapper
- Add a second wrapper
- Convert it to Markdown italics
- Move it to the Notes section
- Copy it into Monday through Friday
- Treat authors named in the attribution as guest contributors unless the source explicitly identifies them as such

---

# Required Output Filenames

Return exactly eight Markdown files.

## Weekly Page

For a week within one month:

```text
month-date1-date2-year.md
```

Example:

```text
sep-6-12-2026.md
```

For a week spanning two months:

```text
month1-date1-month2-date2-year.md
```

Example:

```text
aug-30-sep-5-2026.md
```

## Lord’s Day

```text
lords-day-month-date.md
```

Example:

```text
lords-day-sep-6.md
```

## Monday Through Saturday

```text
day-month-date.md
```

Examples:

```text
mon-sep-7.md
tue-sep-8.md
wed-sep-9.md
thu-sep-10.md
fri-sep-11.md
sat-sep-12.md
```

Filename rules:

- Use lowercase abbreviations.
- Use hyphens only.
- Do not use spaces.
- Do not use leading zeroes for dates.
- Use `.md` as the extension.
- The weekly filename stem must exactly equal every daily file’s `weekly_post` value.

---

# Prohibited Actions

Do not:

- Recreate a template from memory
- Generate a page from scratch
- Replace template HTML with Markdown
- Replace template Markdown with HTML
- Introduce `<span>` elements
- Change template indentation
- Rewrap lines
- Normalize whitespace
- Standardize punctuation
- Standardize apostrophes or quotation marks
- Change fixed template wording
- Change existing links
- Change image paths or dimensions
- Add or remove Swedish Method content
- Modify `type`
- Remove existing tags
- Add invalid tags
- Invent an Optional Reading
- Invent a guest contributor
- Invent missing source content
- Correct source prose without instruction
- Add explanatory notes to the Markdown files
- Include citations to research sources in the final Markdown
- Include intermediate files, scripts, converted source files, extracted media, or QA reports in the deliverables
- Claim successful validation unless every mandatory check has actually passed

---

# Mandatory Pre-Delivery Validation

Perform all validation against the original, untouched templates, not against previously generated files.

## 1. File Count and Naming

Confirm:

- Exactly eight final `.md` files exist.
- Every filename follows the required convention.
- The weekly filename stem exactly matches every Lord’s Day and daily `weekly_post` value.
- No template, source, script, temporary, or QA file is included in the final deliverables.

## 2. Template-Origin Check

Confirm that each output began as a copy of the correct corresponding template.

Do not validate merely by checking whether the output looks similar.

## 3. Approved-Difference Audit

Compare each output against its corresponding original template.

Every difference must fall within one of these approved regions:

- Approved front-matter value
- Tag insertion point
- Weekly summary placeholder
- Sermon placeholder
- Listen-for placeholder
- Reading placeholder
- Optional Reading placeholder or approved removal region
- Keys for Kids placeholder
- Question placeholder
- Catechism placeholder
- Notes placeholder
- Praise placeholder
- First Prayer placeholder
- Saturday attribution placeholder

If any difference occurs outside these regions, the file fails validation.

## 4. HTML Integrity Check

Confirm:

- Existing HTML tags are unchanged outside placeholder contents.
- No tag was added, removed, reordered, renamed, or converted.
- Existing attributes are unchanged.
- Attribute values are unchanged.
- Attribute order and spacing are unchanged.
- All opening and closing tags remain balanced.
- All existing HTML image and link elements remain present.
- No `<span>` element or other unrequested styling element was introduced.

## 5. Markdown Integrity Check

Confirm:

- Heading text and levels are unchanged except where an approved placeholder is part of the heading.
- Existing list markers and indentation are unchanged.
- Existing image syntax is unchanged.
- Existing link syntax and destinations are unchanged.
- Existing emphasis markers outside inserted source text are unchanged.
- Existing comments are unchanged.
- Fixed template wording is unchanged.

## 6. Whitespace Integrity Check

Confirm that outside approved replacement regions:

- Blank lines are unchanged.
- Tabs are unchanged.
- Leading spaces are unchanged.
- Trailing spaces are unchanged.
- Line breaks are unchanged.
- End-of-file newline behavior is unchanged.

## 7. YAML Validation

Confirm:

- Front matter parses as valid YAML.
- `title` follows the required format.
- `description` follows the Lord’s Day or daily rule.
- `author` is correct.
- Every date ends with `T08:00:00.000Z`.
- Every `weekly_post` is correct.
- Existing tags remain.
- Added tags are valid and not duplicated.
- `type` is exactly unchanged.
- YAML indentation matches the template.

## 8. Content Completeness Check

Confirm:

- AM and PM sermon information is present on the Lord’s Day.
- Every day’s Reading is present.
- Every provided Optional Reading is present.
- Every Listen-for entry is present.
- All three Keys for Kids entries are present for each standard day.
- All three questions are present for each standard day.
- The assigned catechism content is complete.
- Proof texts use a semicolon-separated list.
- Notes are complete and in the correct day.
- Notes preserve bold and italic formatting.
- Notes have one blank line between paragraphs.
- Praise is present.
- The first prayer entry is present.
- Fixed later prayer entries remain untouched.
- Saturday’s attribution is present in its original HTML wrapper.
- No source content has been assigned to the wrong day.

## 9. Placeholder Check

Confirm that no unreplaced instructional or sample placeholder remains, including variants such as:

- `DUPLICATE this!`
- `template-weekly-overview`
- `texts`
- `text and title`
- `AM text and title`
- `PM text and title`
- `searchword`
- `Key1`, `Key2`, `Key3`
- `key1`, `key2`, `key3`
- `Q1`, `Q2`, `Q3`
- `WSC #X`
- `Question text`
- `Answer text`
- `Prooftexts for catechism question`
- Standalone `notes`
- `P1`
- `PasteInFromSaturdayInThePrintedWC`
- Optional Reading deletion instructions
- Sample dates
- Sample weekly identifiers

Search contextually so that legitimate source wording is not falsely treated as a placeholder.

## 10. Failure Handling

If any validation check fails:

1. Do not deliver the affected file.
2. Recopy the original template.
3. Reapply only the approved targeted substitutions.
4. Repeat the full audit.
5. Deliver only after all eight files pass.

---

# Final Delivery Requirements

Provide links to exactly the eight completed Markdown files.

Do not paste the full contents into the response unless explicitly requested.

Do not include intermediate artifacts.

In the final response, state briefly that:

- Each output was created from a verbatim copy of its corresponding template.
- Only approved fields and placeholders were changed.
- Existing HTML, Markdown, URLs, images, indentation, and fixed text were left untouched.
- A strict template-difference and placeholder audit passed for all eight files.

Do not state that validation passed unless it actually passed.

---

# Valid Tags

Use only the following tag values:

```yaml
options:
    - { label: "Bible Reading", value: "Bible Reading" }
    - { label: "Worship", value: "Worship" }
    - { label: "Prayer", value: "Prayer" }
    - { label: "Family Worship", value: "Family Worship" }
    - { label: "Old Testament", value: "Old Testament" }
    - { label: "New Testament", value: "New Testament" }
    - { label: "Church History", value: "Church History" }
    - { label: "Genesis", value: "Genesis" }
    - { label: "Exodus", value: "Exodus" }
    - { label: "Leviticus", value: "Leviticus" }
    - { label: "Numbers", value: "Numbers" }
    - { label: "Deuteronomy", value: "Deuteronomy" }
    - { label: "Joshua", value: "Joshua" }
    - { label: "Judges", value: "Judges" }
    - { label: "Ruth", value: "Ruth" }
    - { label: "1 Samuel", value: "1 Samuel" }
    - { label: "2 Samuel", value: "2 Samuel" }
    - { label: "1 Kings", value: "1 Kings" }
    - { label: "2 Kings", value: "2 Kings" }
    - { label: "1 Chronicles", value: "1 Chronicles" }
    - { label: "2 Chronicles", value: "2 Chronicles" }
    - { label: "Ezra", value: "Ezra" }
    - { label: "Nehemiah", value: "Nehemiah" }
    - { label: "Esther", value: "Esther" }
    - { label: "Job", value: "Job" }
    - { label: "Psalms", value: "Psalms" }
    - { label: "Proverbs", value: "Proverbs" }
    - { label: "Ecclesiastes", value: "Ecclesiastes" }
    - { label: "Song of Solomon", value: "Song of Solomon" }
    - { label: "Isaiah", value: "Isaiah" }
    - { label: "Jeremiah", value: "Jeremiah" }
    - { label: "Lamentations", value: "Lamentations" }
    - { label: "Ezekiel", value: "Ezekiel" }
    - { label: "Daniel", value: "Daniel" }
    - { label: "Hosea", value: "Hosea" }
    - { label: "Joel", value: "Joel" }
    - { label: "Amos", value: "Amos" }
    - { label: "Obadiah", value: "Obadiah" }
    - { label: "Jonah", value: "Jonah" }
    - { label: "Micah", value: "Micah" }
    - { label: "Nahum", value: "Nahum" }
    - { label: "Habakkuk", value: "Habakkuk" }
    - { label: "Zephaniah", value: "Zephaniah" }
    - { label: "Haggai", value: "Haggai" }
    - { label: "Zechariah", value: "Zechariah" }
    - { label: "Malachi", value: "Malachi" }
    - { label: "Matthew", value: "Matthew" }
    - { label: "Mark", value: "Mark" }
    - { label: "Luke", value: "Luke" }
    - { label: "John", value: "John" }
    - { label: "Acts", value: "Acts" }
    - { label: "Romans", value: "Romans" }
    - { label: "1 Corinthians", value: "1 Corinthians" }
    - { label: "2 Corinthians", value: "2 Corinthians" }
    - { label: "Galatians", value: "Galatians" }
    - { label: "Ephesians", value: "Ephesians" }
    - { label: "Philippians", value: "Philippians" }
    - { label: "Colossians", value: "Colossians" }
    - { label: "1 Thessalonians", value: "1 Thessalonians" }
    - { label: "2 Thessalonians", value: "2 Thessalonians" }
    - { label: "1 Timothy", value: "1 Timothy" }
    - { label: "2 Timothy", value: "2 Timothy" }
    - { label: "Titus", value: "Titus" }
    - { label: "Philemon", value: "Philemon" }
    - { label: "Hebrews", value: "Hebrews" }
    - { label: "James", value: "James" }
    - { label: "1 Peter", value: "1 Peter" }
    - { label: "2 Peter", value: "2 Peter" }
    - { label: "1 John", value: "1 John" }
    - { label: "2 John", value: "2 John" }
    - { label: "3 John", value: "3 John" }
    - { label: "Jude", value: "Jude" }
    - { label: "Revelation", value: "Revelation" }
```

# Template Files

## Weekly Template (`weekly-template.md`)

```md
---
title: Aug 30-Sep 5 2026
description: Psalm 110, Matthew 5
author: Ed Blackwood
date: 2026-08-30T08:00:00.000Z
tags:
  - Psalms
  - Matthew
  - Luke
type: weekly
---
We look back on Psalm 110 and Matthew 5 and forward to Luke 1.

<!-- file name format: month-date1-date2-year.md, e.g., sep-6-12-2026.md -->
```

## Lord's Day Template (`template-lords-day.md`)

```md
---
title: Lord's Day Template DUPLICATE this!
description: texts
author: Ed Blackwood and?
date: 2017-01-01T17:56:04.765Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### Reading

**AM Sermon**:  AM text and title[](https://www.sermonaudio.com/sermons/51325191845203)[](https://www.sermonaudio.com/sermons/11326174981286)[](https://www.sermonaudio.com/sermons/120261943313442)

**PM Sermon**:  PM text and title[](https://www.sermonaudio.com/sermons/6112522743101)

### Discuss one or more of these questions

1. What is the main idea of the sermon(s)?
2. In one sentence, how did the sermon(s) impact you?
3. Which of the following did you find in the sermon(s)?

   * A sin to confess
   * An example to follow
   * An error to avoid
   * A command to obey
   * A promise to claim
   * A prayer to pray
   * A blessing to enjoy
   * A warning to heed
   * A fault to abandon
   * A principle to live by
   * Something new (to you) about God, Christ, or yourself?

### [Swedish method](http://thebriefing.com.au/2009/01/the-swedish-method/) questions

The daily readings in this household worship guide have a few questions. However, we encourage you, as appropriate for your family, to ask the following general questions of the readings and text each day as well as of the sermon(s) and the whole service(s) each Lord’s Day.

<p><img src="/static/img/family_worship_study_ed-copy_page_1.png" width="33" height = "33"> Is there something that ‘shines’ from the text(s)—whatever impacts most, or draws attention?</p>

<p><img src="/static/img/family_worship_study_ed-copy_page_2.png" width="33" height = "33"> Is there something you don’t understand, or a question the text(s) raises in your mind?</p>

<p><img src="/static/img/family_worship_study_ed-copy_page_3.png" width="33" height = "33"> Is there a personal application to your life?</p>

<p><img src="/static/img/family_worship_study_ed-copy_page_4.png" width="33" height = "33"> Is there something you plan to share with someone else–and who will you share it with?</p>

<p><img src="/static/img/family_worship_study_ed-copy_page_5.png" width="33" height = "33"> How do ideas in the text(s) interrelate? Or with other passages in this book–or in the whole Bible?</p>

<p><img src="/static/img/family_worship_study_ed-copy_page_6.png" width="33" height = "33"> How do you see Jesus Christ in the text(s)?</p>

### Catechism

<div><small><i>If desired, parents can work through the Shorter Catechism in a year, 2 questions a week most weeks.</i></small></div>

WSC X, Y

### Praise (any or all)

Psalm "from bulletin"

<div><small><i>Psalm selections are taken from the Book of Psalms for Worship. (see <a href="https://psalter.org/sing/psalter?psalter_in=worship"  target="_blank">psalter.org</a>)</i></small></div>

### Prayer

1. Pray that you would hide the word read and preached in your hearts, and bring forth its fruit in your lives.
2. Pray for a member of our church, for your family, and for a non-Christian friend or family member.
```

## Monday Template (`template-mon.md`)

```md
---
title: Template Mon DUPLICATE this!
description: text and title
author: Ed Blackwood
date: 2017-01-02T18:42:00.000Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### *Listen up, little ones*

<div><small><i>Especially for the littles in your household.</i></small></div>

Listen for the word *searchword*.

### Reading

text and title

### Optional Reading

delete above header if no optional reading

### *Keys for kids*

<div><small><i>Also for the littles. Young households might choose, after Keys for Kids, to go directly to praise and prayer.</i></small></div>

* Key1
* Key2
* Key3

### Questions

<div><small><i>(Some read the ?s before the notes/ ask them after.)</i></small></div>

1. Q1
2. Q2
3. Q3

### Catechism

**WSC #X**

_Question text_

Answer text

<div><small><i>(Prooftexts for catechism question)</i></small></div>

### Notes

(See Saturday for authors.)	

notes

### Swedish Method questions

![](/static/img/family_worship_study_ed-swedish_questions.png)

<div><small><i>See the Sunday notes for meaning of the symbols.</i></small></div>

### Praise

Psalm nn, pom

### Prayer

1. P1
2. Pray for a specific application from yesterday’s sermons.
3. Pray for a member of our church, for your family, and for a non-Christian friend/family member.
```

## Tuesday Template (`template-tue.md`)

```md
---
title: Template Tue DUPLICATE this!
description: text and title
author: Ed Blackwood
date: 2017-01-03T18:00:55.703Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### *Listen up, little ones*

<div><small><i>Especially for the littles in your household.</i></small></div>

Listen for the word *searchword*.

### Reading

text and title

### Optional Reading

delete above header if no optional reading

### *Keys for kids*

<div><small><i>Also for the littles. Young households might choose, after Keys for Kids, to go directly to praise and prayer.</i></small></div>

* Key1
* Key2
* Key3

### Questions

<div><small><i>(Some read the ?s before the notes/ ask them after.)</i></small></div>

1. Q1
2. Q2
3. Q3

### Catechism

**WSC #X**

_Question text_

Answer text

<div><small><i>(Prooftexts for catechism question)</i></small></div>

### Notes

(See Saturday for authors.)	

notes

### Swedish Method questions

![](/static/img/family_worship_study_ed-swedish_questions.png)

<div><small><i>See the Sunday notes for meaning of the symbols.</i></small></div>

### Praise

Psalm nn, pom

### Prayer

1. P1
2. Give thanks for something from last Lord’s Day’s sermons.
3. Pray for a member of our church, for your family, and for a non-Christian friend/family member.
```

## Wednesday Template (`template-wed.md`)

```md
---
title: Template Wed DUPLICATE this!
description: text and title
author: Ed Blackwood
date: 2017-01-04T18:00:00.000Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### *Listen up, little ones*

<div><small><i>Especially for the littles in your household.</i></small></div>

Listen for the word *searchword*.

### Reading

text and title

### Optional Reading

delete above header if no optional reading

### *Keys for kids*

<div><small><i>Also for the littles. Young households might choose, after Keys for Kids, to go directly to praise and prayer.</i></small></div>

* Key1
* Key2
* Key3

### Questions

<div><small><i>(Some read the ?s before the notes/ ask them after.)</i></small></div>

1. Q1
2. Q2
3. Q3

### Catechism

**WSC #X**

_Question text_

Answer text

<div><small><i>(Prooftexts for catechism question)</i></small></div>

### Notes

(See Saturday for authors.)	

notes

### Swedish Method questions

![](/static/img/family_worship_study_ed-swedish_questions.png)

<div><small><i>See the Sunday notes for meaning of the symbols.</i></small></div>

### Praise

Psalm nn, pom

### Prayer

1. P1
2. Pray for change in you from last Lord’s Day’s sermons.
3. Pray for a member of our church, for your family, and for a non-Christian friend/family member.
```

## Thursday Template (`template-thu.md`)

```md
---
title: Template Thu DUPLICATE this!
description: text and title
author: Ed Blackwood
date: 2017-01-05T18:43:00.000Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### *Listen up, little ones*

<div><small><i>Especially for the littles in your household.</i></small></div>

Listen for the word *searchword*.

### Reading

text and title

### Optional Reading

delete above header if no optional reading

### *Keys for kids*

<div><small><i>Also for the littles. Young households might choose, after Keys for Kids, to go directly to praise and prayer.</i></small></div>

* Key1
* Key2
* Key3

### Questions

<div><small><i>(Some read the ?s before the notes/ ask them after.)</i></small></div>

1. Q1
2. Q2
3. Q3

### Catechism

**WSC #X**

_Question text_

Answer text

<div><small><i>(Prooftexts for catechism question)</i></small></div>

### Notes

(See Saturday for authors.)	

notes

### Swedish Method questions

![](/static/img/family_worship_study_ed-swedish_questions.png)

<div><small><i>See the Sunday notes for meaning of the symbols.</i></small></div>

### Praise

Psalm nn, POM

### Prayer

1. P1
2. Pray for the preparation for preaching God’s Word this Lord's Day.
3. Pray for a member of our church, for your family, and for a non-Christian friend/family member.
```

## Friday Template (`template-fri.md`)

```md
---
title: Template Fri DUPLICATE this!
description: text and title
author: Ed Blackwood
date: 2017-01-06T18:42:39.143Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### *Listen up, little ones*

<div><small><i>Especially for the littles in your household.</i></small></div>

Listen for the word *searchword*.

### Reading

text and title

### Optional Reading

delete above header if no optional reading

### *Keys for kids*

<div><small><i>Also for the littles. Young households might choose, after Keys for Kids, to go directly to praise and prayer.</i></small></div>

* Key1
* Key2
* Key3

### Questions

<div><small><i>(Some read the ?s before the notes/ ask them after.)</i></small></div>

1. Q1
2. Q2
3. Q3

### Catechism

**WSC #X**

_Question text_

Answer text

<div><small><i>(Prooftexts for catechism question)</i></small></div>

### Notes

(See Saturday for authors.)	

notes

### Swedish Method questions

![](/static/img/family_worship_study_ed-swedish_questions.png)

<div><small><i>See the Sunday notes for meaning of the symbols.</i></small></div>

### Praise

Psalm nn, pom

### Prayer

1. P1
2. Pray for the hearing of God’s Word preached this Lord’s Day’s.
3. Pray for a member of our church, for your family, and for a non-Christian friend/family member.
```

## Saturday Template (`template-sat.md`)

```md
---
title: Template Sat DUPLICATE this!
description: text and title
author: Ed Blackwood
date: 2017-01-07T18:43:32.965Z
weekly_post: template-weekly-overview
tags:
  - Family Worship
type: daily
---
### *Listen up, little ones*

<div><small><i>Especially for the littles in your household.</i></small></div>

Listen for the word *searchword*.

### Reading

text and title

### Optional Reading

delete above header if no optional reading

### *Keys for kids*

<div><small><i>Also for the littles. Young households might choose, after Keys for Kids, to go directly to praise and prayer.</i></small></div>

* key1
* key2
* key3

### Questions

<div><small><i>(Some read the ?s before the notes/ ask them after.)</i></small></div>

1. Q1
2. Q2
3. Q3

### Catechism

**WSC #X**

_Question text_

Answer text

<div><small><i>(Prooftexts for catechism question)</i></small></div>

### Notes

(See below for all authors.)	

notes

### Swedish Method questions

![](/static/img/family_worship_study_ed-swedish_questions.png)

<div><small><i>See the Sunday notes for meaning of the symbols.</i></small></div>

### Praise

Psalm nn, pom

### Prayer

1. P1
2. Pray for the reading and preaching of God’s word tomorrow.
3. Pray for a member of our church, for your family, and for a non-Christian friend/family member.

<div><small><i>PasteInFromSaturdayInThePrintedWC</i></small></div>
```