'use client'; // This component uses client-side interactivity (useState, useEffect)

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import { marked } from 'marked'; // Import marked library

// The full contract content as a string
const contractMarkdown = `
# Contract: Freelance Development for The Flower Shoppe

**THIS AGREEMENT** is made effective as of **July 26, 2025**

**BETWEEN:**

**TresPies Design Studio** ("Developer")
Address: [Your Address]
Email: [Your Email]

**AND:**

**[Client Name/Company Name]** ("Client")
Address: [Client Address]
Email: [Client Email]

**WHEREAS**, the Client desires to engage the Developer to provide web development services for "The Flower Shoppe" website;
**WHEREAS**, the Developer is willing to provide such services on the terms and conditions set forth herein;

**NOW, THEREFORE**, in consideration of the mutual covenants and promises herein contained, the parties agree as follows:

---

## 1. Services Provided

The Developer shall provide web development services for "The Flower Shoppe" website, as detailed in the "Deliverables: The Flower Shoppe Website Development" document (hereinafter referred to as the "Project Plan"), incorporated herein by reference. The services will be delivered in the phases outlined in the Project Plan, starting with a Pre-release phase and progressing through Alpha and Beta development cycles.

## 2. Project Scope & Deliverables

The specific features and deliverables for each phase are detailed in the Project Plan. Any work requested by the Client outside the scope of the agreed-upon Project Plan will be considered a "Change Request" and will require a separate written agreement and may incur additional charges.

## 3. Compensation

The Client agrees to compensate the Developer for the services rendered as follows:

* **Hourly Rate:** The Developer's standard hourly rate is **$100 per hour**. This rate reflects the expertise of a seasoned developer (equivalent to a 30-year-old developer's income) and covers all associated freelance overhead.
    * *(Self-calculation for a 30-year-old developer's income in Madison, WI: Average developer salary in Madison, WI: ~$80,000 - $100,000/year. Freelance rate often 2-3x hourly equivalent of salary to cover benefits, taxes, overhead. So, $90,000 / 2080 hours (approx working hours/year) = ~$43/hour. Multiplying by 2x-3x gives ~$86 - $129/hour. We are using $100 as a clear, round number that meets the minimum specified and provides a reasonable profit margin.)*
* **Project Flat Fee Component:** A flat fee component of **$1,500** will be added to the total project cost to account for project management, initial setup, and ensuring project continuity beyond direct hourly coding.
* **Estimated Total Project Hours:** Approximately **140 hours** (excluding the free Pre-release phase).
    * *(Breakdown: Pre-release: ~20 hours (Development Cost Waived); Alpha: ~60 hours; Beta: ~60 hours; Finalization/PM: ~0 hours as PM is covered by flat fee)*
* **Estimated Total Project Cost:**
    \`(140 hours * $100/hour) + $1,500 Flat Fee = $14,000 + $1,500 = **$15,500**\`
    * **This estimated total is subject to change based on actual hours worked due to approved change requests, unforeseen complexities, or client-induced delays.**

### **3.1. Payment Schedule & Milestones**

Payments shall be made in installments tied to the completion of project phases, as outlined below, over a **four-month contract period**:

* **Month 1 (Pre-release Phase - Social Media MVP):** **$0.00 (Development Cost Waived)**. This phase is provided free of charge to help "The Flower Shoppe" gain initial traction and build momentum.
* **Month 2 (Alpha Phase Completion):** **$5,000** (Covers approximately 50 hours of Alpha development).
* **Month 3 (Beta Phase Completion):** **$5,000** (Covers approximately 50 hours of Beta development).
* **Month 4 (Finalization & Handoff):** **$5,500** (Covers remaining development hours and the $1,500 flat project fee). This payment will be adjusted to reflect any additional approved hours beyond the initial estimate.

All invoices are due within **15 days** of receipt. Late payments may incur a late fee of 5% per month.

## 4. Client Responsibilities

The Client agrees to:

* Provide all necessary content (text, images, logos, product data) in a timely manner as specified in the Project Plan. Delays in content provision may impact the project timeline and cost.
* Provide timely feedback and approvals as per the agreed-upon communication protocol.
* Provide necessary access to third-party services (e.g., Firebase project access, payment gateway API keys) when required and in a secure manner.
* Acknowledge and accept warnings regarding potential **third-party costs** (e.g., Firebase scaling, mapping APIs, payment gateway fees) as detailed in the Project Plan. These costs are separate from the Developer's fees.

## 5. Developer Responsibilities

The Developer agrees to:

* Perform services in a professional and workmanlike manner, adhering to the code quality standards outlined in the Project Plan.
* Communicate transparently and regularly on project progress, challenges, and proposed solutions.
* Adhere to the agreed-upon project timeline to the best of its ability, providing prompt notification of any foreseen delays.
* Maintain confidentiality of all client information and project details.

## 6. Intellectual Property

Upon full payment of all fees due under this Agreement, the Client shall own all intellectual property rights in the final website code and design specifically developed for the Client under this Agreement. The Developer retains rights to any pre-existing tools, libraries, or generic code snippets used in the development that are not unique to the Client's project.

## 7. Term and Termination

This Agreement shall commence on the Effective Date and shall continue for a period of **four (4) months**, or until the completion of all services outlined in the Project Plan, whichever is later, unless earlier terminated as provided herein. Either party may terminate this Agreement with 14 days' written notice if the other party breaches a material term of this Agreement and fails to cure such breach within the notice period. In the event of early termination, the Client agrees to pay for all services rendered up to the date of termination.

## 8. Confidentiality

Both parties agree to keep all confidential information exchanged during the course of this project private and not to disclose it to any third party, except as required by law.

## 9. Governing Law

This Agreement shall be governed by and construed in accordance with the laws of the State of Wisconsin, without regard to its conflict of laws principles.

---

## **ADDENDUM A: Legal Compliance & Client Responsibility for Cannabis-Related Products**

This Addendum is incorporated into and made a part of the Agreement between TresPies Design Studio ("Developer") and [Client Name/Company Name] ("Client") for the development of "The Flower Shoppe" website.

**WHEREAS**, the Client intends for "The Flower Shoppe" website to facilitate the sale and distribution of products that may be classified as cannabis-related;
**WHEREAS**, the legal landscape surrounding cannabis and cannabis-related products is complex, evolving, and subject to varying federal, state, and local regulations;
**WHEREAS**, the Developer is a web development service provider and not a legal or regulatory compliance expert;

**NOW, THEREFORE**, the parties agree to the following terms regarding legal compliance:

**A.1. Client's Sole Responsibility for Legal Compliance:**
The Client acknowledges and agrees that it is **solely and exclusively responsible** for ensuring that "The Flower Shoppe" website, its operations, products, marketing, and all related business activities comply with all applicable federal, state, and local laws, statutes, ordinances, rules, and regulations, including but not limited to those pertaining to:
* The sale, distribution, delivery, and advertising of cannabis and cannabis-related products.
* Licensing and permitting requirements.
* Age verification and restrictions.
* Payment processing for cannabis-related transactions.
* Banking and financial services for cannabis businesses.
* Data privacy and security specific to the cannabis industry.
* Interstate commerce prohibitions.

**A.2. Developer's Limited Role:**
The Developer's role is strictly limited to providing web design, development, and technical integration services as outlined in the Project Plan.
* The Developer **does not provide legal advice, regulatory compliance advice, or tax advice**.
* The Developer is not responsible for advising the Client on the legality of its business operations or products.
* The Developer is not responsible for obtaining any licenses, permits, or approvals required for the Client's business operations.

**A.3. Client's Obligation to Seek Legal Counsel:**
The Client affirms that it has sought, or will seek, independent legal counsel from an attorney specializing in cannabis law and e-commerce in all relevant jurisdictions (federal, state, and local) to ensure full compliance before launching and operating "The Flower Shoppe" website.

**A.4. Payment Processing and Third-Party Integrations:**
The Client understands that many traditional payment processors and financial institutions may decline to service cannabis-related businesses due to federal regulations. The Client is solely responsible for:
* Identifying and securing a payment gateway that is legally compliant and willing to process transactions for its specific products and business model.
* Obtaining all necessary approvals and credentials from such payment processors.
* Ensuring that any integrated third-party services (e.g., Dejavoo, Korona POS, mapping APIs) are legally permissible for its intended use case and product type.

**A.5. Indemnification:**
The Client agrees to indemnify, defend and hold harmless the Developer, its officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses (including reasonable attorneys' fees), and judgments arising out of or related to the Client's non-compliance with any applicable laws or regulations, or any legal challenges related to the nature of the Client's business or products.

**A.6. Severability:**
If any provision of this Addendum is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

**IN WITNESS WHEREOF**, the parties hereto have executed this Addendum as of the Effective Date of the main Agreement.

**Developer:**

__________________________
**TresPies Design Studio**
[Your Name/Representative Name]

**Client:**

__________________________
[Client Name/Company Name]
[Client Representative Name & Title]
`;

export default function ContractPage() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const result = marked.parse(contractMarkdown);
    if (result instanceof Promise) {
      result.then(html => setHtmlContent(html));
    } else {
      setHtmlContent(result as string);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-flower-green leading-tight">
            Freelance Development Contract
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Transparency and clear terms for our partnership.
          </p>
        </section>

        <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
          {/* Render the HTML content from markdown */}
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
