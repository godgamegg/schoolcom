<script>
  import writetoggle from "../com_school/+page.svelte";

  let taggout = 0;
  let taggout_toggle = () => {
    taggout += 1;
    taggout %= 2;
  };
  let tag_subject = [
    "📖국어",
    "영어",
    "📐수학",
    "과학",
    "기술 가정",
    "정보",
    "사회",
    "역사",
    "도덕",
    "체육",
    "음악",
    "미술",
    "한문",
    "진로",
    "환경",
    "보건",
    "생활외국어",
    "스클",
    "창체",
  ];

  let tag_import = ["매우 중요함", "중요함", "안중요함", "필요없음"];
  let tag_type = [
    "잡담",
    "정보",
    "공지",
    "수행",
    "지필",
    "발표",
    "준비물",
    "이벤트",
  ];

  let writeoff = () => {
    writetoggle = 0;
  };
</script>

<div class={`write_page write_page_open`}>
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div class="write_page_top">
    <div style="flex-grow: 1;"></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      on:click={writeoff}
      class="write_page_top_x"
      src="/white_x.png"
      alt=""
    />
  </div>
  <div class="write_page_middle">
    <textarea name="" id="main_write"></textarea>

    <textarea class="write_textarea" name="" id=""></textarea>
  </div>

  <div class="write_page_bottom">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="write_page_tag">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={taggout_toggle} class="write_page_tag_plus">
        <div>태그 추가(+)</div>
      </div>
      {#if taggout == 1}
        <div class="write_taggout">
          <div class="tag_tag"><div>과목</div></div>
          {#each tag_subject as tag_sub, i}
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="write_tags" on:click={tag_plused(i)}>
              <div>{tag_sub}</div>
            </div>
          {/each}

          <div class="tag_tag"><div>중요도</div></div>
          {#each tag_import as tag_im, i}
            <div class="write_tags"><div>{tag_im}</div></div>
          {/each}

          <div class="tag_tag"><div>글 종류</div></div>
          {#each tag_type as tag_ty, i}
            <div class="write_tags"><div>{tag_ty}</div></div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="file-"></div>
    <div class="write_sending_button">
      <img src="/write_sending.png" alt="" />
    </div>
  </div>
</div>

<style>
  .write_page {
    position: absolute;
    background-color: #f9f7f7;
    width: 80%;
    height: 70%;
    left: 10%;
    top: 28%;
    border-radius: 10px;
    border: #112d4e solid 5px;
    display: none;
    flex-direction: column;
    z-index: 10;
  }
  .write_page_top {
    width: 100%;
    height: 50px;
    background-color: #4370a7;
    display: flex;
  }
  .write_page_top_x {
    width: 40px;
    height: 40px;
  }
  .write_page_open {
    display: flex;
  }
  .write_page_middle {
    width: 100%;
    /* height: 200px; */
    flex-grow: 1;
    background-color: #f9f7f7;
  }
  .write_page_bottom {
    width: 100%;
    height: 100px;
    background-color: #4370a7;
    display: flex;
    align-items: center;
  }
  .write_textarea {
    width: 92%;
    height: 89%;
    margin: 2% 3%;
    /* back */
    font-size: 20px;
  }
  .write_sending_button {
    width: 80px;
    height: 80px;
    background-color: #182a40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 30px;
  }
  .write_page_tag {
    width: 200px;
    flex-grow: 1;
  }
  .write_page_tag_plus {
    margin-left: 50px;
    width: 150px;
    height: 50px;
    background-color: #112d4e;
    /* border: #112d4e solid 2px; */
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .write_taggout {
    width: 400px;
    height: 200px;
    background-color: white;
    border: black solid 2px;
    position: absolute;
    /* top: 20px; */
    transform: translate(90px, -260px);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
  .write_tags {
    width: calc(25% - 1.4px);
    height: calc(25% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: #c5c0ce 1px solid;
  }
  .tag_tag {
    width: 100%;
    height: 25%;
    background-color: #112d4e;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
