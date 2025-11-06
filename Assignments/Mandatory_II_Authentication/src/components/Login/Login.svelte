<script>
    //Needs to call functions in App.svelte to change currentView variable.
      export let onShowCreateAccount;
      export let onShowresetPassword;
  
      function handleShowCreateAccount () {
          onShowCreateAccount();
      }

      function handleShowResetPassword () {
          onShowresetPassword();
      }
</script>

<h1 class="text-4xl font-bold text-center text-[#7e22ce] mb-6">Welcome Back</h1>
<h3 class="text-center text-[#737373] mb-6">Sign in to your account</h3>

<form action="#">
  <!-- Email input -->
  <div class="mb-4">
    <label class="block text-white mb-1" for="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="you@example.com"
      class="text-white placeholder-[#737373] w-full px-4 py-2 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  </div>

  <!-- Password input -->
  <div class="mb-6">
    <label class="block text-white mb-1" for="password">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      placeholder="••••••••"
      class="text-white placeholder-[#737373] w-full px-4 py-2 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  </div>

  <!-- Submit button -->
  <button
    type="button"
    class="w-full bg-[#7e22ce] hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition cursor-pointer"
  >
    Sign In
  </button>
</form>

<!-- Reset link -->
<p class="text-center text-gray-600 text-sm mt-4">
  Forgot your password? <button onclick={handleShowResetPassword} class="text-indigo-500 hover:underline cursor-pointer"
    >Reset</button
  >
</p>

<!-- Create account link-->
<p class="text-center text-gray-600 text-sm mt-4">
  Don't have an account? <button onclick={handleShowCreateAccount} class="text-indigo-500 hover:underline cursor-pointer"
    >Create one!</button
  >
</p>
