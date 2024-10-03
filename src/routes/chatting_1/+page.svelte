<!-- <script>
  let myEmail = "";
  let otherEmail = "";

  // 채팅방으로 이동
  function startChat() {
    if (myEmail.trim() && otherEmail.trim()) {
      window.location.href = `/chat/${myEmail}/${otherEmail}`;
    } else {
      alert("Please enter both emails");
    }
  }
</script>

<h1>Start a 1:1 Chat</h1>
<div>
  <label for="myEmail">Your Email:</label>
  <input id="myEmail" bind:value={myEmail} placeholder="Enter your email" />
</div>

<div>
  <label for="otherEmail">Other User's Email:</label>
  <input
    id="otherEmail"
    bind:value={otherEmail}
    placeholder="Enter other user's email"
  />
</div>

<button on:click={startChat}>Start Chat</button>

<style>
  div {
    margin-bottom: 10px;
  }
</style> -->
