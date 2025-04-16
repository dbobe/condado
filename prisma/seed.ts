import { PrismaClient, ContactType, UserRole } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // First create the company
  const company = await prisma.company.create({
    data: {
      name: "Condado Window",
      slug: "condado-window",
      logoUrl: "/img/cw-logo.png",
      websiteUrl: "https://condadowindow.com",
      primaryColor: "#D21211",
      secondaryColor: "#232323",
      isPrimary: true,
    },
  });

  const user = await prisma.user.create({
    data: {
      firstName: "David",
      lastName: "Bobe",
      profilePictureUrl: "/img/dbobepr.png",
      email: "admin@condadowindow.com",
      password: await hash("G3n3s!s8083", 10),
    },
  });

  const role = await prisma.systemRoles.create({
    data: {
      description: "Administrator",
    },
  });

  await prisma.membership.create({
    data: {
      userId: user.id,
      companyId: company.id,
      userRole: UserRole.SUPER_ADMIN,
      roleId: role.id,
    },
  });

  // Create country
  const country = await prisma.country.upsert({
    where: { id: "US" },
    update: {},
    create: {
      id: "US",
      name: "United States",
    },
  });

  const partners = [
    {
      companyId: company.id,
      companyName: "Tech Solutions Inc",
      email: "info@techsolutions.com",
      website: "www.techsolutions.com",
      phone: "555-0101",
      country: "US",
      salesRepId: user.id,
      isBuilder: true,
      contact: {
        firstName: "John",
        lastName: "Smith",
        email: "john@techsolutions.com",
        position: "CEO",
        phone: "555-0102",
        type: ContactType.Supplier,
      },
      address: {
        description: "Main Office",
        address1: "123 Tech Street",
        city: "San Francisco",
        zip: "94105",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Build Masters LLC",
      email: "contact@buildmasters.com",
      website: "www.buildmasters.com",
      phone: "555-0201",
      country: "US",
      salesRepId: user.id,
      isBuilder: true,
      contact: {
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah@buildmasters.com",
        position: "Operations Manager",
        phone: "555-0202",
        type: ContactType.Supplier,
      },
      address: {
        description: "Headquarters",
        address1: "456 Builder Ave",
        city: "Chicago",
        zip: "60601",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Global Supplies Co",
      email: "info@globalsupplies.com",
      website: "www.globalsupplies.com",
      phone: "555-0301",
      country: "US",
      salesRepId: user.id,
      contact: {
        firstName: "Michael",
        lastName: "Chen",
        email: "michael@globalsupplies.com",
        position: "Sales Director",
        phone: "555-0302",
        type: ContactType.Supplier,
      },
      address: {
        description: "Main Office",
        address1: "789 Supply Drive",
        city: "Houston",
        zip: "77001",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Premier Construction",
      email: "info@premierconstruction.com",
      website: "www.premierconstruction.com",
      phone: "555-0401",
      country: "US",
      salesRepId: user.id,
      isBuilder: true,
      contact: {
        firstName: "Emily",
        lastName: "Brown",
        email: "emily@premierconstruction.com",
        position: "Project Manager",
        phone: "555-0402",
        type: ContactType.Customer,
      },
      address: {
        description: "Main Office",
        address1: "321 Builder Lane",
        city: "Los Angeles",
        zip: "90001",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Quality Materials Ltd",
      email: "contact@qualitymaterials.com",
      website: "www.qualitymaterials.com",
      phone: "555-0501",
      country: "US",
      salesRepId: user.id,
      contact: {
        firstName: "David",
        lastName: "Wilson",
        email: "david@qualitymaterials.com",
        position: "Procurement Manager",
        phone: "555-0502",
        type: ContactType.Supplier,
      },
      address: {
        description: "Warehouse & Office",
        address1: "567 Material Road",
        city: "Denver",
        zip: "80201",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Innovative Builders",
      email: "hello@innovativebuilders.com",
      website: "www.innovativebuilders.com",
      phone: "555-0601",
      country: "US",
      salesRepId: user.id,
      isBuilder: true,
      contact: {
        firstName: "Lisa",
        lastName: "Garcia",
        email: "lisa@innovativebuilders.com",
        position: "General Manager",
        phone: "555-0602",
        type: ContactType.Customer,
      },
      address: {
        description: "Main Office",
        address1: "890 Innovation Way",
        city: "Seattle",
        zip: "98101",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Eco Builders",
      email: "contact@ecobuilders.com",
      website: "www.ecobuilders.com",
      phone: "555-0701",
      country: "US",
      salesRepId: user.id,
      isBuilder: true,
      contact: {
        firstName: "Robert",
        lastName: "Taylor",
        email: "robert@ecobuilders.com",
        position: "Sustainability Director",
        phone: "555-0702",
        type: ContactType.Customer,
      },
      address: {
        description: "Green Office",
        address1: "123 Eco Street",
        city: "Portland",
        zip: "97201",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Steel & More",
      email: "info@steelandmore.com",
      website: "www.steelandmore.com",
      phone: "555-0801",
      country: "US",
      salesRepId: user.id,
      contact: {
        firstName: "Amanda",
        lastName: "Martinez",
        email: "amanda@steelandmore.com",
        position: "Sales Manager",
        phone: "555-0802",
        type: ContactType.Supplier,
      },
      address: {
        description: "Warehouse",
        address1: "456 Steel Boulevard",
        city: "Pittsburgh",
        zip: "15201",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Modern Homes Construction",
      email: "info@modernhomes.com",
      website: "www.modernhomes.com",
      phone: "555-0901",
      country: "US",
      salesRepId: user.id,
      isBuilder: true,
      contact: {
        firstName: "Kevin",
        lastName: "Lee",
        email: "kevin@modernhomes.com",
        position: "Lead Architect",
        phone: "555-0902",
        type: ContactType.Customer,
      },
      address: {
        description: "Design Studio",
        address1: "789 Modern Avenue",
        city: "Miami",
        zip: "33101",
        isDefault: true,
      },
    },
    {
      companyId: company.id,
      companyName: "Premium Supplies Co",
      email: "contact@premiumsupplies.com",
      website: "www.premiumsupplies.com",
      phone: "555-1001",
      country: "US",
      salesRepId: user.id,
      contact: {
        firstName: "Rachel",
        lastName: "Thompson",
        email: "rachel@premiumsupplies.com",
        position: "Account Manager",
        phone: "555-1002",
        type: ContactType.Supplier,
      },
      address: {
        description: "Distribution Center",
        address1: "101 Premium Drive",
        city: "Boston",
        zip: "02101",
        isDefault: true,
      },
    },
  ];

  // Create partners with their contacts and addresses
  for (const partnerData of partners) {
    const { contact, address, ...partnerInfo } = partnerData;

    await prisma.partner.create({
      data: {
        ...partnerInfo,
        contacts: {
          create: {
            ...contact,
            defaultContact: true,
          },
        },
        partnerAddresses: {
          create: {
            ...address,
            countryId: country.id,
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
