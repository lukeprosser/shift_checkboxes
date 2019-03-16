# Shift Select Checkboxes

Built as part of 'JavaScript30' with Wes Bos.

Enables user to shift select multiple checkboxes simultaneously, much like an email client.

Live demo: TBC

## Setup

Using a query selector, all of the checkboxes are stored in a variable 'checkboxes'.

A variable called 'lastChecked' is also created in order to store the most recently checked checkbox.

Click event listeners are added to every checkbox by looping through them using 'forEach':

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

Each time a checkbox is clicked, the 'handleCheck' function is called which contains the main logic.

## handleCheck() function

A variable 'inBetween' serves as a flag that will be used to determine when to start and stop checking checkboxes.

At the end of the function, the variable 'lastChecked' is set to 'this' so that the current checkbox is stored.

The remaining code is contained within and if statement that checks:

<li>Whether or not the shift key was pressed when the click took place;</li>
<li>Whether the current checkbox is checked (to prevent the rest of the code from running if the checkbox isn't checked).</li>

Once again, the checkboxes are looped through. A further if statement checks if the current checkbox iteration is the latest clicked checkbox or the previously clicked checkbox.

Based on this logic, the 'inBetween' flag variable is flipped. It will be true when the first item is checked, then false when the last item is checked.

Finally, all checkboxes that are between the currently checked item and the last checked item are checked with 'checkbox.checked = true'.
