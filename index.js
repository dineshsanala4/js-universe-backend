const fruits = require("./fruits");
const blogs = require("./blogs");

const express = require("express");
const httpsLocalhost = require("https-localhost");
const session = require("express-session");
const crypto = require("crypto");
const cors = require("cors");

const app = express();

// const httpsApp = httpsLocalhost(app);

const helmet = require("helmet");

var allowedOrigin = ["http://192.168.0.174:4000", "http://localhost:4000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("CORS error"));
    }
  },
};

app.use(cors(corsOptions));

// const redirectToHttps = (req, res, next) => {
//   if (req.headers["x-forwarded-proto"] !== "https") {
//     // Redirect to HTTPS
//     return res.redirect(["https://", req.get("Host"), req.url].join(""));
//   }
//   next();
// };

// httpsApp.use(redirectToHttps);

// Set Permissions-Policy header with desired directives
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        accelerometer: ["self"],
        ambientLightSensor: ["self"],
        autoplay: ["self"],
        camera: ["self"],
        encryptedMedia: ["self"],
        fullscreen: ["self"],
        geolocation: ["self"],
        gyroscope: ["self"],
        magnetometer: ["self"],
        microphone: ["self"],
        midi: ["self"],
        payment: ["self"],
        pictureInPicture: ["self"],
        usb: ["self"],
        vr: ["self"],
        xrSpatialTracking: ["self"],
      },
    },
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" +
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://cdnjs.com;"
  );
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.cookie("sessionID", "12345", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.removeHeader("X-Powered-By");

  // res.setHeader(
  //   "Strict-Transport-Security",
  //   "max-age=31536000; includeSubDomains; preload"
  // );
  next();
});

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/api/fruits", (req, res) => {
  const { filter, page, size } = req.query;

  if (!filter || !page || !size) {
    res.json(fruits);
    return;
  }

  let filteredFruits = fruits.filter(
    (fruit) =>
      fruit.substr(0, filter.length).toLowerCase() === filter.toLowerCase()
  );

  const startIndex = (page - 1) * size;
  const endIndex = parseInt(startIndex) + parseInt(size);

  const paginatedFruites = filteredFruits.slice(startIndex, endIndex);

  const response = {
    totalPages: Math.trunc(filteredFruits.length / size) + 1,
    currentPage: parseInt(page),
    data: paginatedFruites,
  };

  console.log(response);

  res.json(response);
});

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Security Vunerabilities & Solutions

// XSS - Cross Server Scripting

// Different ways of attacking :-
// 1. Runing scripts through the forms
// 2. Passing image tags through URL params & running onerror scripts
// 3. Accessing document.cookie through these scripts & hijaking the session
// 4. Sending cookies or even complete HTML body to their own servers (triggering their APIs)
// 5. Monitoring keyboard events & capturing sensitive texts like passwords
// 6. Replacing the entire existing HTML & placing their own forms

// Mitigations to avoid these attacks :-
// 1. Input validations covering all the possible corner cases
// 2. Never use eval & innerHTML, instead use innerText / innerContent (since script tag can be added in innerHTML)
// 3. Do proper escaping, meaning replace all the sybmols to escape chars
// 4. In react never use dangerouslySetInnerHTML
// 5. Sanitize the data using DomPurify npm package when even using innerHTML etc.
// 6. Use CSP - Content Security Policy Headers - Check above code

// IFrame Protection

// Different Vunerubilities :-
// 1. When loading external IFRames, our parent IFrame access should not be revealed
// 2. This results in accessing the complete DOm of the parent window
// 3. Click Hijacking - Layering one web site on top of another & faking the clicks
// 4. Sessions & Cookies should be kept safe from the child IFrames

// Mitigations :-
// 1. Allways use Cross-Origin-Opener-Policy: same-origin to avoid unauthorized IFrame usage
// 2. Use sandbox attribute to define IFrame permissions
// 3. For communication between parent & child Iframes, use postMessage methods
// 4. For cookie protection allways use httpOnly, secure & sameSite options while generating

// Some More Important Headers :-
// 1. X-Powered-By
// 2. Referrer-Policy
// 3. X-Content-Type-Options
// 4. X-XSS-Protection
// 5. Strict-Transport-Security
// 6. Permission Policy
// 7. Access-Control-Allow-Origin

// Also use checksums (MD5 or SHA-256) for data integrity verification

// Server Side JS Injection :-

// Do proper validations with all corner cases
// Send back response to client as the Bad Requests
// Do Sanitization first & then deserialization next

// Sub Resource Integrity Checks :-

// The dependent 3rd party libraries might get compromised or might change their versions internally
// Allways use integrity attribute for the external library script tags

// Cross Site Request Forgery (CSRF) :-

// When an App is logged in fake emails with fake URLs can cause Malicious activities
// Main reason - Statelessness of HTTP APIs
// Even the cookies will get carried in these fake URLs
// Use anti CSRF Tokens in the APIs
// Use sameSite= 'strict' for cookies
// Check for Referrer in the API
