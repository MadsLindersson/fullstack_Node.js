<script>
    import CreateAccount from "./components/CreateAccount/CreateAccount.svelte";
    import Login from "./components/Login/Login.svelte";
    import OuterBox from "./components/OuterBox/OuterBox.svelte";
    import ResetAccount from "./components/ResetPassword/ResetPassword.svelte";

    let currentView = "login"

    function showLogin () {
        currentView = "login";
        window.location.hash = "#login"
    }

    function showCreateAccount () {
        currentView = "createAccount";
        window.location.hash = "#create"
    }

    function showResetPassword ()   {
        currentView = "resetPassword";
        window.location.hash = "#reset"
    }

    function updateViewFromHash() {
        const hash = window.location.hash;
        if (hash === "#create") {
            currentView = "createAccount";
        } else if (hash === "#reset") {
            currentView = "resetPassword";
        } else {
            currentView = "login";
        }
    }

    updateViewFromHash();

    window.addEventListener("hashchange", () => {
        updateViewFromHash();
    });


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