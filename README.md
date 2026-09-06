# free-soundfonts

Free soundfont collection optimized for playback on the web.

## Demo

Check network latency, playback latency, memory usage and sound quality.

- General
  - [@marmooo/piano-visualizer](https://marmooo.github.io/piano-visualizer) -
    Beautiful piano visualizer
  - [@marmooo/midi-player](https://marmooo.github.io/midi-player/) - GUI library
  - [Free MIDI](https://marmooo.github.io/free-midi/) - Free MIDI search for
    everyone. Free to listen, copy, play, etc.
  - [midi2audio](https://marmooo.github.io/midi2audio/) - Convert MIDI to audio
    (WAV, MP3, AAC, FLAC, Opus)
  - [Humidy](https://marmooo.github.io/humidy/) - GM2 MIDI mixer app
  - [Timidy](https://marmooo.github.io/timidy/) - Timidity++ style MIDI player
- Instruments
  - [Doremi Piano](https://marmooo.github.io/doremi-piano/) - Piano-style MPE
    MIDI controller
  - [4x4pad](https://marmooo.github.io/4x4pad/) - 4x4 grid MPE MIDI controller
  - [Celltone](https://marmooo.github.io/celltone/) - Grid MPE MIDI controller
    with Janko-Piano layout
  - [Isotone](https://marmooo.github.io/isotone/) - Grid MPE MIDI controller
    optimized for chords
  - [Hexatone](https://marmooo.github.io/hexatone/) - Hexagonal MPE MIDI
    controller with Wicki-Hayden layout
  - [Glisstone](https://marmooo.github.io/glisstone/) - Hexagonal MPE MIDI
    controller optimized for glissando
- Games
  - [Tip Tap Notes](https://marmooo.github.io/tip-tap-notes/) - Falling-note
    rhythm game with tap notes

## Features

All soundfonts are separated by instrument and compressed by sf3 format:

```
docs/[name]/
  000/000.sf3  # bank 0, program 0
  000/001.sf3
  ...
  128/000.sf3  # percussion (bank 128)
  ...
docs/list.json
```

All soundfonts have a limit of file size to minimize network latency:

- The maximum file size of 1 instrument is limtied to 10MB
- The total file size of GM2 instruments is limted to 100MB

All soundfonts are deployed on Cloudflare Pages:

- [https://soundfonts.pages.dev/GeneralUser_GS_v1.472/000/123.sf3](https://soundfonts.pages.dev/GeneralUser_GS_v1.472/000/123.sf3)
- [https://soundfonts.pages.dev/list.json](https://soundfonts.pages.dev/list.json)

## Collections

- [005.6mg_Aspirin_Stereo_V1.2_Bank](https://musical-artifacts.com/artifacts/1808)
  (Public Domain)
- [32MbGMStereo](http://ntonyx.com/05_sf_01.html#008)
- [90's_Retro_Vintage_v1.05](https://musical-artifacts.com/artifacts/1386)
  (Public Domain)
- [Airfont_320_neo](https://musical-artifacts.com/artifacts/634) (Public Domain)
- [Airfont_330](https://musical-artifacts.com/artifacts/874)
  ([CC-BY-3.0](https://creativecommons.org/licenses/by/3.0/deed.en))
- [Airfont_340](https://musical-artifacts.com/artifacts/633) (Public Domain)
- [Airfont_380_final](https://musical-artifacts.com/artifacts/635) (Public
  Domain)
- [Alex's_gm_v1.3](https://musical-artifacts.com/artifacts/1390)
  ([CC-BY-3.0](https://creativecommons.org/licenses/by/3.0/deed.en))
- Aspirin_160_GMGS_2015 (Public Domain)
- [ColomboGMGS2_V16.0](https://musical-artifacts.com/artifacts/1234)
  ([CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/deed.en))
- [FatBoy_v0.790](https://fatboy.site/)
- [FluidR3_v3.1](https://github.com/pianobooster/fluid-soundfont)
  ([MIT](https://github.com/pianobooster/fluid-soundfont/blob/main/COPYING))
- [GeneralUser_GS_v1.472](http://www.schristiancollins.com/generaluser.php)
- [GeneralUser_GS_v2.0.3](http://www.schristiancollins.com/generaluser.php)
- [LiteGM_v1.03](https://musical-artifacts.com/artifacts/3677)
  ([CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/deed.en))
- [SGM-V2.01](https://archive.org/details/SGM-V2.01)
  ([CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/))
- [SGM-v2.01-NicePianosGuitarsBass-V1.2](https://musical-artifacts.com/artifacts/855)
  ([CC-BY-3.0](https://creativecommons.org/licenses/by/3.0/deed.en))
- [TimGM6mb](http://www.timbrechbill.com/saxguru/Timidity.php)
  ([Pulic Domain](https://musescore.org/en/node/1463#comment-9161))

## License

This repository is a collection of works by various artists and is not a
collection of original works. Please see the sounfont license.
