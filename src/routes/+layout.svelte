<script lang="ts">
	import '@fontsource/space-mono';
	import Header from '../components/header.svelte';
	import type { WithContext, LocalBusiness } from 'schema-dts';
	import { serializeSchema } from '../utils';

	const localBusiness: WithContext<LocalBusiness> = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Objekt Venture AS',
		url: 'https://obj.no/',
		logo: 'https://obj.no/assets/klynge-logo.svg',
		image: 'https://obj.no/assets/klynge-logo.svg',
		telephone: '+47 95308087',
		email: 'so@obj.no',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Myntgata 2',
			addressLocality: 'Oslo',
			addressRegion: 'Oslo',
			postalCode: '0151',
			addressCountry: 'NO'
		}
	};
</script>

<svelte:head>
	{@html serializeSchema(localBusiness)}
</svelte:head>

<div class="container">
	<Header />
	<main>
		<slot>
			<!-- +page.svelte is rendered here -->
		</slot>
	</main>
	<footer>
		<p>
			<b>Objekt Venture AS</b> // 920 327 117
		</p>
	</footer>
</div>

<style>
	@keyframes -global-load {
		from {
			opacity: 0.8;
			-webkit-transform: translate3d(0, 1%, 0);
			transform: translate3d(0, 1%, 0);
		}

		to {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}

	:global(:root) {
		--fern-50: rgb(134, 255, 200);
		--fern-100: rgb(96, 247, 167);
		--fern-200: rgb(68, 224, 146);
		--fern-300: rgb(32, 201, 125);
		--fern-400: rgb(0, 178, 105);
		--fern-500: rgb(0, 156, 85);
		--fern-600: rgb(0, 134, 66);
		--fern-700: rgb(0, 113, 47);
		--fern-800: rgb(0, 93, 29);
		--fern-900: rgb(0, 72, 10);
		--violet-50: rgb(255, 238, 255);
		--violet-100: rgb(255, 204, 244);
		--violet-200: rgb(235, 182, 221);
		--violet-300: rgb(212, 160, 199);
		--violet-400: rgb(190, 139, 177);
		--violet-500: rgb(168, 119, 156);
		--violet-600: rgb(146, 98, 134);
		--violet-700: rgb(125, 78, 114);
		--violet-800: rgb(105, 60, 95);
		--violet-900: rgb(85, 41, 76);
		--lapis-50: rgb(217, 242, 255);
		--lapis-100: rgb(179, 208, 255);
		--lapis-200: rgb(152, 186, 255);
		--lapis-300: rgb(126, 164, 255);
		--lapis-400: rgb(97, 144, 255);
		--lapis-500: rgb(64, 123, 255);
		--lapis-600: rgb(0, 104, 249);
		--lapis-700: rgb(0, 85, 226);
		--lapis-800: rgb(0, 67, 203);
		--lapis-900: rgb(0, 50, 180);
		--canary-50: rgb(255, 248, 124);
		--canary-100: rgb(255, 214, 91);
		--canary-200: rgb(238, 192, 69);
		--canary-300: rgb(214, 170, 46);
		--canary-400: rgb(190, 149, 18);
		--canary-500: rgb(167, 129, 0);
		--canary-600: rgb(143, 108, 0);
		--canary-700: rgb(120, 89, 0);
		--canary-800: rgb(99, 71, 0);
		--canary-900: rgb(80, 52, 0);
		--dark-50: rgb(255, 255, 255);
		--dark-100: rgb(220, 220, 220);
		--dark-200: rgb(198, 198, 198);
		--dark-300: rgb(176, 176, 176);
		--dark-400: rgb(155, 155, 155);
		--dark-500: rgb(134, 134, 134);
		--dark-600: rgb(113, 113, 113);
		--dark-700: rgb(93, 93, 93);
		--dark-800: rgb(75, 75, 75);
		--dark-900: rgb(57, 57, 57);

		--muted-100: rgb(248, 252, 255);

		--muted-color: var(--muted-100);

		--font-size-sm: clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem);
		--font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
		--font-size-md: clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem);
		--font-size-lg: clamp(1.56rem, 1vw + 1.31rem, 2.11rem);
		--font-size-xl: clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem);
		--font-size-xxl: clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem);
		--font-size-xxxl: clamp(3.05rem, 3.54vw + 2.17rem, 5rem);

		--space-3xs: clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem);
		--space-2xs: clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem);
		--space-xs: clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem);
		--space-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
		--space-m: clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem);
		--space-l: clamp(2.25rem, calc(2.16rem + 0.43vw), 2.5rem);
		--space-xl: clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem);
		--space-2xl: clamp(4.5rem, calc(4.33rem + 0.87vw), 5rem);
		--space-3xl: clamp(6.75rem, calc(6.49rem + 1.3vw), 7.5rem);
	}

	:global(html) {
		overflow-y: scroll;
	}

	:global(body) {
		background-color: var(--muted-color);
		font-family: 'Space Mono', sans-serif;
		color: var(--dark-900);

		font-size: var(--font-size-base);
	}

	:global(a) {
		color: var(--primary-color);
		text-decoration: underline;
	}

	main {
		display: flex;
		flex-direction: column;

		gap: var(--space-m);
	}

	.container {
		animation: load 1s both;
		max-width: 1240px;
		min-width: 320px;
		margin: 0 auto;
		padding: var(--space-s);
	}

	footer {
		margin-top: var(--space-xl);
	}
</style>
