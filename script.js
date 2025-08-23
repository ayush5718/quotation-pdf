// Application data
const quotationData = {
  company: {
    name: "Website Development Services",
    cofounder: "Nawlesh Nand",
    address: "New Delhi, India",
    email: "nn802301@gmail.com",
    phone: "+91 79032 65840"
  },
  quotation: {
    number: "Q-00001",
    date: "23-08-2025",
    validity: "14 days"
  },
  client: {
    name: "Client Name",
    address: "Client Address, City, State, PIN",
    email: "client@email.com",
    phone: "+91 80000 00000"
  },
  wordpress_services: [
    {description: "WordPress Theme Setup", qty: 1, unit: 15000, amount: 15000},
    {description: "Custom Hotel Booking Plugin Setup", qty: 1, unit: 20000, amount: 20000},
    {description: "Payment Gateway Integration", qty: 1, unit: 10000, amount: 10000},
    {description: "Basic SEO Setup", qty: 1, unit: 8000, amount: 8000},
    {description: "Database & Dashboard Setup", qty: 1, unit: 12000, amount: 12000}
  ],
  custom_services: [
    {description: "Design (Figma)", qty: 1, unit: 140000, amount: 140000},
    {description: "Frontend Development", qty: 1, unit: 80000, amount: 80000},
    {description: "Backend Development", qty: 1, unit: 130000, amount: 130000},
    {description: "App Development", qty: 1, unit: 150000, amount: 150000}
  ],
  wordpress_totals: {
    subtotal: 65000,
    discount: 0,
    tax: 11700,
    grand_total: 76700
  },
  custom_totals: {
    subtotal: 500000,
    discount: 0,
    tax: 90000,
    grand_total: 590000
  },
  terms_conditions: [
    "Advance Payment: 40% of the project cost is payable before project initiation; the remaining 60% upon completion before final delivery.",
    "Additional Changes: Any revisions or changes after approval will be billed separately based on scope and effort.",
    "Delivery Timeline: Agreed upon before project commencement and subject to timely client approvals and feedback.",
    "Tax: 18% GST will be applied as per Indian tax regulations.",
    "Warranty: One-month warranty after delivery for bug fixing. Post-warranty maintenance is chargeable at an agreed rate.",
    "Third-Party Services: Costs for hosting, plugins, or third-party tools will be borne by the client and are not included in this quotation unless specified.",
    "Delays: Client-side delays in approvals, content sharing, or responses may impact delivery timelines and could result in adjusted schedules.",
    "Refund Policy: Payments are non-refundable once work has commenced.",
    "Confidentiality: All client data and business details will remain strictly confidential, protected under standard non-disclosure practices."
  ],
  variable_costs: [
    {
      category: "Cloud Services",
      description: "Costs for cloud hosting and infrastructure (e.g., AWS, Google Cloud, Azure) are usage-based and depend entirely on the selected third-party provider.",
      details: "Factors influencing cost: Storage volume (e.g., GB/month), bandwidth/data transfer (e.g., per GB), compute resources (e.g., CPU/GPU hours), and additional services like databases or CDN.",
      example: "Basic setup might start at ₹5,000–₹20,000/month, but scales with traffic and data needs. We recommend providers based on your requirements, but billing is direct from the provider."
    },
    {
      category: "Image Optimization Costs",
      description: "Services for compressing and optimizing images to improve site speed and performance, using tools like ImageOptim, TinyPNG, or cloud APIs (e.g., Cloudinary, Imgix).",
      details: "Pricing varies by volume: Per-image fees (e.g., ₹0.50–₹2 per image) or subscription-based (e.g., ₹1,000–₹10,000/month for high-volume sites).",
      example: "Additional considerations: Automated optimization pipelines may add setup fees of ₹5,000–₹15,000, depending on integration complexity. This enhances SEO and user experience but is scoped per project."
    },
    {
      category: "EC2 Costs (AWS-Specific)",
      description: "Amazon EC2 (Elastic Compute Cloud) instances for scalable server hosting, charged variably by AWS.",
      details: "Key components: Instance type (e.g., t2.micro at ~₹500/month vs. larger instances at ₹10,000+/month), on-demand vs. reserved pricing, data transfer out (₹6–₹10 per GB beyond free tier), and attached storage (EBS volumes at ₹7/GB-month).",
      example: "Total cost: Highly variable; a small site might cost ₹1,000–₹5,000/month, while enterprise-level could exceed ₹50,000. We assist in optimization, but costs are billed directly by AWS."
    },
    {
      category: "Extra Features",
      description: "Any features beyond the initial scope, such as custom integrations (e.g., CRM/ERP systems), advanced analytics, AI/ML modules, multi-language support, or e-commerce enhancements.",
      details: "Charged based on development time and complexity: Hourly rates of ₹1,500–₹3,000/hour, or fixed per feature (e.g., ₹10,000 for a simple chat widget, up to ₹100,000+ for complex APIs).",
      example: "Process: We provide a detailed estimate after requirement analysis to ensure transparency."
    },
    {
      category: "SEO Optimization in Custom Development",
      description: "Advanced SEO services beyond basic setup, including in-depth keyword research, on-page/off-page optimization, technical audits, content optimization, link building, and ongoing monitoring.",
      details: "Variable based on scope: One-time deep optimization (₹20,000–₹100,000), monthly retainers for maintenance (₹10,000–₹50,000/month), or performance-based (e.g., tied to ranking improvements).",
      example: "Factors: Site size, competition level, and tools used (e.g., SEMrush, Ahrefs subscriptions adding ₹5,000–₹15,000/year). This is customized to your goals for maximum ROI."
    }
  ]
};

// Format currency in Indian Rupees
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('₹', '₹');
}

// Populate WordPress services table
function populateWordPressServices() {
  const tbody = document.getElementById('wordpress-services');
  if (!tbody) return;

  tbody.innerHTML = '';
  
  quotationData.wordpress_services.forEach(service => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${service.description}</td>
      <td>${service.qty}</td>
      <td>₹${service.unit.toLocaleString('en-IN')}</td>
      <td>₹${service.amount.toLocaleString('en-IN')}</td>
    `;
    tbody.appendChild(row);
  });
}

// Populate custom services table
function populateCustomServices() {
  const tbody = document.getElementById('custom-services');
  if (!tbody) return;

  tbody.innerHTML = '';
  
  quotationData.custom_services.forEach(service => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${service.description}</td>
      <td>${service.qty}</td>
      <td>₹${service.unit.toLocaleString('en-IN')}</td>
      <td>₹${service.amount.toLocaleString('en-IN')}</td>
    `;
    tbody.appendChild(row);
  });
}

// Populate terms and conditions
function populateTermsConditions() {
  const container = document.getElementById('terms-conditions');
  if (!container) return;

  container.innerHTML = '';
  
  quotationData.terms_conditions.forEach(term => {
    const termDiv = document.createElement('div');
    termDiv.className = 'term-item';
    
    // Extract the term title (everything before the colon)
    const colonIndex = term.indexOf(':');
    if (colonIndex > 0) {
      const title = term.substring(0, colonIndex + 1);
      const content = term.substring(colonIndex + 1);
      termDiv.innerHTML = `<strong>${title}</strong>${content}`;
    } else {
      termDiv.innerHTML = `<strong>${term}</strong>`;
    }
    
    container.appendChild(termDiv);
  });
}

// Populate variable costs
function populateVariableCosts() {
  const container = document.getElementById('variable-costs');
  if (!container) return;

  container.innerHTML = '';
  
  quotationData.variable_costs.forEach(cost => {
    const costDiv = document.createElement('div');
    costDiv.className = 'variable-cost-item';
    
    costDiv.innerHTML = `
      <h3 class="variable-cost-title">${cost.category}:</h3>
      <p class="variable-cost-description">${cost.description}</p>
      <p class="variable-cost-details">${cost.details}</p>
      <div class="variable-cost-example">${cost.example}</div>
    `;
    
    container.appendChild(costDiv);
  });
}

// Add print functionality
function addPrintFunctionality() {
  // Add print button if needed (optional)
  const printBtn = document.createElement('button');
  printBtn.className = 'btn btn--primary';
  printBtn.textContent = 'Print Quotation';
  printBtn.style.position = 'fixed';
  printBtn.style.top = '20px';
  printBtn.style.right = '20px';
  printBtn.style.zIndex = '1000';
  printBtn.style.display = 'none'; // Hidden by default, can be shown if needed
  
  printBtn.addEventListener('click', () => {
    window.print();
  });
  
  // Uncomment the next line to show the print button
  // document.body.appendChild(printBtn);
}

// Add keyboard shortcut for printing
function addKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl+P or Cmd+P for printing
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      e.preventDefault();
      window.print();
    }
  });
}

// Initialize the application
function initializeApp() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      populateWordPressServices();
      populateCustomServices();
      populateTermsConditions();
      populateVariableCosts();
      addPrintFunctionality();
      addKeyboardShortcuts();
    });
  } else {
    populateWordPressServices();
    populateCustomServices();
    populateTermsConditions();
    populateVariableCosts();
    addPrintFunctionality();
    addKeyboardShortcuts();
  }
}

// Start the application
initializeApp();

// Export functions for potential external use
window.QuotationApp = {
  formatCurrency,
  populateWordPressServices,
  populateCustomServices,
  populateTermsConditions,
  populateVariableCosts,
  data: quotationData
};