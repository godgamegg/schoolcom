<script>
  import { chatting_toggle } from "../store/store";

  let chatting_toggle1 = 0;
  chatting_toggle.subscribe((value) => {
    chatting_toggle1 = value;
  });
  let chatting_off = () => {
    chatting_toggle.set(0);
  };

  import Nested1 from "../chatting_form_my/Nested.svelte";

  import Nested2 from "../chatting_form_your/Nested.svelte";

  // export let data;
  // export let currentJ;
  // console.log("cehck", data.user1[currentJ].email);
  // // console.log()

  import { onMount } from "svelte";
  import { page } from "$app/stores"; // 유저 ID를 가져오기 위해 사용

  export let data;

  let messages = [];
  let newMessage = "";
  let userId = "";

  // 페이지가 마운트 될 때 실행되는 코드
  onMount(async () => {
    const params = $page.params;
    userId = params.userId; // 'godgame0202@gmail.com'을 받아옴
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

{#if chatting_toggle1 == 1}
  <div class="chattingwin_container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="chattingwin_top">
      <div class="chattingwin_main">
        <div class="chattingwin_user">채팅 상대 : 뭘봐</div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={chatting_off} class="chattingwin_x">
        <img style="width:65px; height:65px;" src="/white_x.png" alt="" />
      </div>
    </div>
    <div class="chattingwin_mid">
      <Nested1 />
      <Nested2 />
    </div>
    <div class="chattingwin_bot">
      <div class="chattingwin_img"></div>
      <textarea class="chattingwin_chat" />
      <div class="chattingwin_send">
        <img width="40px" height="40px" src="/write_sending.png" alt="" />
      </div>
    </div>
  </div>
{/if}

<style>
  .chattingwin_container {
    position: fixed;
    top: 150px;
    left: 200px;
    width: 1000px;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: #112d4e 10px solid;
  }
  .chattingwin_top {
    width: 100%;
    height: 80px;
    background-color: #112d4e;
    display: flex;
  }

  .chattingwin_mid {
    flex-grow: 1;
    background-color: #ddedff;
    overflow-y: scroll;
  }
  .chattingwin_bot {
    width: 100%;
    height: 100px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
  }
  .chattingwin_main {
    margin-left: 30px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    flex-grow: 1;
    /* height: 100%; */
  }

  .chattingwin_x {
    width: 100px;
  }
  .chattingwin_chat {
    width: 80%;
    height: 50px;
    margin-left: 20px;
    font-size: 20px;
  }
  .chattingwin_img {
    width: 50px;
    height: 50px;
    background-color: black;
    margin-left: 20px;
    border: white 2px solid;
    border-radius: 50%;
  }
  .chattingwin_send {
    width: 70px;
    height: 70px;
    margin-left: 20px;
    background-color: black;
    border: white 2px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
