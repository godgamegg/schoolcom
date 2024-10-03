<script>

    export let data;

	import nes from './Nested.svelte';

	const pkg = {
		name: data.user[0].username;
	};
</script>

<nes {...pkg} />
