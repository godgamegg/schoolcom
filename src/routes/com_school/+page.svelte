<script>
  // @ts-nocheck

  import { writetoggle } from "../store/store";
  let write = () => {
    writetoggle.set(1);
  };

  let tag_plused = (i, j) => {};

  import { writing_more_toggle } from "../store/store";

  let on_write = () => {
    writing_more_toggle.set(1);
    console.log(1);
  };

  import Nested from "../writing_more/Nested.svelte";
  import Nested1 from "../write_page/Nested.svelte";

  export let data;
</script>

<div class="community_container">
  <div class="community_name_line">
    <div class="community_name">
      <div class="community_name1"><div>공지</div></div>
    </div>
    <div class="community_name">
      <div class="community_name1"><div>인기글</div></div>
    </div>
    <div class="community_name11">
      <div class="community_name12"><div>모든 글</div></div>
    </div>
  </div>
  <div class="community_writes_container">
    <div class="community_writes_row"></div>
    <div class="community_writes_row"></div>
    <div class="community_writes_row1">
      <!-- <Nested /> -->
      <!-- <div>{data.write.length}</div> -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      {#each data.write as i, j}
        <!-- svelte-ignore missing-declaration -->
        <div class="writing" on:click={on_write}>
          <div class="writing_top">
            <div class="writing_title">{data.write[j].title}</div>
            <div class="writing_writer">장준혁 작성</div>
          </div>
          <div class="writing_mid">{data.write[j].writing}</div>
          <div class="writing_bottom">
            <div style="flex-grow:1;display:flex; flex-direction:row ">
              <div class="writing_good writing_goodbad">
                <img width="30px" src="/good_on.png" alt="" />
                <div style="color:white; font-weight:bold">
                  {data.write[j].like}
                </div>
              </div>
              <div class="writing_bad writing_goodbad">
                <img width="30px" src="/bad_on.png" alt="" />
                <div style="color:white; font-weight:bold">
                  {data.write[j].hate}
                </div>
              </div>
            </div>
            <div class="writing_more_watch">더보기...</div>
          </div>
        </div>

        <Nested />
      {/each}
    </div>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="write" on:click={write}>
  <div class="write_img_1">
    <img class="write_img" src="/write_button.png" alt="" />
  </div>
  <div class="write_div">글 쓰기</div>
</div>

<Nested1 />

<style>
  .write {
    width: 140px;
    height: 140px;
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: #c5c0ce;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    border: 8px #112d4e solid;
    flex-direction: column;
  }
  .write_img_1 {
    width: 140px;
    height: 100px;
    display: flex;
    justify-content: center;
  }
  .write_img {
    width: 70px;
    height: 70px;
    margin-top: 20px;
  }
  .write_div {
    /* width: 150px; */
    font-weight: bold;
    text-align: center;
    font-size: 18px;
  }

  .community_name_line {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .community_name {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .community_name1 {
    width: 210px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    color: white;
    background-color: #4a7fc1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .community_name11 {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .community_name12 {
    width: 700px;
    height: 60px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    color: white;
    background-color: #2e5079;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .community_writes_container {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .community_writes_row {
    width: 20%;
    /* height: 100px;  */
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    /* overflow-y: ; */
  }
  .community_writes_row1 {
    width: 60%;
    display: flex;
    align-items: center;
    /* flex-direction: row; */
    flex-wrap: wrap;
    border-left: #4370a7 1px solid;
    /* align-items: center; */
    justify-content: center;
    /* padding-left: 20px; */
    /* overflow-y: scroll; */
  }
  .writing {
    width: 200px;
    height: 250px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: #4370a7 2px solid;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  .writing_top {
    width: 100%;
    height: 60px;
    background-color: #1d4c81;
  }
  .writing_mid {
    width: 180px;
    flex-grow: 1;
    padding: 10px;
  }
  .writing_bottom {
    width: 100%;
    height: 40px;
    background-color: #1d4c81;
    display: flex;
    /* justify-content: ; */
    align-items: center;
  }
  .writing_title {
    color: white;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 10px;
  }
  .writing_writer {
    color: white;
    width: 100%;
    font-size: 10px;
    font-weight: bold;
    margin-top: 4px;
    margin-left: 10px;
  }
  .writing_more_watch {
    color: white;
    margin-right: 10px;
    font-weight: bold;
  }
  .writing_goodbad {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
