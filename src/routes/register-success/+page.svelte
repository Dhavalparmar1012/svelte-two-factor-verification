<script>
	import { page } from '$app/stores';
	import '../style.css';
	import { goto } from '$app/navigation';

	let email = $page.url.searchParams.get('email');

	// Prevent navigating back to the OTP page
	history.replaceState({}, '', '/register-success');

	if (!email) {
		// Redirect if no email is present
		goto('/register');
	}
</script>

{#if email}
	<div class="container">
		<div class="card">
			<h2>Registration Successful</h2>
			<p>
				Congratulations! You have successfully registered with the email: <strong>{email}</strong>.
			</p>
			<button class="button" on:click={() => goto('/')}> Go to Login </button>
		</div>
	</div>
{:else}
	<script>
		// Redirect back if no email is found
		goto('/register');
	</script>
{/if}
