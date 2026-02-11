// 生日祝福网站主JavaScript文件

// ===== 小型唱片机控制 =====
const audioPlayer = document.getElementById('birthdayAudio');
const record = document.querySelector('.record');
const toneArm = document.querySelector('.tone-arm');
const recordPlayer = document.getElementById('recordPlayer');

// 设置默认音量
if (audioPlayer) {
    audioPlayer.volume = 0.7;
}

// 播放状态标志
let isPlaying = false;

// 尝试自动播放音乐
function tryAutoPlay() {
    if (!audioPlayer) return;
    
    const playPromise = audioPlayer.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("音乐自动播放成功");
            startPlayback();
        }).catch(error => {
            console.log("自动播放被阻止，等待用户交互");
            showPlayHint();
            setPausedState();
        });
    }
}

// 开始播放
function startPlayback() {
    if (!audioPlayer || !record || !toneArm) return;
    
    audioPlayer.play();
    record.style.animationPlayState = 'running';
    toneArm.classList.remove('paused');
    isPlaying = true;
    console.log("音乐播放中...");
}

// 暂停播放
function pausePlayback() {
    if (!audioPlayer || !record || !toneArm) return;
    
    audioPlayer.pause();
    record.style.animationPlayState = 'paused';
    toneArm.classList.add('paused');
    isPlaying = false;
    console.log("音乐已暂停");
}

// 设置暂停状态（初始状态）
function setPausedState() {
    if (!record || !toneArm) return;
    
    record.style.animationPlayState = 'paused';
    toneArm.classList.add('paused');
    isPlaying = false;
}

// 切换播放/暂停状态
function togglePlayback() {
    if (isPlaying) {
        pausePlayback();
    } else {
        startPlayback();
    }
}

// 显示播放提示（如果需要）
function showPlayHint() {
    const player = document.querySelector('.mini-record-player');
    if (!player) return;
    
    const playerRect = player.getBoundingClientRect();
    
    const hint = document.createElement('div');
    hint.innerHTML = '点击播放';
    hint.style.position = 'fixed';
    hint.style.top = (playerRect.bottom + 10) + 'px';
    hint.style.left = (playerRect.left + (playerRect.width / 2)) + 'px';
    hint.style.transform = 'translateX(-50%)';
    hint.style.background = '#ff6b6b';
    hint.style.color = 'white';
    hint.style.padding = '5px 10px';
    hint.style.borderRadius = '10px';
    hint.style.fontSize = '12px';
    hint.style.zIndex = '1001';
    hint.style.whiteSpace = 'nowrap';
    hint.id = 'playHint';
    document.body.appendChild(hint);
    
    setTimeout(() => {
        const hintElement = document.getElementById('playHint');
        if (hintElement) {
            hintElement.remove();
        }
    }, 3000);
}

// 初始化音乐播放器
function initMusicPlayer() {
    const miniPlayer = document.querySelector('.mini-record-player');
    const recordPlayer = document.querySelector('.record-player');
    const record = document.querySelector('.record');
    const toneArm = document.querySelector('.tone-arm');
    
    if (!recordPlayer) return;
    
    // 绑定点击事件
    recordPlayer.addEventListener('click', togglePlayback);
    
    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 移动端触摸交互优化
    if (isMobile && miniPlayer) {
        miniPlayer.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.classList.remove('mobile-click-animation');
            void this.offsetWidth;
            this.classList.add('mobile-click-animation');
            
            setTimeout(() => {
                this.classList.remove('mobile-click-animation');
            }, 2300);
        });
        
        miniPlayer.addEventListener('touchmove', function(e) {
            e.preventDefault();
        });
        
        miniPlayer.style.touchAction = 'manipulation';
        miniPlayer.style.webkitTapHighlightColor = 'transparent';
    }
    
    // 尝试自动播放
    tryAutoPlay();
}

// 信封拆封交互逻辑
function initEnvelope() {
    const waxSeal = document.getElementById('waxSeal');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const birthdayContent = document.getElementById('birthdayContent');
    
    if (!waxSeal || !envelopeContainer || !birthdayContent) return;
    
    waxSeal.addEventListener('click', function() {
        this.classList.add('broken');
        
        setTimeout(() => {
            envelopeContainer.classList.add('hiding');
            
            setTimeout(() => {
                envelopeContainer.style.display = 'none';
                birthdayContent.classList.add('show');
                initMusicPlayer();
            }, 800);
        }, 200);
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    initEnvelope();
});

// 音乐播放结束时的处理
if (audioPlayer) {
    audioPlayer.addEventListener('ended', function() {
        console.log("音乐播放结束");
    });

    // 音频加载错误处理
    audioPlayer.addEventListener('error', function(e) {
        console.error("音频加载错误:", e);
        
        const errorMsg = document.createElement('div');
        errorMsg.innerHTML = '音乐加载失败，请检查音乐文件';
        errorMsg.style.position = 'fixed';
        errorMsg.style.top = '10px';
        errorMsg.style.left = '50%';
        errorMsg.style.transform = 'translateX(-50%)';
        errorMsg.style.background = '#ff6b6b';
        errorMsg.style.color = 'white';
        errorMsg.style.padding = '10px';
        errorMsg.style.borderRadius = '5px';
        errorMsg.style.zIndex = '1001';
        document.body.appendChild(errorMsg);
        
        setTimeout(() => {
            errorMsg.remove();
        }, 5000);
    });
}