# Prompt

Read this prompt in its entirety and follow the directions exactly. You will find several attachments: one `.docx` file and eight `.md` files. The `.docx` file contains all of the content that must be properly transferred to the corresponding `.md` files. Here is a breakdown:

- `weekly-template.md`: This is a parent-level page to which all the daily templates will point.
- `template-lords-day.md`: This template differs from the other template pages. It will correspond with the Lord's Day page in the `.docx` file.
- `template-<mon-sat>.md`: This is the standard daily template. As with the previous template file, this will correspond to its respective day in the `.docx` file. Make special note of Saturday's file, which has a special footnote at the bottom. Normal weekdays will not include this footnote.

Please read the attached documents in their entirety and format each day's notes according to the attached templates for publishing online.

The following **must** be done:

- Preserve **all** Word Document formatting (e.g., headings, bold, italics, etc.)
- Preserve **all** Markdown formatting (e.g., do not strip image formatting, etc.)
- Preserve **all** HTML formatting, as each template file has HTML which must be rendered properly on the web page.
- Set `title` to "Lord's Day \<abbreviated month and date\>" (e.g., Lord's Day Aug 30, etc.), for a Lord's Day.
- Set `title` to the *abbreviated* day of the week, *abbreviated* month, and date (e.g., Mon Aug 31, Tue Sep 1, etc.) for other days.
- For `description` put both the AM and PM sermon *texts* as a **comma-separated list** for the Lord's Day.
- For `description` put the text and title formatted *exactly as they appear* for other days.
- For `author`, keep it set to "Ed Blackwood" unless a guest contributor is specified for the day.
- For `date`, set it to the date specified in each day set to 8:00 AM in ISO 8601 format (e.g., `2026-08-31T08:00:00.000Z`).
- For `weekly_post`, set it to the date range provided on the **first page** structured as `<month>-<beginning date>-<ending date>-<year>` (e.g., `aug-23-29-2026`, or `aug-30-sep-5-2026`). This formatting is **crucial** as it will establish a link between the daily notes and the parent week to which it belongs.
- For `tags` **add to what already exists** the books of the Bible that each sermon is from on the Lord's Day. Otherwise, add the books of the Bible for the reading and optional reading. Refer to the "Tags" heading for a list of valid tags.
- Leave `type` as is.
- You will need to fetch the relevant material from the Westminster Shorter Catechism and format it according to the markdown. Include the prooftext references in a semicolon-separated list.
- In the "Notes" section in the daily templates, ***you must preserve the Word doc formatting (italics, bold, etc.).*** Please also add an extra line breaks between each paragraph. You may either do so with a newline with a `<br>` or just an empty line between each paragraph.
- ***The final markdown must be identical to the template given except for the modifications that were requested.***

For the results, please provide eight Markdown files following this naming convention:

- Weekly template: `month-date1-date2-year.md` (e.g., sep-6-12-2026.md), or `month1-date1-month2-date2-year.md` (e.g., aug-30-sep-5-2026.md)
- Lord's Day: `lords-day-month-date.md` (e.g., lords-day-sep-6.md)
- Other days: `day-month-date.md` (e.g., mon-sep-7.md, tue-sep-8.md, etc.)

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