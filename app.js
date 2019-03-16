// Store all checkboxes
const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

// Keep track of last checked item
let lastChecked;

function handleCheck(e) {
  // Set inBetween to false by default - flag variable to define when to start/stop checking
  let inBetween = false;
  // Check if shift key was down AND check if user is checking (not unchecking)
  if (e.shiftKey && this.checked) {
    // Loop over every single checkbox
    checkboxes.forEach(checkbox => {
      // Check if checkbox[i] is the current clicked checkbox or previously checked checkbox
      if (checkbox === this || checkbox === lastChecked) {
        // Flip flag variable to true when first item is checked, then false when last item is checked
        inBetween = !inBetween;
        console.log("Check inbetween");
      }

      // Check all checkboxes that are in between lastChecked and current checked item
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // Store current checked checkbox
  lastChecked = this;
}

// Add event listener to all checkboxes and run handleCheck if clicked
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
