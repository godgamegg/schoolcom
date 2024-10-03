<script>
  import { onMount } from "svelte";
  let roomId;
  let messages = [];
  let newMessage = "";
  let sender = "";

  // 메시지 불러오기
  async function loadMessages() {
    const res = await fetch(`/api/chat/${roomId}/messages`);
    messages = await res.json();
  }

  // 메시지 전송
  async function sendMessage() {
    if (newMessage.trim() === "") return;

    await fetch(`/api/chat/${roomId}/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender, message: newMessage }),
    });

    newMessage = "";
    loadMessages();
  }

  // 컴포넌트 로드 시 메시지 불러오기 및 자동 갱신
  onMount(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 3000);
    return () => clearInterval(interval);
  });
</script>

<h1>Chat Room: {roomId}</h1>

<div>
  <label for="sender">Your name:</label>
  <input id="sender" bind:value={sender} />
</div>

<div>
  <label for="message">Message:</label>
  <input id="message" bind:value={newMessage} />
  <button on:click={sendMessage}>Send</button>
</div>

<ul>
  {#each messages as message}
    <li><strong>{message.sender}:</strong> {message.message}</li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
  }
  li {
    margin-bottom: 10px;
  }
</style>
