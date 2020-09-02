import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./layouts/Main";

const HomePage = lazy(() => import("./pages/Home"));
const QuizPage = lazy(() => import("./pages/Quiz"));
const ResultPage = lazy(() => import("./pages/Result"));

function App() {
  return (
    <Suspense fallback={"loading..."}>
      <Router>
        <Main>
          <Switch>
            <Route exact path={"/"}>
              <HomePage />
            </Route>
            <Route path={"/quiz"}>
              <QuizPage />
            </Route>
            <Route path={"/result"}>
              <ResultPage />
            </Route>
          </Switch>
        </Main>
      </Router>
    </Suspense>
  );
}

export default App;
