<script>
  // @ts-nocheck

  import { callender_inform_toggle } from "../store/store";
  import { callender_inform_type } from "../store/store";
  let callender_inform_toggle1 = 0;
  callender_inform_toggle.subscribe((value) => {
    callender_inform_toggle1 = value;
  });
  let callender_inform_type1 = 0;
  callender_inform_type.subscribe((value) => {
    callender_inform_type1 = value;
  });

  let callender_inform_toggle_close = () => {
    callender_inform_toggle.set(0);
  };

  import Nested from "../comments/Nested.svelte";

  import { writing_comment_toggle } from "../store/store";
  let cal_comment_on = () => {
    writing_comment_toggle.set(1);
    console.log(1);
  };
</script>

{#if callender_inform_toggle1 == 1}
  <div class="callenderinform_container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="callenderinform_top">
      <div class="callenderinform_main">
        <div class="callenderinform_date">2월 2일</div>
        <div class="callenderinform_type">
          {#if callender_inform_type1 == 0}
            일정
          {:else}
            급식
          {/if}
        </div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="callenderinform_x" on:click={callender_inform_toggle_close}>
        <img style="width:65px; height:65px;" src="/white_x.png" alt="" />
      </div>
    </div>
    <div class="callenderinform_mid"></div>
    <div class="callenderinform_bot">
      <div class="callenderinform_goodbad">
        <div class="callenderinform_good">
          <img
            class="callenderinformation_reaction"
            src="/good_off.png"
            alt=""
          />
          <div>0.01</div>
        </div>
        <div class="callenderinform_bad">
          <img
            class="callenderinformation_reaction"
            src="/bad_off.png"
            alt=""
          />
          <div>100</div>
        </div>
      </div>
      <div style="flex-grow: 1;"></div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="callender_answer_open" on:click={cal_comment_on}>
        <img style="margin-right:10px;" src="/chatting.png" alt="" />
        <div>댓글 보기</div>
      </div>
    </div>
  </div>
  <Nested />
{/if}

<style>
  .callenderinform_container {
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
  .callenderinform_top {
    width: 100%;
    height: 80px;
    background-color: #112d4e;
    display: flex;
  }

  .callenderinform_mid {
    flex-grow: 1;
    background-color: #f9f7f7;
    overflow-y: scroll;
  }
  .callenderinform_bot {
    width: 100%;
    height: 100px;
    background-color: #112d4e;
    display: flex;
  }
  .callenderinform_main {
    margin-left: 30px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    flex-grow: 1;
    /* height: 100%; */
  }
  .callenderinform_type {
    margin-left: 20px;
  }
  .callenderinformation_reaction {
    width: 50px;
    height: 50px;
  }
  .callenderinform_goodbad {
    display: flex;
    /* flex-direction: row; */
    height: 100%;
    width: fit-content;
  }

  .callenderinform_goodbad > div {
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
  .callenderinform_x {
    width: 100px;
  }
  .callender_answer_open {
    width: fit-content;
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
</style>
