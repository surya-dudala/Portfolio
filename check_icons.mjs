import * as siIcons from 'react-icons/si';
import { personalInfo, aboutCards, skills, services, projects, timeline, achievements } from './src/data.js';

console.log('Validating skills icons...');
let hasError = false;
skills.forEach(group => {
  group.items.forEach(skill => {
    if (!skill.icon) {
      console.log(`ERROR: Icon for ${skill.name} is undefined!`);
      hasError = true;
    }
  });
});

console.log('Validation complete. Has error?', hasError);
