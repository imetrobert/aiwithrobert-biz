/**
 * form.js
 * The old contact form was removed on 2026-11-12: the free feasibility check (js/feascheck.js, standalone) is the one
 * form on the Business site, and other questions go by email. main.js still calls the two functions below on load,
 * so they stay as harmless no-ops. If a classic contact form is ever brought back, restore the earlier version of this
 * file from git history (it had validation, the formsubmit.co AJAX submit and saveInquiryCopy()).
 */
function checkFormValidity() { return true; }
function checkFormSuccess() {}

window.checkFormValidity = checkFormValidity;
window.checkFormSuccess  = checkFormSuccess;
