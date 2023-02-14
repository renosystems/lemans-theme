jQuery(document).ready(function ($) {
  let wpcf7Elm = document.querySelector(".wpcf7");

  wpcf7Elm.addEventListener(
    "wpcf7submit",
    function (event) {
      const eventDetails = event.detail

      if(eventDetails.status === "mail_sent"){
        $("#thanku-modal-toggler").click();
        const successMessage = document.querySelector(".wpcf7-response-output")
        successMessage.classList.add("d-none")
      }
    },
    false
  )
})