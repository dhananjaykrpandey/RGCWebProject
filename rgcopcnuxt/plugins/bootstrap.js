import { defineNuxtPlugin } from "#app";

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (includes Popper.js)
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

// plugins/bootstrap.js
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS (including Popper.js)

// export default defineNuxtPlugin((nuxtApp) => {
//   // Make the bootstrap object globally available (if you plan to use it programmatically)
//   nuxtApp.provide('bs', bootstrap);

//   console.log('Bootstrap is loaded and available globally as $bs!');
// });
// plugins/bootstrap.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min'); // Dynamically import Bootstrap JS
    nuxtApp.provide('bs', bootstrap);
    console.log('Bootstrap JS is loaded on the client side!');
  }
});
