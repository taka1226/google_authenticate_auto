let key = ""; //自分の秘密鍵を入れる

// フォームに値をセット
document.getElementsByName('SM_PWD')[0].value = gauth(key);

// submit
document.getElementsByName('totp')[0].submit();
