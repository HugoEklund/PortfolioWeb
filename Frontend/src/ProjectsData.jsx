import webDetails from '../README.md?raw';

export const projects = [
    {
        id: 'project1',
        name: 'Bachelors Thesis',
        color: '#3B82F6',
        description: 'Test-driven development of an audio classification program.',
        details: 
`The purpose of this thesis was to develop a program for real-time audio classification 
and to investigate performance differences between running the program on an edge 
device versus on a server.

Two software variants were developed where PyAudio was used for audio input and 
the classification model "YAMNet" was used for audio processing. The programs 
were deployed to two different network speakers from Axis.

Performance measurements were conducted focusing on CPU usage, memory consumption, 
response times, and classification accuracy. Custom made audio files containing 
background noise and distinct audio events were created and utilized when testing 
the programs.

The results show that audio classification at the edge was feasible despite limited 
resources while server-based classification offered greater potential for hardware 
scalability and upgrades. However, classification results were negatively impacted 
by limitations in the YAMNet model, particularly for sound events underrepresented 
in its training data. Differences in response times and hardware load between the 
edge- and server-based approaches were found to be negligible.

The full paper can be found and read at [LUP Student Papers](https://lup.lub.lu.se/student-papers/search/publication/9202383)`.trim()
    },
    
    {
        id: 'project2',
        name: 'Portfolio Web page',
        color: '#10B981',
        description: 'The fullstack development of this website.',
        details: `${webDetails}

The complete source code for the web application is available on [Github](https://github.com/HugoEklund/PortfolioWeb).`.trim()
    },

    {
        id: 'project3',
        name: 'Vehicle Database',
        color: '#F59E0B',
        description: 'A fullstack web application for managing vehicle data.',
        details:
`This project is a fullstack CRUD web application developed for a code interview.

The backend is an ASP.NET Core Web API written in C#. 
It uses Entity Framework Core and a DbContext to interact with a SQL Server database (powered by MSSQL).

The context class defines DbSet properties for each entity to be tracked:

\`\`\`csharp
public class VehicleContext : DbContext
{
    public VehicleContext(DbContextOptions<VehicleContext> options) : base(options) { }
    
    public DbSet<VehicleMake> VehicleMakes { get; set; }
    public DbSet<VehicleModel> VehicleModels { get; set; }
}
\`\`\`

The project makes use of Data Transfer Objects (DTOs) to avoid circular dependencies that otherwise would - and initially did - occur due to the nature of the
database relations. The usage of the many-to-many and many-to-one relations are in part due to assignment requirements, 
with the former being required and the latter being completely arbitrary.

\`\`\`csharp
public class VehicleModelDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    ...
}
\`\`\`

The backend provides endpoints for CRUD operations on the vehicle database given API requests from the frontend.

\`\`\`csharp
[HttpPost] 
public async Task<ActionResult<Vehicle>> CreateVehicle(CreateVehicleDto dto)
{
    var existingBrand = await _vehicleContext.Brands.FindAsync(dto.BrandID);

    if (existingBrand == null)
    {
        return NotFound();
    }

    var existingEquipments = await _vehicleContext.Equipments.Where(e => dto.EquipmentIDs.Contains(e.EquipmentID)).ToListAsync();
    var newVehicle = new Vehicle { /*init vehicle*/ };

    _vehicleContext.Vehicles.Add(newVehicle);
    await _vehicleContext.SaveChangesAsync();
    
    return newVehicle;
}
\`\`\`

The frontend is a React.js application built upon a Vite template, communicating with the backend API to fetch, 
display, and manage the vehicle data.

The complete source code for the fullstack application is available on [Github](https://github.com/HugoEklund/Vehicle-Database).`.trim()
    },
];