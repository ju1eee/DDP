//페이지 로드가 완료된 후 함수 실행
$(document).ready(function() {
    //변수 선언
    //비디오 요소 선택
    var video = $("#video");
    //음소거 버튼 선택
    var soundButton = $('.btn-sound');
    //일시정지 버튼 선택
    var pauseButton = $('.btn-pause');
    // var playPauseButton = $('.play-pause-button');

    //음소거 버튼에 클릭 이벤트 바인딩
    soundButton.on('click', function() {
    //음소거 버튼이 'on'클래스를 가지고 있는 경우 (음소거 상태)
    if (soundButton.hasClass('on')) {
        //'on' 클래스 제거
        soundButton.removeClass('on');
        //버튼 텍스트 변경
        soundButton.text('Sound OFF');
        //비디오 음소거 해제
        video.prop('muted', false);
    } else {
        //'on'클래스 추가
        soundButton.addClass('on');
        // 버튼 텍스트 변경
        soundButton.text('Sound ON');
        //비디오 음소거 설정
        video.prop('muted', true);
    }
    });

    //일시정지 버튼에 클릭 이벤트 바인딩
    pauseButton.on('click', function() {
        //일시정지 버튼이 'on' 클래스를 가지고 있을 경우(일시정지 상태)
    if (pauseButton.hasClass('on')) {
        //'on' 클래스 제거
        pauseButton.removeClass('on');
        //비디오 재생
        video.trigger('play');
    } else {
        //'on'클래서 추가
        pauseButton.addClass('on');
        //비디오 일시정시
        video.trigger('pause');
    }
    });

     // 재생/일시정지 상태에 따른 버튼 토글 이벤트 처리
    playPauseButton.on('click', function() {
         // 재생 중인 상태일 경우
    if (playPauseButton.hasClass('playing')) {
        // 'paused'와 'playing' 클래스 제거
        playPauseButton.removeClass('paused playing');
         // 'paused' 클래스 추가
        playPauseButton.addClass('paused');
    } else {
        // 일시정지 상태일 경우
        if (playPauseButton.hasClass('paused')) {
             // 'playing' 클래스 추가
        playPauseButton.addClass('playing');
        }
    }
     // 'paused' 클래스가 없을 경우 추가
    if (!playPauseButton.hasClass('paused')) {
        playPauseButton.addClass('paused');
    }
    });
    });

//제이쿼리에서 페이지 로드가 완료된 후 코드 실행
$(function(){
    // 메인 인트로 텍스트 분할 애니메이션을 적용함
    //텍스트를 단어와 문자 단위로 분할함
    const introTxt = new SplitType('.main-intro .tit h2, .main-intro .tit p', {types : 'words, chars',});
    // 애니메이션 초기 속성 설정하는 부분
    gsap.set(introTxt.chars, {
        //x축 랜덤 위치
        xPercent:("random(-300,300)"),
        //y축 랜덤 위치
        yPercent:("random(-300,300)"),
        //랜덤 회전
        rotation:("random(-360,360)")
    })
    //애니메이션 실행 설정
    gsap.to(introTxt.chars,1,{
        //x축 초기 위치
        xPercent: 0,
        //y축 초기 위치
        yPercent: 0,
        //회전 없음
        rotation: 0,
        //지속 시간 15
        duration:15,
        //애니메이션 차이 설정
        stagger : {
            //무작위 순서
            from : 'random',
            //애니메이션 간 시간 차이 설정임
            amount : 0.1
        }
    })

    //about 섹션 애니메이션
    //gsap 타임라인 설정    
    aboutTxt = gsap.timeline({
        //스크롤 트리거 설정
        scrollTrigger:{
            //트리거 요소를 .main-about으로 설정함
            trigger:".main-about",
            //시작 위치 설정
            start:"0% 0%",
            //끝나는 위치 설정함
            end:"60% 0%",
            //애니메이션 지연 시간 설정
            scrub:1,
        },
    })
    //애니메이션 대상 선택 및 실행 내용
    aboutTxt.to('.main-about .group-column',{
        //투명도 변경함 
        opacity:1,
    })
})


 // sc-digital 
 //digital 애니메이션 시작
 //페이지 로드 완료 후 코드 실행
 $(function(){
    //gsap 타임라인 설정
 scDigital = gsap.timeline({
    //스크롤 트리거 설정
    scrollTrigger:{
        //트리거 요소 선택
        trigger:".digital",
        //시작 위치 설정
        start:"0% 80%",
        //끝나는 위치 설정
        end : "100% 0%",
        //애니메이션 지연 시간 설정
        scrub : 1
    },
})
//애니메이션 적용
    scDigital
    //애니메이션 라벨 추가
    .addLabel('a')
    //이미지 확대
    .to('.digital .illustr-area img',{ scale : 1 },'a')
    //설명 표시
    .to('.digital .desc-wrap',{ x : 1, opacity : 1, },'a')
    //제목 표시
    .to('.digital .tit-wrap .tit01, .digital .tit-wrap .tit02, .digital .tit-wrap .tit03',{ x : 0, opacity : 1, },'a')
})


//notice 섹션 제작
//페이지 로드 완료 후 코드 실행함
$(function(){
    //gsap 타임라인 설정
    scAudio = gsap.timeline({
        //스크롤 트리거 설정
        scrollTrigger:{
            //트리거 요소 선택
            trigger:".notice",
            //시작 위치 설정
            start:"0% 70%",
            //끝나는 위치 설정
            end : "100% 0%",
        },
    })
    //애니메이션 적용
        scAudio 
        //애니메이션 라벨 추가
        .addLabel('a')
        .to('.notice .group-tit > * ',{
            x : 0,
            opacity : 1
        },'a') //헤더 표시
        //오디오 목록 표시
        .to('.notice .notice-list > *',{
            y : 0,
            opacity : 1,
            stagger : 0.1, //애니메이션 간 차이
        },'a')

        //gsap 타임라인
    audioBtm = gsap.timeline({
        //스크롤 트리거 설정
        scrollTrigger:{
            //트리거 요소 선택
            trigger:".notice",
            //시작 위치 설정
            start:"50% 40%",
            //끝나는 위치 설정
            end : "100% 0%",
        },
    })
    //하단 애니메이션 적용
     audioBtm
    .to('.notice .group-more',{
        y : 0,
        opacity : 1,
    })

})
