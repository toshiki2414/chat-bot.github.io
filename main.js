$(function() {
  //ボタンがクリックされたら処理が走ります。
  $('.btns button:nth-child(-n+2)').on('click',function() {
                $('.chara').css('border', '7px solid #FFC0CB')
    });
  });



function btnFunc() {
	$('.chara').css('border', '7px solid #98FB98')
}

function checkText() {
	const inputText = document.getElementById('mytext');
    //入力ボックスの内容を表示する
    alert(inputText.value);
 
}

function onUnBookmarked(){ // ブックマーク外れる
	$.ajax({
          url: "text.json",
          type: "GET",
          dataType: "json",
        })
          .done(function (data) {
            // success
            //取得jsonデータ
            var data_stringify = JSON.stringify(data);
            var data_json = JSON.parse(data_stringify);
            //jsonデータから各データを取得
            var data_id = data_json[0]["id"];
            var data_title = data_json[0]["title"];
            //出力
            $("#id").text(data_id);
            $("#title").text(data_title);
			output("jsonから持って来て",'me');
			setTimeout( ()=> {
				output(data_title, 'bot');
    		}, 1000);
          })
          .fail(function (data) {
            // error
            console.log("error");
	});

}

function output(val,person) {
    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li');
    // このdivにテキストを指定
    const div = document.createElement('div');
	const div_img = document.createElement('div');
	const span = document.createElement('span');
    div.textContent = val;
	span.textContent = '2020.12.12 21:11';
	//alert(div.textContent);
	if (person === 'me') {
    	div.classList.add('mymessage');
    	li.classList.add('message-area');
		li.classList.add('me');
		span.classList.add('date');
    	ul.appendChild(li);
		li.appendChild(div);
		div.appendChild(span);
	}else if(person === 'bot'){
		div_img.classList.add('user-image');
		div_img.setAttribute('style', "background-image: url(img.jpg);");
		div.classList.add('message');
    	li.classList.add('message-area');
		li.classList.add('you');
		span.classList.add('date');
    	ul.appendChild(li);
		li.appendChild(div_img);
		li.appendChild(div);
		div.appendChild(span);
	}
    
}


	
function formsend() {
	const inputText = document.getElementById('mytext');
	const echo =inputText.value;
    if (!inputText.value) return false;
    // 自分のテキストを送信
	output(inputText.value,'me');
	setTimeout( ()=> {
		output(echo, 'bot');
        echo = '';
    }, 1000);
    
    setTimeout( ()=> {
        // 入力内を空欄にする
        inputText.value = '';
    }, 1);
}

