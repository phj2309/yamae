//구글로그인 버튼 렌더
function renderButton() {
    gapi
        .signin2
        .render('my-signin2', {
            'scope': 'profile email',
            'width': 'auto',
            'height': 50,
            'longtitle': true,
            'theme': 'dark'
        });
}
//로그인 유무 확인
function checkLoginStatus() {

    if (gauth.isSignedIn.get()) {
        console.log("logined");
        var profile = gauth
            .currentUser
            .get()
            .getBasicProfile();
        var nameText = profile.getName();//db에 저장될 때 nickname에 저장
        var gEmail = profile.getEmail(); //db에 저장될 때 id, email에 동시저장
    } else {
        console.log("logouted!");
    }
}
function init() {
    console.log('init!!');
    gapi.load('auth2', function () {
        console.log('auth2!!!');
        //init : GoogleAuth객체를 만들어냄.
        window.gauth = gapi
            .auth2
            .init(
                {
                    client_id: '848387022872-o2o7mi2pjpfasmjl7aqg4ve27actaeg1.apps.googleusercontent.com',
                    ux_mode: 'redirect',
                    redirect_uri: './user/google'
                }
            )
        renderButton();
        gauth.then(function () {
            console.log("gauth success!");
            checkLoginStatus();
        }, function () {
            console.log("gauth failed!");
        }); //gauth작업이 끝난 후
    });
}