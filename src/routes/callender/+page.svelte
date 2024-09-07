<script>
  // @ts-nocheck

  // import { createEventDispatcher } from "svelte";

  import Nested from "../callender_inform/Nested.svelte";

  let callender_mode = 1;
  let callender_choose_1 = () => {
    callender_mode = 1;
  };
  let callender_choose_2 = () => {
    callender_mode = 2;
  };

  let alergy_change = 0;
  let alergy = () => {
    alergy_change += 1;
    alergy_change %= 2;
  };

  let alergy_list = [
    "달걀",
    "우유",
    "메밀",
    "땅콩",
    "대두",
    "밀",
    "고등어",
    "게",
    "새우",
    "돼지고기",
    "복숭아",
    "토마토",
    "아황산",
    "호두",
    "닭고기",
    "쇠고기",
    "오징어",
    "조개류",
    "잣",
  ];

  let x = [1, 2, 3, 4, 5, 6, 7];
  let y = [1, 2, 3, 4, 5, 6];

  import { callender_inform_toggle } from "../store/store";
  let schoolinform_toggle = () => {
    callender_inform_toggle.set(1);
    console.log(1);
  };

  import { callender_inform_type } from "../store/store";
  let schoolinform_type_0 = () => {
    callender_inform_type.set(0);
  };
  let schoolinform_type_1 = () => {
    callender_inform_type.set(1);
  };
</script>

<div class="callender_top">
  <div class="callender_select">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={callender_choose_1}>
      {#if callender_mode == 1}
        <div
          on:click={schoolinform_type_0}
          class="callender_selection_button1 callender_selection_selected"
        >
          <div>일정</div>
        </div>
      {:else}
        <div on:click={schoolinform_type_0} class="callender_selection_button1">
          <div>일정</div>
        </div>
      {/if}
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={callender_choose_2}>
      {#if callender_mode == 2}
        <div
          on:click={schoolinform_type_1}
          class="callender_selection_button1 callender_selection_selected"
        >
          <div>급식</div>
        </div>
      {:else}
        <div on:click={schoolinform_type_1} class="callender_selection_button1">
          <div>급식</div>
        </div>
      {/if}
    </div>
  </div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  {#if callender_mode == 2}
    <div class="callender_inform">급식</div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="callender_detail" on:click={alergy}>알레르기</div>
    {#if alergy_change == 1}
      <div>
        <div class="alergy_container">
          {#each alergy_list as alergy_list_i}
            <div class="alergy_input">
              <input
                class="alergy_input1"
                type="checkbox"
                name={alergy_list_i}
              />{alergy_list_i}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {:else}
    <div class="callender_inform">일정</div>
  {/if}
</div>

{#if callender_mode == 1}
  <div class="callender_container" id="value1">
    <table>
      {#each y as i}
        <tr>
          {#each x as j}
            <!-- svelte-ignore missing-declaration -->
            <td class="day" on:click={schoolinform_toggle}>{i},{j}</td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>
{:else}
  <div class="callender_container" id="value2">
    <table>
      {#each y as i}
        <tr>
          {#each x as j}
            <td class="day" on:click={schoolinform_toggle}>{i},{j}</td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>
{/if}

<Nested />

<style>
  .callender_container {
    display: flex;
    justify-content: center;
  }
  .day {
    width: 160px;
    height: 100px;
    background-color: #fbf3ff;
  }
  .callender_top {
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-flex;
    align-items: center;
  }

  .callender_inform {
    font-size: 32px;
    font-weight: bold;
  }

  .callender_detail {
    font-size: 15px;
    font-weight: bold;
    margin-left: 80px;
    color: white;
    background-color: #0e3d75;
    padding: 15px;
    border-radius: 15px;
  }
  .alergy_container {
    width: 500px;
    height: 200px;
    background-color: white;
    position: absolute;
    /* top: 20px; */
    transform: translate(10px, -20px);
    border: #112d4e 4px solid;
    border-radius: 10px;
  }

  /* .alergy_container_1 {
    width: 100%;
    height: 100%;
  } */

  .alergy_input {
    font-size: 15px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 20%;
    height: 25%;
    display: inline-flex;
  }
  .alergy_input1 {
    width: 25px;
    height: 25px;
  }

  .callender_select {
    margin-left: 80px;
    margin-right: 30px;
    display: flex;
    flex-direction: row;
  }
  .callender_selection_button1 {
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
  .callender_selection_selected {
    background-color: #0e3d75;
  }
</style>
