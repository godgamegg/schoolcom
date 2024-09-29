<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores"; // 유저 ID를 가져오기 위해 사용

  let messages = [];
  let newMessage = "";
  let userId = "";

  // 페이지가 마운트 될 때 실행되는 코드
  onMount(async () => {
    const params = $page.params;
    userId = params.userId;
    // console.log(userId);
    await loadMessages();
  });

  // 메시지 로드
  async function loadMessages() {
    const res = await fetch(`/api/chat/${userId}`);
    messages = await res.json();
  }

  // 메시지 보내기
  async function sendMessage() {
    if (!newMessage.trim()) return; // 빈 메시지 방지
    await fetch(`/api/chat/${userId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newMessage }),
    });
    newMessage = ""; // 입력 필드 초기화
    await loadMessages(); // 메시지 갱신
  }
</script>

<div>
  <!-- 대화 내용 표시 -->
  {#each messages as message}
    <div>
      <strong>{message.sender}</strong>: {message.text}
    </div>
  {/each}
</div>

<!-- 메시지 입력 폼 -->
<input type="text" bind:value={newMessage} />
<button on:click={sendMessage}>전송</button>
