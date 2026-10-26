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
          "Displays high-level statistics: Total Synced (23), Active Access (23), Completed (28), and Failed Actions (0).",
          "Visualizes the 5-phase execution pipeline from Phase 01 (Initiated) through Phase 04 (Completed) and Phase 05 (Exceptions).",
          "Provides quick action buttons to start a '+ New Offboarding', trigger manual 'Sync', or view the 'Audit Trail'."
        ]
      },
      {
        partNumber: 2,
        partTitle: "Part 2: Connected SaaS Services & Activity Feed",
        imageSrc: "/images/image-2-2.png",
        whatIsThis: "The middle dashboard panel showing all connected identity providers and real-time offboarding activity across the organization.",
        whatItIsDoing: [
          "Shows active connection status for On-Premises Active Directory and Microsoft Entra ID via OAuth2 and Graph API.",
          "Displays a live stream of recent employee offboardings with department tags and status badges (Completed, Dept Approvals).",
          "Provides quick links to 'Configure Endpoints' and 'Open Requests Manager'."
        ]
      },
      {
        partNumber: 3,
        partTitle: "Part 3: Status Distribution & Queues",
        imageSrc: "/images/image-2-3.png",
        whatIsThis: "The lower analytics section showing offboarding breakdown charts, API call volumes, and pending approval queues.",
        whatItIsDoing: [
          "Displays a visual status chart showing the percentage of Completed, In Progress, Pending Approval, and Failed requests.",
          "Monitors automated identity revocation hits across Active Directory and Microsoft Entra ID APIs.",
          "Lists pending approvals awaiting manager or department sign-off."
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
        whatIsThis: "The main management table where all employee deboarding tickets are created, tracked, approved, and finalized.",
        whatItIsDoing: [
          "Filters tickets by lifecycle stage: All (38), Awaiting HR (3), Dept Approvals (7), Ready to Finalize (0), and Completed (28).",
          "Displays multi-role approval status chips for HR, IT, Manager, and Team Lead (e.g. '4/4 signed • Ready').",
          "Shows real-time progress bars (0% to 100%) as accounts and licenses are systematically revoked.",
          "Provides actions to view full audit details, download formal completion certificates, or delete tickets."
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
          "Tracks total corporate identities, active employees, and accounts currently in the offboarding pipeline.",
          "Filters staff by assigned Microsoft 365 cloud licenses (Teams Exploratory, Teams Premium, Teams Essentials, Fabric, Entra ID P2).",
          "Allows administrators to perform 'Bulk Add' via CSV, launch the 'Onboarding Hub', or manually register a new employee."
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
          "Aggregates all sign-off requests requiring action from HR, IT Admin, Department Managers, and Team Leads.",
          "Shows total requests (47), completed approvals (11), and halted/rejected escalations (36).",
          "Highlights high-priority departures (HIGH tag) requiring urgent administrative sign-off.",
          "Enforces multi-department consensus to prevent accidental or unauthorized identity deletion."
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
          "Monitors live health status for Zoho Mail & Directory, On-Premises Active Directory, and Microsoft Entra ID.",
          "Verifies OAuth2 tokens and Microsoft Graph API communication are operational.",
          "Provides a '+ Add Integration Connector' button to connect new enterprise tools and a 'Sync Connectors' button to refresh states."
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
          "Sets default directory roles (Standard Directory Member) and license SKUs (Entra ID P2) for Microsoft Entra ID.",
          "Defines default mailbox roles and corporate storage quotas (25 GB) for Zoho Mail.",
          "Toggles security settings like 'Force Password Change on First Sign-in' and 'Auto-Provision on New Hire Creation'.",
          "Features an 'Enforce Scan' button to scan all 23 monitored accounts and ensure policy compliance."
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
          "Executes a daily background scan at 02:00 IST to find inactive users and process scheduled departures.",
          "Displays timestamps for the last completed run and the next upcoming scheduled execution.",
          "Provides a 'Run Instant Policy Scan' button for on-demand compliance verification."
        ]
      },
      {
        partNumber: 2,
        partTitle: "Part 2: Thresholds, Retention & Circuit Breakers",
        imageSrc: "/images/image-9-1.png",
        whatIsThis: "The safety control panel where administrators configure inactivity limits, retention delay windows, and deletion limits.",
        whatItIsDoing: [
          "Inactive Identity Auto-Disable: Automatically revokes access after 90 days of inactivity across Entra ID & Zoho.",
          "Permanent Identity Purge: Permanently deletes accounts after 180 days to comply with GDPR privacy rules.",
          "Offboarding Completed Retention: Keeps archived records for 14 days after completion before final cleanup.",
          "Circuit Breaker: Enforces a strict limit of 50 actions per run to prevent accidental mass deletions."
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
          "Records 1,014 total audit events with timestamps, operator emails, target endpoints, IP addresses, and success/failure statuses.",
          "Highlights 25 security anomalies and warnings detected during automated runs.",
          "Allows filtering logs by connected service (All Services, Zoho Mail, Active Directory, Microsoft Entra ID).",
          "Includes a 'Sync Entra Audits' button to pull external administrative events directly from Azure Active Directory."
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
          "Displays registered operators categorized into 5 tiers: Super Admin, IT Admin, HR Manager, Department Manager, and Team Lead.",
          "Assigns granular navigation presets (e.g. CUSTOM preset with 12/11 nav links and 22 actions; MANAGER preset with 5/11 nav links).",
          "Allows creating new operators with '+ Add Operator' and customizing individual permissions with the 'Access' button."
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
          "Connects to the enterprise mail server (smtp.gmail.com:587) with authenticated credentials.",
          "Configures the base portal link (https://offboard-client.vercel.app) included in notification emails.",
          "Provides a 'Send Test Mail' button to verify TLS connections and delivery."
        ]
      },
      {
        partNumber: 2,
        partTitle: "Part 2: Notification Template & Live Preview",
        imageSrc: "/images/image-12-1.png",
        whatIsThis: "The email notification template designer featuring dynamic merge tags and real-time live preview rendering.",
        whatItIsDoing: [
          "Selects recipient roles to notify (Team Lead, Dept Manager, HR Manager, IT Admin, Super Admin).",
          "Supports dynamic tags like {{employeeName}}, {{department}}, and one-click {{approvalLink}}.",
          "Provides interactive Desktop and Mobile email previews showing the exact message delivered to stakeholders."
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
          "Configures company identity ('R.I.B Technology Ltd.') and the Primary Admin Email for system notifications.",
          "Houses the Production REST API Secret with reveal and 'Copy Token' features for external HRIS and webhook integrations.",
          "Enforces mandatory Multi-Factor Authentication (MFA / TOTP / FIDO2) across all admin console sessions."
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
          "Authenticates operators using corporate credentials (Corporate Email ID and Password).",
          "Enforces SOC2 Type II and GDPR compliant access infrastructure.",
          "Logs all login attempts, timestamps, and IP addresses to prevent credential abuse."
        ]
      }
    ]
  }
];


export const WORKFLOW_PHASES = [
  {
    phase: "01",
    name: "Initiated",
    description: "Employee departure registered via HR, webhook, or manual request. Initial identity snapshot captured.",
    color: "from-blue-500 to-sky-500",
    bgBadge: "bg-blue-50 text-blue-700 border-blue-200",
    handledIn: "Offboarding Requests & Dashboard"
  },
  {
    phase: "02",
    name: "In Progress",
    description: "System verifies directory accounts in Microsoft Entra ID, Active Directory, and Zoho. Initial notifications sent.",
    color: "from-amber-500 to-yellow-500",
    bgBadge: "bg-amber-50 text-amber-700 border-amber-200",
    handledIn: "Employees Directory & Policies"
  },
  {
    phase: "03",
    name: "Approvals",
    description: "Multi-role gating requires sign-offs from HR, IT, Department Manager, and Team Lead before API revocation.",
    color: "from-purple-500 to-indigo-500",
    bgBadge: "bg-purple-50 text-purple-700 border-purple-200",
    handledIn: "Approvals Queue"
  },
  {
    phase: "04",
    name: "Completed",
    description: "All 4 approvals verified. Accounts disabled, licenses reclaimed, email forwarding configured, certificate issued.",
    color: "from-emerald-500 to-teal-500",
    bgBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    handledIn: "Services & Connectors & Requests"
  },
  {
    phase: "05",
    name: "Exceptions",
    description: "Flagged workflows requiring manual intervention (e.g., API token expiration, legal hold, circuit breaker).",
    color: "from-rose-500 to-red-500",
    bgBadge: "bg-rose-50 text-rose-700 border-rose-200",
    handledIn: "Audit Logs & Automation"
  }
];

export const ROLE_PERMISSIONS_MATRIX = [
  {
    feature: "View Executive Dashboard",
    superAdmin: true,
    itAdmin: true,
    hrManager: true,
    deptManager: true,
    teamLead: true
  },
  {
    feature: "Initiate Offboarding Request",
    superAdmin: true,
    itAdmin: true,
    hrManager: true,
    deptManager: false,
    teamLead: false
  },
  {
    feature: "Sign-Off Department Approval",
    superAdmin: true,
    itAdmin: true,
    hrManager: true,
    deptManager: true,
    teamLead: true
  },
  {
    feature: "Manage Services & Connectors",
    superAdmin: true,
    itAdmin: true,
    hrManager: false,
    deptManager: false,
    teamLead: false
  },
  {
    feature: "Configure Automation & Schedulers",
    superAdmin: true,
    itAdmin: true,
    hrManager: false,
    deptManager: false,
    teamLead: false
  },
  {
    feature: "View Audit Logs & Compliance Trail",
    superAdmin: true,
    itAdmin: true,
    hrManager: false,
    deptManager: false,
    teamLead: false
  },
  {
    feature: "Manage User Access & RBAC",
    superAdmin: true,
    itAdmin: false,
    hrManager: false,
    deptManager: false,
    teamLead: false
  },
  {
    feature: "Configure Email & SMTP Relay Templates",
    superAdmin: true,
    itAdmin: true,
    hrManager: false,
    deptManager: false,
    teamLead: false
  },
  {
    feature: "Tenant Settings & Production API Secrets",
    superAdmin: true,
    itAdmin: false,
    hrManager: false,
    deptManager: false,
    teamLead: false
  }
];
