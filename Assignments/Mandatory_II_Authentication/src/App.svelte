<script>
    import CreateAccount from "./components/CreateAccount/CreateAccount.svelte";
    import Login from "./components/Login/Login.svelte";
    import OuterBox from "./components/OuterBox/OuterBox.svelte";
    import ResetAccount from "./components/ResetPassword/ResetPassword.svelte";

    let currentView = "login"

    function showLogin () {
        currentView = "login";
    }

    function showCreateAccount () {
        currentView = "createAccount";
    }

    function showResetPassword ()   {
        currentView = "resetPassword";
    }

</script>

<OuterBox>
    {#if currentView === "login"} 
        <Login 
            onShowCreateAccount={showCreateAccount}
            onShowresetPassword={showResetPassword}
        />
    {:else if currentView === "resetPassword"}
        <ResetAccount 
            onShowLogin={showLogin}
        />
    {:else if currentView === "createAccount"}
        <CreateAccount 
            onShowLogin={showLogin}
        />
    {/if}
</OuterBox>

