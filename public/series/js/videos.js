const videos = {
    mr_robot: [
        {
            name: 'seasonone',
            chapters: [
                'eps1.0_hellofriend.mov',
                'eps1.1_ones-and-zer0es.mpeg',
                'eps1.2_d3bug.mkv',
                'eps1.3_da3m0ns.mp4',
                'eps1.4_3xpl0its.wmv',
                'eps1.5_br4ve-trave1er.asf',
                'eps1.6_v1ew-s0urce.flv',
                'eps1.7_wh1ter0se.m4v',
                'eps1.8_m1rr0r1ng.qt',
                'eps1.9_zer0-day.avi'
            ]
        },
        {
            name: 'seasontwo',
            chapters: [
                'eps2.0_unm4sk.tc',
                'eps2.1_k3rnel-pan1c.ksd',
                'eps2.2_init1.asec',
                'eps2.3_logic-b0mb.hc',
                'eps2.4_m4ster-s1ave.aes',
                'eps2.5_h5ndshake.sme',
                'eps2.6_succ3ss0r.p12',
                'eps2.7_init_5.fve',
                'eps2.8_h1dden-pr0cess.axx',
                'eps2.9_pyth0n-pt1.p7z',
                'eps2.9_pyth0n-pt2.p7z'
            ]
        },
        {
            name: 'seasonthree',
            chapters: [
                'eps3.0_power-saver-mode.h',
                'eps3.1_undo.gz',
                'eps3.2_legacy.so',
                'eps3.3_m3tadata.par2',
                'eps3.4_runtime-err0r.r00',
                'eps3.5_kill-process.inc',
                'eps3.6_fredrick+tanya.chk',
                'eps3.7_dont-delete-me.ko',
                'eps3.8_stage3.torrent',
                'shutdown -r'
            ]
        }
    ]
}

const video = document.querySelector('#video');
const subtitle = document.querySelector('#subtitle');
const menu = document.querySelector('#menu');

window.onload = function() {
    const chapterPlayed = localStorage.getItem('chapter-played');
    if(!chapterPlayed)
    {
        const chapter = videos.mr_robot[0].chapters[0];
        localStorage.setItem('chapter', chapter);
        localStorage.setItem('season', 'seasonone');
        localStorage.setItem('chapter-played', 'mr_robot_chapter_1.webm');
        const src = `videos/seasonone/${chapterPlayed}`;
        video.setAttribute('src', src);
        subtitle.innerHTML = `Reproduciendo ${chapter}`
    }
    else
    {
        const chapter = localStorage.getItem('chapter');
        const season = localStorage.getItem('season');
        const src = `videos/${season}/${chapterPlayed}`;
        video.setAttribute('src', src);
        subtitle.innerHTML = `Reproduciendo ${chapter}`
    }
    
}


function changeVideo(season, chapter,index) {
    // Set in local storage
    localStorage.setItem('chapter', chapter);
    localStorage.setItem('season', season);
    localStorage.setItem('chapter-played', `mr_robot_chapter_${index}.webm`);

    // Set videos attributes
    const src  = `videos/${season}/mr_robot_chapter_${index}.webm`;
    video.setAttribute('src', src);
    subtitle.innerHTML = `Reproduciendo ${chapter}`;
    video.play();
}

function collapsedMenu() {
    const listOfVideos = document.querySelectorAll('.list-of-videos')
    listOfVideos.forEach((el, i) => {
        videos.mr_robot[i].height = el.offsetHeight;
        el.style.height = 0;
    })
}

function expandedMenu(target, index) {
    
    // Collapsed all list
    const listOfVideos = document.querySelectorAll('.list-of-videos');
    listOfVideos.forEach((el, i) => el.style.height = 0);

    const t = document.querySelector('#' + target);
    (t.offsetHeight === 0)
     ? t.style.height = videos.mr_robot[index].height + 'px'
     : t.style.height = 0
}

const renderChapters = (target, chapters) => chapters.forEach((el,i) => {
    const index = i + 1;
    
    // Create and append option
    const li = document.createElement('li');
    li.innerHTML = `<strong>Episodio ${index}:</strong> ${el}`;
    li.addEventListener('click', () => changeVideo('seasonone', el,index))
    document.querySelector('#' + target).appendChild(li);
})


const render = () => new Promise(function(resolve, reject) {
    videos.mr_robot.forEach((el, i) => {
        const season = i + 1;
        const div = document.createElement('div');
        const h5 = document.createElement('h5');
        const ul = document.createElement('ul');
    
        div.setAttribute('class', 'list-of-season');
        h5.innerText = 'Temporada ' + season;
        h5.addEventListener('click', () => expandedMenu(el.name, i))
        ul.setAttribute('class', 'list-of-videos');
        ul.setAttribute('id', el.name)
    
        div.appendChild(h5);
        div.appendChild(ul);
    
        menu.appendChild(div);
        renderChapters(el.name, el.chapters);
    })
    resolve();
})

render().then(collapsedMenu)