<script>
  let scene0 = 0;
  let scene1 = 0;
  let scene2 = 0;
  let scene3 = 0;
  let scene4 = 0;
  setTimeout(function () {
    scene1 = 1;
  }, 500);
  setTimeout(function () {
    scene2 = 1;
  }, 1200);
  setTimeout(function () {
    scene0 = 1;
  }, 1300);
  setTimeout(function () {
    scene3 = 1;
  }, 3000);
  setTimeout(() => {
    scene4 = 1;
  }, 2900);

  import { logined } from "./store/store";
  let logined_1 = 0;
  logined.subscribe((value) => {
    logined_1 = value;
  });
  let Googlelogin = () => {
    logined.set(1);
    // console.log(1);
  };
</script>

{#if logined_1 == 0}
  <div class="login_container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="login_container1">
      <img
        class={`login_0 ${scene0 === 1 ? "login_0_go" : ""}`}
        src="/logo.png"
        alt=""
      />
      <div class={`login_1 ${scene1 === 1 ? "login_1_go" : ""}`}>
        지금 우리 학교는?
      </div>
      <div class={`login_2 ${scene2 === 1 ? "login_2_go" : ""}`}>스쿨.com</div>
      <div style="height:50px"></div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <a href="/login"
        ><div class={`login_3 ${scene3 === 1 ? "login_3_go" : ""}`}>
          <img src="/google.png" alt="" />
        </div>
        <div class={`login_4 ${scene4 === 1 ? "login_4_go" : ""}`}>
          Google계정으로<br />로그인
        </div></a
      >
    </div>
  </div>
{/if}

<style>
  .login_container {
    width: 100vw;
    height: 100vh;
    background-color: #0e3d75;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .login_container1 {
    width: 93vw;
    height: 90vh;
    background-color: #4370a7;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .login_0 {
    width: 200px;
    /* height: 100px; */
    transition: all 2s;
    transform: translate(0px, -5500px);
    /* transform: scale(0); */
  }
  .login_0_go {
    transform: translate(0px, -35px);
  }
  .login_1 {
    color: #bfc5ff;
    font-size: 50px;
    font-weight: bold;
    transform: scale(0) translate(0px, -35px);
    transition: all 0.5s;
  }
  .login_1_go {
    transform: scale(1) translate(0px, -35px);
  }
  .login_2 {
    color: #bfc5ff;
    font-size: 100px;
    font-weight: bold;
    transform: translate(0px, 1500px);
    /* transform: scale(1); */
    transition: all 1s;
  }
  .login_2_go {
    transform: translate(0px, -35px);
    /* transform: scale(1); */
  }
  .login_3 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: 140px;
    height: 140px;
    background-color: #112d4e;
    transition: all 0.5s;
    transform: scale(0) translate(-15px, -15px);
  }
  .login_3_go {
    /* display: flex; */

    transform: scale(1) translate(0px, -10px);
  }
  .login_4 {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    color: #bfc5ff;
    transition: all 1s;
    transform: translate(0px, 1500px);
  }
  .login_4_go {
    transform: translate(0px, -10px);
  }
</style>
