#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

The editing of HTML and CSS are done from the "Element" tab.  You are able to edit the elements and apply new values, manipulate the order of display, and alter the style sheets.  

JavaScript can be accessed via the "Sources" tab.  You can simply locate the script that you wish to edit in the Element tab and click on it.  It will bring up the Sources tab and display the script file in an editor.  

The "Network" tab is the place where you would start to look for adjusting your sites performance.  You can quickly view the load times for various portions of your site and make adjustments as needed.  In addition, the addon dev tool "PageSpeed" can be valuable in providing you further analasis of your page's performance.

* What's the quick key for your OS to spawn the Dev Tools inspector?

  I work from a PC, my keyboard shortcut is F12.  

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

    I spot a shade of grey: #0b0f11

  * Tweak the background color to white.

    By clicking on the dev tools color sampler, I adjusted the background to white.

  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.

    I've accessed the CSS side bar in my tools, located the "sidebar" ID and adjusted the value from 118px to 85px.   

  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.

    Inspect element on the navigation link "Profile."  I initated a forced hover state and adjusted the text to black via the CSS editor.

  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/

    Done!

  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

  http://i.imgur.com/ECYueHn.png

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

  I can tweak the color if I were to download the home_bg.gif file they are using to display this information, edit it, and then apply those changes to the site.  Obviously I do not have such access, but the text is part of the .gif and can only be adjusted by working with that file in particular.

  My question is, why include the "flavor text" if it will already be represented in the .gif file?  My hunch is that its to increase readability in the HTML.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

    I am understanding this is a performanced based question and I will answer as such.  

    The largest file size image on the site is: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png (appears to be Time Square, NY)

    It weighs in at a respectable 316KB. 

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

  Keeping with the image dicussion, I believe from what I'm reading the lowest hanging fruit would be the image compression.  If the images were to be optimized, we could see a savings of 159.5KiB (11% reduction).  