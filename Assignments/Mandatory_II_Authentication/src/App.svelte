<script>
  import { Router, Link, Route } from "svelte-routing";
  import CreateAccount from "./components/CreateAccount/CreateAccount.svelte";
  import SignIn from "./components/SignIn/SignIn.svelte";
  import OuterBox from "./components/OuterBox/OuterBox.svelte";
  import ResetPassword from "./components/ResetPassword/ResetPassword.svelte";
  import MainPage from "./components/MainPage/MainPage.svelte";
</script>

<Router>
  <Route path="/">
    <OuterBox>
      <SignIn />
    </OuterBox>
  </Route>

  <Route path="/create">
    <OuterBox>
      <CreateAccount />
    </OuterBox>
  </Route>

  <Route path="/reset">
    <OuterBox>
      <ResetPassword />
    </OuterBox>
  </Route>

  <Route path="/mainPage">
    <MainPage />
  </Route>
</Router>

