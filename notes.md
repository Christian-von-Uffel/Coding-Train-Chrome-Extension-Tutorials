# Notes on Coding Train Chrome Extension Tutorials

## Manifest File Requirements

Manifest files are written in JSON, no exceptions. That's just how google's API works. Always written the same way and named the same thing.

  manifest.json

Every Chrome Extension uses manifest version 2. This isn't something developers get to choose. It's just a thing you need to declare.

  "manifest_version": 2

You can name your extension anything you want. But it has to be written and stored as a string.

  "name": "my extension name"

The version number can be any combination of 1 to 4 integers you want, but is saved as a string, even though it's evaluated as a number. They're also what controls autoupdating, so if you create a new version of the extension, it'll only autoupdate if the new version number is mathematically greater than what's installed.

  "version": "1.23.456.7890"

You can also use version names. But these names don't have embedded functionality or logic to them. They're merely helping to distinguish between versions.

  "version_name": "1.0 beta"

Once you've declared name and versions, it's time to tell Chrome what scripts you want it to run so your application actually accomplishes its tasks.

There are two types of scripts that we'll be dealing with here:

1. background scripts
2. content scripts

Background scripts obviously run in the background and are always at the ready.

Background scripts run when you launch Chrome.

While content scripts are setup by listing js files in the manifest under a "js" array, scripts you run in the background are saved in an array that's simply called "scripts". 

**Content scripts don't run until the page is already loaded.**

Content scripts run conditionally. Based on what URL the user's on, the content script will either run or won't.

Where content scripts run is defined by "matches" and "exclude_matches" criteria. These are arrays that contain regular expressions to define exactly what kind of URLs to run on.

If you want your content scripts to run on any Amazon webpage you'd write:

  ```
  "matches": ["*://*.amazon.com/*"]
  ```

Content scripts is an array, so you can use certain content scripts for certain websites and certain content scripts for others.

No matter what type of scripts you're running, whatever criteria you use to define script behavior in the manifest needs to be encapsulated by brackets.

  "matches" : ["<all_urls>"]

  "js": ["content.js"]

Every manifest file is encapsulated inside curly braces. That's because JSON files store arrays. That also means any time the manifest file contains a child element such as match URLs or JS files that these items needs to be surrounded by curly braces.

  "content_scripts": [
    {
      "matches": [
        "<all_urls>"
      ],
      "js": [
        "content.js"
      ]
    }
  ]

## Error Message Notes

Any time you receive an error message mentioning an indexing at 0 issue, make sure you've actually included an array to get indexed.

This glitch will show up when you haven't put brackets around the list of javascript files you're indexing with the manifest.

  Required value for 'content_scripts[0].js' is invalid
