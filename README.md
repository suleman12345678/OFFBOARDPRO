# OffboardPro Enterprise — Official User Manual & Operations Guide

An interactive, modern, light & bright user manual guide built with **Next.js 14**, **Tailwind CSS**, and **Lucide Icons** for **OffboardPro Enterprise** (High-Precision Deboarding & Access Governance Console).

---

## 🌟 Highlights & Key Features

- **Light & Bright Aesthetic**: Crisp white cards (`#ffffff`), soft slate canvas (`#f8fafc`), luminous sapphire/emerald/amber accents, and high-contrast typography.
- **Multi-Part UI Walkthroughs**: Seamlessly handles scrolled screen captures:
  - **Chapter 02 (Dashboard)**: Part 1 (`image 2 1.png`), Part 2 (`image 2 2.png`), Part 3 (`image 2 3.png`)
  - **Chapter 08 (System Automation)**: Part 1 (`image 9.png`), Part 2 (`image 9 1.png`)
  - **Chapter 11 (Email & SMTP Relay)**: Part 1 (`image 12.png`), Part 2 (`image 12 1.png`)
- **Interactive Fullscreen Zoom Lightbox**: Click any screenshot to inspect at high resolution with zoom controls (`+`, `-`, reset, and arrow key part navigation).
- **5-Phase Lifecycle Pipeline Explorer**: Visual interactive modal explaining *Phase 01: Initiated* → *Phase 02: In Progress* → *Phase 03: Approvals* → *Phase 04: Completed* → *Phase 05: Exceptions*.
- **Role-Based Access Control (RBAC) Matrix**: Interactive capability comparison across Super Admin, IT Admin, HR Manager, Department Manager, and Team Lead.
- **Instant Search (`⌘K` / `Ctrl+K`)**: Rapidly filter across modules, policies, role actions, and FAQs.
- **Print & PDF Export Ready**: Clean `@media print` styles for exporting formal compliance documentation.

---

## 🗂️ Complete Screen & Image Mapping

| Chapter | Title | Image Source | Description |
|---|---|---|---|
| **01** | **Console Authentication** | `image1.png` | Enterprise login console, corporate email, SOC2/GDPR compliance |
| **02** | **Executive Dashboard (Part 1)** | `image 2 1.png` | Executive KPI cards, Live Governance Engine, 5-Phase Pipeline |
| **02** | **Executive Dashboard (Part 2)** | `image 2 2.png` | Connected SaaS connectors, recent offboardings activity stream |
| **02** | **Executive Dashboard (Part 3)** | `image 2 3.png` | Status distribution donut, API hits, task automation queue |
| **03** | **Offboarding Requests** | `image 3.png` | Lifecycle requests list, HR/IT/MGR/TL sign-off badges, certificates |
| **04** | **Employee Directory** | `image 4.png` | Synced identities, Microsoft Entra ID license breakdown & filters |
| **05** | **Approvals Governance** | `image 5.png` | Multi-role sign-off queue, priority tags (HIGH), halt/approval flow |
| **06** | **Services & Integrations** | `image 6.png` / `image 7.png` | Zoho Mail, On-Premises AD (`ribtechnology.com`), Microsoft Entra ID |
| **07** | **Offboarding Policies** | `image 8.png` | Entra ID and Zoho Mail provisioning and de-provisioning policies |
| **08** | **System Automation (Part 1)** | `image 9.png` | Automated 24-hour daily scheduler banner, instant policy scan |
| **08** | **System Automation (Part 2)** | `image 9 1.png` | Inactivity threshold (90d), Purge (180d), Circuit Breaker (50) |
| **09** | **Audit & Compliance Trail** | `image 10.png` | Immutable security logs (1,014 events), service filters, anomaly detection |
| **10** | **Users & RBAC** | `image 11.png` | Operator directory, 5 role tiers, granular permission presets |
| **11** | **Email & SMTP Relay (Part 1)** | `image 12.png` | SMTP server connection (`smtp.gmail.com:587`), host link configuration |
| **11** | **Email & SMTP Relay (Part 2)** | `image 12 1.png` | Notification template editor, dynamic placeholders, desktop/mobile preview |
| **12** | **Tenant & Security Settings** | `image 13.png` | Tenant profile (`R.I.B Technology Ltd.`), API secret, mandatory MFA |

---

## 🚀 How to Run the User Manual

To start the local development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

To run the production build:
```bash
npm run build
npm run start
```
