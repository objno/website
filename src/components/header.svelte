<script>
	import KlyngeLogo from './objekt-venture-logo.svelte';
</script>

<nav>
	<a href="/" class="logo" aria-label="Go back to home">
		<KlyngeLogo />
	</a>
</nav>

<style>
	.logo {
		max-height: 18px;
		padding: var(--space-xs);
		margin-left: calc(var(--space-xs) * -1);
	}
</style>
