<script>
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";

  import Nested from "./alarm/Nested.svelte";
  import { alarm_toggle, logined } from "./store/store";
  const handleSignOut = () => {
    location.replace("http://localhost:5173");
    signOut();
  };

  // export let data;
  // import { page } from "$app/stores";
  let menu_toggle = 1;
  let menutoggle = () => {
    menu_toggle += 1;
    menu_toggle %= 2;
  };
  let schoolpage = 0;
  let schoolpage_toggle = () => {
    schoolpage += 1;
    schoolpage %= 2;
  };
  let gradepage = 0;
  let gradepage_toggle = () => {
    gradepage += 1;
    gradepage %= 2;
  };
  let classpage = 0;
  let classpage_toggle = () => {
    classpage += 1;
    classpage %= 2;
  };

  let alarm_on = () => {
    alarm_toggle.set(1);
    console.log(1);
  };

  // import { logined } from "./store/store";
  let logout = () => {
    logined.set(0);
    console.log(1);
  };

  export let data;
  // console.log();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if $page.url.pathname != "/login" && $page.url.pathname != "/"}
  <div class="menu_1_button" on:click={menutoggle}>
    <img style="width:70px; height:70px;" src="/menu.png" alt="" />
  </div>

  <div class="top_menu">
    <div class="menu_1"></div>

    <div class="menu_2">
      <img class="logo" src="/logo.png" alt="" />
      <div class="search_box">
        <div class="search_1 search">
          <div class="search_space"></div>
          <div class="search_button">
            <img src="/search_button.png" alt="" />
          </div>
        </div>
        <div class="search_2 search">
          <div class="search_space"></div>
          <div class="search_button">
            <img src="/search_button.png" alt="" />
          </div>
        </div>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="button_box">
        <div class="button">
          <a href="/callender"
            ><div class="clickbutton">
              <span style="color:#EEE8F7; font-weight:bold; font-size:24px;"
                >달력</span
              ><img src="/callender.png" alt="" />
            </div></a
          >
        </div>
        <div class="button">
          <a href="/users">
            <div class="clickbutton">
              <span style="color:#EEE8F7; font-weight:bold; font-size:24px;"
                >참가<br />인원</span
              ><img src="/users.png" alt="" />
            </div>
          </a>
        </div>
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="button" on:click={alarm_on}>
          <div class="clickbutton">
            <span style="color:#EEE8F7; font-weight:bold; font-size:24px;"
              >알림</span
            ><img src="/alarm.png" alt="" />
          </div>
          <!-- 그냥 창 하나 띄울꺼임 -->
        </div>
        <div class="button">
          <a href="/chatting">
            <div class="clickbutton">
              <span style="color:#EEE8F7; font-weight:bold; font-size:24px;"
                >채팅</span
              ><img src="/chatting.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class={`openmenu ${menu_toggle === 1 ? "open" : ""}`}>
    <div class="top_openmenu">
      <div class="now_community">
        <span style="width:100px; height:100px;">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            class={`menu_1 openmenu ${menu_toggle === 1 ? "menu_open_1" : ""}`}
            on:click={menutoggle}
          >
            <!-- <img style="width:70px; height:70px;" src="/menu.png" alt="" /> -->
          </div>
        </span>
        <span class="community_name">ㅇㅇㅇ중학교</span>
      </div>
      <div class="community_mypage">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="community_mypage_1">
          <div class="mypage_pro_1"><div class="mypage_pro"></div></div>
          <!-- svelte-ignore missing-declaration -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="logout_1">
            <div class="logout" on:click={handleSignOut}>Logout</div>
          </div>
        </div>
        <div class="community_mypage_2">
          <div class="mypage_inform_1">
            <div class="mypage_inform">
              <div class="mypage_inform_thing">
                이름 : {data.session?.user?.name}
              </div>
              <div class="mypage_inform_thing">학번</div>
              <div class="mypage_inform_thing">생일</div>
            </div>
          </div>
          <div class="mypage_edit_1">
            <a href="/profil_edit"
              ><div class="mypage_edit"><div>프로필 세부보기</div></div></a
            >
          </div>
        </div>
      </div>
    </div>
    <div style="overflow-y: auto;" class="communitylist">
      <div class="communityfolder">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="communityfolder_inform" on:click={schoolpage_toggle}>
          학교 커뮤니티
        </div>
        <div
          class={`communitysite_folder ${schoolpage === 1 ? "communitysite_folder_open" : ""}`}
        >
          <a href="/com_school"><div class="communitysite">공지</div></a>
          <a href="/com_school"><div class="communitysite">학교 소식</div></a>
          <a href="/com_school"
            ><div class="communitysite">지금 우리 학교는</div></a
          >
          <a href="/com_school"><div class="communitysite">자유게시판</div></a>
        </div>
      </div>
      <div class="communityfolder">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="communityfolder_inform" on:click={gradepage_toggle}>
          학년 커뮤니티
        </div>
        <div
          class={`communitysite_folder ${gradepage === 1 ? "communitysite_folder_open" : ""}`}
        >
          <a href="/com_school"><div class="communitysite">학년 소식</div></a>
          <a href="/com_school"
            ><div class="communitysite">선생님의 공지</div></a
          >
          <a href="/com_school"><div class="communitysite">자유게시판</div></a>
          <a href="/com_school"><div class="communitysite">학년 갤러리</div></a>
        </div>
      </div>
      <div class="communityfolder">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="communityfolder_inform" on:click={classpage_toggle}>
          학급 커뮤니티
        </div>
        <div
          class={`communitysite_folder ${classpage === 1 ? "communitysite_folder_open" : ""}`}
        >
          <a href="/com_school"><div class="communitysite">학급 소식</div></a>
          <a href="/com_school"
            ><div class="communitysite">담임쌤의 공지</div></a
          >
          <a href="/com_school"><div class="communitysite">자유게시판</div></a>
          <a href="/com_school"><div class="communitysite">학급 갤러리</div></a>
        </div>
      </div>
      <div style="height:30px; width:100%"></div>
    </div>
  </div>

  <Nested />{/if}
<slot></slot>

<!-- {#if $page.data.session} -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- {/if} -->

<style>
  .top_menu {
    width: 100%;
    height: 220px;
    background-color: #4370a7;
    display: flex;
    justify-content: space-between;
  }

  .menu_1 {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #112d4e; */
  }

  .menu_1_button {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #112d4e;
    /* z-index: 2; */
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2;
    border-radius: 0px 0px 10px 0px;
  }
  .menu_2 {
    display: flex;
    align-items: center;
    width: 75%;
  }

  .logo {
    width: 182px;
  }

  .search_box {
    width: 38%;
    background-color: #4370a7;
    flex-grow: 1;
  }
  .search {
    margin: 20px;
    background-color: white;
    height: 70px;
    border-radius: 10px;
    border: black 1px solid;
    display: flex;
  }
  .button_box {
    width: 30%;
    /* background-color: black; */
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .button {
    width: 50%;
    height: 110px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search_button {
    background-color: #112d4e;
    width: 71px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 9px 9px 0px;
  }

  .search_space {
    flex-grow: 1;
  }

  .clickbutton {
    width: 100px;
    height: 70px;
    background-color: #112d4e;
    border-radius: 9px;
    border: 3px solid #7a82c3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .openmenu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 350px;
    height: 100%;
    background-color: #3c516a;
    z-index: 1;
    transition: all 1s;
    transform: scale(0, 1);
    transform-origin: left;
  }
  .top_openmenu {
    width: 350px;
    height: 300px;
  }
  .now_community {
    width: 100%;
    height: 100px;
    background-color: #0e3d75;
    display: flex;
    align-items: center;
  }
  .community_name {
    color: #bfc5ff;
    font-size: 16px;
    font-weight: bold;
    flex-grow: 1;
    text-align: center;
  }
  .community_mypage {
    width: 100%;
    height: 200px;
    background-color: #456195;
    display: flex;
    /* z-index: 13; */
  }

  .open {
    transform: scale(1);
  }
  .community_mypage_1 {
    width: 128px;
    height: 100%;
  }
  .community_mypage_2 {
    flex-grow: 1;
  }
  .communitylist {
    width: 100%;
    height: 610px;
    overflow-y: auto;
  }
  .communityfolder_inform {
    background-color: #2e5079;
    color: #bfc5ff;
    height: 100px;
    display: flex;
    font-weight: bold;
    align-items: center;
    /* margin-left: 30px; */
    padding-left: 30px;
  }
  .communitysite_folder {
    overflow: hidden;
    height: 0px;
    /* transition: all 1s; */
  }

  .communitysite_folder_open {
    height: fit-content;
  }
  .communitysite {
    background-color: #102742;
    color: #bfc5ff;
    height: 70px;
    display: flex;
    font-weight: bold;
    align-items: center;
    padding-left: 60px;
    border: #2e5079 1px solid;
  }
  .mypage_pro_1 {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .mypage_pro {
    border-radius: 50%;
    background-color: #112d4e;
    width: 100px;
    height: 100px;
    /* margin-top: 30px; */
  }
  .logout_1 {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .logout {
    width: 100px;
    height: 30px;
    color: #0e3d75;
    font-weight: bold;
    border-radius: 9px;
    /* text-align: center; */
    background-color: #bfc5ff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mypage_inform_1 {
    height: 60%;
    width: 100%;
    margin-top: 30px;
    border-radius: 10px 0px 0px 10px;
    background-color: #214e82;
    display: flex;
    align-items: center;
  }
  .mypage_inform_thing {
    color: white;
    margin: 10px 0px 10px 10px;
    font-weight: bold;
  }

  .mypage_edit_1 {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .mypage_edit {
    background-color: #102742;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    text-align: center;
    height: 25px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #ffffff; */
  }
</style>
