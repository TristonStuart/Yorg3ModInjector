// ==UserScript==
// @name Yorg3.io Mod Injector
// @namespace https://github.com/TristonStuart/Yorg3ModInjector/tree/master
// @version 1.3
// @description Inject mods into yorg3.io
// @author TDStuart
// @match https://yorg3.io/*
// @grant none
// ==/UserScript==

/*
Note : The code in the IGNORE injects mods into yorg3.io. The code makes gamesaves not sync with the server, protecting the leaderboard from cheaters,
please do not attempt to remove this protection. Your account will be banned.

alertWarn : (true / false) Disables the warning protection for mods trying to inject after game load. This can be due to registerMod executing in a loop, setTimeout,
or setInterval. This can prevent the mod from functioning properly, and if injected too late can miss the chance at getting the root variable preventing the mod from
accessing game vars.
*/

// == IGNORE ==
window.mixa=['\x77\x37\x58\x44\x6b\x4d\x4f\x52\x77\x70\x33\x43\x69\x77\x3d\x3d','\x77\x6f\x46\x77\x62\x4d\x4b\x36\x77\x6f\x6b\x3d','\x77\x72\x30\x2f\x77\x35\x54\x43\x6d\x4d\x4b\x43','\x77\x6f\x38\x6e\x77\x6f\x54\x43\x72\x6a\x55\x3d','\x4f\x57\x73\x71\x77\x70\x51\x41','\x77\x6f\x4c\x44\x71\x47\x2f\x44\x76\x73\x4b\x43\x66\x38\x4b\x61\x77\x72\x41\x3d','\x56\x38\x4b\x6a\x77\x35\x39\x71\x48\x4d\x4f\x50\x77\x36\x4e\x59\x77\x36\x37\x43\x67\x38\x4f\x37','\x59\x79\x6f\x67','\x77\x36\x33\x44\x73\x63\x4f\x66','\x77\x36\x50\x44\x75\x4d\x4f\x4f\x5a\x4d\x4f\x62\x77\x35\x44\x43\x71\x4d\x4b\x63\x77\x34\x78\x52','\x41\x6c\x77\x39\x77\x72\x73\x4e','\x77\x37\x34\x69\x4a\x67\x3d\x3d','\x4c\x38\x4f\x55\x4b\x77\x3d\x3d','\x77\x34\x56\x75\x77\x37\x6b\x3d','\x77\x34\x55\x2f\x48\x55\x59\x3d','\x49\x32\x46\x66','\x4d\x63\x4b\x72\x77\x71\x41\x58\x77\x35\x64\x35\x77\x34\x64\x6f\x50\x57\x6a\x43\x6b\x6d\x7a\x44\x67\x44\x72\x44\x70\x38\x4b\x45\x48\x73\x4f\x34\x77\x35\x72\x43\x6d\x54\x6f\x68\x66\x58\x68\x73\x77\x6f\x59\x63\x45\x73\x4f\x72\x44\x48\x6a\x43\x70\x63\x4f\x37\x77\x34\x48\x44\x71\x44\x2f\x44\x74\x63\x4f\x32\x54\x53\x6e\x43\x6d\x63\x4f\x6b\x77\x34\x67\x6d\x77\x6f\x78\x42\x77\x72\x77\x6a\x77\x72\x54\x43\x6e\x4d\x4b\x69\x51\x42\x63\x33\x77\x6f\x51\x50\x77\x34\x46\x6b\x77\x37\x35\x75\x77\x37\x34\x64\x77\x34\x56\x6a\x77\x71\x5a\x63\x57\x79\x50\x44\x69\x69\x7a\x43\x68\x38\x4b\x4a\x49\x68\x6e\x43\x6f\x73\x4f\x33\x77\x70\x5a\x75\x65\x38\x4f\x57\x4a\x32\x6e\x44\x68\x54\x73\x4e\x4b\x63\x4f\x48\x64\x47\x7a\x43\x73\x48\x7a\x43\x72\x63\x4f\x6e\x51\x4d\x4f\x35\x77\x34\x66\x43\x67\x38\x4f\x70\x77\x71\x51\x37\x77\x37\x41\x4c\x43\x6a\x6b\x64\x43\x57\x78\x34\x49\x45\x50\x43\x76\x38\x4b\x74\x64\x38\x4f\x62\x4d\x47\x4c\x43\x70\x63\x4b\x50\x49\x4d\x4b\x72\x59\x73\x4b\x4b\x5a\x73\x4f\x45\x49\x63\x4f\x44\x77\x35\x74\x66\x77\x72\x66\x43\x72\x63\x4b\x5a\x77\x71\x76\x44\x72\x38\x4f\x6f\x77\x71\x37\x43\x6b\x46\x6a\x43\x6c\x63\x4b\x70\x77\x35\x39\x57\x77\x37\x31\x4c\x5a\x6d\x37\x43\x70\x73\x4f\x63\x77\x70\x70\x77\x77\x36\x66\x43\x69\x73\x4f\x5a\x64\x6c\x48\x44\x6d\x63\x4b\x70\x54\x33\x46\x61\x54\x6d\x4c\x43\x72\x63\x4b\x41\x77\x37\x4e\x39\x77\x36\x6a\x43\x75\x4d\x4f\x32\x65\x6d\x31\x37\x77\x36\x33\x43\x70\x6a\x45\x30\x77\x72\x64\x38\x51\x4d\x4f\x5a\x77\x36\x70\x55\x77\x72\x58\x43\x6d\x73\x4f\x54\x46\x45\x38\x2f\x61\x6a\x50\x44\x72\x6e\x63\x44\x77\x70\x37\x43\x6c\x73\x4b\x6e\x77\x72\x70\x4d\x63\x38\x4b\x69\x4a\x6c\x73\x68\x77\x36\x44\x43\x68\x63\x4b\x41\x77\x37\x6e\x44\x68\x51\x42\x54\x47\x63\x4b\x5a\x77\x34\x6b\x62\x77\x34\x6a\x43\x73\x38\x4f\x62\x41\x4d\x4f\x66\x57\x38\x4f\x66\x77\x6f\x6a\x43\x72\x48\x49\x63\x4d\x67\x2f\x44\x71\x43\x50\x43\x74\x4d\x4f\x78\x63\x52\x72\x43\x6c\x4d\x4b\x48\x77\x37\x66\x43\x76\x32\x54\x43\x75\x4d\x4f\x53\x77\x35\x33\x43\x70\x44\x4d\x4f\x77\x37\x7a\x43\x73\x69\x76\x43\x76\x54\x50\x43\x75\x7a\x38\x6d\x77\x72\x33\x44\x75\x38\x4f\x76\x77\x37\x41\x53\x41\x73\x4b\x2b\x77\x71\x67\x5a\x62\x73\x4f\x56\x77\x71\x6a\x43\x6d\x48\x6e\x44\x70\x54\x46\x4d\x5a\x52\x6c\x79\x77\x71\x5a\x66\x50\x41\x6a\x44\x67\x30\x42\x4b\x4f\x54\x2f\x43\x67\x46\x63\x44\x77\x70\x2f\x44\x69\x57\x62\x43\x70\x77\x4e\x4e\x77\x70\x77\x54\x52\x73\x4f\x61\x49\x38\x4b\x6f\x77\x72\x51\x36\x77\x35\x48\x43\x72\x63\x4f\x45\x77\x35\x48\x44\x72\x73\x4f\x51\x77\x37\x56\x69\x77\x6f\x58\x44\x69\x73\x4b\x68\x49\x42\x51\x48\x66\x78\x6a\x43\x76\x69\x50\x43\x76\x4d\x4b\x5a\x50\x69\x49\x74\x66\x38\x4f\x79\x77\x72\x64\x51\x77\x71\x52\x54\x77\x34\x67\x68\x77\x72\x4c\x44\x70\x4d\x4f\x78\x47\x63\x4b\x72\x5a\x4d\x4b\x53\x77\x70\x33\x44\x69\x4d\x4b\x2b\x62\x63\x4b\x51\x4e\x45\x63\x2b\x48\x7a\x66\x44\x6a\x73\x4b\x4c\x77\x71\x78\x32\x63\x63\x4b\x75\x77\x71\x58\x43\x6a\x73\x4f\x42\x77\x6f\x4c\x43\x6f\x63\x4b\x57\x51\x6a\x48\x43\x6e\x4d\x4f\x37\x77\x72\x68\x31\x5a\x6d\x44\x43\x70\x6e\x44\x44\x6c\x4d\x4b\x56\x4d\x58\x48\x44\x67\x32\x73\x2b\x47\x4d\x4f\x4d\x49\x56\x76\x43\x70\x6e\x70\x6a\x47\x6b\x6e\x43\x73\x67\x3d\x3d','\x77\x71\x4e\x30\x5a\x38\x4b\x37\x5a\x73\x4f\x31\x63\x68\x49\x76\x77\x35\x72\x44\x6d\x51\x33\x44\x76\x55\x72\x44\x67\x63\x4b\x54\x77\x71\x37\x43\x6f\x38\x4f\x6a\x4b\x38\x4b\x45\x77\x70\x55\x57\x77\x6f\x44\x44\x72\x63\x4b\x36\x77\x34\x70\x56\x4d\x4d\x4b\x48\x77\x6f\x63\x66\x65\x57\x73\x30\x77\x71\x63\x77\x52\x63\x4b\x69\x65\x69\x6a\x44\x75\x78\x34\x4c\x44\x38\x4b\x6f\x77\x72\x58\x43\x70\x68\x6c\x62\x77\x71\x48\x44\x72\x78\x50\x43\x70\x51\x72\x44\x70\x53\x73\x48\x4b\x38\x4b\x41\x56\x4d\x4f\x59\x64\x45\x5a\x52\x41\x63\x4b\x70\x4f\x44\x7a\x44\x6b\x38\x4f\x53\x77\x6f\x39\x63\x77\x70\x4d\x68\x41\x73\x4b\x6f\x77\x35\x4c\x43\x75\x4d\x4b\x4f\x45\x4d\x4b\x4a\x47\x73\x4b\x41\x77\x35\x49\x7a\x77\x35\x33\x44\x71\x68\x7a\x44\x72\x52\x45\x77\x77\x34\x4c\x44\x6f\x6b\x48\x43\x70\x42\x54\x44\x68\x4d\x4f\x35\x77\x6f\x2f\x43\x6a\x38\x4f\x79\x77\x36\x35\x75\x77\x70\x6e\x44\x68\x69\x64\x47\x54\x73\x4f\x79\x45\x57\x2f\x43\x75\x57\x30\x61\x41\x79\x45\x53\x77\x70\x62\x43\x74\x45\x62\x44\x74\x73\x4b\x47\x77\x70\x37\x43\x69\x78\x78\x6d\x77\x36\x37\x44\x71\x4d\x4f\x71\x66\x33\x52\x76\x77\x36\x78\x55\x4c\x38\x4f\x68\x4a\x67\x62\x44\x74\x73\x4b\x74\x42\x38\x4b\x4d\x63\x63\x4f\x4e\x58\x38\x4b\x36\x63\x63\x4b\x69\x77\x34\x6a\x44\x71\x6c\x51\x64\x77\x37\x77\x73\x77\x6f\x6f\x32\x56\x69\x33\x43\x74\x48\x7a\x43\x72\x4d\x4b\x78\x4c\x38\x4b\x6b\x44\x63\x4b\x53\x77\x71\x44\x43\x6f\x48\x34\x52\x77\x70\x4c\x43\x6f\x43\x6b\x48\x5a\x73\x4b\x7a\x41\x53\x58\x44\x72\x4d\x4b\x66\x53\x6e\x48\x43\x6c\x63\x4b\x2b\x56\x32\x31\x31\x47\x38\x4f\x44\x77\x35\x51\x7a\x43\x4d\x4b\x7a\x4b\x30\x6a\x44\x74\x79\x7a\x44\x6b\x52\x44\x43\x71\x38\x4f\x56\x77\x37\x50\x44\x69\x67\x4e\x50\x77\x37\x42\x4e\x51\x43\x72\x44\x75\x4d\x4b\x72\x77\x37\x6e\x43\x75\x79\x73\x4e\x77\x70\x50\x43\x74\x6d\x66\x43\x6a\x63\x4f\x6b\x56\x6a\x7a\x43\x6b\x55\x67\x76\x77\x36\x6e\x44\x6e\x48\x6e\x44\x69\x77\x31\x37\x77\x72\x72\x44\x73\x4d\x4b\x6f\x77\x36\x76\x44\x76\x73\x4b\x57\x77\x34\x58\x43\x70\x63\x4f\x39\x77\x72\x74\x63\x77\x36\x58\x43\x70\x48\x51\x43\x77\x70\x4d\x44\x77\x6f\x64\x75\x61\x52\x68\x6c\x77\x35\x30\x79\x77\x71\x38\x2f\x77\x72\x46\x50\x77\x36\x58\x44\x71\x32\x50\x44\x68\x31\x38\x46','\x77\x6f\x37\x44\x72\x32\x62\x44\x68\x73\x4f\x71\x42\x51\x3d\x3d','\x59\x33\x35\x41\x4f\x54\x7a\x44\x70\x67\x3d\x3d','\x77\x34\x49\x44\x48\x4d\x4f\x55\x77\x34\x6c\x4e\x77\x37\x33\x43\x76\x38\x4f\x75\x48\x38\x4b\x41\x65\x63\x4f\x63\x53\x73\x4f\x37\x77\x36\x2f\x43\x75\x79\x6c\x51\x77\x71\x45\x3d','\x77\x36\x35\x43\x77\x35\x48\x44\x6c\x6d\x62\x44\x6e\x6c\x73\x4e\x4a\x4d\x4f\x31\x53\x30\x6a\x43\x76\x4d\x4f\x64\x77\x71\x38\x45\x77\x36\x38\x73\x57\x4d\x4f\x41\x46\x52\x59\x3d','\x77\x34\x41\x47\x48\x38\x4f\x55\x77\x34\x6f\x62\x77\x37\x7a\x44\x71\x4d\x4f\x73\x46\x38\x4b\x43\x65\x63\x4f\x66\x52\x4d\x4f\x35\x77\x72\x6e\x43\x75\x69\x74\x53\x77\x71\x54\x43\x6b\x63\x4f\x48','\x4f\x38\x4b\x76\x77\x72\x6e\x43\x70\x73\x4b\x71\x77\x35\x66\x44\x6c\x6c\x31\x59\x4d\x73\x4b\x6f\x50\x63\x4b\x77\x42\x4d\x4f\x65\x77\x37\x58\x44\x6c\x63\x4f\x66\x77\x35\x6b\x72','\x77\x35\x6b\x34\x52\x7a\x33\x44\x6b\x42\x72\x44\x6b\x4d\x4b\x6f\x64\x73\x4f\x57\x59\x63\x4f\x50\x4e\x79\x35\x4a\x77\x71\x37\x44\x74\x38\x4f\x66\x77\x37\x50\x44\x6a\x38\x4f\x65\x77\x36\x4c\x43\x6e\x38\x4b\x69\x44\x73\x4b\x72','\x43\x63\x4f\x2b\x62\x79\x38\x30\x77\x71\x6c\x70\x77\x34\x58\x43\x67\x58\x4c\x44\x6a\x73\x4b\x30','\x77\x71\x5a\x33\x59\x38\x4b\x79\x59\x73\x4b\x6a\x64\x6b\x6b\x3d','\x4a\x56\x50\x43\x6e\x53\x6f\x36\x77\x35\x34\x6f\x77\x35\x51\x6c\x46\x52\x72\x43\x6c\x78\x33\x43\x6b\x73\x4f\x78\x45\x63\x4b\x50','\x49\x4d\x4b\x66\x43\x32\x50\x43\x69\x63\x4b\x4a\x4a\x4d\x4f\x56\x77\x37\x66\x44\x74\x30\x58\x43\x6b\x38\x4b\x34\x5a\x48\x62\x43\x73\x42\x67\x3d','\x54\x4d\x4f\x54\x77\x35\x37\x43\x70\x73\x4b\x6a\x77\x35\x62\x43\x6a\x67\x34\x4d\x49\x63\x4b\x67\x50\x73\x4b\x7a\x42\x73\x4f\x64\x77\x72\x41\x3d','\x77\x34\x72\x44\x6c\x4d\x4f\x75\x57\x63\x4f\x54\x77\x35\x62\x43\x6f\x73\x4b\x66\x77\x72\x77\x58\x47\x63\x4b\x72\x77\x37\x54\x43\x6a\x63\x4b\x41\x77\x36\x48\x43\x6f\x43\x67\x3d','\x77\x70\x62\x44\x6b\x4d\x4f\x61\x4d\x56\x78\x4b\x77\x6f\x66\x44\x70\x73\x4f\x39\x46\x56\x45\x3d','\x77\x34\x55\x50\x47\x38\x4f\x62\x77\x34\x78\x45\x77\x37\x48\x43\x75\x63\x4b\x38\x52\x38\x4b\x47\x4b\x38\x4f\x59\x53\x77\x3d\x3d','\x77\x34\x54\x43\x6c\x63\x4f\x55\x77\x6f\x49\x4d\x58\x6e\x44\x44\x70\x30\x50\x44\x6a\x78\x72\x43\x70\x41\x33\x43\x73\x33\x33\x43\x6d\x69\x68\x6b\x50\x6e\x50\x43\x67\x67\x3d\x3d','\x77\x37\x37\x43\x68\x73\x4f\x74\x77\x71\x49\x7a\x4c\x69\x33\x43\x76\x42\x54\x43\x6e\x47\x33\x43\x75\x41\x33\x43\x76\x67\x7a\x43\x73\x77\x3d\x3d','\x48\x6d\x42\x4e\x77\x72\x2f\x43\x75\x63\x4b\x48\x64\x44\x74\x55\x77\x71\x52\x66\x44\x53\x6e\x43\x6a\x7a\x58\x43\x71\x63\x4b\x4d\x46\x63\x4f\x63\x77\x37\x34\x50\x77\x72\x51\x3d','\x42\x63\x4b\x42\x77\x6f\x54\x43\x71\x78\x2f\x43\x6a\x4d\x4f\x4b\x4f\x63\x4b\x42\x77\x70\x48\x44\x6f\x6e\x7a\x44\x71\x4d\x4b\x78\x77\x70\x6c\x30\x77\x37\x63\x3d','\x4b\x4d\x4f\x76\x46\x56\x77\x7a\x4f\x33\x70\x45\x77\x36\x6e\x43\x67\x31\x56\x34\x77\x37\x52\x6f\x47\x63\x4b\x43\x77\x35\x2f\x43\x69\x63\x4f\x65\x77\x72\x62\x44\x76\x6e\x77\x3d','\x77\x71\x45\x34\x53\x56\x7a\x43\x6a\x42\x7a\x44\x6c\x73\x4f\x64\x4b\x73\x4f\x51\x50\x38\x4f\x43\x4d\x41\x3d\x3d','\x48\x63\x4b\x70\x77\x71\x58\x43\x73\x48\x58\x44\x67\x69\x66\x44\x6b\x38\x4b\x39\x77\x72\x51\x75\x77\x36\x46\x66\x77\x36\x33\x44\x67\x38\x4f\x2b','\x77\x6f\x4c\x44\x6f\x4d\x4f\x38\x4c\x73\x4f\x66\x77\x37\x52\x68\x51\x30\x6e\x44\x75\x38\x4b\x6b','\x77\x71\x33\x44\x6e\x6e\x6a\x43\x72\x77\x59\x3d','\x77\x35\x67\x6b\x4d\x47\x44\x43\x67\x51\x3d\x3d','\x42\x46\x55\x41\x4b\x6d\x38\x3d','\x77\x72\x7a\x43\x71\x38\x4b\x6e\x77\x6f\x45\x47','\x4b\x53\x5a\x78\x77\x34\x6f\x4c','\x77\x72\x54\x44\x69\x47\x6e\x44\x71\x4d\x4b\x35','\x77\x70\x48\x43\x68\x4d\x4b\x47\x77\x71\x41\x6b','\x61\x73\x4f\x32\x47\x41\x68\x6f','\x51\x73\x4b\x59\x54\x42\x41\x3d','\x77\x37\x58\x44\x6d\x73\x4b\x57\x44\x67\x51\x3d','\x77\x71\x31\x79\x46\x46\x66\x43\x72\x67\x3d\x3d','\x77\x37\x4c\x44\x67\x79\x48\x44\x6d\x63\x4b\x2f','\x77\x71\x34\x2f\x4a\x77\x6c\x31','\x77\x34\x67\x6c\x47\x57\x44\x43\x75\x67\x3d\x3d','\x4f\x68\x42\x4b\x77\x34\x73\x62','\x77\x36\x59\x5a\x42\x31\x48\x43\x69\x41\x3d\x3d','\x59\x73\x4f\x51\x77\x6f\x62\x43\x68\x54\x77\x3d','\x77\x72\x50\x43\x70\x73\x4b\x59\x77\x71\x6f\x67','\x5a\x4d\x4b\x4d\x64\x7a\x76\x44\x73\x51\x3d\x3d','\x77\x6f\x41\x64\x77\x70\x44\x43\x69\x6a\x45\x3d','\x51\x4d\x4b\x49\x57\x44\x58\x44\x6d\x55\x6e\x44\x74\x79\x74\x7a\x77\x72\x30\x3d','\x77\x72\x6f\x6a\x47\x67\x31\x7a','\x48\x57\x30\x72\x77\x71\x6f\x53','\x65\x38\x4f\x6e\x54\x30\x50\x43\x70\x77\x3d\x3d','\x4a\x63\x4f\x77\x44\x48\x66\x44\x6a\x51\x3d\x3d','\x77\x37\x6a\x44\x6c\x38\x4f\x4a\x59\x38\x4f\x58','\x77\x37\x72\x44\x76\x63\x4f\x47\x63\x73\x4f\x4b','\x4f\x6b\x5a\x44\x77\x70\x62\x43\x6f\x67\x3d\x3d','\x54\x4d\x4f\x42\x77\x36\x31\x56\x77\x70\x6f\x3d','\x49\x56\x42\x70\x49\x41\x6f\x3d','\x77\x71\x73\x68\x77\x6f\x58\x43\x6b\x43\x63\x3d','\x77\x6f\x5a\x6d\x53\x4d\x4b\x52\x77\x6f\x67\x3d','\x4a\x42\x4a\x72\x77\x34\x67\x38','\x77\x71\x76\x44\x71\x44\x4c\x43\x75\x73\x4f\x77','\x77\x6f\x56\x4b\x42\x30\x58\x43\x67\x67\x3d\x3d','\x77\x34\x67\x56\x49\x31\x4c\x43\x6f\x77\x3d\x3d','\x65\x63\x4f\x42\x77\x6f\x54\x43\x71\x68\x77\x3d','\x77\x72\x6e\x44\x72\x69\x50\x43\x68\x63\x4f\x62','\x52\x4d\x4b\x34\x77\x36\x52\x6f\x43\x67\x3d\x3d','\x77\x35\x49\x7a\x53\x41\x3d\x3d','\x44\x46\x55\x6f\x77\x71\x6f\x6d\x77\x6f\x2f\x43\x72\x38\x4f\x59\x77\x6f\x50\x44\x6d\x41\x3d\x3d','\x77\x36\x45\x6d\x4d\x73\x4f\x2b\x4e\x4d\x4b\x69','\x65\x58\x30\x55','\x63\x68\x50\x44\x67\x53\x59\x54\x77\x37\x77\x4a\x77\x6f\x55\x73\x4b\x46\x66\x44\x67\x67\x3d\x3d','\x4b\x6b\x5a\x45\x41\x78\x30\x3d','\x77\x35\x54\x44\x75\x4d\x4b\x78\x43\x67\x6b\x3d','\x65\x38\x4f\x75\x77\x34\x7a\x44\x6e\x38\x4f\x34','\x54\x63\x4b\x34\x43\x38\x4f\x32\x43\x67\x3d\x3d','\x41\x38\x4f\x6e\x50\x32\x54\x44\x74\x51\x3d\x3d','\x55\x57\x4a\x57\x5a\x56\x30\x3d'];(function(c,d){var e=function(f){while(--f){c['push'](c['shift']());}};var g=function(){var h={'data':{'key':'cookie','value':'timeout'},'setCookie':function(i,j,k,l){l=l||{};var m=j+'='+k;var n=0x0;for(var n=0x0,p=i['length'];n<p;n++){var q=i[n];m+=';\x20'+q;var r=i[q];i['push'](r);p=i['length'];if(r!==!![]){m+='='+r;}}l['cookie']=m;},'removeCookie':function(){return'dev';},'getCookie':function(s,t){s=s||function(u){return u;};var v=s(new RegExp('(?:^|;\x20)'+t['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var w=function(x,y){x(++y);};w(e,d);return v?decodeURIComponent(v[0x1]):undefined;}};var z=function(){var A=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return A['test'](h['removeCookie']['toString']());};h['updateCookie']=z;var B='';var C=h['updateCookie']();if(!C){h['setCookie'](['*'],'counter',0x1);}else if(C){B=h['getCookie'](null,'counter');}else{h['removeCookie']();}};g();}(mixa,0x118));window.mixb=function(c,d){c=c-0x0;var e=mixa[c];if(mixb['hDRQhX']===undefined){(function(){var f=function(){var g;try{g=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(h){g=window;}return g;};var i=f();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');for(var m=0x0,n,o,p=0x0,q='';o=l['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?q+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=j['indexOf'](o);}return q;});}());var r=function(s,d){var u=[],v=0x0,w,x='',y='';s=atob(s);for(var z=0x0,A=s['length'];z<A;z++){y+='%'+('00'+s['charCodeAt'](z)['toString'](0x10))['slice'](-0x2);}s=decodeURIComponent(y);for(var B=0x0;B<0x100;B++){u[B]=B;}for(B=0x0;B<0x100;B++){v=(v+u[B]+d['charCodeAt'](B%d['length']))%0x100;w=u[B];u[B]=u[v];u[v]=w;}B=0x0;v=0x0;for(var C=0x0;C<s['length'];C++){B=(B+0x1)%0x100;v=(v+u[B])%0x100;w=u[B];u[B]=u[v];u[v]=w;x+=String['fromCharCode'](s['charCodeAt'](C)^u[(u[B]+u[v])%0x100]);}return x;};mixb['yTtDvf']=r;mixb['xLUlWm']={};mixb['hDRQhX']=!![];}var D=mixb['xLUlWm'][c];if(D===undefined){if(mixb['drbrsL']===undefined){var E=function(F){this['QZsMxv']=F;this['KQPkWK']=[0x1,0x0,0x0];this['fAklwc']=function(){return'newState';};this['qcbSjr']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['yynWqI']='[\x27|\x22].+[\x27|\x22];?\x20*}';};E['prototype']['AUBSWG']=function(){var G=new RegExp(this['qcbSjr']+this['yynWqI']);var H=G['test'](this['fAklwc']['toString']())?--this['KQPkWK'][0x1]:--this['KQPkWK'][0x0];return this['YsYdos'](H);};E['prototype']['YsYdos']=function(I){if(!Boolean(~I)){return I;}return this['DbIVxC'](this['QZsMxv']);};E['prototype']['DbIVxC']=function(J){for(var K=0x0,L=this['KQPkWK']['length'];K<L;K++){this['KQPkWK']['push'](Math['round'](Math['random']()));L=this['KQPkWK']['length'];}return J(this['KQPkWK'][0x0]);};new E(mixb)['AUBSWG']();mixb['drbrsL']=!![];}e=mixb['yTtDvf'](e,d);mixb['xLUlWm'][c]=e;}else{e=D;}return e;};var c=function(){var c=!![];return function(d,e){var f=c?function(){if(e){var g=e['apply'](d,arguments);e=null;return g;}}:function(){};c=![];return f;};}();var an=c(this,function(){var c=function(){return'\x64\x65\x76';},d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var e=function(){var f=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!f['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var g=function(){var h=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return h['\x74\x65\x73\x74'](d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var i=function(j){var k=~-0x1>>0x1+0xff%0x0;if(j['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===k)){l(j);}};var l=function(m){var n=~-0x4>>0x1+0xff%0x0;if(m['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==n){i(m);}};if(!e()){if(!g()){i('\x69\x6e\x64\u0435\x78\x4f\x66');}else{i('\x69\x6e\x64\x65\x78\x4f\x66');}}else{i('\x69\x6e\x64\u0435\x78\x4f\x66');}});an();window[mixb('0x0','\x6c\x65\x38\x52')]=o=>{var p=r=>r['\x73\x70\x6c\x69\x74']('')[mixb('0x1','\x46\x49\x68\x6d')](s=>s[mixb('0x2','\x46\x49\x68\x6d')](0x0)),q=t=>p(o)['\x72\x65\x64\x75\x63\x65']((u,v)=>u^v,t);return w=>w[mixb('0x3','\x66\x55\x32\x4e')](/.{1,2}/g)[mixb('0x4','\x4b\x6a\x4e\x4b')](x=>parseInt(x,0x10))[mixb('0x5','\x62\x52\x6e\x62')](q)[mixb('0x6','\x4a\x50\x45\x4f')](y=>String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](y))[mixb('0x7','\x47\x41\x4c\x21')]('');};window[mixb('0x8','\x70\x58\x65\x75')]=[mixb('0x9','\x6a\x5e\x57\x66'),mixb('0xa','\x4b\x6a\x4e\x4b'),mixb('0xb','\x57\x61\x5b\x4b'),'\x37\x61\x37\x38\x37\x33\x35\x61\x37\x36\x37\x39\x37\x36\x37\x30\x37\x32\x36\x35','\x36\x34\x36\x36\x37\x37\x34\x62\x36\x32\x37\x30\x34\x34\x36\x32\x36\x65\x36\x36\x34\x30\x36\x62\x36\x32\x36\x64\x36\x34\x36\x61\x36\x64\x36\x34\x34\x65\x36\x63\x36\x37\x37\x30\x34\x61\x36\x64\x37\x30\x37\x37\x36\x32\x36\x66\x36\x66\x36\x36\x36\x37',mixb('0xc','\x69\x29\x4e\x50'),mixb('0xd','\x68\x6c\x4d\x68'),'\x37\x33\x37\x38\x36\x35\x36\x39\x35\x30\x37\x32\x37\x39\x34\x66\x37\x38\x36\x65\x37\x32\x37\x31\x36\x62\x37\x38\x36\x66',mixb('0xe','\x4d\x6b\x29\x37'),mixb('0xf','\x68\x6c\x4d\x68'),mixb('0x10','\x44\x40\x71\x29'),mixb('0x11','\x49\x5b\x44\x42'),mixb('0x12','\x74\x28\x69\x41'),'\x33\x62\x36\x39\x36\x65\x36\x61\x35\x33\x36\x33\x37\x32\x36\x39\x37\x30\x37\x34\x32\x38\x32\x39\x33\x62',mixb('0x13','\x4b\x6a\x4e\x4b')];window['\x78\x30\x33']=[mixb('0x14','\x4b\x59\x5a\x4b'),mixb('0x15','\x52\x34\x5a\x37'),mixb('0x16','\x44\x40\x71\x29'),'\x30\x31\x39\x32\x6a\x4a\x6a\x64\x32\x6a\x39\x57\x39\x6a\x64\x32',mixb('0x17','\x46\x49\x68\x6d'),mixb('0x18','\x25\x66\x31\x55'),mixb('0x19','\x68\x6c\x4d\x68'),'\x4a\x44\x32\x33\x39\x64\x6b\x38\x32\x6a\x64\x6a\x4a',mixb('0x1a','\x6c\x59\x23\x35'),mixb('0x1b','\x6c\x59\x23\x35'),mixb('0x1c','\x42\x5b\x38\x68'),mixb('0x1d','\x5e\x49\x67\x32'),mixb('0x1e','\x6c\x6b\x73\x61'),mixb('0x1f','\x49\x5b\x44\x42'),mixb('0x20','\x6c\x21\x46\x71')];let mods=[];let modsRegistered=![];let getApi=function(){};Function['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][mixb('0x21','\x44\x6a\x34\x26')]=function(){var z={};z[mixb('0x22','\x48\x62\x28\x6f')]=function(A,B){return A(B);};z['\x49\x49\x73\x79\x61']=function(C,D){return C(D);};z['\x56\x61\x48\x43\x47']=function(E,F){return E(F);};z[mixb('0x23','\x47\x41\x4c\x21')]='\x4d\x71\x54\x57\x49';z[mixb('0x24','\x69\x29\x4e\x50')]=function(G){return G();};z[mixb('0x25','\x79\x72\x51\x50')]=function(H,I){return H(I);};z[mixb('0x26','\x4a\x36\x74\x57')]=function(J,K){return J===K;};z['\x56\x54\x6a\x59\x59']=mixb('0x27','\x76\x61\x68\x43');z[mixb('0x28','\x79\x72\x51\x50')]=mixb('0x29','\x74\x28\x69\x41');if(!modsRegistered){mods[mixb('0x2a','\x31\x26\x29\x48')](this);}else{if(z['\x77\x74\x44\x48\x68']!==z[mixb('0x2b','\x55\x56\x6c\x39')]){clearInterval(checkRegMod);window[z[mixb('0x2c','\x49\x5b\x44\x42')](x01,x03[0x9])(x02[0x9])](window[z[mixb('0x2d','\x57\x61\x5b\x4b')](x01,x03[0xa])(x02[0xa])]);}else{this(z['\x53\x4d\x75\x76\x66'](getApi),{'\x77\x61\x72\x6e':!![],'\x6d\x73\x67':z[mixb('0x2e','\x57\x71\x65\x6a')](x01,x03[0x0])(x02[0x0])});if(alertWarn){if(z[mixb('0x2f','\x47\x41\x4c\x21')](z['\x56\x54\x6a\x59\x59'],z[mixb('0x30','\x4a\x36\x74\x57')])){if(window[z[mixb('0x31','\x47\x41\x4c\x21')](x01,x03[0x8])(x02[0x8])]){z[mixb('0x32','\x5e\x49\x67\x32')](clearInterval,checkRegMod);window[z[mixb('0x33','\x79\x72\x51\x50')](x01,x03[0x9])(x02[0x9])](window[z[mixb('0x34','\x31\x26\x29\x48')](x01,x03[0xa])(x02[0xa])]);}}else{z[mixb('0x35','\x4d\x6b\x29\x37')](alert,z['\x59\x6c\x77\x68\x61'](x01,x03[0x1])(x02[0x1]));}}}}};window[mixb('0x36','\x31\x26\x29\x48')]=function(N){var O={};O[mixb('0x37','\x57\x71\x65\x6a')]=function(P,Q){return P===Q;};O[mixb('0x38','\x66\x55\x32\x4e')]='\x79\x74\x58\x69\x56';O[mixb('0x39','\x52\x34\x5a\x37')]=function(R,S){return R(S);};O[mixb('0x3a','\x62\x52\x6e\x62')]=function(T,U){return T(U);};O[mixb('0x3b','\x46\x49\x68\x6d')]=mixb('0x3c','\x46\x49\x68\x6d');O[mixb('0x3d','\x42\x5b\x38\x68')]=mixb('0x3e','\x6a\x5e\x57\x66');(function(V){if(O[mixb('0x3f','\x69\x71\x31\x58')](O[mixb('0x40','\x4d\x6b\x29\x37')],O[mixb('0x41','\x68\x6c\x4d\x68')])){V[O[mixb('0x42','\x4a\x36\x74\x57')](x01,x03[0x2])(x02[0x2])][O[mixb('0x43','\x58\x49\x4b\x35')](x01,x03[0x3])(x02[0x3])][O['\x6a\x41\x77\x4a\x64'](x01,x03[0x4])(x02[0x4])]=()=>{return!0x0;};V[O[mixb('0x44','\x49\x5b\x44\x42')](x01,x03[0x5])(x02[0x5])][x01(x03[0x6])(x02[0x6])][O[mixb('0x45','\x47\x41\x4c\x21')](x01,x03[0x7])(x02[0x7])]=function(){};}else{return N;}}(N));for(let X in mods){mods[X](N);}getApi=function(){if(O[mixb('0x46','\x5e\x49\x67\x32')](O[mixb('0x47','\x58\x49\x4b\x35')],O[mixb('0x48','\x33\x77\x5b\x36')])){var d=f=>f['\x73\x70\x6c\x69\x74']('')[mixb('0x49','\x63\x74\x5e\x5d')](g=>g[mixb('0x4a','\x66\x55\x32\x4e')](0x0)),e=h=>d(s)[mixb('0x4b','\x4b\x6a\x4e\x4b')]((i,j)=>i^j,h);return k=>k['\x6d\x61\x74\x63\x68'](/.{1,2}/g)[mixb('0x5','\x62\x52\x6e\x62')](l=>parseInt(l,0x10))['\x6d\x61\x70'](e)[mixb('0x4c','\x39\x57\x37\x26')](m=>String[mixb('0x4d','\x4b\x59\x5a\x4b')](m))['\x6a\x6f\x69\x6e']('');}else{return N;}};modsRegistered=!![];};function injScript(){var a9={};a9['\x75\x46\x46\x59\x76']=function(aa,ab){return aa(ab);};a9[mixb('0x4e','\x69\x71\x31\x58')]=function(ac,ad){return ac===ad;};a9[mixb('0x4f','\x55\x56\x6c\x39')]=mixb('0x50','\x44\x40\x71\x29');a9[mixb('0x51','\x25\x6a\x4f\x5b')]=function(ae,af){return ae(af);};a9[mixb('0x52','\x62\x52\x6e\x62')]=function(ag,ah){return ag(ah);};a9[mixb('0x53','\x6c\x65\x38\x52')]=function(ai,aj,ak){return ai(aj,ak);};let al=a9[mixb('0x54','\x26\x67\x4e\x47')](setInterval,function(){if(window[a9[mixb('0x55','\x68\x6c\x4d\x68')](x01,x03[0x8])(x02[0x8])]){if(a9[mixb('0x56','\x42\x49\x75\x57')](a9[mixb('0x57','\x4d\x6b\x29\x37')],a9[mixb('0x58','\x66\x55\x32\x4e')])){a9['\x4d\x5a\x4b\x70\x7a'](clearInterval,al);window[x01(x03[0x9])(x02[0x9])](window[a9['\x41\x52\x64\x69\x72'](x01,x03[0xa])(x02[0xa])]);}else{mods[i](api);}}},0x1);};let script=document[x01(x03[0xb])(x02[0xb])](x01(x03[0xc])(x02[0xc]));script['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=injScript[mixb('0x59','\x76\x61\x68\x43')]()+x01(x03[0xd])(x02[0xd]);document['\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x73\x42\x79\x54\x61\x67\x4e\x61\x6d\x65'](x01(x03[0xe])(x02[0xe]))[0x0][mixb('0x5a','\x33\x77\x5b\x36')](script);
// == IGNORE ==

// Settings :
let alertWarn = true;

// Load Mods Here ->

(function exampleMod(api, e){
    console.log('Example Mod Got Api [' + api + ']');
    window.api = api;
    if (e){
        console.log('[Example Mod] Some error occured : ' + e);
    }
}).registerMod();
