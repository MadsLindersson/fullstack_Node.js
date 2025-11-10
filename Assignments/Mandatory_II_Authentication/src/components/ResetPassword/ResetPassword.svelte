<script>
    import toastr from "toastr";
    import "toastr/build/toastr.min.css";

    export let onShowLogin;

    let email = "";

    function resetMailSendNotification () {
      if (!email.includes ("@") || !email.includes("."))  {
        toastr.error("Is not an email adress, please enter a valid email adress", email);
        
      } else {
        toastr.success(email, "A mail has been sent to:");
      }
    }

    function handleShowLogin ()  {
      onShowLogin();
    }
</script>

<h1 class="text-4xl font-bold text-center text-[#7e22ce] mb-6">Reset Password</h1>
<h3 class="text-center text-[#737373] mb-6">Enter your email to reset your password</h3>

<form action="#">
  <!-- Email input -->
  <div class="mb-6">
    <label class="block text-white mb-1" for="email">Email</label>
    <input
      bind:value={email} 
      id="email"
      type="email"
      name="email"
      placeholder="you@example.com"
      class="text-white placeholder-[#737373] w-full px-4 py-2 border border-[#737373] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
    />
  </div>

  <!-- Submit button -->
  <button
    onclick={resetMailSendNotification}
    type="button"
    class="w-full bg-[#7e22ce] hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md transition cursor-pointer"
  >
    Send Reset Link
  </button>
</form>

<!-- Back to login link -->
<p class="text-center text-gray-600 text-sm mt-4">
  Remember your password? 
  <button onclick={handleShowLogin} class="text-indigo-500 hover:underline cursor-pointer">
    Login
  </button>
</p>