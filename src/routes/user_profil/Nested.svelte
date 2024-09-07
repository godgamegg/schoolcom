<script>
  import Nested from "../user_inform/Nested.svelte";
  import { user_inform_toggle } from "../store/store";
  let user_inform_toggle_on = () => {
    user_inform_toggle.set(1);
    console.log(1);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="user_information" on:click={user_inform_toggle_on}>
  <div class="user_profil">
    <img class="user_profil_img" src="/profil.png" alt="" />
  </div>
  <div class="user_profil1">
    <div class="user_name">홍길동</div>
    <div class="user_position">음악 선생님</div>
    <div class="user_more_inform"><div>정보 보기</div></div>
  </div>
</div>

<Nested />

<style>
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
