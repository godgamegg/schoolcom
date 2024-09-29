<script>
  import { usergmail_page } from "../store/store.js";

  export let data;
  usergmail_page.set(data.session?.user?.email);
</script>

<h1>Protected</h1>
<!-- <a href="/"></a> -->
