# Squish Invaders official website

The public website for cuboWorld's Android game Squish Invaders (꾹디펜스).
This repository contains website files and artwork only, not the private game source.

- Game: https://cuboworld.github.io/squish-invaders/
- Privacy: https://cuboworld.github.io/squish-invaders/privacy/
- Terms: https://cuboworld.github.io/squish-invaders/terms/
- Brand and games catalog: https://cuboworld.github.io/
- Support: catinyello88@gmail.com

The homepage and policies support Korean, English, Japanese, Simplified Chinese and
Traditional Chinese (ko, en, ja, zh-Hans, zh-Hant). Homepage languages use ?lang=ja;
policies use #ja. Account deletion anchors are #delete-data for Korean and
#delete-data-en, #delete-data-ja, #delete-data-zh-Hans, #delete-data-zh-Hant.

## Hosting and preview

GitHub Pages publishes main from the repository root. This is buildless HTML,
CSS and JavaScript; .nojekyll disables Jekyll processing. All game asset and
navigation paths include /squish-invaders/. Preserve this prefix in JavaScript
generated paths as well as HTML when updating the site.

For a project-path preview, serve the parent directory with this checkout mounted
as squish-invaders. A preview at / alone will not verify project-path navigation.

## Maintenance

- Keep five languages, localized game logos and policy anchors aligned.
- Add a verified Google Play link and update release status when the game launches.
- Keep policies aligned with actual shipped functionality. The current game is free,
  uses optional rewarded ads, and supports optional Google linking and Firebase saves.
  Do not publish internal-test roadmaps or unverified recovery promises as user terms.
- Brand homepage and legacy /privacy/ and /terms/ redirects live in the separate
  cuboWorld/cuboWorld.github.io repository. Keep redirects and deletion anchors working.
- app-ads.txt and robots.txt belong at the hostname root in the brand repository.
  Keep https://cuboworld.github.io/app-ads.txt available for AdMob discovery.
- No third-party analytics or tracking scripts are installed on this website.

Game artwork and branding belong to their respective rights holders. This repository
does not grant a license to reuse them.
