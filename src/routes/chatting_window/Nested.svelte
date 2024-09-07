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
</script>

{#if chatting_toggle1 == 1}
  <div class="chattingwin_container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="chattingwin_top">
      <div class="chattingwin_main">
        <div class="chattingwin_user">
          젠장 또 대상혁이야 나는 또 숭배해야만 해
        </div>
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
