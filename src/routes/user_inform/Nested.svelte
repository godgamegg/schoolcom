<script>
  // @ts-nocheck

  import Nested from "../chatting_window/Nested.svelte";
  import { chatting_toggle, user_inform_toggle } from "../store/store";
  let user_inform_toggle1 = 0;
  user_inform_toggle.subscribe((value) => {
    user_inform_toggle1 = value;
  });
  let user_inform_toggle_off = () => {
    user_inform_toggle.set(0);
  };
  let chatting_on = () => {
    chatting_toggle.set(1);
  };
</script>

{#if user_inform_toggle1 == 1}
  <div class="userinform_container">
    <div class="userinform_left">
      <div class="userinform_img">
        <img class="userinform_img1" src="/profil.png" alt="" />
      </div>
      <div>
        <div class="userinform_name">장준혁</div>
        <div class="userinform_position">학생</div>
      </div>

      <div class="userinform_detail">그냥 학생</div>
      <div class="userinform_detail">최종학력 초졸</div>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="userinform_right">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div>
        <div class="userinform_age">나이 : 0.1살</div>
        <div class="userinform_birth">생일 : 2월2일</div>
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="userinform_x" on:click={user_inform_toggle_off}>
          <img src="/black_x.png" alt="" />
        </div>
      </div>

      <div class="userinform_nowlocation">현재 위치 : 2층 교무실</div>
      <div class="userinform_nowlocation">소속 반 : 3학년 2반</div>
      <div class="userinform_samecommunity">
        같이 있는 커뮤니티 : 학교, 학년, 학급
      </div>
      <div class="userinform_nowmessage">
        상태메시지 : 공부 하기 싫어 빼애애액
      </div>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="userinform_chatting" on:click={chatting_on}>
        <img src="/chatting.png" alt="" />1대1 채팅하기
      </div>
    </div>
  </div>
  <Nested />
{/if}

<style>
  .userinform_container {
    position: fixed;
    top: 150px;
    left: 200px;
    width: 1000px;
    height: 700px;
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    border: #112d4e 10px solid;
  }
  .userinform_left {
    color: white;
    background-color: #4370a7;
    width: 300px;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
  }
  .userinform_right {
    width: 700px;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    font-size: 30px;
    font-weight: bold;
    padding-left: 40px;
  }
  .userinform_img {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .userinform_img1 {
    width: 200px;
    border-radius: 50%;
    background-color: black;
  }
  .userinform_name {
    font-size: 40px;
    font-weight: bold;
    margin-left: 70px;
  }
  .userinform_position {
    font-size: 30px;
    font-weight: bold;
    margin-left: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .userinform_detail {
    font-size: 20px;
    font-weight: bold;
    margin-left: 60px;
    margin-top: 10px;
  }
  .userinform_age {
    margin-top: 30px;
  }
  .userinform_nowlocation {
    margin-top: 10px;
  }
  .userinform_samecommunity {
    margin-top: 30px;
  }

  .userinform_nowmessage {
    margin-top: 40px;
    flex-grow: 1;
  }
  .userinform_chatting {
    width: 350px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #112d4e;
    color: white;
    margin-bottom: 30px;
    border-radius: 20px;
  }
  .userinform_x {
    position: relative;
    top: -90px;
    left: 600px;
  }
</style>
