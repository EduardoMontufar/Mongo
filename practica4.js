use("bd_py");

db.Carros.updateOne(
    { Modelo: "911 GT3 RS" },
    { $set: { Año: 2025 } }
);

db.Carros.updateOne(
    { Modelo: "SF90 Stradale" },
    { $set: { Marca: "Ferrari S.p.A." } }
);

db.Celulares.updateOne(
    { Modelo: "iPhone 16 Pro Max" },
    { $set: { Marca: "Apple Inc." } }
);

db.Celulares.updateOne(
    { Modelo: "Galaxy S25 Ultra" },
    { $set: { Año: 2026 } }
);

db.Laptops.updateOne(
    { Modelo: "MacBook Pro M4 (16-inch)" },
    { $set: { Marca: "Apple Inc." } }
);

db.Laptops.updateOne(
    { Modelo: "ROG Zephyrus G16" },
    { $set: { Año: 2026 } }
);

db.Motos.updateOne(
    { Modelo: "CBR1000RR-R Fireblade SP" },
    { $set: { Año: "2024" } }
);

db.Motos.updateOne(
    { Modelo: "Panigale V4 SP2" },
    { $set: { Marca: "Ducati Motor Holding" } }
);

db.Software.updateOne(
    { Modelo: "Microsoft 365 Copilot" },
    { $set: { Tipo: "Productividad/IA Avanzada" } }
);

db.Software.updateOne(
    { Modelo: "Salesforce CRM" },
    { $set: { Año: 2026 } }
);