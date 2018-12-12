import { LoggedCommandResponse, Payload } from './reducer';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

export const determineResponse = (payload: Payload) => {
  let response: LoggedCommandResponse[];
  const text = payload.text.toLowerCase();
  switch (text) {
    case `'help'`:
      response = [
        {
          type: 'regular',
          payload: {
            text: `'help'`,
            color: 'grey'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 
              `Woops! You do not need to actually type the quotation marks when \
              writing a command! Just literally type this --> help`,
            color: 'darkorange'
          }
        }
      ];
      break;
    case 'job':
    case 'jobs':
    case 'work':
    case 'employment':
    case 'proofpoint':
    case 'responsival':
    case 'semio':
    case 'semio.ai':
    case 'calypso':
    case 'experience':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'employment',
            color: 'grey'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 'To view the job responsibilities, please view on desktop.',
            color: 'lime'
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Proofpoint`,
            position: `Front End Developer`,
            image: 'assets/proofpoint.png',
            dates: '2018 (Current)',
            location: 'Pittsburgh, PA',
            text:
              `Developed extensive training framework for learning cybersecurity essentials.\
              Worked with modern Javascript libraries to create a responsive, accessible platform\
              with customizable modules and a suite of module customization tools for hiring managers\
              to personalize modules for their employees. Worked with state-of-the-art systems such as \
              Docker, MongoDB, RabbitMQ to create and deploy production training modules and customization frameworks.`
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Frázïer Garments`,
            position: `CEO, Owner, Sole Developer`,
            image: 'assets/fg.png',
            dates: '2016-2018 (Current)',
            location: 'Pittsburgh, PA',
            text:
              `Developed extensive training framework for learning cybersecurity essentials.\
              Worked with modern Javascript libraries to create a responsive, accessible platform\
              with customizable modules and a suite of module customization tools for hiring managers\
              to personalize modules for their employees. Worked with state-of-the-art systems such as \
              Docker, MongoDB, RabbitMQ to create and deploy production training modules and customization frameworks.`
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Semio.AI`,
            position: `Software Engineering Contractor`,
            image: 'assets/semio.png',
            dates: 'Summer 2018',
            location: 'Remote',
            text:
              `Designed and developed React/Redux scalable web applications \
              in conjunction with Typescript for robotics development. \
              Worked closely with CTO remotely to create full-stack applications \
              to add to a software suite used to create functions and applications \
              for robots and IoT devices. Created WebSocket servers and 3D robot configuration \
              tools to integrate into the software suite.`
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Visionary Machines Inc.`,
            position: `Software Engineer`,
            image: 'assets/calypso.png',
            dates: '2017-2018',
            location: 'Remote',
            text:
              `Contracted to develop features for a robotics automation \
              software built in Javascript for children to learn robotics concepts \
              while creating programs for the Cozmo social robot. Rewrote poorly written \
              software to match Google Javascript Code Standards. Worked with a Pixi.js graphical \
              interface to simulate robot behavior.`
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Responsival`,
            position: `CTO & Lead Developer`,
            image: 'assets/responsival.png',
            dates: '2017-2018',
            location: 'Pittsburgh, PA',
            text:
              `Designed and developed hundreds of e-commerce websites \
              for both enterprise and local clients (i.e. ION360.com, GardenTowerProject.com, many more). \
              Developed Shopify themes and worked heavily with jQuery, other JavaScript libraries/plug-ins \
              to turn mockups into fully responsive e-commerce websites to meet and exceed client needs.`
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Honeywell - Vocollect Division`,
            position: `Voice Recognition ML Intern`,
            image: 'assets/honeywell.png',
            dates: '2016-2017',
            location: 'Pittsburgh, PA',
            text:
              `Developed speech recognition processes based on machine learning concepts at Vocollect, a recently \
              acquired Honeywell subsidiary, in Perl & C++. Designed software to optimize speech recognition \
              detection and develop robust neural networks through running experiments on the trained neural \
              networks. Tested high-performance GPU’s for neural network training.`
          }
        },
        {
          type: 'employment',
          payload: {
            title: `Codecademy`,
            position: `Pro Advisor`,
            image: 'assets/codecademy.png',
            dates: '2016-2017',
            location: 'Remote',
            text:
              `Advised and tutored aspiring developers on the Codecademy Pro program as an on-demand adviser. \
              Aided students along their path to completing Codecademy’s extensive coding boot camp in a multitude \
              of languages including AngularJS, Java, Python, Javascript, HTML/CSS, PHP, etc.`
          }
        }
      ];
      break;
    case 'proj':
    case 'projs':
    case 'projects':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'projects',
            color: 'grey'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 'NOTE: The projects listed below are either completed, works in progress, or abandoned. While not all of my projects are listed, the ones listed are those I consider to be my best efforts over the years.',
            color: 'darkorange'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 'To view the project, click the image.',
            color: 'lime'
          }
        },
        {
          type: 'project',
          payload: {
            title: `Nutritionist Deepa's Lentil Krispies`,
            subtitle: `Shopify Custom Development (2018)`,
            image: 'assets/deepa.png',
            link: 'https://nutritionistdeepa.com/',
            text:
              `Built custom Shopify website for Nutritionist Deepa's Lentil Krispies \
              superfood product. Consulted for their COO on how to manage the developer (me) \
              and graphic designer in a seamless fashion to release a top-notch e-commerce website.`
          }
        },
        {
          type: 'project',
          payload: {
            title: 'MyHealth',
            subtitle: `UPMC Children's Hospital Hackathon (2018)`,
            image: 'assets/myhealth.png',
            link: 'https://devpost.com/software/my-health-wj5bu7',
            text:
              'Mentored and led development with two CS students \
              at Carnegie Mellon in creating a React web application \
              for the Hack This Help Kids hackathon. The prototype was a \
              fully functional personal medical record database where \
              patients can take control of their medical data by owning \
              a personal copy of the records that are currently \
              being stored in hospital databases. Built with React, Redux, Typescript.'
          }
        },
        {
          type: 'project',
          payload: {
            title: 'Lipsite',
            subtitle: `Complete Distributor Platform for MLM Vendors (2016-2018)`,
            image: 'assets/lipsense.png',
            link: 'http://thelipsite.com/',
            text:
              'Built a WordPress MultiSite ecosystem for distributors of Senegence Lipsense products. \
              The platform provided each distributor with a personal website \
              that allows their customers to browse their inventory, \
              chat with them about products, and place orders. \
              There were many additional features such as custom blogs, pages, and total control over customization.'
          }
        },
        {
          type: 'project',
          payload: {
            title: 'Coursehub',
            subtitle: `Revolutionizing Student Communication (2016-2017)`,
            image: 'assets/coursehub.png',
            link: 'https://www.innovation.pitt.edu/blast-furnace-cohort5/',
            text:
              'Coursehub was apart of the Blast Furnace Student Startup Accelerator Program at the University of Pittsburgh.\
              Coursehub is a platform for student-to-student communication \
              for students enrolled in university where students can discuss course material with their peers.'
          }
        },
        {
          type: 'project',
          payload: {
            title: 'Laptops4College',
            subtitle: `Affiliate Marketing (2014-2018)`,
            image: 'assets/laptops4college.png',
            link: 'http://www.laptops4college.com/',
            text:
              'This was my first ever entrepreneurial endeavor. I saw a need for a \
              website that caters laptop searches specifically for college students, \
              so I created this website to help other college students find laptops. \
              This is an affiliate marketing website that generates revenue off of the Amazon Associates program. \
              I employed freelancers around the world to help write articles for the blog.'
          }
        }
      ]
      break;
    case 'awards':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'awards',
            color: 'grey'
          }
        },
        {
          type: 'regular',
          payload: {
            text: `NOTE: I think awards in general are subjective to the specific context and are not representative to a person's talent or merit. However, I am still proud of the projects I have created and the awards I have received for them.`,
            color: '#B00020'
          }
        },
        {
          type: 'regular',
          payload: {
            text: '2nd Place @ SteelHacks 2017 - Developed a VR Unity FPS Video Game.',
            color: '#FFDE03'
          }
        },
        {
          type: 'regular',
          payload: {
            text: '4nd Place @ SteelHacks 2016 - Developed a Tinder-inspired Restaurant Finder.',
            color: '#FFDE03'
          }
        }
      ]
      break;
    case 'nikush':
    case 'personality':
    case 'about':
    case 'me':
    case 'about me':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'about me',
            color: 'grey'
          }
        },
        {
          type: 'imagetext',
          payload: {
            text: 'Who am I?',
            imageUrl: 'assets/nikush.png',
            body: [
              `It's hard to classify myself. I'm a technology enthusiast, which is what \
              led me to become a programmer.\
              I attended the University of Pittsburgh but am completely self-taught when it comes to \
              my career. I am above all, a learner. Learning new things is what keeps me going in life.\
              I've always held an entrepreneurial spirit, and am always looking for new ventures to \
              invest my time into.`,
              `I love music. I love the outdoors \
              which is kind of ironic because I spend most of my time on the computer. I have a strong appreciation \
              for life and all the potential it holds. I try to create, develop, and do everything with \
              complete independance from common beliefs and traditional thought processes. Anyone who knows me \
              will tell you that I must understand most things in my own way before I can fully understand it the way \
              other people do.`,
              `Feel free to reach out to me, I'm pretty friendly. (hint: type 'contact')`,
              `- Nikush`
            ]
          }
        }
      ]
      break;
    case 'contact':
    case 'get in touch':
    case 'linkedin':
    case 'facebook':
    case 'twitter':
    case 'github':
    case 'email':
    case 'contact me':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'contact',
            color: 'grey'
          }
        },
        {
          type: 'link',
          payload: {
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/nikush-dalia-a40280108/',
            icon: faLinkedin
          }
        },
        {
          type: 'link',
          payload: {
            text: 'Github',
            link: 'https://github.com/nikushx',
            icon: faGithub
          }
        },
        {
          type: 'link',
          payload: {
            text: 'Twitter',
            link: 'https://twitter.com/NikushD',
            icon: faTwitter
          }
        },
        {
          type: 'link',
          payload: {
            text: 'nikushdalia@gmail.com',
            link: 'mailto:nikushdalia@gmail.com',
            icon: faMailBulk
          }
        }
      ]
      break;
    case 'ping':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'ping',
            color: 'grey'
          }
        },
        {
          type: 'imagetext',
          payload: {
            text: 'PONG',
            body: ['Hey there! I see that you tried the `ping` command. Well... pong. Try doing something else, this part is relatively boring.'],
            imageUrl: 'assets/ping.png'
          }
        }
      ]
      break;
    case 'help':
      response = [
        {
          type: 'regular',
          payload: {
            text: 'help',
            color: 'grey'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 'Available Commands:',
            color: '#FFDE03'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'employment',
            text: 'places I have worked'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'projects',
            text: 'projects I have developed for'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'about me',
            text: 'find out some personal information about me'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'contact',
            text: 'github, social media, email'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'awards',
            text: 'list of awards I have received'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'clear',
            text: 'clear screen and start fresh'
          }
        },
        {
          type: 'helpcommand',
          payload: {
            command: 'ping',
            text: 'pong'
          }
        }
      ]
      break;
    default:
      response = [
        {
          type: 'error',
          payload: {
            text: `'${payload.text}' is not a valid command.`
          }
        }
      ]
      break;
  }
  return response;
}