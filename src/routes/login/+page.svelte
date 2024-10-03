<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";

  let email = "";

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/protected" });
  };

  const handleSignOut = () => {
    signOut();
  };

  let imgurl = "/google.png";
  let imgw = "110";

  let scene0 = 0;
  let scene1 = 0;
  let scene2 = 0;
  let scene2_1 = 0;
  let scene3 = 0;
  let scene4 = 0;
  let scene5 = 0;
  let scene6 = 0;
  let scene7 = 0;
  setTimeout(function () {
    scene0 = 1;
  }, 900);
  setTimeout(function () {
    scene1 = 1;
  }, 1200);
  setTimeout(function () {
    scene2 = 1;
  }, 1600);
  setTimeout(function () {
    scene2_1 = 1;
  }, 2000);
  setTimeout(function () {
    scene0 = 2;
  }, 1500);

  setTimeout(function () {
    scene3 = 1;
  }, 3200);
  setTimeout(() => {
    scene4 = 1;
  }, 3800);
  setTimeout(function () {
    scene5 = 1;
  }, 3000);
  setTimeout(() => {
    scene5 = 2;
  }, 4800);
  setTimeout(function () {
    scene6 = 1;
  }, 4000);
  setTimeout(() => {
    scene7 = 1;
  }, 4200);
  setTimeout(function () {
    imgurl = "/logo.png";
    scene7 = 2;
  }, 4600);
</script>

<div>
  {#if !$page.data.session}
    <div class="login_container">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="login_container1">
        <img
          class={`login_0 ${scene0 === 1 ? "login_0_go" : ""} ${scene0 === 2 ? "login_0_2_go" : ""}`}
          src="/logo.png"
          alt=""
        />
        <div class={`login_1 ${scene1 === 1 ? "login_1_go" : ""}`}>
          지금 우리 학교는?
        </div>
        <div
          class={`login_2 ${scene2 === 1 ? "login_2_go" : ""} ${scene2_1 === 1 ? "login_2_1_go" : ""}`}
        >
          스쿨.com
        </div>
        <div style="height:50px"></div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class={`login_5 ${scene3 === 1 ? "login_5_go" : ""}`}>
          <div
            class={`login_6 ${scene5 === 1 ? "login_6_go" : ""} ${scene5 === 2 ? "login_6_1_go" : ""}`}
          >
            <img src="/google.png" alt="" width="20px" />oogle 선택!
          </div>
          <div>
            <div
              class={`login_3 ${scene4 === 1 ? "login_3_go" : ""}`}
              on:click={handleGoogleSignIn}
            >
              <img
                class={`login_8 ${scene7 === 1 ? "login_8_go" : ""} ${scene7 === 2 ? "login_8_1_go" : ""}`}
                src={imgurl}
                alt=""
                width={imgw}
              />
            </div>
            <div class={`login_4 ${scene6 === 1 ? "login_4_go" : ""}`}>
              Google계정으로<br />로그인
            </div>
            <div class={`login_7 ${scene6 === 1 ? "login_7_go" : ""}`}>
              클릭하여 로그인하기
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}

  {#if $page.data.session}
    <div>
      <button on:click={handleSignOut}>Sign out</button>
    </div>
  {/if}
</div>

<style>
  .login_container {
    /* position: relative; */
    width: 100vw;
    height: 100vh;
    background-color: #0e3d75;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* z-index: ; */
  }
  .login_container1 {
    width: 93vw;
    height: 90vh;
    background-color: #4370a7;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
  .login_0 {
    width: 200px;
    /* height: 100px; */
    transition: all 2s;
    transform: translate(0px, 0px);
    /* transform: scale(0); */
  }
  .login_0_go {
    transform: translate(0px, -5500px);
  }
  .login_0_2_go {
    transform: translate(0px, -60px) scale(0.7);
  }
  .login_1 {
    color: #bfc5ff;
    font-size: 50px;
    font-weight: bold;
    transform: translate(0px, 0px);
    transition: all 2s;
  }
  .login_1_go {
    transform: translate(0px, -5500px);
  }
  .login_2 {
    color: #bfc5ff;
    font-size: 100px;
    font-weight: bold;
    transform: translate(0px, 0px) scale(1);
    /* transform: scale(1); */
    transition: all 1s;
  }

  .login_2_go {
    transform: translate(0px, -20px) scale(0.6);
  }

  .login_2_1_go {
    transform: translate(-5px, -200px) scale(0.5);
  }
  .login_3 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 10;
    width: 140px;
    height: 140px;
    background-color: #112d4e;
    transition: all 0.5s;
    transform: scale(1) translate(20px, 0px);
  }

  .login_3_go {
    transform: translate(20px, 0px) scale(1.2);
  }

  .login_4 {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    color: #bfc5ff;
    transition: all 1s;
    transform: translate(0px, 0px);
    z-index: 0;
  }

  .login_5 {
    transform: scale(1) translate(0px, 0px);
    transition: all 1s;
  }
  .login_5_go {
    transform: scale(1.2) translate(0px, -140px);
  }

  .login_6 {
    transform: scale(0) translate(7px, 100px);
    transition: all 0.5s;
    color: #bfc5ff;
    font-weight: bold;
    font-size: 20px;
  }
  .login_6_go {
    transform: scale(1) translate(23px, 100px);
  }
  .login_6_1_go {
    transform: scale(1) translate(23px, -30px);
  }
  .login_7 {
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #bfc5ff;
    transition: all 1s;
    transform: translate(0px, 1000px);
    /* display: none; */
  }
  .login_7_go {
    transform: translate(0px, -50px);
  }
  .login_4_go {
    transform: translate(3px, -100px);
    z-index: 0;
  }
  .login_8 {
    transform: scale(1, 1);
    transition: all 0.5s;
    /* z-index: 100; */
  }
  .login_8_go {
    transform: scale(0, 1);
  }
  .login_8_1_go {
    transform: scale(1, 1);
  }
</style>
