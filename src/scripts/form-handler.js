/**
 * sentioLogic Contact Form Handler
 * Handles validation, AJAX submission to Formspree, and inline feedback.
 */
(function () {
  "use strict";

  var RECAPTCHA_SITE_KEY = "6LcWsJAsAAAAAEDbhLEDGfbNHrCn_fQNSNXaOdDN";

  const form = document.querySelector(".contact-form");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const btnOriginalHTML = submitBtn.innerHTML;

  /* ---- Topic: pre-select from ?topic=pos-demo and adapt the message prompt ---- */
  const topic = form.querySelector("#topic");
  const messageField = form.querySelector("#message");
  const defaultPlaceholder = messageField.placeholder;
  const POS_DEMO = "Sentio POS demo";

  function syncPlaceholder() {
    messageField.placeholder =
      topic.value === POS_DEMO
        ? "Your business type and number of outlets, whether you run dine-in, takeaway or both, and what you would like to see in the terminal and Admin Portal…"
        : defaultPlaceholder;
  }

  if (new URLSearchParams(window.location.search).get("topic") === "pos-demo") {
    topic.value = POS_DEMO;
  }
  syncPlaceholder();
  topic.addEventListener("change", syncPlaceholder);

  /* ---- Create status message element ---- */
  const status = document.createElement("div");
  status.className = "form-status";
  status.setAttribute("role", "alert");
  status.setAttribute("aria-live", "polite");
  form.appendChild(status);

  /* ---- Helpers ---- */
  function showStatus(message, type) {
    status.textContent = message;
    status.classList.remove("success", "error");
    status.classList.add(type, "visible");
  }

  function hideStatus() {
    status.classList.remove("visible", "success", "error");
    status.textContent = "";
  }

  function setLoading(loading) {
    submitBtn.disabled = loading;
    if (loading) submitBtn.textContent = "Sending…";
    else submitBtn.innerHTML = btnOriginalHTML;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ---- Validate ---- */
  function validate() {
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name) {
      showStatus("Please enter your full name.", "error");
      form.querySelector("#name").focus();
      return false;
    }
    if (!email || !isValidEmail(email)) {
      showStatus("Please enter a valid email address.", "error");
      form.querySelector("#email").focus();
      return false;
    }
    if (!message) {
      showStatus("Please enter a message.", "error");
      form.querySelector("#message").focus();
      return false;
    }
    return true;
  }

  /* ---- Submit ---- */
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideStatus();

    if (!validate()) return;

    // reCAPTCHA loads async; it may be missing on a slow or blocked connection
    if (typeof grecaptcha === "undefined") {
      showStatus("Spam protection is still loading. Please try again in a moment.", "error");
      return;
    }

    setLoading(true);

    // Execute reCAPTCHA v3 and then submit
    grecaptcha.ready(function () {
      grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: "contact" })
        .then(function (token) {
          form.querySelector("#recaptchaResponse").value = token;

          var data = new FormData(form);

          fetch(form.action, {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
          })
            .then(function (response) {
              if (response.ok) {
                showStatus(
                  "Thank you! Your message has been sent. We'll get back to you soon.",
                  "success"
                );
                form.reset();
              } else {
                return response.json().then(function (json) {
                  var errorMsg =
                    json.errors
                      ? json.errors
                          .map(function (err) {
                            return err.message;
                          })
                          .join(", ")
                      : "Something went wrong. Please try again.";
                  showStatus(errorMsg, "error");
                });
              }
            })
            .catch(function () {
              showStatus(
                "Network error. Please check your connection and try again.",
                "error"
              );
            })
            .finally(function () {
              setLoading(false);
            });
        })
        .catch(function () {
          showStatus("reCAPTCHA verification failed. Please try again.", "error");
          setLoading(false);
        });
    });
  });
})();
