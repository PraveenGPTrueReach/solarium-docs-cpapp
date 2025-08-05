## L1-SI: High-Level Inventory of All Screens Across Platforms



---

## 1. Introduction
Below is an outline of the major screens for CP App, followed by a Screen Inventory & Flow Matrix. The matrix helps visualize navigation paths, dependencies, and cross-platform interactions. No dedicated in-app payment or meeting-scheduling screens exist in this release; these functions may be managed offline or introduced later if required by the business model.

---

## 2. Screen Catalog

### 2.1 CP Mobile App (CPAPP)

The CP mobile app is primarily for Channel Partners to manage leads, generate and share quotations, handle basic profile settings, and track commission earnings. CPs do not manage support tickets here, and they do not have partial-save (“Draft”) for quotations in this release.

1. **Registration & Login Screen**  
   - Primary User Roles: CP (unregistered → registered)  
   - Key Features/Purpose: Self-registration, OTP-based login, phone number uniqueness  
   - Critical Data Elements: Phone, OTP, CP personal details  
   - Primary API Dependencies: /auth/register, /auth/login  
   - Integration Points: Manual SMS retrieval for OTP (no real-time push)

2. **Dashboard (Home) Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Lead metrics (today’s pending, overdue), quick navigation to My Leads, Quotation, and Customers, plus top-bar icons for manual sync, polled notifications, and profile  
   - Critical Data Elements: Summary stats (overdue leads count, total leads, etc.)  
   - Primary API Dependencies: /leads/summary, /notifications  
   - Integration Points: Basic data polled from the backend on each manual refresh or login

3. **My Leads Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Lists all leads assigned to the CP, with filters (status, date) and search  
   - Critical Data Elements: Lead name, phone, status, next follow-up date  
   - Primary API Dependencies: /leads?assignedTo=CPUser  
   - Integration Points: Updated upon each manual sync/refresh with the server

4. **Add New Lead Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Modal or dedicated page for creating new leads (disabled when offline)  
   - Critical Data Elements: Name, phone, address, PIN, optional service selection  
   - Primary API Dependencies: POST /leads  
   - Integration Points: Immediately updates the lead list upon successful creation. If no matching customer exists for the entered phone, a new customer record is created.

5. **Lead Detail Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: A tabbed interface displaying a lead’s Info (editable), Status changes, Quotations (generate/share), Lead Docs, Customer KYC, and Timeline  
   - Critical Data Elements: Lead ID, status, remarks, documents, assigned quotations  
   - Primary API Dependencies: /leads/{id}, /quotations, /documents  
   - Integration Points: Document uploads to Azure Blob, timeline updates for status changes, Quotation Wizard final calls

6. **Quotation (List) Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Dedicated listing of all quotations with statuses like “Created” or “Shared.”  
   - No partial-save or “Draft” mode is available for CP in this release.  
   - Critical Data Elements: Quotation references, lead references, status  
   - Primary API Dependencies: /quotations?owner=CPUser  
   - Integration Points: PDF generation, share toggles with the customer

7. **Quotation Wizard (7-step Flow)**  
   - Primary User Roles: CP  
   - Key Features/Purpose: A multi-step subflow launched from Lead Detail or Quotation (List), guiding panel selection, BOM, fees, add-ons, and final PDF generation  
   - No partial-save or “Draft” state for CP quotations. CP must complete or cancel in one go.  
   - Critical Data Elements: Wizard inputs (phase, panel type, fees), final cost breakdown  
   - Primary API Dependencies: /quotationWizard, /quotations

8. **Document Upload Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Unified upload process for lead-related documents (site photos, optional attachments), respecting the 7-doc limit  
   - Critical Data Elements: Document type, size ≤10 MB  
   - Primary API Dependencies: /leads/{id}/documents  
   - Integration Points: Azure Blob for storage, references in the lead record

9. **Earnings Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Displays commission-eligible leads (Executed) with “Pending/Approved/Paid” statuses, plus simple filters  
   - Critical Data Elements: Commission amount, payment status, lead reference  
   - Primary API Dependencies: /commissions?cpId  

10. **Profile & Settings Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: CP personal info (name, email, address) with phone read-only, logout  
   - Critical Data Elements: Profile fields, minimal notifications  
   - Primary API Dependencies: /user/{cpId}, /notifications  

11. **Customers Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Lists all customers derived from leads or new associations, with search/filter capability  
   - Critical Data Elements: Customer name, phone, KYC statuses, associated leads  
   - Primary API Dependencies: /customers?cpId  

12. **Customer Detail Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: Displays detailed information about a selected customer, including KYC doc statuses and any leads for that customer  
   - Critical Data Elements: Customer ID, KYC docs (approved/rejected), phone, address  
   - Primary API Dependencies: /customers/{customerId}, /documents  

13. **Notifications Screen**  
   - Primary User Roles: CP  
   - Key Features/Purpose: A scrollable list of recent system alerts (e.g., lead status changes, commission updates) retrieved by manual sync/poll  
   - Critical Data Elements: Notification title, timestamp, read/unread state  
   - Primary API Dependencies: /notifications?cpId  

---


The web portal supports both Admin and KAM roles. Certain actions (e.g., user management, commission approvals) are restricted to Admin. Others, like lead oversight or partial-quotation creation, apply to both roles but with narrower KAM permissions.

1. **Login Screen**  
   - Primary User Roles: Admin, KAM  
   - Key Features/Purpose: Email + password login, password reset link  
   - Critical Data Elements: Username/email, hashed password  
   - Primary API Dependencies: /auth/webLogin  

2. **Dashboard Screen**  
   - Primary User Roles: Admin (company-wide), KAM (territory-limited)  
   - Key Features/Purpose: High-level funnel & metrics (New, In Discussion, Physical Meeting Assigned, Won, Pending at Solarium, Under Execution, Executed)  
   - Critical Data Elements: Aggregated lead counts, time-based filters  
   - Primary API Dependencies: /dashboard/summary  

3. **Channel Partner Management Screen**  
   - Primary User Roles: Admin (full CRUD), KAM (read-only for assigned CPs)  
   - Key Features/Purpose: Approve new CP, activate/deactivate, bulk assign KAM, view CP profile  
   - Critical Data Elements: CP name, phone, status, assigned KAM, lead count  
   - Primary API Dependencies: /channelPartners  

4. **KAM Management**  
   - Primary User Roles: Admin (full CRUD)  
   - Key Features/Purpose: Create/edit KAM accounts, manage assigned CPs, set territory  
   - Critical Data Elements: KAM name, email, phone, region  
   - Primary API Dependencies: /kams  

5. **Customer Management Screen**  
   - Primary User Roles: Admin, KAM (limited to their customers)  
   - Key Features/Purpose: View/edit customer profiles, KYC doc approvals  
   - Critical Data Elements: Customer phone, leads, doc statuses  
   - Primary API Dependencies: /customers, /documents  

6. **Lead Management Screen**  
   - Primary User Roles: Admin (all leads); KAM sees only assigned leads  
   - Key Features/Purpose: View lead list, create new or bulk import, reassign leads, override statuses. “Unassigned Leads” preset filter/tab is accessible by Admin only.  
   - Critical Data Elements: Lead ID, status, assigned CP, date ranges, CSV import results  
   - Primary API Dependencies: /leads, /bulkImport  

7. **Quotation Management Screen**  
   - Primary User Roles: Admin, KAM  
   - Key Features/Purpose: Generate new quotations, partial-save (“Draft”) functionality only for Admin/KAM, filter by “Draft,” “Created,” “Shared”  
   - Critical Data Elements: Quotation ID, capacity, fees, subsidies, “sharedWithCustomer” toggle  
   - Primary API Dependencies: /quotations, /quotationWizard  

8. **Commission & Payouts Screen**  
   - Primary User Roles: Admin (approve, pay), KAM (read-only)  
   - Key Features/Purpose: Lists commissions (Pending/Approved/Paid), sets payment details (UTR)  
   - Critical Data Elements: Lead/Quotation references, commission amounts, payment status  
   - Primary API Dependencies: /commissions  

9. **Reports Screen**  
   - Primary User Roles: Admin (global), KAM (territory)  
   - Key Features/Purpose: Generate advanced analytics on leads, CP performance, funnel conversions, and export data  
   - Critical Data Elements: Time-series metrics, territory breakdown  
   - Primary API Dependencies: /reports  

10. **Global Settings Screen**  
   - Primary User Roles: Admin only  
   - Key Features/Purpose: System-level parameters (inflation %, token expiry, etc.)  
   - Critical Data Elements: Config flags, numeric thresholds  
   - Primary API Dependencies: /settings  

11. **Support Screen**  
   - Primary User Roles: Admin, KAM  
   - Key Features/Purpose: Ticket queue (filter by open/closed), respond to issues from Customer  
   - Critical Data Elements: Ticket ID, associated user or lead, status, message history  
   - Primary API Dependencies: /tickets, /tickets/{id}  

12. **My Profile Screen**  
   - Primary User Roles: Admin, KAM  
   - Key Features/Purpose: Update personal info, change password, log out  
   - Critical Data Elements: Name, email, phone, password reset  
   - Primary API Dependencies: /user/{adminOrKAMId}  

13. **Quotation Master Data Management Screen**  
   - Primary User Roles: Admin only  
   - Key Features/Purpose: Manage master data for panels, inverters, fees, BOM components, etc.  
   - Critical Data Elements: Price per unit, DCR flags, recommended items, region-phase mappings  
   - Primary API Dependencies: /masterData  

14. **Services Catalog Screen**  
   - Primary User Roles: Admin only  
   - Key Features/Purpose: Admin can add or edit available services for the CUSTAP “Services” screen  
   - Critical Data Elements: Service name, category, description, images, status (active/inactive)  
   - Primary API Dependencies: /services  

15. **Notifications Screen**  
   - Primary User Roles: Admin, KAM  
   - Key Features/Purpose: Central list of alerts (new leads, CP registrations, ticket updates), polled/manual retrieval  
   - Critical Data Elements: Text, timestamp, read/unread indicator  
   - Primary API Dependencies: /notifications?role=adminOrKAM  

---

## 3. Screen Inventory & Flow Matrix

| Screen Name                          | Platform      | Accessible From                                                                     | Next Possible Screens                                                                                       | Dependencies                                                                                                              |
|-------------------------------------|-------------- |-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Registration & Login                | CP Mobile     | App launch → no valid session                                                       | Dashboard (on OTP success)                                                                                  | /auth/register, /auth/login, manual SMS (polled) for OTP                                                                  |
| Dashboard (Home)                    | CP Mobile     | Post-login or bottom nav                                                            | My Leads, Quotation (List), Customers, Profile, manual sync overlay                                        | Auth token needed; /leads/summary                                                                                          |
| My Leads                            | CP Mobile     | Dashboard bottom nav tab                                                            | Lead Detail, Add New Lead, (sync)                                                                           | /leads?assignedTo=cpId                                                                                                    |
| Add New Lead                        | CP Mobile     | FAB from Dashboard or My Leads                                                      | Lead Detail (after save)                                                                                    | POST /leads                                                                                                               |
| Lead Detail                         | CP Mobile     | My Leads list → tap lead                                                            | Status change popup, Quotation Wizard, Doc Upload sub-flow                                                  | /leads/{id}, /quotations, /documents                                                                                      |
| Quotation (List)                    | CP Mobile     | Bottom nav “Quotation” tab                                                          | Quotation Wizard flow, existing “Created” or “Shared” quotations                                            | /quotations?owner=cpId                                                                                                    |
| Quotation Wizard (7-step Flow)      | CP Mobile     | Lead Detail or Quotation → “Generate New Quotation”                                 | Creates a final “Created” or “Shared” PDF, then returns to Lead Detail or Quotation (List)                  | /quotationWizard, /quotations                                                                                             |
| Document Upload Screen              | CP Mobile     | Lead Detail → “Docs” tab                                                            | Returns to Lead Detail on success                                                                           | /leads/{id}/documents, 7-doc limit                                                                                       |
| Earnings                            | CP Mobile     | Side menu or profile nav (depending on final CP UI layout)                          | (Potential back navigation only)                                                                            | /commissions?cpId                                                                                                        |
| Profile & Settings                  | CP Mobile     | Top bar profile icon, or side menu (if used)                                        | Logout → login, or back to Dashboard                                                                       | /user/{cpId}                                                                                                              |
| Customers Screen                    | CP Mobile     | Bottom nav “Customers”                                                              | Customer Detail Screen or lead references                                                       | /customers?cpId                                                                                                           |
| Customer Detail Screen              | CP Mobile     | Customers list → tap a customer                                                     | Return to Customers list or handle KYC doc references                                                       | /customers/{customerId}, /documents                                                                                       |
| Notifications Screen               | CP Mobile     | Top bar bell icon from Dashboard or any main screen                                 | Mark read, or navigate to relevant lead/quotation                                                           | /notifications?cpId (polled/manual)                                                                                      |
                                                                 |
---

**End of Revised Document**