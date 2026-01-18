/* =======================
   BLUEPRINTS
======================= */

export const mockBlueprints = [
  {
    id: "bp-1",
    name: "Employment Agreement",
    fields: [
      {
        id: "bp1-f1",
        type: "text",
        label: "Employee Name",
        position: { x: 0, y: 0 },
      },
      {
        id: "bp1-f2",
        type: "date",
        label: "Joining Date",
        position: { x: 0, y: 1 },
      },
      {
        id: "bp1-f3",
        type: "checkbox",
        label: "Accepted Company Policies",
        position: { x: 0, y: 2 },
      },
      {
        id: "bp1-f4",
        type: "signature",
        label: "HR Signature",
        position: { x: 0, y: 3 },
      },
    ],
  },

  {
    id: "bp-2",
    name: "Non-Disclosure Agreement (NDA)",
    fields: [
      {
        id: "bp2-f1",
        type: "text",
        label: "Party Name",
        position: { x: 0, y: 0 },
      },
      {
        id: "bp2-f2",
        type: "date",
        label: "Effective Date",
        position: { x: 0, y: 1 },
      },
      {
        id: "bp2-f3",
        type: "checkbox",
        label: "Confidentiality Accepted",
        position: { x: 0, y: 2 },
      },
      {
        id: "bp2-f4",
        type: "signature",
        label: "Authorized Signature",
        position: { x: 0, y: 3 },
      },
    ],
  },

  {
    id: "bp-3",
    name: "Freelancer Service Agreement",
    fields: [
      {
        id: "bp3-f1",
        type: "text",
        label: "Freelancer Name",
        position: { x: 0, y: 0 },
      },
      {
        id: "bp3-f2",
        type: "text",
        label: "Service Description",
        position: { x: 0, y: 1 },
      },
      {
        id: "bp3-f3",
        type: "date",
        label: "Contract Start Date",
        position: { x: 0, y: 2 },
      },
      {
        id: "bp3-f4",
        type: "signature",
        label: "Client Signature",
        position: { x: 0, y: 3 },
      },
    ],
  },
];

/* =======================
   CONTRACTS
======================= */

export const mockContracts = [
  {
    id: "ct-1",
    name: "John Doe Employment Contract",
    blueprintId: "bp-1",
    blueprintName: "Employment Agreement",
    status: "CREATED",
    createdAt: new Date().toISOString(),
    fields: [
      {
        id: "bp1-f1",
        type: "text",
        label: "Employee Name",
        value: "John Doe",
      },
      {
        id: "bp1-f2",
        type: "date",
        label: "Joining Date",
        value: "",
      },
      {
        id: "bp1-f3",
        type: "checkbox",
        label: "Accepted Company Policies",
        value: false,
      },
      {
        id: "bp1-f4",
        type: "signature",
        label: "HR Signature",
        value: "",
      },
    ],
  },

  {
    id: "ct-2",
    name: "Alice Smith Employment Contract",
    blueprintId: "bp-1",
    blueprintName: "Employment Agreement",
    status: "APPROVED",
    createdAt: new Date().toISOString(),
    fields: [
      {
        id: "bp1-f1",
        type: "text",
        label: "Employee Name",
        value: "Alice Smith",
      },
      {
        id: "bp1-f2",
        type: "date",
        label: "Joining Date",
        value: "2024-07-01",
      },
      {
        id: "bp1-f3",
        type: "checkbox",
        label: "Accepted Company Policies",
        value: true,
      },
      {
        id: "bp1-f4",
        type: "signature",
        label: "HR Signature",
        value: "HR Manager",
      },
    ],
  },

  {
    id: "ct-3",
    name: "TechCorp NDA",
    blueprintId: "bp-2",
    blueprintName: "Non-Disclosure Agreement (NDA)",
    status: "SENT",
    createdAt: new Date().toISOString(),
    fields: [
      {
        id: "bp2-f1",
        type: "text",
        label: "Party Name",
        value: "TechCorp Pvt Ltd",
      },
      {
        id: "bp2-f2",
        type: "date",
        label: "Effective Date",
        value: "2024-06-15",
      },
      {
        id: "bp2-f3",
        type: "checkbox",
        label: "Confidentiality Accepted",
        value: true,
      },
      {
        id: "bp2-f4",
        type: "signature",
        label: "Authorized Signature",
        value: "",
      },
    ],
  },

  {
    id: "ct-4",
    name: "Startup NDA - BetaSoft",
    blueprintId: "bp-2",
    blueprintName: "Non-Disclosure Agreement (NDA)",
    status: "SIGNED",
    createdAt: new Date().toISOString(),
    fields: [
      {
        id: "bp2-f1",
        type: "text",
        label: "Party Name",
        value: "BetaSoft Solutions",
      },
      {
        id: "bp2-f2",
        type: "date",
        label: "Effective Date",
        value: "2024-05-10",
      },
      {
        id: "bp2-f3",
        type: "checkbox",
        label: "Confidentiality Accepted",
        value: true,
      },
      {
        id: "bp2-f4",
        type: "signature",
        label: "Authorized Signature",
        value: "CEO BetaSoft",
      },
    ],
  },

  {
    id: "ct-5",
    name: "Freelancer Contract - Rahul",
    blueprintId: "bp-3",
    blueprintName: "Freelancer Service Agreement",
    status: "CREATED",
    createdAt: new Date().toISOString(),
    fields: [
      {
        id: "bp3-f1",
        type: "text",
        label: "Freelancer Name",
        value: "Rahul Verma",
      },
      {
        id: "bp3-f2",
        type: "text",
        label: "Service Description",
        value: "Frontend Development",
      },
      {
        id: "bp3-f3",
        type: "date",
        label: "Contract Start Date",
        value: "",
      },
      {
        id: "bp3-f4",
        type: "signature",
        label: "Client Signature",
        value: "",
      },
    ],
  },

  {
    id: "ct-6",
    name: "Freelancer Contract - Neha",
    blueprintId: "bp-3",
    blueprintName: "Freelancer Service Agreement",
    status: "LOCKED",
    createdAt: new Date().toISOString(),
    fields: [
      {
        id: "bp3-f1",
        type: "text",
        label: "Freelancer Name",
        value: "Neha Sharma",
      },
      {
        id: "bp3-f2",
        type: "text",
        label: "Service Description",
        value: "UI/UX Design",
      },
      {
        id: "bp3-f3",
        type: "date",
        label: "Contract Start Date",
        value: "2024-04-01",
      },
      {
        id: "bp3-f4",
        type: "signature",
        label: "Client Signature",
        value: "Design Lead",
      },
    ],
  },
];
