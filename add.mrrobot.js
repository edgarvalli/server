const mongo = require('./lib/mongo.client')('own_series');


const addSerie = () => new Promise(async(resolve, reject) => {
    const db = await mongo.collection('series');
    const data = {
        serie_name: 'Mr Robot',
        release_date: new Date('2015-06-24'),
        release: true,
        seasons: [
            {
                season: 1,
                image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                release: true,
                chapters: [
                    {
                        name: 'eps1.0_hellofriend.mov',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.1_ones-and-zer0es.mpeg',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.2_d3bug.mkv',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.3_da3m0ns.mp4',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.4_3xpl0its.wmv',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.5_br4ve-trave1er.asf',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.6_v1ew-s0urce.flv',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.7_wh1ter0se.m4v',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.8_m1rr0r1ng.qt',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    },
                    {
                        name: 'eps1.9_zer0-day.avi',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                        release: true
                    }
                ]
            },
            {
                season: 2,
                image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonone.png',
                release: true,
                chapters: [
                    {
                        name: 'eps2.0_unm4sk.tc',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: true
                    },
                    {
                        name: 'eps2.1_k3rnel-pan1c.ksd',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: true
                    },
                    {
                        name: 'eps2.2_init1.asec',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: true
                    },
                    {
                        name: 'eps2.3_logic-b0mb.hc',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: true
                    },
                    {
                        name: 'eps2.4_m4ster-s1ave.aes',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: true
                    },
                    {
                        name: 'eps2.5_h5ndshake.sme',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: false
                    },
                    {
                        name: 'eps2.6_succ3ss0r.p12',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: false
                    },
                    {
                        name: 'eps2.7_init_5.fve',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: false
                    },
                    {
                        name: 'eps2.8_h1dden-pr0cess.axx',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: false
                    },
                    {
                        name: 'eps2.9_pyth0n-pt1.p7z',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: false
                    },
                    {
                        name: 'eps2.9_pyth0n-pt2.p7z',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasontwo.png',
                        release: false
                    }
                ]
            },
            {
                season: 3,
                image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                release: false,
                chapters: [
                    {
                        name: 'eps3.0_power-saver-mode.h',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.1_undo.gz',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.2_legacy.so',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.3_m3tadata.par2',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.4_runtime-err0r.r00',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.5_kill-process.inc',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.6_fredrick+tanya.chk',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.7_dont-delete-me.ko',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'eps3.8_stage3.torrent',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    },
                    {
                        name: 'shutdown -r',
                        image: 'https://ev-server.ddns.net/series/images/mr-robot/seasonthree.png',
                        release: false
                    }
                ]
            }
        ]
    }

    await db.insertOne(data).catch(error => reject(error)).then(() => resolve('Success'))
})

addSerie()
.then(msg => console.log(msg))
.catch(error => console.log(error))