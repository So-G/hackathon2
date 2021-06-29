import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import ProjectPage from '../screens/ProjectPage';
import ProjectDetailsPage from '../screens/ProjectDetailsPage';
import ProjectDetailsPage2 from '../screens/ProjectDetailsPage2';
import ProjectDetailsPage3 from '../screens/ProjectDetailsPage3';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/projects/1" component={ProjectDetailsPage} />
        <Route exact path="/projects/2" component={ProjectDetailsPage2} />
        <Route exact path="/projects/3" component={ProjectDetailsPage3} />
      </Switch>
    </main>
  );
}
