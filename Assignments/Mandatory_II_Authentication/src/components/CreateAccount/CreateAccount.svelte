<script>
  import { navigate } from "svelte-routing";
  import { accountCreated, pwNotAMatch } from '../../utilFrontend/toastr.js';

  let email = "";
  let password = "";
  let confirmPassword = "";

  function handleShowSignIn() {
    navigate("/");
  }

  async function handleCreateAccount (event) {
    event.preventDefault();

    if (confirmPassword !== password) {
        pwNotAMatch();
        return;
    }
      
    try {
      const res = await fetch("http://localhost:8080/createAccount", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
        
      const data = await res.json();

      if (res.ok)  {
        accountCreated(true);
        navigate("/")
      } else {
        accountCreated(false);      
      }
    } catch (error) {
        console.log("Something went wrong", error);
    }
  }
</script>

<h1 class="text-4xl font-bold text-center text-[#7e22ce] mb-6">
  Create Account
</h1>
<h3 class="text-center text-[#737373] mb-6">Sign up for a new account</h3>

<form onsubmit={handleCreateAccount}>
  <!-- Email input -->
  <div class="mb-4">
    <label class="block text-white mb-1" for="email">Email</label>
    <input
      bind:value={email}
      id="email"
      type="email"
      name="email"
      placeholder="you@example.com"
      required
      class="text-white placeholder-[#737373] w-full px-4 py-2 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  </div>

  <!-- Password input -->
  <div class="mb-4">
    <label class="block text-white mb-1" for="password">Password</label>
    <input
      bind:value={password}
      id="password"
      type="password"
      name="password"
      placeholder="••••••••"
      required
      class="text-white placeholder-[#737373] w-full px-4 py-2 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  </div>

  <!-- Confirm Password input -->
  <div class="mb-6">
    <label class="block text-white mb-1" for="confirmPassword"
      >Confirm Password</label
    >
    <input
    bind:value={confirmPassword}
      id="confirmPassword"
      type="password"
      name="confirmPassword"
      placeholder="••••••••"
      required
      class="text-white placeholder-[#737373] w-full px-4 py-2 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  </div>

  <!-- Submit button -->
  <button
    type="submit"
    class="w-full bg-[#7e22ce] hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition cursor-pointer"
  >
    Create Account
  </button>
</form>

<!-- Back to signIn link -->
<p class="text-center text-gray-600 text-sm mt-4">
  Already have an account?
  <button
    onclick={handleShowSignIn}
    class="text-indigo-500 hover:underline cursor-pointer"
  >
    Sign In
  </button>
</p>
