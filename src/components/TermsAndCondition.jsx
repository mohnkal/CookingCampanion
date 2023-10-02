// src/components/TermsAndConditions.js
import React from 'react';
import './TermsAndCondition.css'; // Import your CSS file

function TermsAndCondition() {
  return (
    <div className="terms-and-conditions">
    <h1>Terms and Conditions</h1>
    <p>
      Welcome to Cooking Campanion! These terms and conditions govern your use of our recipe recommendation app.
    </p>

    <h2>1. Acceptance of Terms</h2>
    <p>
      By accessing or using our app, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our app.
    </p>

    <h2>2. User Accounts</h2>
    <p>
      To use certain features of our app, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and password.
    </p>

    <h2>3. Privacy Policy</h2>
    <p>
      Your use of our app is also governed by our <a href="/PP">Privacy Policy</a>, which describes how we collect, use, and disclose your personal information.
    </p>

    <h2>4. Content</h2>
    <p>
      You may submit, upload, or contribute content to our app. By doing so, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your content.
    </p>

    <h2>5. Prohibited Activities</h2>
    <p>
      You agree not to engage in any of the following activities while using our app:
    </p>
    <ul>
      <li>Violating any applicable laws or regulations.</li>
      <li>Interfering with the security of our app or attempting to gain unauthorized access.</li>
      <li>Uploading or sharing content that is offensive, harmful, or violates the rights of others.</li>
      <li>Using our app for any illegal or unauthorized purpose.</li>
    </ul>

    <h2>6. Termination</h2>
    <p>
      We reserve the right to terminate or suspend your account and access to our app at our discretion, without notice, for any reason, including violations of these terms.
    </p>

    <h2>7. Changes to Terms</h2>
    <p>
      We may update these terms and conditions from time to time. You are responsible for reviewing them periodically. Your continued use of our app after changes constitute acceptance of the updated terms.
    </p>

    <h2>8. Contact Us</h2>
    <p>
      If you have any questions about these terms and conditions, please contact us at <a href="/">CookingCampanion.com</a>.
    </p>

    </div>
  );
}

export default TermsAndCondition;
