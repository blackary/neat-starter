# Lord's Day Prompt

Given the following template:

```md
---
title: Lord's Day Template
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

### Praise (any or all)

Psalm "from bulletin"

<div><small><i>Psalm selections are taken from the Book of Psalms for Worship. (see <a href="https://psalter.org/sing/psalter?psalter_in=worship"  target="_blank">psalter.org</a>)</i></small></div>

### Prayer

1. Pray that you would hide the word read and preached in your hearts, and bring forth its fruit in your lives.
2. Pray for a member of our church, for your family, and for a non-Christian friend or family member.
```

Please read the attached Word document and format Sunday's notes according to this template for publishing online.

The following **must** be done:

- Preserve **all** formatting (e.g., headings, bold, italics, etc.)
- Preserve **all** Markdown formatting (e.g., do not strip image formatting, etc.)
- Set `title` to "Lord's Day \<abbreviated month and date\>" (e.g., Lord's Day Aug 30, etc.).
- For `description` put both the AM and PM sermon *texts* as a **comma-separated list**.
- For `author`, keep it set to "Ed Blackwood".
- For `date`, set it to the date specified in each day set to 8:00 AM in ISO 8601 format (e.g., `2026-08-31T08:00:00.000Z`).
- For `weekly_post`, set it to the date range provided on the **first page** structured as `<month>-<beginning date>-<ending date>-<year>` (e.g., `aug-23-29-2026`, or `aug-30-sep-5-2026`). This formatting is **crucial** as it will establish a link between the daily notes and the parent week to which it belongs.
- For `tags` **add to what already exists** the books of the Bible that each sermon is from. Refer to the "Tags" heading for a list of valid tags.
- Leave `type` as is.
- ***The final markdown must be identical to the template given except for the modifications that were requested.***

Output the result in **raw markdown** that is ready to paste into a markdown file.

## Tags

Please refer to this `yaml` excerpt for a list of valid tag values:

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