import { RouteComponentProps } from '@reach/router';

import LandingPage from 'src/pages/LandingPage';
import CreateEventPage from 'src/pages/CreateEventPage';
import UpdateEventPage from 'src/pages/UpdateEventPage';

import EventPage from 'src/pages/EventPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import { ReactComponent } from 'src/utils/types';
import HowToFagkveld from '../pages/HowToFagkveld';

export type Route<P extends RouteComponentProps> = {
  path: string;
  label?: string;
  component: ReactComponent<P>;

};

const routes: Array<Route<any>> = [
  {
    path: '/',
    label: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/how-to-fagkveld',
    label: 'How to Fagkveld',
    component: HowToFagkveld,
  },
  {
    path: '/create-event',
    label: 'Create event',
    component: CreateEventPage,
  },
  {
    path: '/update-event/:eventId/*',
    component: UpdateEventPage,
  },
  {
    path: '/event/:eventId/*',
    component: EventPage,
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
];

export default routes;
