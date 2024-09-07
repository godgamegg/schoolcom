<script>
  // import Nested from "../chatting_window/Nested.svelte";
  import Nested from "../user_inform/Nested.svelte";

  import { user_inform_toggle } from "../store/store";
  let user_inform_toggle_on1 = () => {
    user_inform_toggle.set(1);
    console.log(1);
  };
</script>

<div class="user_window">
  <div class="user_top"></div>
  <div class="user_top1"><div>1대1 채팅</div></div>
  <div class="user_container">
    <div class="user_teacher user_row">
      <div class="user_style">선생님</div>
      <div class="user_line">
        <!--  -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="user_information" on:click={user_inform_toggle_on1}>
          <div class="user_profil">
            <img class="user_profil_img" src="/profil.png" alt="" />
          </div>
          <div class="user_profil1">
            <div class="user_name">홍길동</div>
            <div class="user_position">음악 선생님</div>
            <div class="user_more_inform"><div>정보 보기</div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="user_student user_row">
      <div class="user_style">학생</div>
      <div class="user_line">
        <!--  -->
        <div class="user_information">
          <div class="user_profil">
            <img class="user_profil_img" src="/profil.png" alt="" />
          </div>
          <div class="user_profil1">
            <div class="user_name">이상혁</div>
            <div class="user_position">젠장 또 대상혁이야</div>
            <div class="user_more_inform"><div>정보 보기</div></div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</div>

<!-- <Nested /> -->
<Nested />

<style>
  .user_window {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    /* overflow-y: scroll; */
  }
  .user_top {
    width: 100%;
    height: 66px;
    background-color: #eee8f7;
    display: flex;
    align-items: center;
  }
  .user_top1 {
    width: 100%;
    height: 90px;
    background-color: #456195;
    display: flex;
    align-items: center;
    color: #bfc5ff;
    font-size: 40px;
    font-weight: bold;
    padding-left: 50px;
  }
  .user_container {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .user_row {
    width: 100%;
    height: fit-content;
  }
  .user_style {
    width: 100%;
    height: 60px;
    font-size: 40px;
    font-weight: bold;
    padding-left: 50px;
  }
  .user_line {
    /* height: 215px; */
    padding-left: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .user_information {
    margin-top: 20px;
    margin-left: 20px;
    width: 150px;
    height: 195px;
    background-color: #b9c4d1;
  }
  .user_profil {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user_profil1 {
    width: 100%;
    height: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .user_profil_img {
    background-color: black;
    border-radius: 50%;
  }
  .user_name {
    margin-top: 3px;
    font-weight: bold;
    font-size: 24px;
  }
  .user_position {
    margin-top: 0px;
  }
  .user_more_inform {
    color: white;
    background-color: #456195;
    width: 70%;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 4px;
  }
</style>
