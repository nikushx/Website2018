import { LoggedCommandResponse, Payload } from './reducer';

export const determineResponse = (payload: Payload) => {
  let response: LoggedCommandResponse[];
  const text = payload.text.toLowerCase();
  switch (text) {
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
            text: 'NOTE: Projects listed below can be completed, a work in progress, or abandoned. While not all of my projects are listed, these are the ones I consider to be my biggest efforts.',
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
          type: 'regular',
          payload: {
            text: 'To expand the project, click the caret.',
            color: 'lime'
          }
        },
        {
          type: 'project',
          payload: {
            title: 'MyHealth',
            subtitle: `Children's Hospital Hackathon`,
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
            subtitle: `Complete Distributor Platform for MLM Vendors`,
            image: 'assets/lipsense.png',
            link: 'http://thelipsite.com/',
            text:
              'Built a WordPress MultiSite ecosystem for distributors of Senegence Lipsense products. \
              The platform provided each distributor with a personal website \
              that allows their customers to browse their inventory, \
              chat with them about products, and place orders. \
              There were many additional features such as custom blogs, pages, and total control over customization.'
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
            header: 'PONG',
            text: 'Hey there! I see that you tried the `ping` command. Well... pong. Try doing something else, this part is relatively boring.',
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
            text: 'sending a chopper...'
          }
        },
        {
          type: 'regular',
          payload: {
            text: '...'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 'chopper has arrived.'
          }
        },
        {
          type: 'regular',
          payload: {
            text: 'Use `projects` for a list of my projects.'
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