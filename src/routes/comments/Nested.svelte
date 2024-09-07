<script>
  import { writing_comment_toggle } from "../store/store";

  let writing_comment_1 = 0;
  writing_comment_toggle.subscribe((value) => {
    writing_comment_1 = value;
  });

  let writing_comment_off = () => {
    writing_comment_toggle.set(0);
  };

  import Nested from "../comments_form/Nested.svelte";
</script>

{#if writing_comment_1 == 1}
  <div class={`writing_comment_page writing_comment_page_open`}>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="writing_comment_page_top">
      <div class="writing_comment_page_title"><div>(제목)의 댓글</div></div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        on:click={writing_comment_off}
        class="writing_comment_page_top_x"
        src="/white_x.png"
        alt=""
      />
    </div>
    <div class="writing_comment_page_middle">
      <Nested />
      <Nested />
    </div>
    <div class="writing_comment_page_bottom">
      <input class="writing_comment_page_comment_input" type="text" />
      <div class="writing_comment_send_container">
        <img class="writing_comment_send" src="/write_sending.png" alt="" />
      </div>
    </div>
  </div>
  <!-- <Nested /> -->
{/if}

<style>
  .writing_comment_page {
    position: fixed;
    background-color: #f9f7f7;
    width: 1100px;
    height: 750px;
    left: 10%;
    top: 10%;
    border-radius: 10px;
    border: #112d4e solid 5px;
    display: none;
    flex-direction: column;
    z-index: 10;
  }
  .writing_comment_page_top {
    width: 100%;
    height: 70px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
  }
  .writing_comment_page_title {
    flex-grow: 1;
    color: white;
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 28px;
    font-weight: bold;
  }
  .writing_comment_page_top_x {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .writing_comment_page_open {
    display: flex;
  }
  .writing_comment_page_middle {
    width: 100%;
    /* height: 200px; */
    flex-grow: 1;
    background-color: #f9f7f7;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    overflow-y: scroll;
  }
  .writing_comment_page_bottom {
    width: 100%;
    height: 60px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .writing_comment_answer_open {
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #225c9e;
  }
  .writing_comment_page_comment_input {
    width: 85%;
    height: 50%;
    border-radius: 10px;
    font-size: 25px;
  }
  .writing_comment_send_container {
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-right: 20px;
    /* padding: 10px; */
    background-color: #2871c4;
    border: #1f518b 4px solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .writing_comment_send {
    width: 30px;
  }
</style>
