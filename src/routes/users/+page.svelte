<script>
  import Nested from "../user_profil/Nested.svelte";

  let user_choice = 1;
  let choose_1 = () => {
    user_choice = 1;
  };

  let choose_2 = () => {
    user_choice = 2;
  };
  let choose_3 = () => {
    user_choice = 3;
  };
</script>

<div class="user_window">
  <div class="user_top">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="user_button">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div on:click={choose_1}>
        {#if user_choice == 1}
          <div class="user_button1 user_selected"><div>학교</div></div>
        {:else}
          <div class="user_button1"><div>학교</div></div>
        {/if}
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={choose_2}>
        {#if user_choice == 2}
          <div class="user_button1 user_selected"><div>학년</div></div>
        {:else}
          <div class="user_button1"><div>학년</div></div>
        {/if}
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={choose_3}>
        {#if user_choice == 3}
          <div class="user_button1 user_selected"><div>학급</div></div>
        {:else}
          <div class="user_button1"><div>학급</div></div>
        {/if}
      </div>
    </div>
  </div>
  {#if user_choice == 1}
    <div class="user_top1"><div>학교 참가 인원</div></div>
    <div class="user_container">
      <div class="user_teacher user_row">
        <div class="user_style">선생님</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="user_line">
          <Nested />
        </div>
      </div>
      <div class="user_student user_row">
        <div class="user_style">학생</div>
        <div class="user_line">
          <Nested />
          <!--  -->
        </div>
      </div>
    </div>
  {/if}
  {#if user_choice == 2}
    <div class="user_top1"><div>학년 참가 인원</div></div>
    <div class="user_container">
      <div class="user_teacher user_row">
        <div class="user_style">선생님</div>
        <div class="user_line">
          <!--  -->
          <Nested />
        </div>
      </div>
      <div class="user_student user_row">
        <div class="user_style">학생</div>
        <div class="user_line">
          <!--  -->
          <Nested />
          <!--  -->
        </div>
      </div>
    </div>
  {/if}
  {#if user_choice == 3}
    <div class="user_top1"><div>학급 참가 인원</div></div>
    <div class="user_container">
      <div class="user_teacher user_row">
        <div class="user_style">선생님</div>
        <div class="user_line">
          <!--  -->
          <Nested />
        </div>
      </div>
      <div class="user_student user_row">
        <div class="user_style">학생</div>
        <div class="user_line">
          <!--  -->
          <Nested />
          <!--  -->
        </div>
      </div>
    </div>
  {/if}
  <!-- <div style="width:100%;height:100px"></div> -->
</div>

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
  .user_button {
    margin-left: 80px;
    display: flex;
    flex-direction: row;
  }
  .user_button1 {
    width: 100px;
    height: 50px;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4370a7;
    color: white;
    border: black 1px solid;
    font-size: large;
    font-weight: bolder;
  }
  .user_selected {
    background-color: #0e3d75;
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
</style>
