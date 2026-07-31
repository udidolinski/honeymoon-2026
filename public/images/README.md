# Images

This is a **local-only** build, and no real trip photos are bundled — the
sandbox this app was built in can't fetch or generate photos. Every
`image` / `leadImage` / `gallery` field in `src/data/*.ts` already points
at a sensible filename for its destination (e.g. `./images/yosemite-tunnel-view.jpg`,
`./images/badwater-basin.jpg`, `./images/maui-hana-falls.jpg`); those files
just don't exist yet. `PoiImage` falls back to a styled gradient card with
the place name until you drop a real photo in, so nothing looks broken —
it's just plain.

Drop your own `.jpg`/`.png` photos here matching the filenames already
referenced in the data files. Grep for `image:`, `leadImage:` and
`gallery:` across `src/data/` to get the exact list, or check the fields
inline while editing a specific day/attraction/stay.

Recommended size: ~1200×900, JPEG, under 250 KB each.

**Kept from the original build:** `tel-aviv-skyline.jpg` — still accurate
for this trip (Udi & Miriam are flying home to Tel Aviv), referenced on
the final itinerary day.

**Icon status:** `public/icon-honeymoon.svg` is a real generated vector icon
(granite peak + sequoia + palm, on the trip's palette) and is wired up as
the browser favicon and the PWA manifest icon. The `public/icon-placeholder*.png`
files are still the *original template's* placeholder artwork — kept only
as the iOS "add to home screen" icon, since Apple ignores SVG there and
this environment can't generate raster PNGs. If you want a proper iPhone
home-screen icon, export `icon-honeymoon.svg` to 192×192 and 512×512 PNGs
(e.g. via an online SVG-to-PNG tool) and drop them in over the placeholder
files, then bump the `?v=` query param in `index.html`.
