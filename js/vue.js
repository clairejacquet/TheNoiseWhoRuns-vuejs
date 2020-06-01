var about = new Vue({
  el: '#about',
  data() {
    return {
      title: 'TNWR',
      items: [
        'In the beginning there was Ian. Then there was O bruit qui court, which is a nice enough restaurant, and quickly there was a direct translation - The Noise Who Runs. Then there was all the songs for a debut The Noise Who Runs album, swiftly followed by a lot more songs, more than enough for a second The Noise Who Runs Album. Then there was an unfathomable plan to pay 200€ a month to release all those songs individually, with the spurious logic that if you make an album it\'s kind of out of date and you are writing different and more interesting things when you have to promote it. This terrible thing an album causes an artist would obviously be remedied by taking 26 existing songs and releasing individually, once a month, for just over a two-year period.',
        'By this point, the parting of the ways across the Atlantic, there was Felipe with his guitar, and even, before Felipe, there was Gérald with his bass. And just in time for Christmas, there was Julien. And Julien came with his drumsticks and technology and the album began to be finished. And then there was Coronavirus, although everyone seems to have opted for the "COVID-19" moniker, desperate, since they are all experts enough and that they are all still "bored of experts" anyway, to demonstrate their understanding and awareness of all things in using numbers in a name to sound scientifically informed.',
        'And then there was optimism in the initially surreal "last person on earth AND it\'s a fucking Sunday" feeling descended. Like World War One (and therefore WWII by a knock-on default really) catalysed greater equality of rights and programmes of social welfare, the global shutdown in the wake of Coronavirus would shift the window of opportunity to a wider view, more panoramic, looking forward several generations, dozens of lifetimes, and repurpose the present industries and workforces to employment specifically designed to move to a green economy and tackle and arrest the irreversible climate change that, if, as will happen, the governments of the world don\'t demand this with immediate effect, will shortly threaten every single person on the planet - it\'s just a few short years of doing nothing away.',
        'And so there was So It Goes. And then were was a first EP planned. And songs were written or resurrected, recorded, sent back and forth via WeTransfer. And during this time, a second EP was planned as the initial surrealism of confinement became weirdly existential as you contemplated the absurdity of billions of people all being at home, more or less alone. And songs were written or resurrected, recorded, sent back and forth via WeTransfer, and here we are. This is the first release by The Noise Who Runs, and the first of three, well, let\'s call them, The Coronaviral EPs. Yes, not so very long ago, upon completion of EP1 - The First of Two Sides of a Double-headed Coin - a third EP was planned. Three are good. You can\'t do things without triangles. And three is one of the sacred magic numbers. These are 1, 3, 7, 10 and 12. Personally, I like the number 82 best of all.'
      ],
      gallery_images: [
        {
          img: 'img/pictures/newroxy01.jpg'
        },
        {
          img: 'img/pictures/img4.jpg'
        },
        {
          img: 'img/pictures/newroxy03.jpg'
        },
        {
          img: 'img/pictures/newroxy04.jpg'
        },
        {
          img: 'img/pictures/newroxy09.jpg'
        },
        {
          img: 'img/pictures/newroxy06.jpg'
        },
        {
          img: 'img/pictures/img_8.jpg'
        },
        {
          img: 'img/pictures/newroxy07.jpg'
        },
        {
          img: 'img/pictures/newroxy08.jpg'
        },
        {
          img: 'img/pictures/img1.jpg'
        },
        {
          img: 'img/pictures/img2.jpg'
        },
        {
          img: 'img/pictures/img3.jpg'
        },
        {
          img: 'img/pictures/newroxy02.jpg'
        },
        {
          img: 'img/pictures/img5.jpg'
        },
        {
          img: 'img/pictures/img6.jpg'
        },
        {
          img: 'img/pictures/newroxy05.jpg'
        },
        {
          img: 'img/pictures/img7.jpg'
        },
        {
          img: 'img/pictures/img9.jpg'
        }
      ]
    }
  }
});

var promo = new Vue({
  el: '#promo',
  data() {
    return {
      title: 'The First Of Two Sides Of A Double-headed Coin',
      text: 'New EP available!' ,
      text2: 'Sign up to listen to full EP' ,
      texts: [
        'New EP available!' ,
        'Sign up to listen to full EP'
      ],
      button: 'Download',
      img: './img/ep1.jpg',
      url: '/'
    }
  }
});

var sideProjects = new Vue({
  el: '#side-projects',
  data() {
    return {
      isHidden: false,
      modals: [
        {
          id: 1,
          title: 'IAN PICKERING - LEFT HANDED TENDENCIES, 2018',
          type: 'music / lyrics',
          embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=4231753379/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/',
          url: 'http://maucorecords1.bandcamp.com/album/left-handed-tendencies',
          lyrics: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ]
        },
        {
          id: 2,
          title: 'SNEAKER PIMPS BECOMING X',
          type: 'lyrics',
          youtube: 'https://www.youtube.com/embed/videoseries?list=OLAK5uy_lZp-cg_-iOWTsI6stPg_jkXzlBmikP2wo',
          lyrics: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ]
        },
        {
          id: 3,
          title: 'test',
          type: 'lyrics',
          youtube: 'https://www.youtube.com/embed/videoseries?list=OLAK5uy_lZp-cg_-iOWTsI6stPg_jkXzlBmikP2wo',
          lyrics: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ]
        }
      ],
      sideprojects: [
        {
          id: 1 ,
          name: 'IAN PICKERING - LEFT HANDED TENDENCIES, 2018',
          img: './img/sideprojects/sideproject_1.jpg',
          alt: 'IAN PICKERING LEFT HANDED TENDENCIES',
          link: 'sideprojects/1',
          modal: [
            {
              id: 1,
              title: 'IAN PICKERING - LEFT HANDED TENDENCIES, 2018',
              type: 'music / lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=4231753379/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/',
              url: 'http://maucorecords1.bandcamp.com/album/left-handed-tendencies',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 7 ,
          name: 'TRANSPORTER ALL THESE LINES MAKE NOISES',
          img: './img/sideprojects/sideproject_2.jpg',
          alt: 'TRANSPORTER ALL THESE LINES MAKE NOISES',
          link: 'sideprojects/',
          modal: [
            {
              id: '2',
              title: 'TRANSPORTER ALL THESE LINES MAKE NOISES',
              type: 'music / lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=2738354507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
              url: 'http://ianpickering.bandcamp.com/album/all-these-lines-make-noises',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 2 ,
          name: 'SNEAKER PIMPS - BECOMING X, 1996',
          img: './img/sideprojects/sideproject_7.jpg',
          alt: 'SNEAKER PIMPS BECOMING X',
          link: 'sideprojects/2',
          modal: [
            {
              id: '10',
              title: 'SNEAKER PIMPS BECOMING X',
              type: 'lyrics',
              youtube: 'https://www.youtube.com/embed/videoseries?list=OLAK5uy_lZp-cg_-iOWTsI6stPg_jkXzlBmikP2wo',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 3 ,
          name: 'SNEAKER PIMPS - SPLINTER, 1999',
          img: './img/sideprojects/sideproject_6.jpg',
          alt: 'SNEAKER PIMPS SPLINTER',
          link: 'sideprojects/3',
          modal: [
            {
              id: '9',
              title: 'SNEAKER PIMPS, SPLINTER',
              type: 'music / lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=4231753379/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/',
              url: 'http://maucorecords1.bandcamp.com/album/left-handed-tendencies',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 4 ,
          name: 'HORRORFALL - FROM THE ALBUM L.E.D., 2013',
          img: './img/sideprojects/sideproject_5.jpg',
          alt: 'HORRORFALL - FROM THE ALBUM L.E.D.',
          link: 'sideprojects/',
          modal: [
            {
              id: '8',
              title: 'Panic is like a light, HORRORFALL (FROM THE ALBUM L.E.D.)',
              type: 'lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=3553781713/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=1062265859/transparent=true/',
              url: 'http://confusioninc.bandcamp.com/album/l-e-d-ep-expanded-edition',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 5 ,
          name: 'VALERIE RENAY, FROM THE ALBUM ‘YOUR OWN SHADOW’',
          img: './img/sideprojects/sideproject_4.jpg',
          alt: 'VALERIE RENAY (FROM THE ALBUM ‘YOUR OWN SHADOW’)',
          link: 'sideprojects/',
          modal: [
            {
              id: '3',
              title: 'VALERIE RENAY (FROM THE ALBUM ‘YOUR OWN SHADOW’)',
              type: 'Lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=747803977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/track=2235138278/transparent=true/',
              url: 'http://valerierenay.bandcamp.com/album/your-own-shadow',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 6 ,
          name: 'SNEAKER PIMPS - BLOODSPORT, 2002',
          img: './img/sideprojects/sideproject_3.jpg',
          alt: 'SNEAKER PIMPS - BLOODSPORT',
          link: 'sideprojects/',
          modal: [
            {
              id: '7',
              title: 'SNEAKER PIMPS BLOODSPORT',
              type: 'music / lyrics',
              embed_link: 'https://www.youtube.com/embed/5xNQWhy-2aA',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 8,
          name: 'FRONT LINE ASSEMBLY – FROM THE ALBUM ‘ECHOES’',
          img: './img/sideprojects/sideproject_8.jpg',
          alt: 'FRONT LINE ASSEMBLY – FROM THE ALBUM ‘ECHOES’',
          link: 'sideprojects/',
          modal: [
            {
              id: 9,
              title: 'FRONT LINE ASSEMBLY – FROM THE ALBUM ‘ECHOES’ ',
              type: 'lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=836871406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
              url: 'http://frontlineassembly.bandcamp.com/album/echoes',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        },
        {
          id: 9,
          name: 'FRONT LINE ASSEMBLY – FROM THE ALBUM ‘WAKE UP THE COMA’',
          img: './img/sideprojects/sideproject_9.jpg',
          alt: 'FRONT LINE ASSEMBLY – FROM THE ALBUM ‘WAKE UP THE COMA’',
          link: 'sideprojects/',
          modal: [
            {
              id: '5',
              title: 'FRONT LINE ASSEMBLY – FROM THE ALBUM ‘WAKE UP THE COMA’',
              type: 'lyrics',
              embed_link: 'https://bandcamp.com/EmbeddedPlayer/album=1415513805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
              url: 'http://frontlineassembly.bandcamp.com/album/wake-up-the-coma',
              lyrics: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ]
            }
          ]
        }
      ]
    }
  }
});



var header = new Vue({
  el: 'header',
  data() {
    return {
      isHidden: false,
      scrollPosition: null,
      title: 'The Noise who Runs',
      nav_links: [
        {
          name: 'and here we are',
          link: 'index.html#about'
        },
        {
          name: 'E.P.',
          link: 'index.html#main_signup'
        },
        {
          name: 'side projects',
          link: 'index.html#side-projects'
        }
      ]
    }
  }
})


var footer = new Vue({
  el: '#footer',
  data() {
    return {
      title: 'TNWR',
      contacts: [
        {
          icon: './img/social/bandcamp.svg',
          link: 'https://thenoisewhoruns.bandcamp.com/'
        },
        {
          icon: './img/social/facebook.svg',
          link: 'https://www.facebook.com/thenoisewhoruns'
        },
        {
          icon: './img/social/instagram.svg',
          link: 'https://www.instagram.com/thenoisewhoruns'
        },
        {
          icon: './img/social/twitter.svg',
          link: 'https://www.twitter.com/thenoisewhoruns'
        },
        {
          icon: './img/social/youtube.svg',
          link: 'https://youtube.com/'
        },
        {
          icon: './img/social/vimeo.svg',
          link: 'https://vimeo.com/'
        }
      ]
    }
  }
})

console.log('vue.js is linked');
