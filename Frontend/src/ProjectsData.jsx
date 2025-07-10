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
        name: 'Portfolio',
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
`

The complete source code for the web application is available on [Github](https://github.com/HugoEklund/Vehicle-Database).`.trim()
    },

    {
        id: 'project4',
        name: 'Monogame Shooter',
        color: '#8B5CF6',
        description: 'A 2D endless runner built in C# using Monogame.',
        details:
`![Foams](https://raw.githubusercontent.com/HugoEklund/PortfolioWeb/main/Frontend/public/assets/foams.jpg)

The complete source code for the web application is available on [Github](https://github.com/HugoEklund/Monogame-Shooter).`.trim()
    }
];