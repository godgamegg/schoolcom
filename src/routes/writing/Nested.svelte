<script>
  import { writing_more_toggle } from "../store/store";

  let on_write = () => {
    writing_more_toggle.set(1);
    console.log(1);
  };

  import Nested from "../writing_more/Nested.svelte";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore missing-declaration -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="writing" on:click={on_write}>
  <div class="writing_top">
    <div class="writing_title">2차 국어 수행</div>
    <div class="writing_writer">장준혁 작성</div>
  </div>
  <div class="writing_mid">hey yeah</div>
  <div class="writing_bottom">
    <div style="flex-grow:1;display:flex; flex-direction:row ">
      <div class="writing_good writing_goodbad">
        <img width="30px" src="/good_on.png" alt="" />
        <div style="color:white; font-weight:bold">100</div>
      </div>
      <div class="writing_bad writing_goodbad">
        <img width="30px" src="/bad_on.png" alt="" />
        <div style="color:white; font-weight:bold">100</div>
      </div>
    </div>
    <div class="writing_more_watch">더보기...</div>
  </div>
</div>

<Nested />

<style>
  .writing {
    width: 200px;
    height: 250px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: #4370a7 2px solid;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  .writing_top {
    width: 100%;
    height: 60px;
    background-color: #1d4c81;
  }
  .writing_mid {
    width: 180px;
    flex-grow: 1;
    padding: 10px;
  }
  .writing_bottom {
    width: 100%;
    height: 40px;
    background-color: #1d4c81;
    display: flex;
    /* justify-content: ; */
    align-items: center;
  }
  .writing_title {
    color: white;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 10px;
  }
  .writing_writer {
    color: white;
    width: 100%;
    font-size: 10px;
    font-weight: bold;
    margin-top: 4px;
    margin-left: 10px;
  }
  .writing_more_watch {
    color: white;
    margin-right: 10px;
    font-weight: bold;
  }
  .writing_goodbad {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
