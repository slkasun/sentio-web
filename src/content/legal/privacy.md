---
title: "Privacy Policy"
description: "How SentioLogic handles information in Sentio POS, the Web Admin Portal and Google Calendar Sync: what we collect, how we use it, and your choices."
summary: "How we handle information in Sentio POS, the Web Admin Portal and Google Calendar Sync."
effective: "28 October 2026"
updated: "28 October 2026"
---

## 1. Who we are

Sentio POS is a restaurant point-of-sale and management service operated by SentioLogic (Private) Limited ("we", "us", or "our"). This Privacy Policy explains how we handle information through Sentio POS, its Web Admin Portal, and connected features, including Google Calendar Sync.

Our registered or business address is 313, Main Road, Attidiya, Dehiwala, Colombo 10350, Sri Lanka. For privacy questions or requests, contact [contact@sentiologic.site](mailto:contact@sentiologic.site).

## 2. Our role and the merchant’s role

We handle account, subscription, and service administration information to operate Sentio POS. When a restaurant or other merchant enters customer, employee, reservation, or transaction information into the service, we process that information on the merchant’s behalf and according to its instructions, subject to applicable law.

Merchants are responsible for providing appropriate privacy notices and having a lawful basis to collect and use the personal information they enter. If you are a restaurant customer or employee, contact the relevant merchant first about its use of your information. We can assist the merchant with requests concerning information held in Sentio POS.

## 3. Information we handle

Depending on the features enabled and the information you provide, we handle:

- **Account and business information:** merchant and outlet details, user names, contact information, account credentials, and user roles or permissions.
- **Restaurant operating information:** orders, bills, payment amounts and methods, discounts, advance payments, shift records, and related business records.
- **Customer and reservation information:** customer names, telephone numbers, reservation dates and times, party sizes, table or room preferences, and notes entered by the merchant.
- **Employee information:** employee details entered through the employee management features used by the merchant.
- **Support information:** messages and information supplied when requesting assistance.
- **Google Calendar connection information:** the calendar list, information about events created by Sentio POS, OAuth tokens, and stored links between Sentio POS reservations and Google Calendar events, as explained below.

- **Technical information:** the Web Admin Portal and APIs use only essential cookies needed for sign-in and session management; we do not use analytics or advertising cookies. Our servers keep standard logs, such as IP address, timestamps, and request and error details, for security and troubleshooting.
- **Card payments:** card payments are processed on separate bank or acquirer terminals. Sentio POS records only the payment method and amount; it does not receive or store card numbers or other card details.

## 4. How we use information

We use information to provide and administer the service; manage orders and reservations; produce bills and business reports; manage accounts and access permissions; provide customer support; protect the service against unauthorized use; and meet applicable legal obligations.

Where applicable law requires a legal basis, we rely on performance of our agreement, compliance with legal obligations, legitimate interests in operating and protecting the service where permitted, or consent where required. Information processed on a merchant’s behalf is handled according to its instructions and the applicable agreement.

## 5. Google Calendar Sync

### Optional connection and permission

Calendar Sync is optional. A merchant chooses whether to connect a Google Account and grants permission through Google’s OAuth authorization process. The merchant then selects the calendar to receive restaurant reservations. Sentio POS does not ask for or store the merchant’s Google password.

### Google data accessed

Sentio POS accesses the connected account’s **calendar list** so the merchant can choose a destination calendar, and **the events created by Sentio POS** so reservations can be linked to those events. This feature does not use unrelated calendar events for other purposes.

### Purpose of access

We use this access to add restaurant reservations to the calendar selected by the merchant. The information sent to Google is the reservation information included in the calendar event. The merchant should select a calendar with suitable sharing settings because anyone with access to that calendar may be able to view the reservation information.

Each calendar event includes the customer name, telephone number, reservation date and time, party size, table or room, and any reservation notes entered by the merchant.

### Storage and security

We store the connection information needed to maintain Calendar Sync, including the OAuth refresh token and the stored calendar and event links. **The refresh token is stored using AES-256-GCM encryption.** It allows Sentio POS to obtain access tokens and continue adding reservations without asking the merchant to authorize each event separately.

### Use and disclosure restrictions

We never sell Google user data. We do not share Google user data with third parties for their independent use, advertising, profiling, or marketing. We use it only to provide the merchant-authorized Calendar Sync feature. Sending reservation information to Google Calendar at the merchant’s direction is necessary to provide this feature.

Sentio POS’s use and transfer of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its Limited Use requirements. Google user data is not used to train generalized artificial intelligence or machine learning models. Human access is limited to circumstances permitted by that policy, such as access specifically authorized by the user, necessary security investigations, or legal requirements.

### Disconnecting and deleting connection data

The merchant can open the **Calendar Sync** page in Sentio POS and select **Disconnect**. This revokes the Google token, deletes the stored calendar links, and stops future synchronization through that connection.

**Events already created in Google Calendar remain there.** Disconnecting does not delete those events. The merchant can review or delete them directly in Google Calendar, subject to its permissions.

Alternatively, the merchant can remove Sentio POS access through [Google Account Permissions](https://myaccount.google.com/permissions). Removing access through Google prevents further authorized API access; it does not by itself constitute a request to delete the merchant’s Sentio POS account or restaurant records. To remove stored connection information in Sentio POS, use **Disconnect** or contact [contact@sentiologic.site](mailto:contact@sentiologic.site).

When the merchant selects **Disconnect**, the stored token is deleted immediately. If access is revoked through Google instead, the stored token is deleted when Sentio POS detects the revocation at its next synchronization attempt. Any backup copies expire within 7 days.

## 6. Sharing and service providers

We do not sell personal information or share it with third parties for their independent marketing or advertising. Information is available to users authorized by the merchant according to their permissions, and is transmitted to integrations the merchant chooses to use, including Google Calendar.

The Sentio POS terminal application runs on the merchant’s own POS machines, so information stored locally on those devices remains under the merchant’s control. The Web Admin Portal and APIs are hosted by **Oracle Cloud Infrastructure**, and **Cloudflare** provides DNS, network delivery, and security services in front of them. These providers process information only to provide their services to us, under contractual confidentiality and security obligations.

We may disclose information where required by applicable law or a binding legal process. Any disclosure of Google user data remains subject to the Google API Services User Data Policy.

## 7. Data protection

We use safeguards appropriate to the information and the service to reduce unauthorized access, alteration, loss, or disclosure. Calendar Sync refresh tokens are encrypted as described above. Other safeguards include HTTPS/TLS encryption for information in transit between POS machines, the Web Admin Portal, and our APIs; hashed storage of user passwords; role-based access permissions; and limiting staff access to production systems to what is needed to operate and support the service.

No system can guarantee absolute security. Merchants should protect account credentials, limit staff permissions appropriately, and report suspected unauthorized access to [support@sentiologic.site](mailto:support@sentiologic.site).

## 8. Retention and deletion

We retain personal information only for the purposes described in this policy and for applicable legal, accounting, security, or dispute-resolution requirements. Calendar connection data is handled as described in Section 5.

Account closure and deletion requests can be sent to [contact@sentiologic.site](mailto:contact@sentiologic.site) by an authorized merchant representative. We may verify identity and authority before acting. Deleting a Sentio POS account does not automatically delete events already stored in Google Calendar.

Retention periods:

- **Active merchant records:** kept for as long as the subscription is active.
- **Closed accounts:** the merchant has 30 days after closure to export its records; we then delete them within 90 days of closure.
- **Transaction records:** deleted with the account, unless a longer period is required by applicable law or instructed by the merchant.
- **Support records:** kept for 2 years after the request is resolved.
- **Server logs:** kept for 90 days.
- **Backups:** expire within 7 days.

Verified deletion requests are processed within 30 days.

## 9. Storage locations and international processing

Information handled by the Web Admin Portal and APIs is stored and processed in Oracle Cloud Infrastructure’s Singapore region. Information held by the terminal application stays on the merchant’s POS machines. Cloudflare may process network traffic in locations across its global network. Where information is transferred outside Sri Lanka, we rely on our providers’ contractual commitments and security safeguards.

When Calendar Sync is enabled, reservation event information is transmitted to Google and is also subject to [Google’s Privacy Policy](https://policies.google.com/privacy).

## 10. Your choices and rights

Depending on applicable law, you may have rights to request access to, correction of, deletion of, or a copy of personal information; object to or restrict certain processing; withdraw consent where processing relies on it; or complain to the relevant data protection authority. These rights may be subject to legal limits.

To make a request, contact [contact@sentiologic.site](mailto:contact@sentiologic.site). Restaurant customers and employees should first contact the merchant responsible for their information. You can withdraw Google Calendar authorization using the steps in Section 5. Withdrawal does not undo processing already carried out lawfully.

## 11. Children

Sentio POS is a business service for merchants and their authorized personnel. It is not directed to children. Merchants should avoid entering unnecessary personal information about children into the service.

## 12. Changes to this policy

We may update this policy to reflect changes to the service or applicable requirements. We will publish the revised policy and update the date above. Where required, we will provide notice and obtain consent before using Google user data for a new purpose.

## 13. Contact

**Operator:** SentioLogic (Private) Limited  
**Address:** 313, Main Road, Attidiya, Dehiwala, Colombo 10350, Sri Lanka  
**Privacy:** [contact@sentiologic.site](mailto:contact@sentiologic.site)  
**Support:** [support@sentiologic.site](mailto:support@sentiologic.site)
