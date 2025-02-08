<script>
    import './style.css';
	export let data;
	let email = '';
	let message = '';
	let loading = false;

	if (data?.message) {
		message = data.message;
	}

	async function handleSubmit(event) {
		loading = true;
	}
</script>

<div class="container">
	<div class="card">
		<h2>Two-Factor Authentication</h2>
		<p>Register your email to enable two-factor authentication.</p>

		<form method="post" on:submit={handleSubmit}>
			<label for="email">Enter your email:</label>
			<input type="email" name="email" id="email" bind:value={email} required />

			<button type="submit" disabled={loading}>
				{#if loading}
					<span class="spinner"></span> Loading...
				{:else}
					Register
				{/if}
			</button>
		</form>

		{#if message}
			<p class="error">{message}</p>
		{/if}
	</div>
</div>