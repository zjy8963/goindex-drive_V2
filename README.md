This project aims to provide a better UI for Google's Drive function and allows to quickly index all your files. Cloudflare Workers allow you to write JavaScript which runs on all of Cloudflare's 150+ global data centers.

![GoIndex Drive](https://github.com/Yami-Studio/goindex-drive_V2/blob/master/.github/old%20code/Logo/go-drive-logo.gif?raw=true?raw=true)

## Table of Contents
* [Table of Contents](#table-of-contents)
  * [Main Features](#main-features)
  * [Requirements](#requirements)
  * [Supported formats](#supported-formats)
  * [To-do](#to-do)
* [Setup Cloudfare Workers](#setup-cloudfare-workers)
  * [CloudFlare Workers Limits](#cloudflare-workers-limits)
* [Self-Hosting](#self-hosting)
* [Obtaining the client ID & client secret](#obtaining-the-client-id--client-secret)
  * [Manually deploy via rclone](#manually-deploy-via-rclone)
* [Build Instructions](#build-instructions)
  * [GoIndex Auto Code Builder](#goindex-auto-code-builder)
* [FAQ](#faq)
  * [How to use Share Drive (previously known as TeamDrive) instead of your normal Drive?](#how-to-use-share-drive-previously-known-as-teamdrive-instead-of-your-normal-drive)
  * [How to add password to your Google Index?](#how-to-add-password-to-your-google-index)
  * [Why can't I watch videos within the Browser?](#why-cant-i-watch-videos-within-the-browser)
  * [I see ads while watching videos with a Adobe Flash supported Browsers!](#i-see-ads-while-watching-videos-with-a-adobe-flash-supported-browsers)
  * [What does `0:/` means?](#what-does-0-means)
  * [What is Error 1027?](#what-is-error-1027)
  * [Screenshot](#screenshot)
* [Tutorial Guides for beginners](#tutorial-guides-for-beginners)
* [Credits](#credits)
* [License](#license)


### Main Features
* Choose between a Light or Dark (_default_) theme.
* Choose from multiple borders colours.
* Integrated Search function.
* Playable Audio/Video files for e.g. mp4 files without the need to download them to preview it.
* Works with GDrive/ShareDrive (prev. known as TeamDrive).
* Multi-level Search within your Share Drive.
* Basic Encryption support (_does not include rclone based encryption/decryption_)



### Requirements
* [Google Account](http://account.google.com/)
* [CloudFlare Account](https://workers.cloudflare.com/)
* [Google Indesx Source Code](https://github.com/CHEF-KOCH/goindex-drive)


### Supported formats

| Image, Audio, Video or Document   |      Format      |  Supported? |
|:----------:|:-------------:|:------:|
| Video | .asf | ✅ |
| Video | .avi | ✅ |
| Video | .flv | ✅ |
| Video | .mkv | ✅ |
| Video | .mov | ✅ |
| Video | .mp4 | ✅ |
| Video | .mpeg | ✅ |
| Video | .mpg | ✅ |
| Video | .rm | ✅ |
| Video | .rmvb | ✅ |
| Video | .ts | ✅ |
| Video | .webm | ✅ |
| Video | .wmv | ✅ |
| Audio | .flac | ✅ |
| Audio | .m4a | ✅ |
| Audio | .mp3 | ✅ |
| Audio | .ogg | ✅ |
| Audio | .wav | ✅ |
| Audio | AAC 2.0 based | ❌ |
| Document | .css | ✅ |
| Document | .go | ✅ |
| Document | .html | ✅ |
| Document | .java | ✅ |
| Document | .js | ✅ |
| Document | .json | ✅ |
| Document | .md | ✅ |
| Document | .pdf | ✅ |
| Document | .php | ✅ |
| Document | .sh | ✅ |
| Document | .txt | ✅ |
| Image | .bmp | ✅ |
| Image | .gif | ✅ |
| Image | .jpeg | ✅ |
| Image | .jpg | ✅ |
| Image | .png | ✅ |


### To-do
- [ ] A small button to grab all download links in a directory
- [ ] Automatically fetch subtitles
- [ ] Better error fallback page & debug log under files to see problems like rate limit, api limit coming from Google to know what's going on.
- [ ] Checksum support
- [ ] Display VirusTotal results for files below (135 MB _VTs limit for free accounts_)
- [ ] Display srt subtitles from /sub folders or same dir as video file
- [ ] Display uploader or his GMail to identify who uploaded which file
- [ ] Full epub support
- [ ] Full oAuth support
- [ ] H.265/HEVC playable files
- [ ] Image viewer should not require opening new page
- [ ] Improve search function e.g. real-time search & filter options
- [ ] Multi-language support.
- [ ] Sort function via three-dot (or hamburger) menu.
- [ ] URL encode the download link
- [ ] Folderslash issues.
- [ ] Replace Video Flash player with HTML5 one.
- [ ] [JDownloader support](https://board.jdownloader.org/showthread.php?t=83613) including [logins](https://board.jdownloader.org/showthread.php?t=84669)
- [ ] Remove ads from the [theme](https://github.com/Aicirou/goindex-theme-acrou), in the meantime you better use an ad-blocker (_I know you already use one_).
- [x] Add Final / Beta branch
- [x] Add refresh tokens support
- [x] Add support for Support Http Basic Auth
- [x] Add the ability to add multiple share drives
- [x] Correct "How to use instructions"
- [x] Encrypted file storage
- [x] Integrate a working search function
- [x] Integrate multi-level search within the team drive
- [x] Mobile friendly
- [x] PDF support
- [x] Password protected home dir or entire drive
- [x] Remove all Chinese code/comments
- [x] Remove useless icon in the right corner which points to the outdated source
- [x] Support multiple drives (personal & team) without changing server's code
- [x] [Fix Apostrophe (') in file names (throws an error)](https://github.com/kulokenci/goindex-drive/issues/17)


## Setup Cloudfare Workers
* Go to the [official CloudFlare Workers Website](https://workers.cloudflare.com/).
* Sign-up (it's free) using your eMail & password and enter a subdomain name `<-your-name->_.workers.dev` and then click `Set up`.

**Now verify your current Worker**

* Verify your eMail and go to `Workers`, press `Create a Worker`.
* Now copy the content of the [index.js](https://github.com/Yami-Studio/goindex-drive_V2/blob/master/goindex/go2index/index.js) to the script section.

* Edit this object in the script with the details you generated above
```js
var authConfig = {
    "siteName": "GoIndex",  // Sitename
    "root_pass": "",        // root password, leave it blank if you don't want
    "version" : "1.0.6",    // Program Version
    "hash" : "master",      // master OR your HASH, do not leave blank (changes each time you make a commit)
    "theme" : "classic",    // material  classic
    "client_id": "****************************.apps.googleusercontent.com", // client_id from rclone config
    "client_secret": "*******************", // client_secret from rclone config
    "refresh_token": "******************************************", // authorized refresh token from rclone config
    "root": "0AG1OSyxjvYcLUk9PVA" // ROOT_FOLDER from rclone config
};
```

**What you need to know**
* If you have connected Share Drive (Team Drive) with rclone then make sure you specify the Share Drive's root folder. For example `"root": "0AG1OSyxjvYcLUk9PVA"`.
* If you want to use `My Drive` then simply write "root". For Example `"root": "root"`.
* Each time you make a commit/deploy to a file its HASH will change. To access the new file you have to specify the hash OR keep it default with `"hash" : "master"`.


### CloudFlare Workers Limits
* FREE - 100k request per day (that is what you typically choose)
* $5/month - 10M requests/month


## Self-Hosting

## Obtaining the client ID & client secret
* Log into the [Google API Console](https://console.developers.google.com/) with your Google account. It doesn’t matter which Google account you use but it need not be the same account as the Google Team Drive Drive you want to access.
* Select a project or create a `new project`.
* Under `ENABLE APIS AND SERVICES` search for `Drive`, and enable the `Google Drive API`.
* Click `Credentials` ([this one](https://console.developers.google.com/apis/credentials/oauthclient)) in the left-side panel **DO NOT** click on `Create credentials` because this will only open a setup wizard).
* It will prompt you to set the `OAuth` consent screen product name, if you haven’t set one already.
* Click `OAuth Consent Screen` > `User Type` > `External` > `Application Name`.
* Click `Credentials` in the left-side panel, then `Create credentials`, then `OAuth client ID`.
* Choose an application type `other`, and click `Create`, _the default name is fine_.

It will show you a `client ID` and `client secret`. Use these values in rclone config to add a new remote or edit an existing remote.


### Manually deploy via rclone
1. Install [rclone](https://github.com/rclone/rclone) software locally.
2. Follow the given instructions under [https://rclone.org/drive/](https://rclone.org/drive/) to bind a drive.
3. Execute the `commandrclone config file` to find the file `rclone.conf path`.
4. Open `rclone.conf`,find the configuration `root_folder_id` and `refresh_token`.
5. Download `index.js` in [https://github.com/CHEF-KOCH/goindex-drive/blob/master/goindex/go2index/index.js](https://github.com/CHEF-KOCH/goindex-drive/blob/master/goindex/go2index/index.js) and fill in `root` and `refresh_token`.
6. Deploy the code via [Cloudflare Workers](https://workers.cloudflare.com).


## Build Instructions

### GoIndex Auto Code Builder

You can use the following pages to generate your own `index.js` (the file you need for the CloudFlare Workers part).

Follow the instructions provided over [here](https://g-index.glitch.me) another mirror can be found over [here](https://gencode.ve.workers.dev) or [here](https://goindex.glitch.me/).


## FAQ

### How to use Share Drive (previously known as TeamDrive) instead of your normal Drive?
* Copy your shared drive ID `DriveURL/drive/folders/<unique-ID>` (example: `1ffgFstW0fotDfDNlU9fyNiEstrWy3b6s` the [random folder ID](https://pirate.london/g-suite-team-drive-sharing-yes-you-can-not-you-cant-yes-you-can-db0a4e3e6220) is your folder) and set it as your root dir.
* **DO NOT** copy the whole URL `DriveURL/drive/folders/` URL, you only need the specific and unique folder ID!


### How to add password to your Google Index?

* Login into your CloudFlare account.
* Open the dashboard and click on Workers.
* Tap on Quick Edit on right corner (just beside Rename)
* In the Script tab - find `user` and `pass` (they're in the roots field).
* That's it. Fill them up and lock your index!


### Why can't I watch videos within the Browser?

Because it currently uses Adobe Flash which is blocked by default (end-of-life product) in all Browsers. I'm working on a secure replacement.


### I see ads while watching videos with a Adobe Flash supported Browsers!

Ads are rarely visible within the video, they are coming from the Theme. I'm going to remove that, in the meantine use an ad-blocker.


### What does `0:/` means?

The 0:/ part indicates that external users do not have root rights (normal users) [it's only relevant if you add more than one team Drive and use a Password to protect the root dir.


### What is Error 1027?

This means your rate limit was reached (100k hits per day).


### Screenshot

**Dark Theme**
![Dark Theme](https://github.com/CHEF-KOCH/goindex-drive/blob/master/Screenshots/material-dark.png?raw=true)


## Tutorial Guides for beginners
* Check the [video demo](https://www.youtube.com/watch?v=8WMddzVX1Dw).
* Check the step-by-step guide over [here](https://telegra.ph/G-Index-DarkMode--MultiAuth--English--TD-Maker--Custom-Domainga-Tutorial-04-29).
* How do I just download files without previewing them? Simple, just remove `?a=view` or use the download button in the right corner.


## Credits
* Search Base: [w3Schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list)
* Search Function: [MakItWeb](https://makitweb.com/jquery-search-text-in-the-element-with-contains-selector/)
* Source: [LeeluPradhan/G-Index](https://github.com/LeeluPradhan/G-Index), the Chinese code can be found over [here](https://github.com/yanzai/goindex)
* Source: [ParveenBhadooOfficial](https://github.com/ParveenBhadooOfficial/Bhadoo-Drive-Index/blob/master/README.md)
* Source: [alx-xlx / goindex](https://github.com/alx-xlx/goindex/)
* Source: [maple3142](https://github.com/maple3142/GDIndex)
* Video: [INDIA - Create Google Drive Index using CloudFlare Workers](https://www.youtube.com/watch?v=8WMddzVX1Dw)
* Worker Script (Multiple Google Accounts) : [index-multiple-accounts.js](https://github.com/alx-xlx/goindex/blob/master/goindex-acrou/go2index/index-multiple-accounts.js)


## License
This project is forked from [kulokenci/goindex-drive](https://github.com/kulokenci/goindex-drive) and re-licensed under the [MIT license](https://github.com/CHEF-KOCH/goindex-drive/blob/master/LICENSE).

All sub-license files are includes in the root folder.

