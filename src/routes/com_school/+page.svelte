<script>
  // @ts-nocheck

  import { writetoggle } from "../store/store";
  let write = () => {
    writetoggle.set(1);
  };

  let tag_plused = (i, j) => {};

  import Nested from "../writing/Nested.svelte";
  import Nested1 from "../write_page/Nested.svelte";
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
    <div class="community_writes_row"><Nested /></div>
    <div class="community_writes_row"><Nested /></div>
    <div class="community_writes_row1">
      <Nested /><Nested /><Nested /><Nested /><Nested /><Nested /><Nested />
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
</style>
