selectClick
===========

Enable selection of text without triggering your click handler.

How to use
----------

`selectClick` takes up to three parameters:

* selectCallback: The function to call when a selection event occurs on the target.
* clickCallback: The function to call when a click event occurs on the target.
* clickTolerance: Number of pixels the mouse has to move before a click is counted as a select. Defaults to 2.
