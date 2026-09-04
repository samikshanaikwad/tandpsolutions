import {
  ServiceItem,
  PanelProduct,
  SPMMachine,
  TechItem,
  BrandPartner,
  IndustryItem,
  WhyUsPoint,
} from '../types';

export const COMPANY_INFO = {
  name: 'T & P Solution',
  tagline: 'SPM & Control Panel Manufacturing Company',
  headline: 'Powering the Future of Industrial Automation',
  subheadline:
    'Leading experts in Custom Control Panel Manufacturing, Special Purpose Machines (SPM), and End-to-End Industrial Automation.',
  address: {
    line1: 'Plot No. 42B, Industrial Area Phase II',
    locality: 'Bommasandra',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560099',
    country: 'India',
    full: 'Bommasandra, Bengaluru, Karnataka - 560099',
  },
  phones: [
    { label: 'Tarun (Engineering & Projects)', number: '+91 8762933980', raw: '+918762933980' },
    { label: 'Pavan (Technical & Operations)', number: '+91 9380021201', raw: '+919380021201' },
  ],
  emails: [
    { label: 'Projects & Inquiries', address: 'tarun@tandpsolution.com' },
    { label: 'Technical Operations', address: 'pavan@tandpsolution.com' },
  ],
  website: 'www.tandpsolution.com',
  workingHours: 'Mon - Sat: 8:30 AM - 7:30 PM IST (24/7 Breakdown Support)',
  established: '2018',
  metrics: [
    { value: '500+', label: 'Panels Fabricated & Tested' },
    { value: '85+', label: 'Custom SPM Units Deployed' },
    { value: '99.8%', label: 'Operational Reliability Rate' },
    { value: '24/7', label: 'Dedicated Breakdown Assistance' },
  ],
  overview:
    'We are a team of highly skilled engineers and technicians specializing in Programmable Logic Controller (PLC) wiring, programming, custom machine development, and industrial system integration.',
  vision:
    'To become a trusted automation partner for industries by delivering innovative engineering solutions and reliable technical support.',
  mission:
    'To provide high-quality automation systems, control panels, and SPM machines that enhance industrial productivity and reliability.',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'control-panel-manufacturing',
    title: 'Control Panel Manufacturing',
    shortDesc: 'Custom Control Panel Design & Assembly, PLC Panel Wiring & Installation.',
    fullDesc:
      'We fabricate custom-built, standard-compliant low-voltage and medium-voltage electrical control panels. From CAD electrical schematics and enclosure selection to high-precision component placement, laser-printed wire ferruling, and factory acceptance testing (FAT).',
    features: [
      'Custom sheet metal enclosure layout (CRCA / SS304)',
      'Neat wire dressing with continuous channel ducting',
      'Laser-printed computerized wire ferruling for easy maintenance',
      'High fault level copper busbar routing and insulation',
      'Pre-dispatch 100% full-load and insulation resistance (Megger) testing',
    ],
    specs: ['IP54 / IP55 / IP65 Ingress Ratings', 'IEC 61439 & IS Standards', 'Tested up to 6300A Busbars'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Cpu',
  },
  {
    id: 'plc-hmi-programming',
    title: 'PLC & HMI Programming',
    shortDesc: 'Custom HMI design, visualization, and PLC automation software for data logging & remote monitoring.',
    fullDesc:
      'Our automation engineers develop robust, fail-safe ladder logic, structured text, and function block logic for industrial machines. We integrate intuitive touchscreen operator HMIs and SCADA dashboards for cycle monitoring, alarm annunciation, and production data logging.',
    features: [
      'Multi-brand PLC code architecture (Delta, Siemens, Mitsubishi, Schneider)',
      'Ergonomic, high-resolution HMI screen layouts with live animations',
      'Comprehensive fault diagnostics, alarm history, and recipe management',
      'Modbus TCP/RTU, Profinet, and EtherCAT network interfaces',
      'IoT gateway integration for remote diagnostics and cloud dashboards',
    ],
    specs: ['Cycle Time Optimization', 'Fail-safe Emergency Interlocks', 'Audit Trail & Batch Records'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Code',
  },
  {
    id: 'industrial-automation-solutions',
    title: 'Industrial Automation Solutions',
    shortDesc: 'System integration for real-time monitoring, process automation, and robotic process automation.',
    fullDesc:
      'Turnkey end-to-end automation systems bridging mechanical mechanisms, sensory feedback, pneumatic/hydraulic actuators, and electrical logic controllers. We upgrade manual assembly workstations into semi-automatic or fully automatic synchronized lines.',
    features: [
      'Sensor integration: Vision cameras, laser distance sensors, load cells',
      'Servo multi-axis synchronized positioning and indexing tables',
      'Pneumatic and electro-hydraulic valve island automation',
      'Integration with SCADA and industrial MES for OEE analytics',
      'Safe torque off (STO) and safety light curtain implementations',
    ],
    specs: ['OEE Improvements up to 45%', 'Precision Repetitive Tolerance ±0.02mm', 'Zero Defect Poka-Yoke'],
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Workflow',
  },
  {
    id: 'electrical-maintenance-repairs',
    title: 'Electrical Maintenance & Repairs',
    shortDesc: 'Preventive & emergency maintenance, fault detection, motor/drive maintenance, and energy efficiency upgrades.',
    fullDesc:
      'Rapid breakdown response and scheduled preventive maintenance programs to ensure near-zero unplanned line stoppages. Our field technicians inspect thermal hotspots, calibrate VFD drives, resolve communication network dropouts, and upgrade obsolete control gear.',
    features: [
      'Thermal imaging thermography of panel busbars and contactors',
      'VFD drive parameter tuning and motor winding impedance checks',
      'Fault analysis using digital oscilloscopes and bus network analyzers',
      'Power factor improvement through capacitor bank maintenance',
      'Migration of legacy relay panels to modern modular PLC controllers',
    ],
    specs: ['2-4 Hour Emergency On-site Dispatch (Bengaluru Area)', 'Annual Maintenance Contracts (AMC)', 'Guaranteed Genuine Spares'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Wrench',
  },
];

export const PANEL_PRODUCTS: PanelProduct[] = [
  {
    id: 'plc-panel',
    name: 'PLC Panels (Automation Panel)',
    acronym: 'PLC',
    tagline: 'Intelligent control heart for automated machines and processing lines',
    description:
      'Engineered to house modern Programmable Logic Controllers, regulated switch-mode DC power supplies, surge protectors, interface relays, and high-density terminal blocks. Completely noise-shielded for sensitive analog signals.',
    voltageRating: '24V DC / 230V AC / 415V AC',
    enclosureRating: 'IP54 / IP55 / IP65 (Rittal / Custom CRCA Powder Coated)',
    keyFeatures: [
      'High-speed input/output isolation relays',
      'Organized Din-rail channel separation for AC, DC, and signal cables',
      'Door-mounted HMI interface with transparent acrylic protection',
      'Forced air ventilation with exhaust louvers and dust filters',
    ],
    commonApplications: ['Packaging machinery', 'Assembly transfer lines', 'Water treatment plants', 'Chemical batching systems'],
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'mcc-panel',
    name: 'MCC (Motor Control Centre)',
    acronym: 'MCC',
    tagline: 'Centralized heavy-duty power and motor protection assemblies',
    description:
      'Modular multi-tier assemblies accommodating DOL, Star-Delta, soft starters, and circuit breakers. Designed for severe short-circuit withstand levels with draw-out or fixed feeder compartment options.',
    voltageRating: '415V AC, 3-Phase, 50Hz (Up to 3200A busbars)',
    enclosureRating: 'IP54 / IP55, Form 3b / Form 4 Separation',
    keyFeatures: [
      'Individual motor starter compartments with mechanical interlocking',
      'Microprocessor-based motor protection relays (Overload, Phase reversal, Earth fault)',
      'Electrolytic high-conductivity E91 grade copper busbars',
      'Easy cable termination alleys with ample spreader space',
    ],
    commonApplications: ['Pumping stations', 'Cement plants', 'Rolling mills', 'Central HVAC chiller systems'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'pcc-panel',
    name: 'PCC (Power Control Centre)',
    acronym: 'PCC',
    tagline: 'Main distribution switchboards for plant-wide electrical management',
    description:
      'The primary electrical power intake hub installed right after transformer stations or diesel generators. Features high-capacity Air Circuit Breakers (ACBs) with microprocessor releases for total facility protection.',
    voltageRating: '415V AC, 3-Phase 4-Wire, Busbars rated up to 6300A',
    enclosureRating: 'IP52 / IP54, 2mm CRCA heavy-gauge structure',
    keyFeatures: [
      'ACB integration with 4-pole motorized switching and bus couplers',
      'Digital multifunction power analyzers with RS485 communication',
      'Phase segregation barriers and inter-panel fireproof seals',
      'Cast resin or tape insulated heavy copper main busbars',
    ],
    commonApplications: ['Industrial factory main distribution', 'Large infrastructure projects', 'Data centers', 'Commercial complexes'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'apfc-panel',
    name: 'APFC (Power Factor Panel)',
    acronym: 'APFC',
    tagline: 'Automatic reactive power compensation for maximum energy savings',
    description:
      'Intelligent power factor correction panels containing heavy-duty gas-filled capacitors, detuned harmonic reactors, and fast micro-controller APFC relays that step capacitors in and out based on load demands.',
    voltageRating: '415V AC (Capacity: 25 kVAR to 1000 kVAR)',
    enclosureRating: 'IP42 / IP52 with internal thermal exhaust blowers',
    keyFeatures: [
      'Maintains target Power Factor above 0.98, avoiding grid penalty surcharges',
      'Detuned 7% or 14% harmonic filter reactors to protect capacitor elements',
      'Special capacitor-duty contactors with pre-insertion damping resistors',
      'Real-time voltage, current, THD, and reactive power status display',
    ],
    commonApplications: ['Engineering manufacturing plants', 'Injection moulding shops', 'Textile mills', 'Cold storage facilities'],
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'vfd-panel',
    name: 'VFD (Drive Panel)',
    acronym: 'VFD',
    tagline: 'Variable speed regulation panels for pumps, fans, and process motors',
    description:
      'Custom enclosed AC variable frequency drive enclosures with line reactors, output dV/dt filters, and dedicated cooling channels. Eliminates mechanical stress during starting and generates substantial energy savings.',
    voltageRating: '230V / 415V AC (From 0.75 kW to 315 kW drives)',
    enclosureRating: 'IP54 with thermal cooling fan hoods and air filters',
    keyFeatures: [
      'Integrated bypass switchgear (VFD to DOL/Star-Delta changeover)',
      'EMC/RFI noise suppression filters preventing sensor disturbance',
      'Door-mounted digital keypad and analog speed potentiometer',
      'Closed-loop PID pressure/temperature feedback support',
    ],
    commonApplications: ['Compressors & blowers', 'Conveyor sorting systems', 'Boiler feed pumps', 'Extruders & mixers'],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'custom-industrial-panel',
    name: 'Custom Industrial Control Panels',
    acronym: 'CUSTOM',
    tagline: 'Bespoke control architectures tailor-made for specialized manufacturing equipment',
    description:
      'Panels engineered strictly around client mechanical footprints, environmental constraints, or hazardous area guidelines. Includes stainless steel SS304/SS316 enclosures for washdown food and pharmaceutical spaces.',
    voltageRating: 'Custom multi-voltage configurations',
    enclosureRating: 'IP65 / IP66 / NEMA 4X options available',
    keyFeatures: [
      'Bespoke physical dimensional layout to fit inside machine frames',
      'Safety relays with dual-channel emergency stop circuits',
      'Plug-and-play quick-disconnect Harting heavy-duty industrial connectors',
      'Full bilingual label engraving and custom customer branding plates',
    ],
    commonApplications: ['OEM specialized machinery', 'Cleanroom pharmaceutical units', 'Paint shop conveyors', 'Furnace heating control'],
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
  },
];

export const SPM_MACHINES: SPMMachine[] = [
  {
    id: 'custom-automation-machines',
    name: 'Custom Automation Machines',
    category: 'Application-Specific Automation',
    tagline: 'Tailor-built machinery designed around your exact component geometry and production goals',
    description:
      'Engineered from the ground up to automate complex, repetitive, or hazardous manual tasks. We synthesize mechanical jigs, servo slides, pneumatic pick-and-place grippers, and custom PLC control logic to achieve unmatched takt times.',
    cycleTime: '2.5s to 12s per piece (depending on process)',
    controlArchitecture: 'Delta / Siemens S7-1200 PLC + Kinematic Servo Drives',
    keyFeatures: [
      'Finite element designed rigid welded structural steel chassis',
      'Pneumatic and servo cam-driven motion profiles',
      'Sensory poka-yoke detection preventing defective part loading',
      'Quick-change tooling nests for fast component changeovers',
    ],
    idealIndustries: ['Automotive component makers', 'Sheet metal pressing', 'Hardware manufacturing'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'assembly-automation-machines',
    name: 'Assembly Automation Machines',
    category: 'High-Speed Multi-Station Assembly',
    tagline: 'Rotary indexing tables and linear transfer assemblies with inline quality validation',
    description:
      'Synchronized multi-station assembly machines featuring precision cam indexers, vibratory bowl part feeders, vision-guided component positioning, and automated torque-controlled screwdriving.',
    cycleTime: '15 to 45 parts per minute',
    controlArchitecture: 'Mitsubishi / Delta PLC + Multi-axis Servo + HMI Recipe Storage',
    keyFeatures: [
      'Precision rotary dial indexers with zero backlash lock-up',
      'Integrated automated screw feeder and precision torque verification',
      'Linear pneumatic escapements and presence verification sensors',
      'Automatic Good/Bad component sorting chutes with optical counting',
    ],
    idealIndustries: ['Electrical switches & MCBs', 'Consumer electronics', 'Medical device sub-assemblies'],
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'process-automation-systems',
    name: 'Industrial Process Automation Systems',
    category: 'Chemical & Continuous Processing',
    tagline: 'Precision liquid dosing, thermal regulation, and continuous process flow management',
    description:
      'Continuous and batch process systems featuring sanitary stainless valves, mass flowmeters, automated heating/cooling jackets, and high-accuracy load-cell weight dosing mechanisms.',
    cycleTime: 'Continuous or programmatic batch recipe cycles',
    controlArchitecture: 'Siemens / Schneider PLC + SCADA PC Station + Remote I/O Islands',
    keyFeatures: [
      'PID loop tuning for tight temperature and pressure regulation',
      'Automated batch recipe storage with multi-ingredient sequential dosing',
      'CIP (Clean-in-Place) automation cycles with conductivity monitoring',
      'Comprehensive electronic batch record generation for compliance',
    ],
    idealIndustries: ['Food processing', 'Specialty chemical blenders', 'Paints & resin plants'],
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'plc-controlled-machinery',
    name: 'PLC Controlled Machinery',
    category: 'Precision Machine Engineering',
    tagline: 'Custom hydraulic presses, leak testing rigs, and automated drilling/tapping units',
    description:
      'Specialized fabrication and quality validation machinery powered by deterministic PLC routines. Includes hydraulic proportional valve control for precise pressing forces and high-pressure differential air leak detection.',
    cycleTime: 'Adjustable process sequence from 5s to 60s',
    controlArchitecture: 'Delta / Mitsubishi PLC + Load Cell Amplifiers + Industrial HMI',
    keyFeatures: [
      'Hydro-pneumatic force vs displacement monitoring graphs on HMI',
      'Digital pressure drop leak testing with 0.1 Pascal resolution',
      'Opto-electronic safety light guards for operator safeguarding',
      'Real-time rejection tagging with barcode printing',
    ],
    idealIndustries: ['Hydraulic valve testing', 'Engine block machining', 'Pipe and fitting fabrication'],
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'machine-retrofit-upgrades',
    name: 'Machine Retrofit & Automation Upgrades',
    category: 'Legacy Machine Modernization',
    tagline: 'Revitalize aging imported or mechanical machinery with state-of-the-art digital controllers',
    description:
      'Transform obsolete, hard-to-maintain machines into modern workhorses. We rip out obsolete relay logic and burnt cards, rewiring modern modular PLCs, responsive touchscreen HMIs, and energy-efficient servo drives without replacing expensive mechanical iron.',
    cycleTime: 'Up to 35% speed improvement over legacy controls',
    controlArchitecture: 'Modern Open-Architecture PLC + Ethernet Connectivity',
    keyFeatures: [
      'Replaces obsolete proprietary controller boards with off-the-shelf PLCs',
      'Complete fresh rewiring with new sensors, cables, and safety interlocks',
      'Addition of production data logging and remote troubleshooting features',
      'A fraction of the cost of buying an equivalent new machine',
    ],
    idealIndustries: ['Textile machinery', 'Metal stamping presses', 'Packaging wrappers', 'Extruders'],
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
  },
];

export const SUPPORTED_TECHNOLOGIES: TechItem[] = [
  {
    name: 'PLC Systems',
    category: 'Controller Core',
    description: 'Deterministic micro-second logic execution for complex multi-input/output sequential industrial operations.',
    protocolsOrTypes: ['Delta DVP/AS Series', 'Siemens S7-1200/1500', 'Mitsubishi FX5U/iQ-R', 'Schneider Modicon'],
    icon: 'Cpu',
  },
  {
    name: 'HMI Systems',
    category: 'Operator Visualization',
    description: 'Vibrant touchscreens displaying live animated schematics, recipe selectors, fault diagnostics, and production graphs.',
    protocolsOrTypes: ['Delta DOP-100', 'Siemens Comfort / Unified', 'Mitsubishi GOT2000', 'Pro-face Displays'],
    icon: 'Monitor',
  },
  {
    name: 'Industrial Sensors',
    category: 'Sensory Intelligence',
    description: 'High-precision sensory feedback for presence, distance, orientation, temperature, and quality inspection.',
    protocolsOrTypes: ['Inductive & Capacitive', 'Photoelectric & Laser', 'Color & Vision Cameras', 'Strain Gauge Load Cells'],
    icon: 'Radio',
  },
  {
    name: 'Servo & Drive Systems',
    category: 'Motion Control',
    description: 'Ultra-accurate positioning, synchronized electronic gearing, torque limiting, and variable frequency speed control.',
    protocolsOrTypes: ['Delta ASDA Servos', 'Siemens Sinamics V20/G120', 'Mitsubishi MR-J4', 'Schneider Altivar VFDs'],
    icon: 'Activity',
  },
  {
    name: 'Industrial Communication Networks',
    category: 'Interconnectivity',
    description: 'Fieldbus and industrial Ethernet backbones enabling seamless data exchange between controllers and enterprise clouds.',
    protocolsOrTypes: ['Modbus RTU / TCP', 'Profinet Industrial Ethernet', 'EtherCAT High-Speed Bus', 'EtherNet/IP & IO-Link'],
    icon: 'Network',
  },
];

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    name: 'Delta Electronics',
    tier: 'Primary Automation Partner',
    specialization: 'High-performance PLCs, HMIs, Servo systems, VFD drives & temperature controllers',
    description:
      'We possess in-depth programming and commissioning expertise across Delta DVP, AS, and AH series controllers and DOP HMIs, providing maximum performance-to-cost ratio.',
    color: '#006699',
    accentBg: '#E6F4FA',
  },
  {
    name: 'Schneider Electric',
    tier: 'Switchgear & Automation Leader',
    specialization: 'Modicon PLCs, Altivar VFDs, TeSys contactors, ACB/MCCB protection gear',
    description:
      'We incorporate Schneider electrical distribution and motor protection gear in our MCC and PCC panels, ensuring world-class short-circuit reliability and safety.',
    color: '#009530',
    accentBg: '#E6F8EC',
  },
  {
    name: 'Mitsubishi Electric',
    tier: 'Precision Motion Specialist',
    specialization: 'MELSEC iQ-F/iQ-R series, GOT touch terminals, and high-response MR servo motors',
    description:
      'Preferred choice for high-speed SPM assembly machinery requiring lightning-quick cycle times and tight electronic cam synchronizations.',
    color: '#E60012',
    accentBg: '#FDEBEB',
  },
  {
    name: 'Siemens',
    tier: 'Global Industrial Benchmark',
    specialization: 'SIMATIC S7-1200 / S7-1500, TIA Portal, Sinamics drives, and Profinet architectures',
    description:
      'Certified development standard for European export machinery and mission-critical automated production lines with demanding diagnostic needs.',
    color: '#00646E',
    accentBg: '#E6F5F6',
  },
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'manufacturing-production',
    name: 'Manufacturing & Production',
    tagline: 'Smart automation for assembly lines & discrete manufacturing',
    description:
      'Eliminate human error and bottlenecks on fast-paced factory floors with automated conveyors, assembly jigs, part sorters, and centralized MCC/PLC panels.',
    solutionsProvided: [
      'Multi-stage semi-automatic assembly lines',
      'Poka-yoke error-proofing workstations',
      'Component counting and batch sorting systems',
      'Machine health monitoring dashboards',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    icon: 'Factory',
  },
  {
    id: 'energy-power',
    name: 'Energy & Power',
    tagline: 'Reliable electrical solutions for energy optimization & power factor management',
    description:
      'Ensure uninterrupted power distribution, harmonic elimination, and optimum tariff compliance with our custom-engineered PCC, APFC, and transformer intake switchboards.',
    solutionsProvided: [
      'High-capacity Power Control Centres up to 6300A',
      'Detuned harmonic APFC capacitor panels',
      'Auto Mains Failure (AMF) generator changeovers',
      'Digital energy management & sub-metering',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
    icon: 'Zap',
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    tagline: 'Compliance with sanitary standards & high-speed recipe automation',
    description:
      'IP65 washdown-rated stainless steel control panels, automated hygienic ingredient dosing, temperature tracking, and continuous packaging automation.',
    solutionsProvided: [
      'Stainless steel SS304/SS316 washdown enclosures',
      'Automated batch recipe blenders and liquid metering',
      'Conveyorized hot/cold tunnel speed regulation',
      'HACCP-compliant temperature and CIP cycle logs',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
    icon: 'Utensils',
  },
  {
    id: 'automotive-industry',
    name: 'Automotive Industry',
    tagline: 'Precision automation for high-throughput component manufacturing',
    description:
      'From precision bushing presses and robotic welding cell control to leak-testing rigs for fuel and brake assemblies, delivering zero-defect automotive compliance.',
    solutionsProvided: [
      'Servo-controlled torque and press-fit machines',
      'Differential pressure air leak testing SPM rigs',
      'Welding fixture automation with pneumatic clamps',
      'Traceability barcode scanning & automated labeling',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    icon: 'Car',
  },
  {
    id: 'construction-heavy-machinery',
    name: 'Construction & Heavy Machinery',
    tagline: 'Rugged electrical systems built for arduous industrial environments',
    description:
      'Vibration-resistant, dust-sealed motor starter panels and specialized automation for stone crushers, concrete batching plants, and heavy hydraulic machinery.',
    solutionsProvided: [
      'Heavy-duty Star-Delta and Soft Starter MCC panels',
      'VFD speed control for slurry pumps and winches',
      'Enclosures with dual-layer IP55 polyurethane gaskets',
      'Emergency wire-pull stop interlock networks',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    icon: 'Truck',
  },
  {
    id: 'packaging-sector',
    name: 'Packaging Sector',
    tagline: 'Ultra-fast cartoning, sealing, and continuous form-fill synchronization',
    description:
      'High-speed multi-axis servo coordination for flow wrappers, shrink film machines, pick-and-place carton packing, and end-of-line palletizing automation.',
    solutionsProvided: [
      'Electronic camming for flying knife cutting',
      'Registration mark optical sensor alignment',
      'Multi-lane conveyor accumulation management',
      'Carton erector and tape sealing automation',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=900&q=80',
    icon: 'Package',
  },
];

export const WHY_CHOOSE_US: WhyUsPoint[] = [
  {
    id: 'engineers',
    title: 'Experienced Automation Engineers',
    subtitle: 'Proven Domain Mastery',
    description:
      'Our team combines hands-on field experience in PLC ladder architecture, motion synchronization, and complex industrial wiring across multiple industry domains.',
    metric: '10+ Yrs',
    icon: 'Award',
  },
  {
    id: 'quality-standards',
    title: 'High-Quality Panel Standards',
    subtitle: 'Zero Compromise on Switchgear & Wiring',
    description:
      'Every panel follows strict wire numbering (ferruling), premium copper busbars, flame-retardant channel ducts, and passes 100% pre-dispatch quality checklists.',
    metric: '100% FAT',
    icon: 'ShieldCheck',
  },
  {
    id: 'custom-spm',
    title: 'Custom SPM Machine Expertise',
    subtitle: 'Bespoke Mechanical & Electrical Synergy',
    description:
      'We do not sell one-size-fits-all hardware. We design, fabricate, wire, program, and commission special purpose machines tailored strictly to your cycle-time and tolerances.',
    metric: 'Bespoke',
    icon: 'Sliders',
  },
  {
    id: 'on-time-delivery',
    title: 'On-Time Project Delivery & Reliability',
    subtitle: 'Committed Project Milestones',
    description:
      'Disciplined engineering sprint schedules with weekly milestone updates ensure your production line stays on target without costly commissioning delays.',
    metric: '98.5% On-Time',
    icon: 'Clock',
  },
  {
    id: 'support-24-7',
    title: 'Strong 24/7 Technical Support',
    subtitle: 'Rapid Breakdown Assistance',
    description:
      'Our dedicated Bengaluru field engineering team provides phone, remote network, and rapid on-site breakdown response so your machines stay productive around the clock.',
    metric: '24/7 Support',
    icon: 'Headphones',
  },
];
