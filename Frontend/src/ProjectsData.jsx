export const projects = [
    {
        id: 'project1',
        name: 'Bachelors Thesis',
        color: '#3B82F6',
        description: 'Test-driven development of an audio classification program.',
        details: `
        The purpose of this thesis was to develop a program for real-time audio classification 
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
        `.trim()
    },
    {
        id: 'project2',
        name: 'Portfolio',
        color: '#10B981',
        description: 'The fullstack development of this website.',
        details: `
        This project is a fullstack web application built with React.js and hosted on my Asustor NAS - running ADM - as an Apache HTTP server, 
        serving as a personal portfolio, designed to showcase my skills and some of the projects I've worked on. 
        
        The deployment pipeline is engineered for an efficient and rapid CI/CD (Continuous Integration/Continuous Deployment) workflow. 
        When new versions are pushed to the GitHub repository, a Webhook triggers a GET request to a specific port on the NAS. 
        This request activates a PHP script, which validates the request's SSH key and subsequently executes a bash script.

        The bash script is responsible for pulling the latest changes from the repository, building the web application, and then containerizing it using Docker. 
        The Apache server then executes the application directly from the built Docker container. A complete deployment takes less than 10 seconds 
        from pushing a commit upstream to the site being updated allowing for fairly responsive feedback when making changes to the codebase.
        I chose to use Docker due to the ADM's native lack of support for a certain Node.js version that Apache required and I couldn't be bothered to install it manually :). 

        The website is built using React.js on top of a Vite template and is styled with traditional CSS, i.e. no Tailwind or other React components were used because I'm 
        terrible at frontend design and I most definitely vibe coded all the CSS for this website.

        Technical Stack and Development Details
        Frontend: React.js, Vite (for tooling), and traditional CSS.
        Backend: PHP (for webhook handling) and Apache HTTP Server.
        DevOps: Docker, Git, GitHub Webhooks.

        Source Code
        The complete source code for the web application is available on https://github.com/HugoEklund/PortfolioWeb.
        `.trim()
    },
    {
        id: 'project3',
        name: 'Vehicle Database',
        color: '#F59E0B',
        description: 'A fullstack web application for managing vehicle data.',
        details: 'temp details'
    },
    {
        id: 'project4',
        name: 'Monogame Shooter',
        color: '#8B5CF6',
        description: 'A 2D endless runner built in C# using Monogame.',
        details: 'temp details'
    }
];