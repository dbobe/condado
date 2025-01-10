export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  company?: string;
}

export const customers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    company: "ABC Corp",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    company: "XYZ Inc",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "555-555-5555",
    company: "123 LLC",
  },
];
