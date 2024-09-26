<script>
  import { user_inform_toggle } from "../store/store";
  import Nested from "../user_inform/Nested.svelte";

  export let data;
  let profil_on = () => {
    user_inform_toggle.set(1);
  };

  let secret = "teacher";
  let teacher_secret = "";
  let teacher_secret1 = "";

  let nowmessage = data.user1[0].nowmessage;
  let mymessage1 = data.user1[0].mymessage1;
  let mymessage2 = data.user1[0].mymessage2;
  let mymessage3 = data.user1[0].mymessage3;
  let mymessage4 = data.user1[0].mymessage4;
  let mymessage5 = data.user1[0].mymessage5;
  let mymessage6 = data.user1[0].mymessage6;
  let mymessage7 = data.user1[0].mymessage7;
  let nowlocation = data.user1[0].nowlocation;
  let birth = data.user1[0].birth;
  // let birth_lock = false;
  let grade = data.user1[0].grade;
  let num = data.user1[0].num;
  let classNo = data.user1[0].classNo;
  let position = data.user1[0].position;
  let teacher_position = data.user1[0].teacher_position;
  let username = data.user1[0].username;

  // "확인" 버튼 클릭 시 데이터를 서버로 전송하는 함수
  const submitData = async () => {
    const formData = {
      nowmessage,
      mymessage1,
      mymessage2,
      mymessage3,
      mymessage4,
      mymessage5,
      mymessage6,
      mymessage7,
      nowlocation,
      birth,
      // birth_lock,
      grade,
      num,
      classNo,
      position,
      teacher_position,
      username,
    };

    try {
      const response = await fetch("/profil_edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Update result:", result);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  let currentJ = 0;
</script>

<div class="edituser_container">
  <!--  -->

  <div class="edituser_container">
    <!-- 프로필 보기 -->
    <div class="edituser_seemyprofil_container">
      <div class="edituser_seemyprofil">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={() => user_inform_toggle.set(1)}>내 프로필 보기</div>
      </div>
    </div>

    <!-- 상태 메시지 수정 -->
    <div class="edituser">
      <div class="edituser_title">상태메시지 수정하기</div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          style="width:85%"
          class="edituser_input"
          type="text"
          maxlength="100"
          bind:value={nowmessage}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>

    <!-- 나만의 특징 수정 -->
    <div class="edituser">
      <div class="edituser_title">나만의 특징 수정하기</div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage1}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage2}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage3}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage4}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage5}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage6}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          class="edituser_input"
          type="text"
          maxlength="10"
          bind:value={mymessage7}
        />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>

    <!-- 현재 위치 수정 -->
    <div class="edituser">
      <div class="edituser_title">현재 위치 수정하기</div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input class="edituser_input" type="text" bind:value={nowlocation} />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>
    <div class="edituser">
      <div class="edituser_title">이름 수정하기</div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input class="edituser_input" type="text" bind:value={username} />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>
    <!-- 생일 수정 -->
    <div class="edituser">
      <div class="edituser_title">생일 수정하기</div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input class="edituser_input" type="date" bind:value={birth} />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
        <!-- <div style="font-weight: bold; font-size:30px; margin-left:40px">
          <input style="zoom:2;" type="checkbox" bind:checked={birth_lock} /> 생일
          비공개하기
        </div> -->
      </div>
    </div>

    <!-- 학년 반 수정 -->
    <div class="edituser">
      <div class="edituser_title">
        학년 반 수정하기 (선생님일 시 담당 학년,반)
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input class="edituser_input1" type="number" bind:value={grade} />
        <div style="font-weight: bold; font-size:30px">학년</div>
        <input class="edituser_input1" type="number" bind:value={classNo} />
        <div style="font-weight: bold; font-size:30px">반</div>
        <input class="edituser_input1" type="number" bind:value={num} />
        <div style="font-weight: bold; font-size:30px">번</div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>

    <!-- 역할 수정 -->
    <div class="edituser">
      <div class="edituser_title">역할 수정하기</div>
      <div class="edituser_row">
        <select
          name="position"
          style="width:200px; font-size:25px;"
          bind:value={position}
        >
          <option value="학생">학생</option>
          <option value="선생님">선생님</option>
        </select>
        <!-- <div
          style="font-weight: bold; font-size:30px; margin-left:30px; margin-right:10px"
        >
          비밀번호
        </div>
        <input
          style="width:150px"
          class="edituser_input"
          type="password"
          bind:value={teacher_secret}
        /> -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>

    <div class="edituser">
      <div class="edituser_title">선생님 역할 수정하기</div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="edituser_row">
        <input
          name="teacher_position"
          style="width:200px; font-size:25px;"
          bind:value={teacher_position}
        />
        <!-- <div
          style="font-weight: bold; font-size:30px; margin-left:30px; margin-right:10px"
        >
          비밀번호
        </div>
        <input
          style="width:150px"
          class="edituser_input"
          type="password"
          bind:value={teacher_secret1}
        /> -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="edituser_change" on:click={submitData}><div>확인</div></div>
      </div>
    </div>
  </div>

  <!--  -->
</div>
<Nested {data} {currentJ} />

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
