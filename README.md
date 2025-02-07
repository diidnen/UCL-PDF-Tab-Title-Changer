# UCL PDF Title Changer

A simple browser extension to improve the display of PDF files in the UCL Moodle system.

## Features

- Automatically extracts actual filenames from UCL Moodle PDF links
- Changes browser tab titles to show actual PDF filenames
- Supports all PDF files in the UCL Moodle system

## Installation

1. First, install the Tampermonkey browser extension
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click on the Tampermonkey icon and select "Create a new script"

3. Delete all content in the editor and paste the script code

4. Press Ctrl+S (Windows) or Command+S (Mac) to save the script

## Usage

Once installed, when you visit a PDF file in UCL Moodle, the browser tab will automatically display the actual PDF filename instead of the complex URL.

## Supported URL Format

Supports URLs in the following format:https://ucl-eu-west-2-moodle-sitedata.s3.eu-west-2.amazonaws.com/... can change by yourself
