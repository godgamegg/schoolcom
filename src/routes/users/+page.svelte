<script>
  // import Nested1 from "../user_profil/Nested.svelte";
  import Nested from "../user_inform/Nested.svelte";
  import { user_inform_toggle } from "../store/store";
  let currentJ = 0;
  let user_inform_toggle_on = (j) => {
    user_inform_toggle.set(1);
    // console.log(1);
    currentJ = j;
  };
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

  export let data;
  // export let data1;
  // console.log("data1", data.user, data.user1);
  // console.log("data1");
  // console.log(data.user1);
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
          {#each data.user1 as i, j}
            {#if data.user1[j].position == "선생님"}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div
                class="user_information"
                on:click={() => user_inform_toggle_on(j)}
              >
                <div class="user_profil">
                  <img class="user_profil_img" src="/profil.png" alt="" />
                </div>
                <div class="user_profil1">
                  <div class="user_name">{data.user1[j].username}</div>
                  <div class="user_position">
                    {data.user1[j].teacher_position}
                  </div>
                  <div class="user_more_inform"><div>정보 보기</div></div>
                </div>
              </div>
              {#if currentJ === j}
                <Nested {data} {currentJ} />
              {/if}
            {/if}
          {/each}
        </div>
      </div>
      <div class="user_student user_row">
        <div class="user_style">학생</div>
        <div class="user_line">
          {#each data.user1 as i, j}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            {#if data.user1[j].position == "학생"}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div
                class="user_information"
                on:click={() => user_inform_toggle_on(j)}
              >
                <div class="user_profil">
                  <img class="user_profil_img" src="/profil.png" alt="" />
                </div>
                <div class="user_profil1">
                  <div class="user_name">{data.user1[j].username}</div>
                  <div class="user_position">
                    {data.user1[j].teacher_position}
                  </div>
                  <div class="user_more_inform"><div>정보 보기</div></div>
                </div>
              </div>
              {#if currentJ === j}
                <Nested {data} {currentJ} />
              {/if}
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}
  {#if user_choice == 2}
    <div class="user_top1"><div>{data.user[0].grade}학년 참가 인원</div></div>
    <div class="user_container">
      <div class="user_teacher user_row">
        <div class="user_style">선생님</div>
        <div class="user_line">
          {#each data.user1 as i, j}
            {#if data.user1[j].position == "선생님" && data.user[0].grade == data.user1[j].grade}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="user_information"
                on:click={() => user_inform_toggle_on(j)}
              >
                <div class="user_profil">
                  <img class="user_profil_img" src="/profil.png" alt="" />
                </div>
                <div class="user_profil1">
                  <div class="user_name">{data.user1[j].username}</div>
                  <div class="user_position">
                    {data.user1[j].teacher_position}
                  </div>
                  <div class="user_more_inform"><div>정보 보기</div></div>
                </div>
              </div>
              {#if currentJ === j}
                <Nested {data} {currentJ} />
              {/if}
            {/if}
          {/each}
        </div>
      </div>
      <div class="user_student user_row">
        <div class="user_style">학생</div>
        <div class="user_line">
          {#each data.user1 as i, j}
            {#if data.user1[j].position == "학생" && data.user[0].grade == data.user1[j].grade}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="user_information"
                on:click={() => user_inform_toggle_on(j)}
              >
                <div class="user_profil">
                  <img class="user_profil_img" src="/profil.png" alt="" />
                </div>
                <div class="user_profil1">
                  <div class="user_name">{data.user1[j].username}</div>
                  <div class="user_position">
                    {data.user1[j].teacher_position}
                  </div>
                  <div class="user_more_inform"><div>정보 보기</div></div>
                </div>
              </div>
              {#if currentJ === j}
                <Nested {data} {currentJ} />
              {/if}
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}
  {#if user_choice == 3}
    <div class="user_top1">
      <div>{data.user[0].grade}학년 {data.user[0].classNo}반 참가 인원</div>
    </div>
    <div class="user_container">
      <div class="user_teacher user_row">
        <div class="user_style">선생님</div>
        <div class="user_line">
          {#each data.user1 as i, j}
            {#if data.user1[j].position == "선생님" && data.user[0].grade == data.user1[j].grade && data.user[0].classNo == data.user1[j].classNo}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="user_information"
                on:click={() => user_inform_toggle_on(j)}
              >
                <div class="user_profil">
                  <img class="user_profil_img" src="/profil.png" alt="" />
                </div>
                <div class="user_profil1">
                  <div class="user_name">{data.user1[j].username}</div>
                  <div class="user_position">
                    {data.user1[j].teacher_position}
                  </div>
                  <div class="user_more_inform"><div>정보 보기</div></div>
                </div>
              </div>
              {#if currentJ === j}
                <Nested {data} {currentJ} />
              {/if}
            {/if}
          {/each}
        </div>
      </div>
      <div class="user_student user_row">
        <div class="user_style">학생</div>
        <div class="user_line">
          {#each data.user1 as i, j}
            {#if data.user1[j].position == "학생" && data.user[0].grade == data.user1[j].grade && data.user[0].classNo == data.user1[j].classNo}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div
                class="user_information"
                on:click={() => user_inform_toggle_on(j)}
              >
                <div class="user_profil">
                  <img class="user_profil_img" src="/profil.png" alt="" />
                </div>
                <div class="user_profil1">
                  <div class="user_name">{data.user1[j].username}</div>
                  <div class="user_position">
                    {data.user1[j].teacher_position}
                  </div>
                  <div class="user_more_inform"><div>정보 보기</div></div>
                </div>
              </div>
              {#if currentJ === j}
                <Nested {data} {currentJ} />
              {/if}
            {/if}
          {/each}
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
