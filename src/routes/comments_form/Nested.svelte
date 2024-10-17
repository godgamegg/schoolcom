<script>
  import Com from "../com_write_일단_안씀/com.svelte";

  // let comment2_toggle = 0;
  // let see_comment = () => {
  //   comment2_toggle += 1;
  //   comment2_toggle %= 2;
  //   // console.log(comment2_toggle);
  // };
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
    <!-- <div class="comment_form_on" on:click={see_comment}>
      <img
        class={`comment_form_comment_on3 ${comment2_toggle === 1 ? "comment_form_comment_on2" : ""}`}
        width="20"
        style="margin-right:10px;"
        src="/open_comment.png"
        alt=""
      />
      <div>댓글 보기</div>
    </div> -->
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

  .comment_form_bot {
    height: fit-content;
    display: flex;
    /* align-items: center; */

    background-color: #e7e7e7;
    flex-direction: column;
  }
</style>
