This project is a fullstack web application built with React.js and hosted on an Asustor NAS - running ADM - as an Apache HTTP server.
It aims to serve as a personal portfolio, designed to showcase my skills and some of the projects I've worked on. 
        
The deployment pipeline is engineered for an efficient and rapid CI/CD (Continuous Integration/Continuous Deployment) workflow. 
When new versions are pushed to the GitHub repository, a Webhook triggers a GET request to a specific port on the NAS. 
This request activates a PHP script, which validates the request's SSH key and subsequently executes a bash script.

The bash script is responsible for pulling the latest changes from the repository, building the web application, and then containerizing it using Docker. 
The Apache server then executes the application directly from the built Docker container. A complete deployment takes less than 10 seconds 
from pushing a commit upstream to the site being updated allowing for fairly responsive feedback when making changes to the codebase.
I chose to use Docker due to the ADM's native lack of support for a certain Node.js version that Apache required and I couldn't be bothered to install it manually :). 

The website is built using React.js on top of a Vite template and is styled with traditional CSS, i.e. no Tailwind or other React components were used because I'm 
terrible at frontend design and I most definitely vibe coded all the CSS for this website.

![Foams](https://raw.githubusercontent.com/HugoEklund/PortfolioWeb/main/Frontend/public/assets/foams.jpg)

\'\'\'C#

Console.Writeline("Code test")

\'\'\'

Technical Stack and Development Details
Frontend: React.js, Vite (for tooling), and traditional CSS.
Backend: PHP (for webhook handling) and Apache HTTP Server.
DevOps: Docker, Git, GitHub Webhooks.