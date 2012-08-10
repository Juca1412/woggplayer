WoggPlayer
==========

WoggPlayer is an open-source WEBM and OGG/OGV player, that uses Mozilla's Gecko engine and XULRunner to display content. You can easily build WoggPlayer in Mac OS X, with the following steps:

(If you want to clone this repository, you will nedd Git: http://git-scm.com/downloads/)

1. Download the source as a ZIP package, using the button located in the top of this page or, using Git, clone this branch: ```git clone -b macosx https://github.com/Juca1412/woggplayer.git
```

2. Download XULRunner 14.0.1 from http://ftp.mozilla.org/pub/mozilla.org/xulrunner/releases/14.0.1/runtimes/ (later releases are not recommended due to a bug)

3. Extract XULRunner and copy the content from */XUL.framework/Versions/14.0.1/...* to */Contents/Frameworks/XUL.framework/*, in WoggPlayer.

4. Copy _xulrunner_ from _XUL.framework_ folder to */Contents/MacOS/*.

5. Rename WoggPlayer's folder and add an .app extension. Run it.

Some pre-packaged builds are available at https://github.com/Juca1412/woggplayer/downloads.