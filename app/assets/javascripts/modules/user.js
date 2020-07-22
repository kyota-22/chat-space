$(function(){
  function appendUser(user){
    let html = 
              `
              <div class="ChatMember clearfix">
                <p class="ChatMember__name">${user.name}</p>
                <div class="ChatMember__add ChatMember__button" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>
              `;
    $("#UserSearchResult").append(html);
  }
  
  function addNoUser() {
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>
                `;
    $("#UserSearchResult").append(html);
  }
  
  function addMember(name, id) {
    // ↑下記のから呼び出されて下記の処理を実行。引数からnameとidの値を取得
    let html = `
                <div class="ChatMember">
                  <p class="ChatMember__name">${name}</p>
                  <input name="group[user_ids][]" type="hidden" value="${id}" />
                  <div class="ChatMember__remove ChatMember__button">削除</div>
                </div>
                `;
    $(".ChatMembers").append(html);
    //↑親要素ChatMemersの最後に上記のHTMLを追加
  }

  $("#UserSearch__field").on("keyup", function(){
    let input = $("#UserSearch__field").val();
    $.ajax({
      url: "/users",
      type: "GET",
      data: { keyword: input },
      dataType: 'json',
  })
    .done(function(users) {
      $("#UserSearchResult").empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      } else if (input.length == 0) {
        return false;
      } else{
        addNoUser();
      }
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    });
  });

  $("#UserSearchResult").on("click", ".ChatMember__add",function(){
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
    // ↑thisの中身はボタン。ボタンの属性に含まれる属性のidとnameを取得し代入
    $(this).parent().remove();
    //↑ボタンの親要素である一人分の追加バーを削除
    addMember(userName, userId);
    //↑上記の関数addMemberを呼び出し引数も渡す
  });
  $(".ChatMembers").on("click", ".ChatMember__remove", function() {
    // addMenbers内のHTMLに記載がある.ChatMembers内のChatMember__remove（削除ボタン)
    // がクリックされたら発火
    $(this).parent().remove();
    // 削除ボタンが押されたユーザーのバーを削除this==.ChatMember__remove
  });
});

