<script>
  import Com from "../com_write_일단_안씀/com.svelte";

  let comment2_toggle = 0;
  let see_comment = () => {
    comment2_toggle += 1;
    comment2_toggle %= 2;
    console.log(comment2_toggle);
  };
</script>

<div class="comment_form">
  <div class="comment_form_top">
    <div class="comment_form_profil">
      <div class="comment_form_user">
        <img src="/profil.png" alt="" class="comment_form_user_profil" />
        <div class="comment_form_user_name">장준혁</div>
      </div>
    </div>
  </div>
  <div class="comment_form_mid">뭐 어쩌라고</div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="comment_form_bot">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="comment_form_on" on:click={see_comment}>
      <img
        class={`comment_form_comment_on3 ${comment2_toggle === 1 ? "comment_form_comment_on2" : ""}`}
        width="20"
        style="margin-right:10px;"
        src="/open_comment.png"
        alt=""
      />
      <div>댓글 보기</div>
    </div>

    <div
      class={`comment_form_comment ${comment2_toggle === 1 ? "comment_form_comment_on" : ""}`}
    >
      <div class="comment2_form">
        <div class="comment2_form_top">
          <div class="comment2_form_profil">
            <div class="comment2_form_user">
              <img src="/profil.png" alt="" class="comment2_form_user_profil" />
              <div class="comment2_form_user_name">장준혁</div>
            </div>
          </div>
        </div>
        <div class="comment2_form_mid">뭐 어쩌라고</div>
      </div>

      <div class="comment_form_comment_container">
        <div class="comment_form_comment_title">답글 달기...</div>
        <input class="comment_form_comment_input" type="text" name="" id="" />
        <div class="comment_form_comment_send_container">
          <img
            class="comment_form_comment_send"
            src="/write_sending.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .comment_form {
    width: 100%;
    height: fit-content;
    /* background-color: aliceblue; */
    border: #112d4e 3px solid;
    display: flex;
    flex-direction: column;
  }
  .comment_form_top {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border: gray 1px solid;

    background-color: #e3e3e3;
  }
  .comment_form_user {
    margin-left: 30px;
    display: flex;
    align-items: center;
  }
  .comment_form_user_profil {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: black;
  }
  .comment_form_user_name {
    font-size: 30px;
    font-weight: bold;
    margin-left: 15px;
  }
  .comment_form_mid {
    /* flex-grow: 1; */
    height: 90px;
    padding: 10px;

    border: gray 1px solid;
  }

  .comment_form_on {
    padding-left: 40px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .comment_form_bot {
    height: fit-content;
    display: flex;
    /* align-items: center; */

    background-color: #e7e7e7;
    flex-direction: column;
  }
  .comment_form_comment {
    display: none;
  }
  .comment_form_comment_on {
    display: flex;
    flex-direction: column;
  }

  .comment2_form {
    width: 100%;
    height: fit-content;
    /* background-color: aliceblue; */
    border-top: #112d4e 3px solid;
    display: flex;
    flex-direction: column;
  }
  .comment2_form_top {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    /* border: gray 1px solid; */

    background-color: #e3e3e3;
  }
  .comment2_form_user {
    margin-left: 30px;
    display: flex;
    align-items: center;
  }
  .comment2_form_user_profil {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: black;
  }
  .comment2_form_user_name {
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
  }
  .comment2_form_mid {
    /* flex-grow: 1; */
    height: fit-content;
    padding: 10px;

    border: gray 1px solid;
  }

  .comment2_form_on {
    padding-left: 40px;
  }
  .comment2_form_bot {
    height: fit-content;
    display: flex;
    /* align-items: center; */

    background-color: #e7e7e7;
    flex-direction: column;
  }
  .comment_form_comment_on3 {
    transition: all 0.5s;
    /* transform: rotate(0deg); */
  }
  .comment_form_comment_on2 {
    transform: rotate(90deg);
  }
  .comment_form_comment_container {
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #a5a5a5;
  }

  .comment_form_comment_title {
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px;
    margin-right: 10px;
  }
  .comment_form_comment_input {
    height: 30px;
    font-size: 20px;
    /* background-color: white; */
    /* width: 80%; */
    flex-grow: 1;
  }

  .comment_form_comment_send_container {
    width: 60px;
    height: 60px;
    margin-left: 20px;
    margin-right: 20px;
    /* padding: 10px; */
    background-color: #112d4e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .comment_form_comment_send {
    width: 40px;
    height: 40px;
  }
</style>
