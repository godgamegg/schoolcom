<script>
  import { writing_comment_toggle, writing_more_toggle } from "../store/store";

  let writing_more_1 = 0;
  writing_more_toggle.subscribe((value) => {
    writing_more_1 = value;
  });

  let writing_more_off = () => {
    writing_more_toggle.set(0);
  };

  import Nested from "../comments/Nested.svelte";

  let comment_on = () => {
    writing_comment_toggle.set(1);
    console.log(1);
  };
</script>

{#if writing_more_1 == 1}
  <div class={`writing_more_page writing_more_page_open`}>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="writing_more_page_top">
      <div class="writing_more_page_title"><div>(제목)</div></div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        on:click={writing_more_off}
        class="writing_more_page_top_x"
        src="/white_x.png"
        alt=""
      />
    </div>
    <div class="writing_more_page_middle"></div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="writing_more_page_bottom">
      <div style="flex-grow:1; display:flex; flex-direction:row">
        <div class="writing_more_good writing_more_goodbad">
          <img width="50px" src="/good_on.png" alt="" />
          <div style="color:white; font-weight:bold; font-size:25px">100</div>
        </div>
        <div class="writing_more_bad writing_more_goodbad">
          <img width="50px" src="/bad_on.png" alt="" />
          <div style="color:white; font-weight:bold; font-size:25px">100</div>
        </div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="writing_more_answer_open" on:click={comment_on}>
        <img style="margin-right:10px;" src="/chatting.png" alt="" />
        <div>댓글 보기 / 달기</div>
      </div>
    </div>
  </div>
  <Nested />
{/if}

<style>
  .writing_more_page {
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
  .writing_more_page_top {
    width: 100%;
    height: 70px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
  }
  .writing_more_page_title {
    flex-grow: 1;
    color: white;
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 28px;
    font-weight: bold;
  }
  .writing_more_page_top_x {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .writing_more_page_open {
    display: flex;
  }
  .writing_more_page_middle {
    width: 100%;
    /* height: 200px; */
    flex-grow: 1;
    background-color: #f9f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .writing_more_page_bottom {
    width: 100%;
    height: 60px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .writing_more_answer_open {
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
  .writing_more_goodbad {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
