// src/components/DiscountPolicy.js
import React from 'react';
import './DiscountPolicy.css';

function DiscountPolicy() {
  return (
    <div className="discount-policy">
      <h1>Discount Policy</h1>
      <p>
        This Discount Policy outlines the terms and conditions of discounts, promotions, and coupons for Recipe Recommender.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        Discounts and promotions are available to registered users of Recipe Recommender who meet the specified criteria. Eligibility criteria may include, but are not limited to:
      </p>
      <ul>
        <li>Account status (e.g., new user, returning user)</li>
        <li>Minimum order value</li>
        <li>Specific product or recipe selections</li>
      </ul>

      <h2>2. Redemption</h2>
      <p>
        To redeem a discount or promotion, users must follow the instructions provided during the offer. This may include entering a coupon code during checkout or meeting other specific requirements.
      </p>

      <h2>3. Expiry</h2>
      <p>
        Discounts and promotions have an expiry date, after which they are no longer valid. The expiry date will be clearly stated in the offer terms.
      </p>

      <h2>4. Stackability</h2>
      <p>
        Unless otherwise specified, discounts and promotions cannot be combined with other offers or coupons.
      </p>

      <h2>5. Modifications</h2>
      <p>
        We reserve the right to modify or cancel discounts, promotions, or coupons at our discretion. Any changes or cancellations will be communicated to users as applicable.
      </p>
    </div>
  );
}

export default DiscountPolicy;
