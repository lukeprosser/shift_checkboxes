// Store all checkboxes
// Keep track of last checked item
// Set inBetween to false by default - flag variable to define when to start/stop checking
// Check if shift key was down AND check if user is checking (not unchecking)
// Loop over every single checkbox
// Check if checkbox[i] is the current clicked checkbox or previously checked checkbox
// Flip flag variable to true when first item is checked, then false when last item is checked
// Check all checkboxes that are in between lastChecked and current checked item
// Store current checked checkbox
// Add event listener to all checkboxes and run handleCheck if clicked

const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

// console.log(checkboxes);
