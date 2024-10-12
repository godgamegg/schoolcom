<script>
  import { writetoggle } from "../store/store";

  let write_1 = 0;
  writetoggle.subscribe((value) => {
    write_1 = value;
  });

  let writeoff = () => {
    writetoggle.set(0);
  };
  let taggout = 0;
  let taggout_toggle = () => {
    taggout += 1;
    taggout %= 2;
  };

  export let par_type;
  // console.log(par_type);
  let title = "";
  let writing = "";
  let written_type = par_type;
  let announce = false;

  // "확인" 버튼 클릭 시 데이터를 서버로 전송하는 함수
  const submitData = async () => {
    const formData = {
      title,
      writing,
      written_type,
      announce,
    };

    try {
      const response = await fetch("/write_page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      // console.log("Update result:", result);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
    writetoggle.set(0);
    title = "";
    writing = "";
  };
</script>

{#if write_1 == 1}<div class={`write_page write_page_open`}>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="write_page_top">
      <div class="write_page_title"><div>글 쓰기</div></div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        on:click={writeoff}
        class="write_page_top_x"
        src="/white_x.png"
        alt=""
      />
    </div>
    <div class="write_page_middle">
      <input
        class="main_textarea"
        name=""
        maxlength="11"
        id=""
        bind:value={title}
      />
      <textarea class="write_textarea" name="" id="" bind:value={writing}
      ></textarea>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="write_page_bottom">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="write_page_tag">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="write_page_tag_plus">
          <input
            bind:checked={announce}
            type="checkbox"
            style="width:30px;height:30px"
          />
          공지
        </div>
      </div>
      <div class="file-"></div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="write_sending_button" on:click={submitData}>
        <img src="/write_sending.png" alt="" />
      </div>
    </div>
  </div>
{/if}

<style>
  .write_page {
    position: fixed;
    background-color: #f9f7f7;
    width: 1100px;
    height: 750px;
    left: 10%;
    top: 10%;
    border-radius: 10px;
    border: #112d4e solid 5px;
    display: none;
    flex-direction: column;
    z-index: 10;
  }
  .write_page_top {
    width: 100%;
    height: 50px;
    background-color: #112d4e;
    display: flex;
  }
  .write_page_title {
    flex-grow: 1;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .write_page_bottom {
    width: 100%;
    height: 100px;
    background-color: #112d4e;
    display: flex;
    align-items: center;
  }
  .main_textarea {
    width: 94%;
    height: 40px;
    font-weight: bold;
    border: #112d4e 4px solid;
    border-radius: 10px;
    margin: 2% 3%;
    /* back */
    font-size: 40px;
  }

  .write_textarea {
    width: 94%;
    height: 85%;
    margin: 0px 3% 3% 3%;
    /* back */

    border: #112d4e 2px solid;
    font-size: 20px;
  }
  .write_sending_button {
    width: 70px;
    height: 70px;
    background-color: #173c67;
    border: #366093 5px solid;
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
    background-color: #1c4779;
    border: #235c9c 5px solid;
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
