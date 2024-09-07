<script>
  import { user_inform_toggle } from "../store/store";
  import Nested from "../user_inform/Nested.svelte";

  export let data;
  let profil_on = () => {
    user_inform_toggle.set(1);
  };
</script>

<div class="edituser_container">
  <div class="edituser_seemyprofil_container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="edituser_seemyprofil">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={profil_on}>내 프로필 보기</div>
    </div>
  </div>
  <div class="edituser">
    <div class="edituser_title">상태메시지 수정하기</div>

    <div class="edituser_row">
      <input
        style="width:85%"
        class="edituser_input"
        type="text"
        maxlength="100"
      />
      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>
  <div class="edituser">
    <div class="edituser_title">나만의 특징 수정하기</div>

    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" maxlength="10" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>
  <div class="edituser">
    <div class="edituser_title">현재 위치 수정하기</div>
    <div class="edituser_row">
      <input class="edituser_input" type="text" />

      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>
  <div class="edituser">
    <div class="edituser_title">이름 수정하기</div>

    <div class="edituser_row">
      <input
        class="edituser_input"
        type="text"
        value={data.session?.user?.name}
      />
      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>

  <div class="edituser">
    <div class="edituser_title">생일 수정하기</div>
    <div class="edituser_row">
      <input class="edituser_input" type="date" />
      <div class="edituser_change"><div>확인</div></div>
      <div style="font-weight: bold; font-size:30px; margin-left:40px">
        <input style=" zoom:2;" type="checkbox" />생일 비공개하기
      </div>
    </div>
  </div>

  <div class="edituser">
    <div class="edituser_title">학년 반 수정하기</div>
    <div class="edituser_row">
      <input class="edituser_input1" type="number" />
      <div style="font-weight: bold; font-size:30px">학년</div>
      <input class="edituser_input1" type="number" />
      <div style="font-weight: bold; font-size:30px">반</div>
      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>

  <div class="edituser">
    <div class="edituser_title">역할 수정하기</div>
    <div class="edituser_row">
      <select
        name="position"
        style="width:200px; font-size:25px;
        "
      >
        <option selected>학생</option>
        <option value="apple">선생님</option>
      </select>
      <div
        style="font-weight: bold; font-size:30px; margin-left:30px; margin-right:10px"
      >
        비밀번호
      </div>
      <input style="width:150px" class="edituser_input" type="password" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>

  <div class="edituser">
    <div class="edituser_title">선생님 역할 수정하기</div>

    <div class="edituser_row">
      <input class="edituser_input" type="text" />
      <div
        style="font-weight: bold; font-size:30px; margin-left:30px; margin-right:10px"
      >
        비밀번호
      </div>
      <input style="width:150px" class="edituser_input" type="password" />
      <div class="edituser_change"><div>확인</div></div>
    </div>
  </div>
</div>
<Nested />

<style>
  .edituser_container {
    padding: 30px;
    overflow-y: scroll;
  }
  .edituser_seemyprofil_container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  .edituser_seemyprofil {
    width: 400px;
    height: 100px;
    background-color: #112d4e;
    color: white;
    font-size: 40px;
    font-weight: bold;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .edituser {
    margin-top: 30px;
    width: 100%;
  }
  .edituser_input {
    width: 300px;
    font-size: 40px;
    font-weight: bold;
  }
  .edituser_input1 {
    width: 70px;
    font-size: 40px;
    font-weight: bold;
  }
  .edituser_title {
    font-size: 35px;
    font-weight: bold;
    /* background-color: ; */
    margin-bottom: 10px;
  }

  .edituser_row {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  .edituser_change {
    width: 100px;
    height: 50px;
    font-size: 20px;
    /* width: 200px; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #112d4e;
    color: white;
    font-size: 25px;
    border-radius: 10px;
    margin-left: 20px;
  }
</style>
