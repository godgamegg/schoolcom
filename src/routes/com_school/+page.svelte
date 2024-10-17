<script>
  // @ts-nocheck

  import { writetoggle } from "../store/store";
  import { writing_more_toggle } from "../store/store";

  let write = () => {
    writetoggle.set(1);
  };

  // 현재 클릭된 j 값을 저장할 변수
  let currentJ = null;

  let on_write = (j) => {
    writing_more_toggle.set(1);
    // console.log(`Clicked on item with index ${j}`);
    currentJ = j; // 클릭된 j 값 저장
  };

  import Nested from "../writing_more/Nested.svelte";
  import Nested1 from "../write_page/Nested.svelte";

  export let data;

  import { page } from "$app/stores";
  let par_type;
  // export let par_type;
  // 쿼리 파라미터 값 추출
  $: par_type = $page.url.searchParams.get("par_type") || "00";
  // console.log(par_type);
  // console.log(data.user[0]);
  let search = "";

  // let number12;
  // while (true) {
  //   number12 += 1;
  // }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="community_container">
  <div class="search_container">
    <div class="search_box">
      <div class="search_1 search">
        <div class="search_button">
          <img src="/search_button.png" alt="" />
          <div class="search_div"><div>검색</div></div>
        </div>
        <input class="search_space" type="text" bind:value={search} />
      </div>
    </div>
  </div>

  <div class="community_name_line">
    <div class="community_name">
      <div class="community_name1">
        <div>공지</div>
        <!-- {par/_type} -->
      </div>
    </div>

    <div class="community_name11">
      <div class="community_name12"><div>모든 글</div></div>
    </div>
  </div>
  <div class="community_writes_container">
    <div class="community_writes_row">
      {#each data.write as i, j}
        <!-- <div style="font-size: 0;">{number12}</div> -->
        {#if data.write[j].title.indexOf(search) != -1 || data.write[j].writer.indexOf(search) != -1 || data.write[j].writing.indexOf(search) != -1}
          {#if data.write[j].written_type == par_type && data.write[j].announce == true}
            {#if Math.floor(Number(par_type) / 10) == 1}
              <!-- 각 글에 대해 고유한 j 값을 가진 div -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div class="writing" on:click={() => on_write(j)}>
                <div class="writing_top">
                  <div class="writing_title">{data.write[j].title}</div>
                  <div class="writing_writer">{data.write[j].writer}</div>
                </div>
                <div class="writing_mid">{data.write[j].writing}</div>
                <div class="writing_bottom">
                  <div style="flex-grow:1;display:flex; flex-direction:row">
                    <div class="writing_good writing_goodbad">
                      <!-- <img width="30px" src="/good_on.png" alt="" />
                <div style="color:white; font-weight:bold">
                  {data.write[j].like}
                </div> -->
                    </div>
                    <div class="writing_bad writing_goodbad">
                      <!-- <img width="30px" src="/bad_on.png" alt="" />
                <div style="color:white; font-weight:bold">
                  {data.write[j].hate}
                </div> -->
                    </div>
                  </div>
                  <div class="writing_more_watch">더보기...</div>
                </div>
              </div>
            {/if}
            {#if Math.floor(Number(par_type) / 10) == 2}
              {#if data.user[0].grade == data.write[j].writer_grade}
                <!-- 각 글에 대해 고유한 j 값을 가진 div -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="writing" on:click={() => on_write(j)}>
                  <div class="writing_top">
                    <div class="writing_title">{data.write[j].title}</div>
                    <div class="writing_writer">{data.write[j].writer}</div>
                  </div>
                  <div class="writing_mid">{data.write[j].writing}</div>
                  <div class="writing_bottom">
                    <div style="flex-grow:1;display:flex; flex-direction:row">
                      <div class="writing_good writing_goodbad">
                        <!-- <img width="30px" src="/good_on.png" alt="" />
              <div style="color:white; font-weight:bold">
                {data.write[j].like}
              </div> -->
                      </div>
                      <div class="writing_bad writing_goodbad">
                        <!-- <img width="30px" src="/bad_on.png" alt="" />
              <div style="color:white; font-weight:bold">
                {data.write[j].hate}
              </div> -->
                      </div>
                    </div>
                    <div class="writing_more_watch">더보기...</div>
                  </div>
                </div>
              {/if}
            {/if}
            {#if Math.floor(Number(par_type) / 10) == 3}
              {#if data.user[0].grade == data.write[j].writer_grade && data.user[0].classNo == data.write[j].writer_class}
                <!-- 각 글에 대해 고유한 j 값을 가진 div -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="writing" on:click={() => on_write(j)}>
                  <div class="writing_top">
                    <div class="writing_title">{data.write[j].title}</div>
                    <div class="writing_writer">{data.write[j].writer}</div>
                  </div>
                  <div class="writing_mid">{data.write[j].writing}</div>
                  <div class="writing_bottom">
                    <div style="flex-grow:1;display:flex; flex-direction:row">
                      <div class="writing_good writing_goodbad">
                        <!-- <img width="30px" src="/good_on.png" alt="" />
              <div style="color:white; font-weight:bold">
                {data.write[j].like}
              </div> -->
                      </div>
                      <div class="writing_bad writing_goodbad">
                        <!-- <img width="30px" src="/bad_on.png" alt="" />
              <div style="color:white; font-weight:bold">
                {data.write[j].hate}
              </div> -->
                      </div>
                    </div>
                    <div class="writing_more_watch">더보기...</div>
                  </div>
                </div>
              {/if}
            {/if}
            <!-- 클릭된 항목만 Nested 컴포넌트로 렌더링 -->
            {#if currentJ === j}
              <Nested {data} {j} />
            {/if}
          {/if}
        {/if}
      {/each}
    </div>
    <div class="community_writes_row1">
      {#each data.write as i, j}
        {#if data.write[j].title.indexOf(search) != -1 || data.write[j].writer.indexOf(search) != -1 || data.write[j].writing.indexOf(search) != -1}
          {#if data.write[j].written_type == par_type && data.write[j].announce == false}
            {#if Math.floor(Number(par_type) / 10) == 1}
              <!-- 각 글에 대해 고유한 j 값을 가진 div -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div class="writing" on:click={() => on_write(j)}>
                <div class="writing_top">
                  <div class="writing_title">{data.write[j].title}</div>
                  <div class="writing_writer">{data.write[j].writer}</div>
                </div>
                <div class="writing_mid">{data.write[j].writing}</div>
                <div class="writing_bottom">
                  <div style="flex-grow:1;display:flex; flex-direction:row">
                    <div class="writing_good writing_goodbad">
                      <!-- <img width="30px" src="/good_on.png" alt="" />
              <div style="color:white; font-weight:bold">
                {data.write[j].like}
              </div> -->
                    </div>
                    <div class="writing_bad writing_goodbad">
                      <!-- <img width="30px" src="/bad_on.png" alt="" />
              <div style="color:white; font-weight:bold">
                {data.write[j].hate}
              </div> -->
                    </div>
                  </div>
                  <div class="writing_more_watch">더보기...</div>
                </div>
              </div>
            {/if}
            {#if Math.floor(Number(par_type) / 10) == 2}
              {#if data.user[0].grade == data.write[j].writer_grade}
                <!-- 각 글에 대해 고유한 j 값을 가진 div -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="writing" on:click={() => on_write(j)}>
                  <div class="writing_top">
                    <div class="writing_title">{data.write[j].title}</div>
                    <div class="writing_writer">{data.write[j].writer}</div>
                  </div>
                  <div class="writing_mid">{data.write[j].writing}</div>
                  <div class="writing_bottom">
                    <div style="flex-grow:1;display:flex; flex-direction:row">
                      <div class="writing_good writing_goodbad">
                        <!-- <img width="30px" src="/good_on.png" alt="" />
            <div style="color:white; font-weight:bold">
              {data.write[j].like}
            </div> -->
                      </div>
                      <div class="writing_bad writing_goodbad">
                        <!-- <img width="30px" src="/bad_on.png" alt="" />
            <div style="color:white; font-weight:bold">
              {data.write[j].hate}
            </div> -->
                      </div>
                    </div>
                    <div class="writing_more_watch">더보기...</div>
                  </div>
                </div>
              {/if}
            {/if}
            {#if Math.floor(Number(par_type) / 10) == 3}
              {#if data.user[0].grade == data.write[j].writer_grade && data.user[0].classNo == data.write[j].writer_class}
                <!-- 각 글에 대해 고유한 j 값을 가진 div -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="writing" on:click={() => on_write(j)}>
                  <div class="writing_top">
                    <div class="writing_title">{data.write[j].title}</div>
                    <div class="writing_writer">{data.write[j].writer}</div>
                  </div>
                  <div class="writing_mid">{data.write[j].writing}</div>
                  <div class="writing_bottom">
                    <div style="flex-grow:1;display:flex; flex-direction:row">
                      <div class="writing_good writing_goodbad">
                        <!-- <img width="30px" src="/good_on.png" alt="" />
            <div style="color:white; font-weight:bold">
              {data.write[j].like}
            </div> -->
                      </div>
                      <div class="writing_bad writing_goodbad">
                        <!-- <img width="30px" src="/bad_on.png" alt="" />
            <div style="color:white; font-weight:bold">
              {data.write[j].hate}
            </div> -->
                      </div>
                    </div>
                    <div class="writing_more_watch">더보기...</div>
                  </div>
                </div>
              {/if}
            {/if}
            <!-- 클릭된 항목만 Nested 컴포넌트로 렌더링 -->
            {#if currentJ === j}
              <Nested {data} {j} />
            {/if}
          {/if}
        {/if}
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

<Nested1 {par_type} />

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
    width: 80%;
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
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .community_writes_row1 {
    width: 80%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-left: #4370a7 1px solid;
    justify-content: center;
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

  .search_container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .search_box {
    /* align-items: center;
    justify-content: center; */
    width: 38%;
    /* display: flex; */
    /* background-color: #4370a7; */
    /* flex-grow: 1; */
  }
  .search {
    margin: 20px;
    background-color: white;
    height: 70px;
    border-radius: 10px;
    border: black 1px solid;
    display: flex;
  }

  .search_button {
    background-color: #112d4e;
    width: 111px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px 0px 0px 9px;
  }

  .search_space {
    flex-grow: 1;
    font-size: 25px;
  }

  .search_div {
    color: white;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
</style>
