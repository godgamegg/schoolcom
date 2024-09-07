<script>
  import { alarm_toggle } from "../store/store";
  let alarm_toggle1 = 0;
  alarm_toggle.subscribe((value) => {
    alarm_toggle1 = value;
  });
  let alarm_off = () => {
    alarm_toggle.set(0);
  };
</script>

{#if alarm_toggle1 == 1}
  <div class="alarmwin_container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="alarmwin_top">
      <div class="alarmwin_main">
        <img width="50px" src="/alarm.png" alt="" style="margin-right:20px" /> 알림
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={alarm_off} class="alarmwin_x">
        <img style="width:65px; height:65px;" src="/white_x.png" alt="" />
      </div>
    </div>
    <div class="alarmwin_mid"></div>
  </div>
{/if}

<style>
  .alarmwin_container {
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
  .alarmwin_top {
    width: 100%;
    height: 80px;
    background-color: #112d4e;
    display: flex;
  }

  .alarmwin_mid {
    flex-grow: 1;
    background-color: #f9f7f7;
    overflow-y: scroll;
  }
  .alarmwin_bot {
    width: 100%;
    height: 100px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
  }
  .alarmwin_main {
    margin-left: 30px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 30px;
    font-weight: bold;
    flex-grow: 1;
    /* height: 100%; */
  }

  .alarmwin_x {
    width: 100px;
  }
</style>
