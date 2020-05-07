TreeHouse Unit 4 Project: OOPs.

Welcome to my Unit 4 Project! I hope that peer-reviewing it ages you less than building it aged me.  ;-)

With a view to going for Exceeds Expectations, I've incorporated the design features set out below.

I've made a few minor additions to the rubric:
- A Douglas Adams button, because every project should have an easter-egg.
- An additional "level" property on the Phrase object, indicating the level of difficulty.
- An added H3 element displaying the level of difficulty.
- Additional properties for both Game and Phrase to help detect an end-of-game condition, and to enable methods to work for both click and keyup events.
- Additional properties on the Game object to prevent the same phrase displaying twice in succession.
- A static "messages" property on the Game class to display at the end of the game.

I've taken the liberty of making the following alterations:
- I don't like the idea of a Phrase object with a "phrase" property. So, I've used a "text" property instead for the actual phrase content.
- There are, likewise, some ambiguities between "letter", as in the CSS class, and "letter", as in the single-character parameter passed to a function. In each case, therefore, I've used the single character "x" to represent a single-letter parameter.

I've added a StarshipHeartOfGold class to support the Douglas Adams button. This has also involved a couple of changes to index.html: I added a google font in the <head> section, and I cheated and added a wee div on the page.

I've made minor additions to styles.css:
- added a button:disabled pseudo-class;
- removed the "height: 100vh" from the body tag, because of the length of some of my phrases as well as the addition of the Douglas Adams Button;
- added an h3 style and an associated font-size-mediumlarge property;
- added a .word class to prevent individual words from wrapping onto two lines.
- added some #dontPanic styling for the easter egg

I think that's everything!