Working Example: http://phillprice.com/zen-garden-example/

# Questions

## General
- Is the image 768px wide or the maximum width? I've set the max width of the container to match - although this can quickly be removed for larger screens.
- Are the fonts Trebuchet?
- How about using the top right blank space with a fixed menu of the sections below and instead of an accordion use that
- Why back to top links when one if open at a time and it's short content?

## Headings
- Why images for headings and not font replacement - what fonts are they I can attempt that?
- What about retina images?

## Social
- What about social media and sharing?
- Needs OpenGraph / Twitter Cards integration if so.
 
##SEO
- I'm not sure the site title should be an H1, perhaps the text in the heading image should be - but is it too long?
- Needs Meta descriptions (and a robots.txt, sitemap etc)

# Caveats
- I used browserstack for responsive testing on Android, Windows Mobile and IE. It may differ to real world devices as I've had iOS problems there before.

# My Decisions
- Why Bootstrap? It's an easy grid to use and extensible for future work (although the standard look and feel is overused)
- Why a function for loading json? So we can use it for other lists at a later date
- Why jQuery? Hopefully it's already loaded somewhere, and like bootstrap its there for future use.
- Why isn't it 100% everywhere? The brief was no browser hacks so IE8 footer background is not rounded on the left. I could have made it rounded corners in HTML but not without PIE.htc.
- Why the column hack for the navigation? The width didn't match the image above.
- Why is the h2 hidden? I felt it overkill to split the image at the top into two.
- Why are the spans added in JS? The accordion is in JS so the expand / shrink buttons only affect JS users therefore they should only be there for JS.

# Future Work Ideas
- Gulp and grunt testing of work 
- Selenium regression testing
- Amend fonts of heading to use type not images.
- SEO and Social work above
- Strip out the css and functions that aren't used
- Minification and concatenation
- Split the main image into two sections with the left being a background-color.
- Mobile navigation burger menu - possibly by swapping navigation/content round in HTML.

*Please note that I've not been working on this fully from start to finish! I'd estimate about 4 hour solid work to this point end to end.*
