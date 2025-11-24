<script>
  import { navigate } from "svelte-routing";
  import { signOutNotification } from "../../utilFrontend/toastr.js";
  import { onMount } from "svelte";

  let email = "Loading...";

  async function handleSignOut () {
    const res = await fetch("http://localhost:8080/signOut", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    
    const data = await res.json();

    if (res.ok) {
      signOutNotification(true);
      navigate("/")
    } else {
      signOutNotification(false);
      console.log("Something went wrong:", data);
    }
  }

  async function handleFetchEmail ()  {
    const res = await fetch("http://localhost:8080/fetchEmail", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    
    if (res.ok) {
        return data.email;
    } else {
        return "Seems you have tried to enter without loggin in, you silly goose";
    }
  }

  onMount(async () => {
    email = await handleFetchEmail();
  });

</script>

<div
  class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-[#2e1065]"
>
  <h1 class="text-4xl font-bold text-center text-[#7e22ce] mb-6">
    You have succesfully logged in!
  </h1>

  <h3 class="text-1xl font-bold text-center text-[white] mb-6">
    This is your email: {email}
  </h3>

  <button
    onclick={handleSignOut}
    type="submit"
    class="w-40 bg-[#7e22ce] hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition cursor-pointer"
  >
    Sign out
  </button>
</div>
