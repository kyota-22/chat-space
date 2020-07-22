$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
      `<div class="message-box"　data-message-id=${message.id}>
        <div class="message-box__user">
          <div class="message-box__user--name">
            ${message.user_name}
          </div>
          <div class="message-box__user--time">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message-box__text">
            ${message.content}
          </p>
          <img class="Message__image" src="${message.image}">
        </div>
      </div>`
      return html;
    } else {
      let html =
      `<div class="message-box"　data-message-id=${message.id}>
        <div class="message-box__user">
          <div class="message-box__user--name">
            ${message.user_name}
          </div>
          <div class="message-box__user--time">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="message-box__text">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  
  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main__chat').append(html);
      $('.main__chat').animate({scrollTop: $('.main__chat')[0].scrollHeight})
      $('form')[0].reset();
      $('.main__form--btn').prop('disabled',false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
});
