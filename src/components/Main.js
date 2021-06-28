import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import FormPage from '../screens/FormPage';
import ProjectDetailsPage from '../screens/ProjectDetailsPage';
import ProjectPage from '../screens/ProjectPage';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/projects/:id" component={ProjectDetailsPage} />
        <Route exact path="/form" component={FormPage} />
      </Switch>
    </main>
  );
}
