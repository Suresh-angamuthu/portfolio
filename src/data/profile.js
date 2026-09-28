// All portfolio content lives here. Edit text in this file; the components only render it.

export const profile = {
  name: 'Suresh A',
  role: 'Senior Full Stack Engineer',
  location: 'Chennai, India',
  email: 'stuartsuresh.a@gmail.com',
  phone: '+91 7092926097',
  linkedin: 'https://linkedin.com/in/sureshangamuthu',
  // Resume PDF in /public; resumeName is the filename visitors get when they download it.
  resume: '/Suresh_A2.pdf',
  resumeName: 'Suresh_A_Senior_Full_Stack_Engineer_Resume.pdf',
  tagline:
    'I build multi-tenant SaaS and enterprise platforms end to end, with fault-tolerant Elixir backends and modern Vue frontends.',
  about: [
    'I am a full-stack engineer with six years of experience turning business requirements into production software. My core stack is Elixir, Phoenix and PostgreSQL on the backend and Vue 3 on the frontend, and I have also shipped Node.js and Firebase services.',
    'I have delivered six production products across EdTech, facility management, climate tech, manufacturing, retail and agriculture. I usually own a feature from the first client conversation through data modelling, APIs, UI, payment integration and release.',
    'Before software, I worked in data operations at Axis Bank. That is where I learned how costly a single wrong record is, and it still shapes how I build validation, imports and payment reconciliation.',
  ],
}

export const stats = [
  { value: '6', label: 'Years building production software' },
  { value: '6', label: 'Products shipped end to end' },
  { value: '5,000+', label: 'Active users across products' },
  { value: '40%', label: 'Faster reports via query and schema tuning' },
]

export const skills = [
  {
    group: 'Backend',
    items: ['Elixir', 'OTP / GenServer', 'Phoenix', 'Phoenix LiveView', 'Ecto', 'Oban', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    group: 'Frontend',
    items: ['Vue 3 (Composition API)', 'Vite', 'Pinia', 'shadcn-vue', 'Tailwind CSS', 'TanStack Table', 'Nuxt.js', 'Vuetify', 'Chart.js'],
  },
  {
    group: 'Data & Storage',
    items: ['PostgreSQL', 'Query tuning & indexing', 'Schema-per-tenant', 'Firebase Firestore', 'S3 / DO Spaces', 'IndexedDB'],
  },
  {
    group: 'Integrations',
    items: ['BillDesk', 'Razorpay', 'WhatsApp Business API', 'Google Drive API', 'Loan-provider webhooks', 'SMTP / SMS / OTP'],
  },
  {
    group: 'Architecture & Security',
    items: ['Multi-tenant SaaS', 'Background job orchestration', 'Single sign-on', 'JWT / Guardian', 'RBAC', 'Audit trails'],
  },
  {
    group: 'Delivery',
    items: ['Git / GitHub / GitLab', 'Linux servers', 'Elixir releases', 'Firebase Cloud Functions', 'Capacitor (Android)', 'Agile / Scrum'],
  },
]

export const projects = [
  {
    id: 'sastra',
    name: 'Sastra',
    domain: 'EdTech',
    title: 'University ERP, LMS and Helpdesk',
    summary:
      'A complete digital campus for a university running online degree programmes: students apply, pay fees, learn, take exams and raise support tickets in one connected suite.',
    stack: ['Elixir', 'Phoenix', 'LiveView', 'Oban', 'PostgreSQL', 'Vue 3', 'shadcn-vue', 'Tailwind', 'BillDesk'],
    highlights: [
      'Admission-to-graduation ERP with online applications, fee payments, receipts, GST and bulk student promotion.',
      'Self-healing payment reconciliation: a supervised GenServer re-checks pending BillDesk transactions so no paid student is left unadmitted.',
      'Multi-tenant LMS with single sign-on from the ERP, online exams, assignments and forums.',
    ],
    details: [
      { h: 'Problem', p: 'Admissions, fees, learning and student support lived in separate tools, and a missed payment callback could leave a student who had paid stuck in "pending".' },
      { h: 'What I built', p: 'Phoenix backends for the ERP, LMS and helpdesk; Vue 3 portals for applicants, students, admins and helpdesk agents; BillDesk payments with signed-callback verification; channel-partner revenue-split reports; education-loan webhooks; and bulk promotion and graduation workflows.' },
      { h: 'Engineering highlights', list: [
        'Supervised GenServers and Oban workers for payment reconciliation, compliance validation and scheduled data uploads, isolated so a failing job never affects the API.',
        'Secure byte-range video streaming from object storage, so playback starts instantly without exposing storage URLs.',
        'Resumable Google Drive to LMS bulk course importer with preview, approval and live progress.',
        'Replaced repeated multi-table course lookups with a precomputed exam-paper table, simplifying every downstream screen.',
      ] },
    ],
  },
  {
    id: 'carbon',
    name: 'Carbon',
    domain: 'Climate Tech',
    title: 'Greenhouse Gas Emission Accounting SaaS',
    summary:
      'Companies enter activity data such as fuel, electricity, travel and purchases; the platform calculates their carbon footprint, fills sustainability disclosures and benchmarks them against peers.',
    stack: ['Elixir', 'Phoenix', 'Oban', 'PostgreSQL', 'Vue.js', 'Vuetify', 'Chart.js'],
    highlights: [
      'Scope 1, 2 and 3 calculation engine across 10 emission categories with automatic unit conversion.',
      'Versioned emission-factor datasets per client, so historical reports stay exactly reproducible.',
      'Auto-filled CDP and TCFD disclosure reports and peer benchmarking dashboards.',
    ],
    details: [
      { h: 'Problem', p: 'Sustainability teams were calculating emissions in spreadsheets and filling disclosure questionnaires by hand every year.' },
      { h: 'What I built', p: 'A schema-per-tenant SaaS where each client organisation gets isolated data and its own reference datasets, a configurable step-by-step calculator, emission dashboards, report exports and subscription billing.' },
      { h: 'Engineering highlights', list: [
        'Calculation engine covering fuel combustion, vehicles, refrigerants, electricity by grid region, purchased goods, capital goods, transport, travel and waste.',
        'Unit normalisation layer so users can enter litres, gallons, kWh, therms, km or miles.',
        'Daily Oban job that creates invoices and advances billing cycles in a single transaction.',
      ] },
    ],
  },
  {
    id: 'inconn',
    name: 'Inconn',
    domain: 'Facility Management',
    title: 'Integrated Facility Management (CMMS) Platform',
    summary:
      'Software that runs buildings: it plans and tracks maintenance for every asset, manages site staff and measures each service contract against its SLA.',
    stack: ['Elixir', 'Phoenix', 'GenServer', 'PostgreSQL', 'Nuxt.js', 'Vue.js'],
    highlights: [
      'Preventive-maintenance scheduler that auto-generates time-zone-aware work orders.',
      'SLA scorecards with MTBF, MTTR and on-time completion for every contract.',
      'Rosters, attendance and inventory modules that improved workforce coordination by 30%.',
    ],
    details: [
      { h: 'Problem', p: 'Facility teams tracked maintenance, complaints and staff attendance manually across many sites, with no reliable way to prove SLA compliance to clients.' },
      { h: 'What I built', p: 'Multi-tenant modules for asset hierarchies, work-order templates and checklists, work-permit and LOTO safety approvals, contracts and SLA tracking, rosters and attendance, and store inventory.' },
      { h: 'Engineering highlights', list: [
        'GenServer schedulers for work-order generation, alert escalation and automatic closure of resolved requests.',
        'QR codes on every asset and location, so anyone can raise a complaint already linked to the right equipment.',
        'Reassign and reschedule requests routed through approval rules.',
      ] },
    ],
  },
  {
    id: 'rolocrm',
    name: 'RoloCRM',
    domain: 'Retail',
    title: 'Retail Loyalty and Customer Engagement SaaS',
    summary:
      "When a customer buys in store, the POS sends the sale to RoloCRM. It tracks visits and spend, runs loyalty points and tiers, segments customers and sends targeted WhatsApp offers.",
    stack: ['Node.js', 'Express.js', 'Firebase', 'Firestore', 'Vue.js', 'Phoenix LiveView', 'Razorpay'],
    highlights: [
      'POS-integrated sales API feeding loyalty points, tiers, clubs and visit analytics.',
      'Dynamic customer segmentation builder across customer, visit and purchase data.',
      'Scheduled WhatsApp campaigns with delivery tracking; lifted customer retention by 20%.',
    ],
    details: [
      { h: 'Problem', p: 'Multi-store retail brands had sales data in their POS but no way to reward, segment or re-engage customers.' },
      { h: 'What I built', p: 'Firebase Cloud Functions APIs, a Vue.js dashboard for loyalty configuration, segmentation and campaigns, CSV customer import, OTP customer login, and a Phoenix LiveView subscription console with Razorpay billing.' },
      { h: 'Engineering highlights', list: [
        'Scheduled function that picks due campaigns and marks them sent before dispatching, so no campaign goes out twice.',
        'Provider-agnostic WhatsApp templates supporting two messaging providers, with delivery-status webhooks.',
        'Layered security: account status check, API keys for POS routes and verified tokens for dashboard routes.',
      ] },
    ],
  },
  {
    id: 'jewelflow',
    name: 'Jewelflow',
    domain: 'Manufacturing',
    title: 'Jewellery Manufacturing Production ERP',
    summary:
      'A shop-floor system that follows every jewellery order from import to completion, department by department, while keeping every gram of gold accounted for.',
    stack: ['Elixir', 'Phoenix', 'PostgreSQL', 'Vue.js', 'Vuetify'],
    highlights: [
      'Department-wise tracking with send / receive hand-offs and an 8-state order workflow.',
      'Weight-accurate split and merge of spoilt orders into linked child orders.',
      'QR-tagged orders and a full audit trail; improved operational efficiency by 25%.',
    ],
    details: [
      { h: 'Problem', p: 'Orders moved between production departments on paper, making it hard to find an order, see delays or account for gold lost to spoilage.' },
      { h: 'What I built', p: 'CSV order import with row-level validation, QR code per order, machine and worker allotment, bulk status changes with per-order error reporting, dashboards and production reports.' },
      { h: 'Engineering highlights', list: [
        'Spoilt pieces are split into a linked child order with validated weight and piece counts, then merged back after rework.',
        'Every assignment, transfer and status change is recorded with who did it and when.',
        'Flexible CSV import that keeps unknown columns instead of dropping data.',
      ] },
    ],
  },
  {
    id: 'saro',
    name: 'Saro',
    domain: 'Agri-Development',
    title: 'Agricultural Programme Monitoring Platform',
    summary:
      'Field officers register farmers and equipment in rural areas with no internet; the platform turns that data into the impact reports a funding agency requires.',
    stack: ['Elixir', 'Phoenix', 'PostgreSQL', 'Vue.js', 'Capacitor', 'IndexedDB'],
    highlights: [
      'Offline-first Android app that captured 1,000+ farmer records without connectivity.',
      'Safe sync that re-links equipment to farmers after upload and never loses unsynced data.',
      'Quarterly and annual donor reports broken down by gender and youth.',
    ],
    details: [
      { h: 'Problem', p: 'Field officers worked where there was no network, and donor reports had to be assembled by hand from paper forms.' },
      { h: 'What I built', p: 'A Capacitor Android app with local storage, a web portal for trainings, events, equipment purchases, expenses and targets, and automated reporting.' },
      { h: 'Engineering highlights', list: [
        'Records created offline use temporary IDs; on sync the farmer is uploaded first and dependent records are re-linked to the real server ID.',
        'Sign-out is blocked while unsynced data exists, so field work is never lost.',
      ] },
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer (Full Stack)',
    company: 'Ardhika Software Technologies Pvt. Ltd.',
    place: 'Chennai',
    period: 'Oct 2020 – Present',
    points: [
      'Delivered 6 production products end to end for clients in EdTech, facility management, climate tech, manufacturing, retail and agriculture, serving 5,000+ active users.',
      'Designed schema-per-tenant SaaS backends in Phoenix so new client organisations onboard by subdomain with isolated data.',
      'Built fault-tolerant background processing with OTP GenServers, Supervisors and Oban for payments, SLA escalation, scheduling and invoicing.',
      'Integrated BillDesk and Razorpay with signed-callback verification and automatic reconciliation of pending transactions.',
      'Improved report and dashboard performance by up to 40% through schema redesign, indexing and precomputed data.',
      'Worked directly with clients in 100+ requirement discussions and Agile sprints; handled production releases.',
    ],
  },
  {
    role: 'Data Entry Operator',
    company: 'Axis Bank (via Sun Facilities Services)',
    place: 'Chennai',
    period: 'Mar 2019 – Jul 2020',
    points: [
      'Maintained customer and transaction records in the core banking system to audit and compliance standards.',
      'Prepared transaction-volume reports for branch management and resolved customer account queries.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science, Computer Science',
  school: 'Hindustan College of Arts & Science, Chennai',
}
