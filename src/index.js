import hyperHTML from 'hyperhtml';
import { Page } from './components.js';
import data from './data.js';

const rootElement = document.getElementById('root');
const page = Page(data);

hyperHTML.bind(rootElement)`${page}`;
