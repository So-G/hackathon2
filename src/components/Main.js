import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage';
import PageOne from '../screens/PageOne';
import PageTwo from '../screens/PageTwo';
import PageThree from '../screens/PageThree';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/page-one" component={PageOne} />
        <Route exact path="/page-two" component={PageTwo} />
        <Route exact path="/page-three" component={PageThree} />
      </Switch>
    </main>
  );
}
