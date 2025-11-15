<script>
  import { Router, Link, Route } from "svelte-routing";
  import CreateAccount from "./components/CreateAccount/CreateAccount.svelte";
  import Login from "./components/Login/Login.svelte";
  import OuterBox from "./components/OuterBox/OuterBox.svelte";
  import ResetPassword from "./components/ResetPassword/ResetPassword.svelte";
</script>

<Router>
  <Route path="/">
    <OuterBox>
      <Login />
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
</Router>

