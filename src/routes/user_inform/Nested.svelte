<script>
  // @ts-nocheck
  import { onMount } from "svelte";

  export let data;
  export let currentJ;
  import Nested from "../chatting_window/Nested.svelte";
  import {
    usergmail_page,
    chatting_toggle,
    user_inform_toggle,
  } from "../store/store";
  let usergmail_page1 = "";
  // console.log(1);
  usergmail_page.subscribe((value) => {
    // console.log(123, value);
    usergmail_page1 = value;
    // console.log("gmail = ", value, "user = ", data.user1[currentJ].email);
    // console.log(123132, value);
  });

  let user_inform_toggle1 = 0;
  user_inform_toggle.subscribe((value) => {
    user_inform_toggle1 = value;
  });

  // console.log(1223213, data.user1[currentJ].email, usergmail_page1);
  let user_inform_toggle_off = () => {
    user_inform_toggle.set(0);
  };
  let chatting_on = () => {
    chatting_toggle.set(1);
  };

  let date = new Date();

  let date1 = new Date(data.user1[currentJ].birth);
  // let age = data.user1[currentJ].birth.getFullYear() - date.getFullYear();
  // console.log("type:", typeof date);
  // console.log("typ1", date1.getFullYear());
  import { page } from "$app/stores";
  let user_name;
  // 반응형 선언: 페이지 URL이 바뀌면 number 값이 업데이트됨
  $: user_name = $page.url.searchParams.get("user_name") || "0"; // 쿼리 파라미터가 없으면 기본값으로 '0'

  import { goto } from "$app/navigation";

  function goToChat() {
    goto(
      `/chat/${data.user1[currentJ].email}?user_name=${data.user1[currentJ].username}`
    );
  }
</script>

{#if user_inform_toggle1 == 1}
  <div class="userinform_container">
    <div class="userinform_left">
      <div class="userinform_img">
        <img class="userinform_img1" src="/profil.png" alt="" />
      </div>
      <div>
        <div class="userinform_name">{data.user1[currentJ].username}</div>
        <div class="userinform_position">{data.user1[currentJ].position}</div>
      </div>

      <div class="userinform_detail">{data.user1[currentJ].mymessage1}</div>
      <div class="userinform_detail">{data.user1[currentJ].mymessage2}</div>
      <div class="userinform_detail">{data.user1[currentJ].mymessage3}</div>
      <div class="userinform_detail">{data.user1[currentJ].mymessage4}</div>
      <div class="userinform_detail">{data.user1[currentJ].mymessage5}</div>
      <div class="userinform_detail">{data.user1[currentJ].mymessage6}</div>
      <div class="userinform_detail">{data.user1[currentJ].mymessage7}</div>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="userinform_right">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div>
        <div class="userinform_age">
          나이 : {date.getFullYear() - date1.getFullYear()}살
        </div>
        <div class="userinform_birth">생일 : 2월2일</div>
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="userinform_x" on:click={user_inform_toggle_off}>
          <img src="/black_x.png" alt="" />
        </div>
      </div>

      <div class="userinform_nowlocation">
        현재 위치 : {data.user1[currentJ].nowlocation}
      </div>
      <div class="userinform_nowlocation">
        학년 반 번호 : {data.user1[currentJ].grade}학년 {data.user1[currentJ]
          .classNo}반 {data.user1[currentJ].num}번
      </div>

      <div class="userinform_nowmessage">
        상태메시지 : {data.user1[currentJ].nowmessage}
      </div>

      <!-- svelte-ignore missing-declaration -->
      <!-- <div on:click={ssssss}>cfygvuhbijnokm</div> -->

      <!-- svelte-ignore a11y-click-events-have-key-events -->

      {#if data.user1[currentJ].email != usergmail_page1}
        <div class="userinform_chatting" on:click={goToChat}>
          <img src="/chatting.png" alt="" />1대1 채팅하기
        </div>
      {/if}
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
    margin-bottom: 20px;
  }
  .userinform_detail {
    font-size: 17px;
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
