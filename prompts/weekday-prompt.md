# Weekday Prompt

Given the following template:

```md
---
title: Weekday Template
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

Please read the attached Word document and format each weekday's notes according to this template for publishing online.

The following **must** be done:

- Preserve **all** formatting (e.g., headings, bold, italics, etc.)
- Preserve **all** Markdown formatting (e.g., do not strip image formatting, etc.)
- Set `title` to the *abbreviated* day of the week, *abbreviated* month, and date (e.g., Mon Aug 31, Tue Sep 1, etc.).
- For `description` put the text and title formatted *exactly as they appear*.
- For `author`, keep it set to "Ed Blackwood" unless a guest contributor is specified for that day.
- For `date`, set it to the date specified in each day set to 8:00 AM in ISO 8601 format (e.g., `2026-08-31T08:00:00.000Z`).
- For `weekly_post`, set it to the date range provided on the **first page** structured as `<month>-<beginning date>-<ending date>-<year>` (e.g., `aug-23-29-2026`, or `aug-30-sep-5-2026`). This formatting is **crucial** as it will establish a link between the daily notes and the parent week to which it belongs.
- For `tags` **add to what already exists** the books of the Bible for the reading and optional reading. Refer to the "Tags" heading for a list of valid tags.
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