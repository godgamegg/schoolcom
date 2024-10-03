<script>
  import { onMount, afterUpdate } from "svelte";
  import { page } from "$app/stores"; // 유저 ID를 가져오기 위해 사용

  let scrollableDiv;

  // 페이지가 로드될 때 스크롤을 맨 아래로 설정

  let messages = [];
  let newMessage = "";
  let userId = "";
  // 페이지가 마운트 될 때 실행되는 코드
  onMount(async () => {
    const params = $page.params;
    userId = params.userId;
    // console.log(userId);
    await loadMessages();
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
  });

  afterUpdate(() => {
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
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

  // import { page } from "$app/stores";

  let user_name;
  // export let par_type;
  // 쿼리 파라미터 값 추출
  $: user_name = $page.url.searchParams.get("user_name") || "00";
</script>

<div class="chattingwin_container">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="chattingwin_top">
    <div class="chattingwin_main">
      <div class="chattingwin_user">채팅 상대 : {user_name}</div>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
  </div>
  <div class="chattingwin_mid">
    <div bind:this={scrollableDiv}>
      <!-- 대화 내용 표시 -->
      {#each messages as message}
        {#if message.sender == user_name}
          <div class="chatting_form_your_container">
            <div class="chatting_form_your_profil">
              <img
                class="chatting_form_your_profil1"
                src="/profil.png"
                alt=""
              />
              <div class="chatting_form_your_name">{message.sender}</div>
            </div>
            <div class="chatting_form_your_write">
              {message.text}
              <div style="flex-grow: 1;"></div>
            </div>
          </div>
        {:else}
          <!-- <div><strong>내꺼 {message.sender}</strong>:</div> -->
          <div class="chatting_form_my_container">
            <div style="flex-grow: 1;"></div>
            <div class="chatting_form_my_write">{message.text}</div>
            <div class="chatting_form_my_profil">
              <img class="chatting_form_my_profil1" src="/profil.png" alt="" />
              <div class="chatting_form_my_name">{message.sender}</div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
  <div class="chattingwin_bot">
    <div class="chattingwin_img"></div>
    <!-- 메시지 입력 폼 -->
    <input class="chatting_input" type="text" bind:value={newMessage} />

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="chattingwin_send" on:click={sendMessage}>
      <img width="40px" height="40px" src="/write_sending.png" alt="" />
    </div>
  </div>
</div>

<style>
  .chattingwin_container {
    /* position: fixed; */
    top: 150px;
    left: 200px;
    width: calc(100%);
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    /* border: #112d4e 2px solid;s */
    /* overflow-x: hidden; */
  }
  .chattingwin_top {
    width: 100%;
    height: 80px;
    background-color: #112d4e;
    display: flex;
  }

  .chattingwin_mid {
    /* flex-grow: 1; */
    background-color: #ddedff;
    overflow-y: scroll;
    height: 510px;
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

  /* .chattingwin_x {
    width: 100px;
  } */
  /* .chattingwin_chat {
    width: 80%;
    height: 50px;
    margin-left: 20px;
    font-size: 20px;
  } */
  .chattingwin_img {
    width: 50px;
    height: 50px;
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
    margin-right: 50px;
  }
  .chatting_input {
    /* width: calc(100%-100px); */
    flex-grow: 1;
    height: 50px;
    font-size: 50px;
  }

  .chatting_form_my_container {
    width: 100%;
    /* background-color: antiquewhite; */
    display: flex;
    /* align-items: cen; */
  }
  .chatting_form_my_write {
    width: fit-content;
    background-color: white;
    margin: 10px 20px 10px 40px;
    border: black 1px solid;
    border-radius: 30px 30px 0px 30px;
    display: flex;
    align-items: center;
    padding: 20px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .chatting_form_my_profil {
    width: 90px;
    margin: 10px 0px 10px 0px;
  }
  .chatting_form_my_profil1 {
    width: 50px;

    margin-right: 20px;
    background-color: black;
    border-radius: 50%;
  }
  .chatting_form_your_container {
    width: 100%;
    /* background-color: antiquewhite; */
    display: flex;
    /* align-items: cen; */
  }
  .chatting_form_your_write {
    width: fit-content;
    background-color: white;
    margin: 10px 40px 10px 20px;
    border: black 1px solid;
    border-radius: 30px 30px 30px 0px;
    display: flex;
    align-items: center;
    padding: 20px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .chatting_form_your_profil {
    width: 90px;
    margin: 10px 0px 10px 0px;
  }
  .chatting_form_your_profil1 {
    width: 50px;

    margin-left: 20px;
    background-color: black;
    border-radius: 50%;
  }
  .chatting_form_your_name {
    margin-left: 20px;
    font-weight: bold;
  }
  .chatting_form_my_name {
    margin-right: 20px;
    font-weight: bold;
  }
</style>
