// src/components/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <>
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how Recipe Recommender ("we," "our," or "us") collects, uses, and protects your personal information when you use our recipe recommendation app.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect various types of information, including but not limited to:
      </p>
      <ul>
        <li>Personal information (such as name, email address) provided by you during account registration.</li>
        <li>Usage data, including your interactions with the app and recipes you view or save.</li>
        <li>Device information (e.g., IP address, device type) for analytics and security purposes.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the collected information for the following purposes:
      </p>
      <ul>
        <li>Provide and improve our app's functionality and user experience.</li>
        <li>Personalize recipe recommendations based on your preferences and usage patterns.</li>
        <li>Send you updates, newsletters, and marketing communications with your consent.</li>
        <li>Monitor and analyze app usage to enhance our services and security.</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
      </p>
      <ul>
        <li>To trusted third-party service providers who assist us in operating our app and providing services to you.</li>
        <li>When required by law or legal process.</li>
        <li>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.</li>
      </ul>

      <h2>4. Security</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is entirely secure. We cannot guarantee absolute security.
      </p>

      <h2>5. Your Choices</h2>
      <p>
        You may have the following choices regarding your personal information:
      </p>
      <ul>
        <li>Review, update, or delete your account information through your app settings.</li>
        <li>Opt-out of receiving marketing communications by following the provided instructions.</li>
        <li>Request access to your personal data or its deletion, subject to applicable legal requirements.</li>
      </ul>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. You are responsible for reviewing it regularly. Your continued use of our app after changes constitute acceptance of the updated policy.
      </p>
    </div>
    </>
  );
}

export default PrivacyPolicy;
