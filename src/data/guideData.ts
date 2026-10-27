export interface ImagePart {
  partNumber: number;
  partTitle: string;
  imageSrc: string;
  whatIsThis: string;
  whatItIsDoing: string[];
}

export interface GuideChapter {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  category: 'OVERVIEW' | 'LIFECYCLE WORKFLOWS' | 'INTEGRATIONS & RULES' | 'SECURITY & GOVERNANCE' | 'AUTHENTICATION';
  badge: string;
  parts: ImagePart[];
}

export const GUIDE_CHAPTERS: GuideChapter[] = [
  // 1. OVERVIEW -> Dashboard (3 Parts)
  {
    id: "dashboard",
    number: "01",
    title: "Dashboard",
    shortTitle: "Dashboard",
    category: "OVERVIEW",
    badge: "Executive Console",
    parts: [
      {
        partNumber: 1,
        partTitle: "Part 1: Key Metrics & 5-Phase Pipeline",
        imageSrc: "/images/image-2-1.png",
        whatIsThis: "The main executive overview of the OffboardPro console displaying overall identity metrics and the 5-phase employee offboarding execution pipeline.",
        whatItIsDoing: [
          "Header Breadcrumb & Status: Displays current workspace context ('Workspace / Dashboard') alongside a real-time 'Live Sync' pulse badge verifying live directory synchronization.",
          "Global Omnibar Search: Provides instant keyboard-accessible search ('⌘K') across employee directories, active workflows, and system IDs.",
          "Portal Utility Actions: Features quick controls to switch views ('Exit Portal'), open the new hire provisioning module ('+ Onboard'), and inspect system alerts via the notification bell.",
          "Live Operations Control Bar: Offers one-click buttons to force a manual directory refresh ('Sync'), inspect immutable compliance logs ('Audit Trail'), and return to the main portal.",
          "Primary Action '+ New Offboarding': Launches the step-by-step offboarding ticket wizard to begin de-provisioning an employee across all connected SaaS and directory accounts.",
          "Metric 1 - Total Synced (23): Tracks the total number of corporate employee identities synchronized across all connected enterprise directories.",
          "Metric 2 - Active Access (23): Counts personnel who currently possess active directory login credentials, security group memberships, and assigned cloud licenses.",
          "Metric 3 - In Progress (0): Monitors the real-time count of employee accounts currently undergoing automated credential suspension or mailbox de-provisioning.",
          "Metric 4 - Completed (28): Quantifies the total number of successful offboardings finalized during the current calendar month with all access cleanly revoked.",
          "Metric 5 - Failed Actions (0): Highlights any automated API de-provisioning errors, webhook timeouts, or permission faults that require administrator intervention.",
          "Metric 6 - Approvals (0): Displays tickets temporarily held in the multi-role governance queue awaiting department head or HR sign-off.",
          "Phase 01 - Initiated (0 Reqs): First pipeline milestone representing newly registered offboarding tickets awaiting initial validation.",
          "Phase 02 - In Progress (0 Reqs): Second milestone where automated background workers suspend logins, revoke OAuth tokens, and reclaim software licenses.",
          "Phase 03 - Approvals (0 Reqs): Third milestone where mandatory sign-offs from HR, IT, and Department Managers are actively gathered.",
          "Phase 04 - Completed (28 Reqs): Fourth milestone confirming complete account deactivation, mailbox archival, and compliance certification.",
          "Phase 05 - Exceptions (0 Reqs): Fifth milestone capturing disputed requests, halted deboardings, or accounts flagged with unresolved asset retention.",
          "Review Pipeline Trigger: Navigates administrators to the comprehensive stage-by-stage interactive execution pipeline view."
        ]
      },
      {
        partNumber: 2,
        partTitle: "Part 2: Connected SaaS Services & Activity Feed",
        imageSrc: "/images/image-2-2.png",
        whatIsThis: "The middle dashboard panel showing all connected identity providers and real-time offboarding activity across the organization.",
        whatItIsDoing: [
          "Connected Services Overview: Summarizes all live enterprise SaaS connectors currently configured to execute automated account deactivation during offboarding.",
          "Active Directory Connector Status: Confirms an operational green heartbeat ('● Active') for on-premises Windows Server Active Directory domain sync.",
          "Microsoft Entra ID Connector Status: Shows active operational health ('● Active') for cloud-native Azure AD identity governance via Microsoft Graph API.",
          "Add Connector Action: Provides a '+ Add Connector' action button allowing administrators to link third-party SaaS tools like Google Workspace, Slack, AWS, and Zoom.",
          "Authentication Protocol Summary: Displays current underlying connector authentication standards ('OAuth2 + Microsoft Graph') with a direct link to 'Configure Endpoints'.",
          "Recent Offboardings Feed: Displays a real-time chronological timeline of recently initiated, ongoing, and completed employee deboardings.",
          "Employee Identity Profiles: Shows user avatar initials (e.g. 'RS', 'RA'), full employee names ('rahul sharma', 'rahul'), and assigned business units ('Engineering').",
          "Lifecycle Status Badges: Distinctly flags finalized tickets with green '● Completed' pills and pending sign-offs with amber '● Dept Approvals' pills.",
          "Requests Manager Shortcut: Houses the 'Open Requests Manager' button providing instant one-click navigation to the central offboarding ticket ledger."
        ]
      },
      {
        partNumber: 3,
        partTitle: "Part 3: Status Distribution & Queues",
        imageSrc: "/images/image-2-3.png",
        whatIsThis: "The lower analytics section showing offboarding breakdown charts, API call volumes, and pending approval queues.",
        whatItIsDoing: [
          "Status Distribution Donut Chart: Visually maps the completion breakdown of all 28 logged workflows with color-coded statistical segments.",
          "Distribution Metrics: Displays exact percentage breakdowns for Completed (28 / 100%), In Progress (0 / 0%), Pending Approval (0 / 0%), and Failed (0 / 0%).",
          "Top Services by API Actions: Analyzes API call frequencies and revocation command hits across Active Directory and Microsoft Entra ID.",
          "API Connectivity Health: Confirms real-time connectivity status ('API Connected') for background communication with Microsoft Graph and Zoho APIs.",
          "Tasks Automation Queue: Real-time worker engine widget tracking background execution threads across completed, running, queued, and failed jobs.",
          "Audit Trail Link: Provides direct navigation from the task queue to the full compliance audit trail.",
          "Pending Approvals Governance Panel: Highlights pending departmental authorization items assigned to the current user (displays clean state: 'No pending approvals requiring your action.')."
        ]
      }
    ]
  },

  // 2. LIFECYCLE WORKFLOWS -> Offboarding Requests (Image 3)
  {
    id: "offboarding-requests",
    number: "02",
    title: "Offboarding Requests",
    shortTitle: "Offboarding Requests",
    category: "LIFECYCLE WORKFLOWS",
    badge: "Requests Hub",
    parts: [
      {
        partNumber: 1,
        partTitle: "Requests Management Table",
        imageSrc: "/images/image-3.png",
        whatIsThis: "The central management console where all employee offboarding tickets across the enterprise are created, monitored, reviewed by multi-department stakeholders, and finalized.",
        whatItIsDoing: [
          "Requests Header & Counter: Shows the total volume of enterprise requests ('38 Total') with direct options to 'Export' tabular reports and launch a '+ New Request'.",
          "Total Requests KPI (38 All Time): Tracks cumulative offboarding requests logged in the system since inception.",
          "Awaiting Action KPI (10 Pending Reviews): Flags tickets that require stakeholder decisions, missing documentation, or administrative verification.",
          "Dept Approvals KPI (7 Stakeholder Queue): Highlights tickets actively waiting for Team Lead, Department Manager, or HR sign-offs.",
          "Completed KPI (28 Fully Revoked): Confirms finalized tickets where all credentials, mailboxes, and cloud licenses have been systematically disabled.",
          "Failed / Alert KPI (0 Action Required): Verifies zero technical faults, script crashes, or rejected de-provisioning API payloads.",
          "Unified Search Bar: Filters tickets dynamically by ticket number (e.g. 'OFF-2026-xxx'), employee full name, or corporate email address.",
          "Lifecycle Stage Filter Tabs: Offers quick category filtering across All (38), Awaiting HR (3), Dept Approvals (7), Ready to Finalize (0), and Completed (28).",
          "Employee Details Column: Renders employee avatar initials ('RS'), full name ('rahul sharma'), unique ticket badge ('OFF-2026-426'), and corporate email ('rahul@ribtechnology.com').",
          "Department Badge: Clearly tags the employee's corporate department ('Engineering').",
          "Multi-Role Approvals Grid: Displays individual status chips for HR ('✓ HR'), IT Admin ('✓ IT'), Department Manager ('✓ MGR'), and Team Lead ('✓ TL') alongside aggregate readiness ('4/4 signed • Ready').",
          "Revocation Progress Bar: Visualizes the exact execution percentage (e.g. '100%') of revoked software accounts and reclaimed cloud licenses.",
          "Status Pill: Highlights the ticket's final status badge ('● Completed') indicating full deactivation.",
          "Action - Details (Eye Icon): Opens the deep-dive audit trail, activity logs, and step-by-step timeline for the specific employee.",
          "Action - Certificate (Ribbon Icon): Generates and downloads an official cryptographic Offboarding & Compliance Completion Certificate for legal/HR records.",
          "Action - Delete (Trash Icon): Allows authorized administrators to purge archived records in adherence to corporate retention guidelines."
        ]
      }
    ]
  },

  // 3. LIFECYCLE WORKFLOWS -> Employees Directory (Image 4)
  {
    id: "employee-directory",
    number: "03",
    title: "Employees Directory",
    shortTitle: "Employees Directory",
    category: "LIFECYCLE WORKFLOWS",
    badge: "Identity Directory",
    parts: [
      {
        partNumber: 1,
        partTitle: "Directory & License Allocations",
        imageSrc: "/images/image-4.png",
        whatIsThis: "The centralized corporate directory that synchronizes employees and groups from Microsoft Entra ID and Active Directory.",
        whatItIsDoing: [
          "Directory Header & Onboarding Controls: Displays the directory governance header with 'Bulk Add' (CSV upload), 'Onboarding Hub' (new hire provisioning), and '+ Add Employee' (manual creation).",
          "View Mode Toggle: Switches the view between 'Employees & Users Directory' and 'Directory Groups (● AD & Entra)' for managing security and distribution groups.",
          "Tracked Identities KPI (0): Summarizes total identity accounts synchronized into the local governance directory.",
          "Active Employees KPI (0): Measures team members currently in good standing with full corporate systems access.",
          "In Offboarding KPI (0): Flags the count of employees currently progressing through active deboarding workflows.",
          "Sync Mode Indicator (Manual): Confirms whether identity synchronization runs on-demand or via scheduled automated cron intervals.",
          "Microsoft Entra ID Assigned Licenses Hub: Real-time license audit bar powered by live Microsoft Graph synchronization ('● Live Entra Sync').",
          "License Filter - Teams Exploratory (2): Filters directory users assigned the Microsoft Teams Exploratory trial SKU.",
          "License Filter - Teams Premium (1): Tracks accounts holding advanced Microsoft Teams Premium meeting and collaboration licenses.",
          "License Filter - Teams Essentials (13): Identifies staff allocated baseline Microsoft Teams Essentials business communication seats.",
          "License Filter - Microsoft Fabric (7): Filters data analysts and engineers utilizing free Microsoft Fabric capacity seats.",
          "License Filter - Microsoft Entra ID P2 (5): Tracks senior operators and admins holding high-security Entra ID P2 conditional access licenses.",
          "License Filter - Unassigned: Isolates directory users without any paid cloud licenses for cost optimization and audit audits.",
          "Empty State Notice: Instructs administrators to trigger a directory synchronization or register users to populate records."
        ]
      }
    ]
  },

  // 4. LIFECYCLE WORKFLOWS -> Approvals Queue (Image 5)
  {
    id: "approvals-governance",
    number: "04",
    title: "Approvals Queue",
    shortTitle: "Approvals Queue",
    category: "LIFECYCLE WORKFLOWS",
    badge: "Sign-Off Queue",
    parts: [
      {
        partNumber: 1,
        partTitle: "Approvals & Access Governance",
        imageSrc: "/images/image-5.png",
        whatIsThis: "The multi-role approval gate where stakeholders review and sign off before any accounts or mailboxes are permanently de-provisioned.",
        whatItIsDoing: [
          "Governance Queue Header: Explains the enforcement policy requiring multi-stakeholder authorization before permanent de-provisioning scripts execute.",
          "Total Sign-Off Requests KPI (47): Total cumulative sign-off requests registered across all employee departures.",
          "Pending Review KPI (0): Highlights sign-off requests waiting for the logged-in administrator's explicit approval or rejection.",
          "Approved & Executed KPI (11): Quantifies offboardings where all stakeholders approved, releasing the automated revocation engine to proceed.",
          "Rejected / Halted KPI (36): Tracks offboardings held, rejected, or escalated due to pending asset handover or contract extensions.",
          "Search & Filter Controls: Features search input ('Search sign-offs by title or employee...') paired with an approval status dropdown ('All Approvals').",
          "Approval Card Profile: Shows submitter avatar initials ('US'), employee name ('Offboarding for test user', 'rehan khan', 'rahul singht'), and target role context.",
          "Urgency Flag (HIGH): Bright amber badge designating high-priority departures requiring immediate administrative attention.",
          "Department Context ('Requested by (IT)'): Identifies the requesting department initiating the departure workflow.",
          "Execution Status Pill ('● Completed'): Confirms that the specific sign-off round has concluded and necessary actions were carried out.",
          "Separation of Duties (SoD) Enforcement: Guarantees that neither IT nor HR can unilaterally delete an identity without departmental concurrence."
        ]
      }
    ]
  },

  // 5. INTEGRATIONS & RULES -> Services & Connectors (Images 6 & 7)
  {
    id: "services-integrations",
    number: "05",
    title: "Services & Connectors",
    shortTitle: "Services & Connectors",
    category: "INTEGRATIONS & RULES",
    badge: "API Connectors",
    parts: [
      {
        partNumber: 1,
        partTitle: "Connected API Integrations",
        imageSrc: "/images/image-6.png",
        whatIsThis: "The API integrations hub managing live connections to your organization's core email, identity, and directory platforms.",
        whatItIsDoing: [
          "Integrations Header & Status: Displays the connectors console with an active count badge ('3 Active') and an overview of automated de-provisioning capabilities.",
          "Sync Connectors Action: Refreshes API handshake tokens, validates secret credentials, and checks endpoint connectivity across all providers.",
          "Clear All Action: Allows administrative reset of connector configurations with security confirmation.",
          "Add Integration Connector Button: Opens the connector catalog to integrate additional enterprise services into the automated deboarding pipeline.",
          "Total Integrations KPI (3): Confirms all 3 core enterprise connectors are recognized and configured.",
          "Healthy & Connected KPI (3): Verifies that all 3 configured connectors report active, healthy API communication.",
          "Re-Auth / Warning KPI (0): Alerts administrators if any OAuth2 refresh tokens or client secrets are approaching expiration.",
          "Disabled / Inactive KPI (0): Tracks paused or decommissioned connectors.",
          "Search & Filter Bar: Enables searching connectors by name, tenant ID, or protocol, alongside a category filter dropdown ('All Categories (3)').",
          "Zoho Mail & Directory Card: Displays connector ID ('SVC-562209-613'), category ('Communication'), connection status ('● Connected'), and service health ('● healthy').",
          "Active Directory Card: Displays connector ID ('SVC-150464-832'), category ('Identity & Access'), verified tenant domain ('ribtechnology.com'), and service health ('● healthy').",
          "Microsoft Entra ID Card: Displays connector ID ('SVC-976077-421'), category ('Identity & Access'), tenant GUID ('b6cd9e46-3baa-49a9-a0...'), and service health ('● healthy').",
          "Monitored Accounts Counter: Shows zero orphaned accounts and tracks active directory sync states per individual connector."
        ]
      }
    ]
  },

  // 6. INTEGRATIONS & RULES -> Offboarding Policies (Image 8)
  {
    id: "offboarding-policies",
    number: "06",
    title: "Offboarding Policies",
    shortTitle: "Offboarding Policies",
    category: "INTEGRATIONS & RULES",
    badge: "Policy Rules",
    parts: [
      {
        partNumber: 1,
        partTitle: "User Lifecycle & Provisioning Rules",
        imageSrc: "/images/image-8.png",
        whatIsThis: "The policy configuration console that establishes automated rules for account provisioning, role assignments, and de-provisioning workflows.",
        whatItIsDoing: [
          "Policy Engine Status Header: Confirms active synchronization ('Live Lifecycle Policy Engine | Microsoft Entra ID & Zoho Mail Synchronized') with an 'Enforce Scan' execution trigger.",
          "Active Policies KPI (10): Reflects total lifecycle provisioning and de-provisioning rules currently active.",
          "Connected Services KPI (3): Lists the count of identity and mailbox platforms obeying these automated policies.",
          "System Users KPI (6): Counts administrators possessing elevated privileges to edit or enforce enterprise lifecycle policies.",
          "Monitored Accounts KPI (23): Total Active Directory accounts regularly inspected by the automated policy scanner.",
          "Policy Navigation Tab 1 (User Creation & Provisioning): Configures default role assignments, mailbox quotas, and license SKUs for new employees.",
          "Policy Navigation Tab 2 (User Roles & Access Control): Maps directory security groups and fine-grained access levels.",
          "Policy Navigation Tab 3 (Service Deprovisioning Rules): Defines specific revocation orders (e.g. disable login before deleting mail aliases).",
          "Policy Navigation Tab 4 (Live Account Operations): Enables on-demand ad-hoc actions for immediate security interventions.",
          "Entra ID Default Role: Dropdown setting default directory role to 'Standard Directory Member (Least Privilege)'.",
          "Entra ID Default License SKU: Dropdown assigning 'Microsoft Entra ID P2 (Identity & Access Security)' to newly created identities.",
          "Force Password Change Toggle: Enforces mandatory password reset upon initial employee login.",
          "Auto-Provision Toggle: Automatically provisions cloud accounts upon creation in HRIS or directory sync.",
          "Zoho Default Mailbox Role: Sets default mailbox tier to 'Standard Mailbox Member'.",
          "Zoho Storage Quota: Configures baseline mailbox storage limit to '25 GB Standard Corporate Quota'.",
          "Zoho Auto-Create Mailbox Toggle: Automates corporate inbox generation when an identity is created.",
          "Zoho ActiveSync & Mobile IMAP Toggle: Controls mobile phone mail sync protocols for incoming staff.",
          "Save Creation Policies Action: Commits all configured rules directly into the policy database."
        ]
      }
    ]
  },

  // 7. INTEGRATIONS & RULES -> System Automation (Images 9 & 9 1)
  {
    id: "system-automation",
    number: "07",
    title: "System Automation",
    shortTitle: "System Automation",
    category: "INTEGRATIONS & RULES",
    badge: "24h Automated Scheduler",
    parts: [
      {
        partNumber: 1,
        partTitle: "Part 1: 24-Hour Policy Scheduler",
        imageSrc: "/images/image-9.png",
        whatIsThis: "The automated background engine that runs daily to scan directories and enforce deboarding rules without manual intervention.",
        whatItIsDoing: [
          "Automation Header & Quick Actions: Features 'Run Instant Policy Scan' for immediate on-demand directory enforcement and 'Save Policy Config' to store schedule adjustments.",
          "Automated Scheduler Engine Banner: Highlights the active 24-hour cron engine ('● Active Engine') that performs nightly directory scans to suspend abandoned accounts.",
          "Schedule Time Metric (02:00 IST): Shows the designated recurring time when automated policy scans trigger during low-activity corporate hours.",
          "Last Background Run Timestamp (2026-10-26 12:58:23): Details the exact date and time the previous automated scan completed.",
          "Next Scheduled Run Timestamp (2026-10-27 02:00:00): Displays the countdown target for the upcoming automated directory audit."
        ]
      },
      {
        partNumber: 2,
        partTitle: "Part 2: Thresholds, Retention & Circuit Breakers",
        imageSrc: "/images/image-9-1.png",
        whatIsThis: "The safety control panel where administrators configure inactivity limits, retention delay windows, and deletion limits.",
        whatItIsDoing: [
          "Inactive Identity Auto-Disable Card: Configures the threshold ('90 Days') after which accounts inactive in Entra ID and Zoho are automatically disabled.",
          "Permanent Identity Purge Card: Enforces a '180 Days' retention limit after which inactive records are permanently expunged to guarantee GDPR compliance.",
          "Offboarding Completed Retention Card: Establishes a '14 Days' grace window following ticket completion before archived employee records are deleted.",
          "Circuit Breaker & Automation Controls Card: Enforces a strict threshold limit of '50 user actions' per scan run to prevent accidental mass account deletions.",
          "Scheduled Policy Run Time Card: Sets the daily execution timestamp ('02:00 am') in Asia/Kolkata (IST) timezone for all automated scans."
        ]
      }
    ]
  },

  // 8. SECURITY & GOVERNANCE -> Audit Logs (Image 10)
  {
    id: "audit-trail",
    number: "08",
    title: "Audit Logs",
    shortTitle: "Audit Logs",
    category: "SECURITY & GOVERNANCE",
    badge: "Immutable Trail",
    parts: [
      {
        partNumber: 1,
        partTitle: "Compliance & Security Audit Trail",
        imageSrc: "/images/image-10.png",
        whatIsThis: "An immutable, tamper-evident security record documenting every user action, automated policy execution, and API call across all systems.",
        whatItIsDoing: [
          "Audit Trail Header & Actions: Provides 'Clear Audit Logs' (with elevated administrator authentication) and 'Sync Entra Audits' to pull Azure AD audit entries directly.",
          "Filter by Connected Service: Dedicated tabs allowing filtering across All Services (1014), Zoho Mail & Directory, Active Directory, and Microsoft Entra ID.",
          "Filter Controls: Features free-text search across user, email, action, and IP, coupled with 'All Modules' and 'All Statuses' dropdowns.",
          "Total Audit Events KPI (1,014): Measures the aggregate count of immutable event records preserved in the system ledger.",
          "Success Logged KPI (989): Tracks completed de-provisionings, policy checks, and admin logins with integrity verified.",
          "Warnings Flagged KPI (25): Isolates anomalies, retried API requests, and permission mismatches detected by the system.",
          "Errors Recorded KPI (0): Confirms zero unresolved system failures or unhandled exceptions.",
          "Timestamp Column: Displays precise ISO timestamps for each recorded event (e.g. '2026-10-26 07:28:23').",
          "User Column: Identifies the operator or system worker avatar initiating the action ('US').",
          "Action Description: Documents the exact operation performed (e.g. 'Executed Scheduled Automated Policy Scan', 'Service Integration Added').",
          "Module Column: Categorizes the affected architecture subsystem ('Configuration', 'Services').",
          "Target Column: Displays target chips specifying the affected directory or service ('Enterprise Directory & Connected Services', 'Zoho Mail & Directory').",
          "IP Address Column: Records the originating IP address for forensic accountability.",
          "Status Pill: Green '● Success' badges indicating successful completion of the recorded operation."
        ]
      }
    ]
  },

  // 9. SECURITY & GOVERNANCE -> User Access & RBAC (Image 11)
  {
    id: "user-management-rbac",
    number: "09",
    title: "User Access & RBAC",
    shortTitle: "User Access & RBAC",
    category: "SECURITY & GOVERNANCE",
    badge: "Role Access Control",
    parts: [
      {
        partNumber: 1,
        partTitle: "Console Operators & Permission Presets",
        imageSrc: "/images/image-11.png",
        whatIsThis: "The Role-Based Access Control (RBAC) panel for managing console operators, department heads, and administrative permissions.",
        whatItIsDoing: [
          "RBAC Governance Header: Displays console actions including 'Permissions Matrix' (interactive permission grid), 'Export' (roster download), and '+ Add Operator' (invite user).",
          "Total Operators KPI (6): Counts all active administrative accounts registered on the console.",
          "Superadmin & IT KPI (2): Tracks elevated infrastructure operators ('1 Super • 1 IT Admin').",
          "HR Operations KPI (1): Measures HR personnel authorized to initiate employee departures.",
          "Managers & Leads KPI (3): Tracks departmental reviewers ('1 Mgrs • 2 Leads') responsible for approval gates.",
          "Active Status KPI (6): Confirms 100% active standing across all operator accounts.",
          "Search & Quick Role Filters: Features search input combined with role chips for Super Admin, IT Admin, HR Manager, Department Manager, and Team Lead.",
          "Operator Profile Column: Shows avatar initials ('RI', 'ZK'), name ('RIB' with 'You' tag, 'zaid khan'), and corporate email.",
          "Role & Access Column: Visualizes assigned role pills ('● Team Lead', '● Department Manager') with concise responsibility summaries.",
          "Department Badge: Clearly identifies the operator's home department ('IT Operations', 'Product Engineering').",
          "Sidebar & Permissions Badge: Explicitly outlines navigation rights and action scopes (e.g. '12/11 Nav • 22 Actions • Preset: CUSTOM' vs '5/11 Nav • 4 Actions • Preset: MANAGER').",
          "Status Pill: Displays account operational status ('● Active').",
          "Creation Date Column: Documents when each operator account was provisioned ('Oct 20, 2026', 'Sep 21, 2026').",
          "Action Controls: Provides direct 'Access' configuration buttons (shield icon) and 3-dot context menus for granular permission customization."
        ]
      }
    ]
  },

  // 10. SECURITY & GOVERNANCE -> Email & SMTP Relay (Images 12 & 12 1)
  {
    id: "email-smtp",
    number: "10",
    title: "Email & SMTP Relay",
    shortTitle: "Email & SMTP Relay",
    category: "SECURITY & GOVERNANCE",
    badge: "Mail Relay Engine",
    parts: [
      {
        partNumber: 1,
        partTitle: "Part 1: SMTP Server & Host URL Setup",
        imageSrc: "/images/image-12.png",
        whatIsThis: "The email server connection screen configuring outgoing mail relays and dynamic host links for all offboarding notifications.",
        whatItIsDoing: [
          "Relay Configuration Header: Houses 'Send Test Mail' (validates SMTP handshake and TLS credentials) and 'Save Configuration' (stores connection parameters).",
          "SMTP Relay Server KPI (smtp.gmail.com:587): Confirms connection to the outbound mail relay on TLS port 587 with Gmail provider authentication.",
          "Portal Link Base URL KPI (https://offboard-client.vercel.app): Stores the dynamic domain URL injected into email notification action buttons.",
          "Stakeholder Approval Roles KPI (5): Confirms all 5 core roles (Team Lead, Manager, HR, IT Admin, Super Admin) will receive approval notifications.",
          "Lifecycle Templates KPI (3): Tracks the 3 active transactional email templates (Approval, Completion, and Provisioning)."
        ]
      },
      {
        partNumber: 2,
        partTitle: "Part 2: Notification Template & Live Preview",
        imageSrc: "/images/image-12-1.png",
        whatIsThis: "The email notification template designer featuring dynamic merge tags and real-time live preview rendering.",
        whatItIsDoing: [
          "Template Selector Tabs: Switches between 'Approval Email Templates' and 'SMTP Server Relay & Host URL'.",
          "Workflow Category Pills: Toggles between 'Offboarding Approval Request', 'Offboarding Completed & Deleted', and 'New Account Provisioned' with a 'Reset to Default' button.",
          "Stakeholder Recipients Selector: Multi-select pill toggles to designate which roles receive dispatches ('5 of 5 Roles Selected').",
          "Additional CC Emails Field: Allows inputting static compliance and security auditing email addresses.",
          "Dynamic Placeholders Palette: Clickable merge tags including {{employeeName}}, {{employeeEmail}}, {{department}}, {{requestedBy}}, {{reason}}, {{services}}, {{approvalLink}}, and {{appUrl}}.",
          "Email Subject & Headline Inputs: Configures the exact subject line and internal banner headline displayed inside the email client.",
          "Custom Message Body Editor: Rich text area for drafting the formal notification and governance instructions delivered to stakeholders.",
          "Action Button Configuration: Sets button CTA label ('Review & Approve Offboarding Request →') and target route ('{{appUrl}}/offboarding-requests').",
          "Checklist Toggles: Checkboxes to optionally embed the multi-role approval checklist and target connector list directly inside the message.",
          "Live Email Client Preview: Interactive simulator with Desktop and Mobile views rendering headers, metadata table, and the approval action button exactly as received by employees."
        ]
      }
    ]
  },

  // 11. SECURITY & GOVERNANCE -> Tenant Settings (Image 13)
  {
    id: "tenant-settings",
    number: "11",
    title: "Tenant Settings",
    shortTitle: "Tenant Settings",
    category: "SECURITY & GOVERNANCE",
    badge: "Tenant & Security",
    parts: [
      {
        partNumber: 1,
        partTitle: "Organization Profile & API Secret",
        imageSrc: "/images/image-13.png",
        whatIsThis: "The enterprise profile and tenant security screen containing company branding, REST API keys, and authentication mandates.",
        whatItIsDoing: [
          "Tenant Settings Header: Displays the master configuration title with the primary 'Save Changes' button.",
          "Company Name Input: Defines official enterprise branding ('R.I.B Technology Ltd.') rendered on all outgoing reports and portal headers.",
          "Primary Admin Email Input: Sets the designated central address ('admin.user@ribtechnology.com') for receiving system-critical alerts.",
          "Production API Secret Field: Displays the masked enterprise REST API token with an unmask visibility toggle icon.",
          "Copy Token Button: Enables one-click token copying to authorize external HRIS webhooks and programmatic deboarding calls.",
          "Enforce Multi-Factor Authentication (MFA): Mandatory policy checkbox enforcing hardware TOTP or FIDO2 tokens for all administrative sessions."
        ]
      }
    ]
  },

  // 12. AUTHENTICATION -> Sign In Console (Image 1)
  {
    id: "authentication",
    number: "00",
    title: "Sign In Console",
    shortTitle: "Sign In Console",
    category: "AUTHENTICATION",
    badge: "Login Console",
    parts: [
      {
        partNumber: 1,
        partTitle: "Console Authentication",
        imageSrc: "/images/image-1.png",
        whatIsThis: "The secure login gateway for administrators and department heads to authenticate and access the OffboardPro console.",
        whatItIsDoing: [
          "Brand & Edition Badge: Features the OffboardPro shield emblem, logotype, and 'ENTERPRISE' edition badge.",
          "Console Subtitle: Outlines system purpose ('High-Precision Deboarding & Access Governance Console').",
          "Corporate Email ID Field: Input field with email icon enforcing corporate domain credentials (e.g. 'admin@company.com').",
          "Password Field: Secure masked input field with padlock icon for authenticated console passkeys.",
          "Sign In Button: High-visibility primary action button with arrow icon executing identity validation and triggering MFA challenges.",
          "Compliance Assurance Footer: Verifies infrastructure adherence to SOC2 Type II and GDPR regulatory standards.",
          "Security Session Logging: Automatically records operator IP, timestamp, and browser user-agent to thwart unauthorized access attempts."
        ]
      }
    ]
  }
];
