import podcastService from '@/services/podcastService.js'

export const state = () => ({
  defaultPodcasts: [
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 849115571,
      collectionId: 404893471,
      trackId: 404893471,
      artistName: 'WIRED UK',
      collectionName: 'The WIRED Podcast',
      trackName: 'The WIRED Podcast',
      collectionCensoredName: 'The WIRED Podcast',
      trackCensoredName: 'The WIRED Podcast',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/wired-uk/849115571?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-podcast/id404893471?uo=4',
      feedUrl: 'https://www.wired.co.uk/rss/podcast/wired-podcast',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-podcast/id404893471?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/51/f3/8e/51f38e79-f8bc-5a38-0bdc-0d27ff3a471a/mza_5998622837811600915.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/51/f3/8e/51f38e79-f8bc-5a38-0bdc-0d27ff3a471a/mza_5998622837811600915.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/51/f3/8e/51f38e79-f8bc-5a38-0bdc-0d27ff3a471a/mza_5998622837811600915.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T10:34:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 50,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Technology',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/51/f3/8e/51f38e79-f8bc-5a38-0bdc-0d27ff3a471a/mza_5998622837811600915.jpg/600x600bb.jpg',
      genreIds: ['1318', '26', '1489', '1528'],
      genres: ['Technology', 'Podcasts', 'News', 'Tech News']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 275193889,
      collectionId: 1143630029,
      trackId: 1143630029,
      artistName: 'WIRED',
      collectionName: 'WIRED Tech in Two',
      trackName: 'WIRED Tech in Two',
      collectionCensoredName: 'WIRED Tech in Two',
      trackCensoredName: 'WIRED Tech in Two',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/wired/275193889?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-tech-in-two/id1143630029?uo=4',
      feedUrl:
        'http://api.spokenlayer.com/feed/channel/v1-wired-homepage-ext/3c9929b72538c12bd92ac6762f8d798b9d4e8cdca7692ea74f466061d01816cb',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-tech-in-two/id1143630029?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c0/52/90/c052902c-8ec2-6982-a850-e6e6969f348e/mza_1112698099105268884.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c0/52/90/c052902c-8ec2-6982-a850-e6e6969f348e/mza_1112698099105268884.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c0/52/90/c052902c-8ec2-6982-a850-e6e6969f348e/mza_1112698099105268884.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T20:30:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 30,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Tech News',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c0/52/90/c052902c-8ec2-6982-a850-e6e6969f348e/mza_1112698099105268884.jpg/600x600bb.jpg',
      genreIds: ['1528', '26', '1489', '1318'],
      genres: ['Tech News', 'Podcasts', 'News', 'Technology']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 1470483378,
      collectionId: 852332047,
      trackId: 852332047,
      artistName: 'MeatEater',
      collectionName: 'Wired To Hunt Podcast',
      trackName: 'Wired To Hunt Podcast',
      collectionCensoredName: 'Wired To Hunt Podcast',
      trackCensoredName: 'Wired To Hunt Podcast',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/meateater/1470483378?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-to-hunt-podcast/id852332047?uo=4',
      feedUrl:
        'https://www.omnycontent.com/d/playlist/aaea4e69-af51-495e-afc9-a9760146922b/c1334032-ed67-4073-a19c-ab8101489cf3/0166012b-47b3-47a0-b0fc-ab8101489cfc/podcast.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-to-hunt-podcast/id852332047?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0e/0b/68/0e0b68dc-c0d0-4d8d-30ba-85696eb5b132/mza_4492030833960602136.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0e/0b/68/0e0b68dc-c0d0-4d8d-30ba-85696eb5b132/mza_4492030833960602136.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0e/0b/68/0e0b68dc-c0d0-4d8d-30ba-85696eb5b132/mza_4492030833960602136.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-14T14:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 300,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Wilderness',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0e/0b/68/0e0b68dc-c0d0-4d8d-30ba-85696eb5b132/mza_4492030833960602136.jpg/600x600bb.jpg',
      genreIds: ['1559', '26', '1545'],
      genres: ['Wilderness', 'Podcasts', 'Sports']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 275193889,
      collectionId: 1143631784,
      trackId: 1143631784,
      artistName: 'WIRED',
      collectionName: 'WIRED Science: Space, Health, Biotech, and More',
      trackName: 'WIRED Science: Space, Health, Biotech, and More',
      collectionCensoredName: 'WIRED Science: Space, Health, Biotech, and More',
      trackCensoredName: 'WIRED Science: Space, Health, Biotech, and More',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/wired/275193889?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-science-space-health-biotech-and-more/id1143631784?uo=4',
      feedUrl:
        'http://api.spokenlayer.com/feed/channel/v1-wired-science-ext/3c9929b72538c12bd92ac6762f8d798b9d4e8cdca7692ea74f466061d01816cb',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-science-space-health-biotech-and-more/id1143631784?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/b6/e8/78/b6e878c1-5b22-a79f-f2d9-d30487e48d0c/mza_2286423118044051363.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/b6/e8/78/b6e878c1-5b22-a79f-f2d9-d30487e48d0c/mza_2286423118044051363.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/b6/e8/78/b6e878c1-5b22-a79f-f2d9-d30487e48d0c/mza_2286423118044051363.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T10:12:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 30,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Science',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts124/v4/b6/e8/78/b6e878c1-5b22-a79f-f2d9-d30487e48d0c/mza_2286423118044051363.jpg/600x600bb.jpg',
      genreIds: ['1533', '26', '1318'],
      genres: ['Science', 'Podcasts', 'Technology']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1102055778,
      trackId: 1102055778,
      artistName: 'Debbie Reber',
      collectionName: 'TILT Parenting: Raising Differently Wired Kids',
      trackName: 'TILT Parenting: Raising Differently Wired Kids',
      collectionCensoredName: 'TILT Parenting: Raising Differently Wired Kids',
      trackCensoredName: 'TILT Parenting: Raising Differently Wired Kids',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/tilt-parenting-raising-differently-wired-kids/id1102055778?uo=4',
      feedUrl:
        'http://feeds.soundcloud.com/users/soundcloud:users:206102082/sounds.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/tilt-parenting-raising-differently-wired-kids/id1102055778?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/e3/28/78e32837-8621-d985-98fc-b58f8dc680b5/mza_29974903575009483.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/e3/28/78e32837-8621-d985-98fc-b58f8dc680b5/mza_29974903575009483.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/e3/28/78e32837-8621-d985-98fc-b58f8dc680b5/mza_29974903575009483.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-10T22:09:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 211,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Kids & Family',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/e3/28/78e32837-8621-d985-98fc-b58f8dc680b5/mza_29974903575009483.jpg/600x600bb.jpg',
      genreIds: ['1305', '26'],
      genres: ['Kids & Family', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 275193889,
      collectionId: 1143631798,
      trackId: 1143631798,
      artistName: 'WIRED',
      collectionName:
        'WIRED Business: Startups, Cryptocurrency, Tech Culture, and More',
      trackName:
        'WIRED Business: Startups, Cryptocurrency, Tech Culture, and More',
      collectionCensoredName:
        'WIRED Business: Startups, Cryptocurrency, Tech Culture, and More',
      trackCensoredName:
        'WIRED Business: Startups, Cryptocurrency, Tech Culture, and More',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/wired/275193889?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-business-startups-cryptocurrency-tech-culture/id1143631798?uo=4',
      feedUrl:
        'http://api.spokenlayer.com/feed/channel/v1-wired-business-ext/3c9929b72538c12bd92ac6762f8d798b9d4e8cdca7692ea74f466061d01816cb',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-business-startups-cryptocurrency-tech-culture/id1143631798?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/37/db/dc/37dbdc9a-8733-eeee-ebd0-396733234202/mza_4913867908666091550.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/37/db/dc/37dbdc9a-8733-eeee-ebd0-396733234202/mza_4913867908666091550.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/37/db/dc/37dbdc9a-8733-eeee-ebd0-396733234202/mza_4913867908666091550.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T10:10:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 30,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Business News',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/37/db/dc/37dbdc9a-8733-eeee-ebd0-396733234202/mza_4913867908666091550.jpg/600x600bb.jpg',
      genreIds: ['1490', '26', '1489', '1528'],
      genres: ['Business News', 'Podcasts', 'News', 'Tech News']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 252822881,
      trackId: 252822881,
      artistName: 'Angelea Kelly Untacked',
      collectionName:
        'UNTACKED | Horses & Beyond For Wired Equestrians & Equine Enthusiasts',
      trackName:
        'UNTACKED | Horses & Beyond For Wired Equestrians & Equine Enthusiasts',
      collectionCensoredName:
        'UNTACKED | Horses & Beyond For Wired Equestrians & Equine Enthusiasts',
      trackCensoredName:
        'UNTACKED | Horses & Beyond For Wired Equestrians & Equine Enthusiasts',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/untacked-horses-beyond-for-wired-equestrians-equine/id252822881?uo=4',
      feedUrl: 'http://untacked.com/episodes/untacked.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/untacked-horses-beyond-for-wired-equestrians-equine/id252822881?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/44/f1/08/44f1085c-e6a8-a2e1-05af-0b2553ec0b3e/mza_1864924755365496211.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/44/f1/08/44f1085c-e6a8-a2e1-05af-0b2553ec0b3e/mza_1864924755365496211.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/44/f1/08/44f1085c-e6a8-a2e1-05af-0b2553ec0b3e/mza_1864924755365496211.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-07-23T15:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 118,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Wilderness',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/44/f1/08/44f1085c-e6a8-a2e1-05af-0b2553ec0b3e/mza_1864924755365496211.jpg/600x600bb.jpg',
      genreIds: ['1559', '26', '1545'],
      genres: ['Wilderness', 'Podcasts', 'Sports']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 380095926,
      trackId: 380095926,
      artistName: 'John Wilkerson',
      collectionName: 'The Wired Homeschool',
      trackName: 'The Wired Homeschool',
      collectionCensoredName: 'The Wired Homeschool',
      trackCensoredName: 'The Wired Homeschool',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-homeschool/id380095926?uo=4',
      feedUrl: 'https://thewiredhomeschool.com/feed/podcast',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-homeschool/id380095926?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a4/92/bc/a492bc22-82e2-b39b-a6b6-7482c8a39852/mza_401241045306349717.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a4/92/bc/a492bc22-82e2-b39b-a6b6-7482c8a39852/mza_401241045306349717.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a4/92/bc/a492bc22-82e2-b39b-a6b6-7482c8a39852/mza_401241045306349717.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-04-17T10:38:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 52,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Education for Kids',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a4/92/bc/a492bc22-82e2-b39b-a6b6-7482c8a39852/mza_401241045306349717.jpg/600x600bb.jpg',
      genreIds: ['1519', '26', '1305', '1304', '1499'],
      genres: [
        'Education for Kids',
        'Podcasts',
        'Kids & Family',
        'Education',
        'How To'
      ]
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 275193889,
      collectionId: 1211754233,
      trackId: 1211754233,
      artistName: 'WIRED',
      collectionName: 'WIRED Security: News, Advice, and More',
      trackName: 'WIRED Security: News, Advice, and More',
      collectionCensoredName: 'WIRED Security: News, Advice, and More',
      trackCensoredName: 'WIRED Security: News, Advice, and More',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/wired/275193889?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-security-news-advice-and-more/id1211754233?uo=4',
      feedUrl:
        'http://api.spokenlayer.com/feed/channel/v1-wired-security-ext/3c9929b72538c12bd92ac6762f8d798b9d4e8cdca7692ea74f466061d01816cb',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-security-news-advice-and-more/id1211754233?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/22/59/99/2259998e-951f-ee6c-38cd-e1dd8f5e6dad/mza_3689869930602129303.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/22/59/99/2259998e-951f-ee6c-38cd-e1dd8f5e6dad/mza_3689869930602129303.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/22/59/99/2259998e-951f-ee6c-38cd-e1dd8f5e6dad/mza_3689869930602129303.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T10:20:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 30,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Technology',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/22/59/99/2259998e-951f-ee6c-38cd-e1dd8f5e6dad/mza_3689869930602129303.jpg/600x600bb.jpg',
      genreIds: ['1318', '26', '1489', '1528'],
      genres: ['Technology', 'Podcasts', 'News', 'Tech News']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1391881620,
      trackId: 1391881620,
      artistName: 'Ksenia Avdulova',
      collectionName:
        'Woke & Wired - Expanded Consciousness and Entrepreneurship',
      trackName: 'Woke & Wired - Expanded Consciousness and Entrepreneurship',
      collectionCensoredName:
        'Woke & Wired - Expanded Consciousness and Entrepreneurship',
      trackCensoredName:
        'Woke & Wired - Expanded Consciousness and Entrepreneurship',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/woke-wired-expanded-consciousness-and-entrepreneurship/id1391881620?uo=4',
      feedUrl: 'https://wokeandwired.libsyn.com/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/woke-wired-expanded-consciousness-and-entrepreneurship/id1391881620?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a3/9e/97/a39e97b5-cbad-3d36-a414-3c2058ac27db/mza_5357940628165308817.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a3/9e/97/a39e97b5-cbad-3d36-a414-3c2058ac27db/mza_5357940628165308817.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a3/9e/97/a39e97b5-cbad-3d36-a414-3c2058ac27db/mza_5357940628165308817.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-14T20:30:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 100,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Marketing',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a3/9e/97/a39e97b5-cbad-3d36-a414-3c2058ac27db/mza_5357940628165308817.jpg/600x600bb.jpg',
      genreIds: ['1492', '26', '1321', '1314', '1444'],
      genres: [
        'Marketing',
        'Podcasts',
        'Business',
        'Religion & Spirituality',
        'Spirituality'
      ]
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 974270220,
      trackId: 974270220,
      artistName: 'Kelly Croy: Speaker, Author, Artist, Educator',
      collectionName: 'The Wired Educator Podcast',
      trackName: 'The Wired Educator Podcast',
      collectionCensoredName: 'The Wired Educator Podcast',
      trackCensoredName: 'The Wired Educator Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-educator-podcast/id974270220?uo=4',
      feedUrl: 'http://wirededucator.libsyn.com/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-educator-podcast/id974270220?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0c/ef/54/0cef5483-601a-75fb-0220-a3c3fefffbe2/mza_1539081056559329701.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0c/ef/54/0cef5483-601a-75fb-0220-a3c3fefffbe2/mza_1539081056559329701.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0c/ef/54/0cef5483-601a-75fb-0220-a3c3fefffbe2/mza_1539081056559329701.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T02:21:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 170,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Education',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/0c/ef/54/0cef5483-601a-75fb-0220-a3c3fefffbe2/mza_1539081056559329701.jpg/600x600bb.jpg',
      genreIds: ['1304', '26', '1321'],
      genres: ['Education', 'Podcasts', 'Business']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1485255815,
      trackId: 1485255815,
      artistName: 'Holly Blanc Moses',
      collectionName: 'The Wired Differently Podcast',
      trackName: 'The Wired Differently Podcast',
      collectionCensoredName: 'The Wired Differently Podcast',
      trackCensoredName: 'The Wired Differently Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-differently-podcast/id1485255815?uo=4',
      feedUrl: 'https://wireddifferently.libsyn.com/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-differently-podcast/id1485255815?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/06/08/4c/06084c61-ec93-36a9-6bce-fd29993842e1/mza_57515474457006522.png/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/06/08/4c/06084c61-ec93-36a9-6bce-fd29993842e1/mza_57515474457006522.png/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/06/08/4c/06084c61-ec93-36a9-6bce-fd29993842e1/mza_57515474457006522.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-13T12:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 21,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Parenting',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/06/08/4c/06084c61-ec93-36a9-6bce-fd29993842e1/mza_57515474457006522.png/600x600bb.jpg',
      genreIds: ['1521', '26', '1305', '1304'],
      genres: ['Parenting', 'Podcasts', 'Kids & Family', 'Education']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 276513766,
      trackId: 276513766,
      artistName: 'Angelea Kelly',
      collectionName: 'Reining Horse: Reining TV for Wired Equestrians',
      trackName: 'Reining Horse: Reining TV for Wired Equestrians',
      collectionCensoredName: 'Reining Horse: Reining TV for Wired Equestrians',
      trackCensoredName: 'Reining Horse: Reining TV for Wired Equestrians',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/reining-horse-reining-tv-for-wired-equestrians/id276513766?uo=4',
      feedUrl: 'http://www.horsegirltv.com/itunes/reiningtv.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/reining-horse-reining-tv-for-wired-equestrians/id276513766?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/84/0a/f1/840af167-23de-5ba2-8414-daf778ca55b3/mza_8415781397756948475.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/84/0a/f1/840af167-23de-5ba2-8414-daf778ca55b3/mza_8415781397756948475.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/84/0a/f1/840af167-23de-5ba2-8414-daf778ca55b3/mza_8415781397756948475.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2015-07-08T15:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 64,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Wilderness',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/84/0a/f1/840af167-23de-5ba2-8414-daf778ca55b3/mza_8415781397756948475.jpg/600x600bb.jpg',
      genreIds: ['1559', '26', '1545'],
      genres: ['Wilderness', 'Podcasts', 'Sports']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1208225366,
      trackId: 1208225366,
      artistName: 'Detroit Pistons',
      collectionName: 'Wired: Pistons Podcast',
      trackName: 'Wired: Pistons Podcast',
      collectionCensoredName: 'Wired: Pistons Podcast',
      trackCensoredName: 'Wired: Pistons Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-pistons-podcast/id1208225366?uo=4',
      feedUrl:
        'http://feeds.soundcloud.com/users/soundcloud:users:287671812/sounds.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-pistons-podcast/id1208225366?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/20/1f/06/201f06fc-f406-f703-24cb-2bb532e1b399/mza_831798820021141192.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/20/1f/06/201f06fc-f406-f703-24cb-2bb532e1b399/mza_831798820021141192.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/20/1f/06/201f06fc-f406-f703-24cb-2bb532e1b399/mza_831798820021141192.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-01T15:09:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 53,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Sports',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/20/1f/06/201f06fc-f406-f703-24cb-2bb532e1b399/mza_831798820021141192.jpg/600x600bb.jpg',
      genreIds: ['1545', '26'],
      genres: ['Sports', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 280343742,
      trackId: 280343742,
      artistName: 'Horse Girl TV',
      collectionName:
        'Horse Sports TV: Horse Sports For Wired Equine Enthusiasts',
      trackName: 'Horse Sports TV: Horse Sports For Wired Equine Enthusiasts',
      collectionCensoredName:
        'Horse Sports TV: Horse Sports For Wired Equine Enthusiasts',
      trackCensoredName:
        'Horse Sports TV: Horse Sports For Wired Equine Enthusiasts',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/horse-sports-tv-horse-sports-for-wired-equine-enthusiasts/id280343742?uo=4',
      feedUrl: 'http://untacked.com/podcast/horsesport.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/horse-sports-tv-horse-sports-for-wired-equine-enthusiasts/id280343742?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/fa/e0/40/fae0402a-10fd-7f6d-9fad-82b861ee0e5b/mza_1364695845072618711.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/fa/e0/40/fae0402a-10fd-7f6d-9fad-82b861ee0e5b/mza_1364695845072618711.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/fa/e0/40/fae0402a-10fd-7f6d-9fad-82b861ee0e5b/mza_1364695845072618711.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-07-23T15:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 40,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Wilderness',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/fa/e0/40/fae0402a-10fd-7f6d-9fad-82b861ee0e5b/mza_1364695845072618711.jpg/600x600bb.jpg',
      genreIds: ['1559', '26', '1545'],
      genres: ['Wilderness', 'Podcasts', 'Sports']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1073920034,
      trackId: 1073920034,
      artistName: 'Ian McLaughlin & Bo Allen',
      collectionName: 'Wired to be Weird',
      trackName: 'Wired to be Weird',
      collectionCensoredName: 'Wired to be Weird',
      trackCensoredName: 'Wired to be Weird',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-to-be-weird/id1073920034?uo=4',
      feedUrl: 'http://anthropoid.squarespace.com/podcast?format=rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-to-be-weird/id1073920034?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a0/f6/8b/a0f68b53-2731-58e8-f788-1cc0e49fb1b8/mza_1063549398207928038.png/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a0/f6/8b/a0f68b53-2731-58e8-f788-1cc0e49fb1b8/mza_1063549398207928038.png/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a0/f6/8b/a0f68b53-2731-58e8-f788-1cc0e49fb1b8/mza_1063549398207928038.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-05-09T16:42:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 27,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Natural Sciences',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/a0/f6/8b/a0f68b53-2731-58e8-f788-1cc0e49fb1b8/mza_1063549398207928038.png/600x600bb.jpg',
      genreIds: ['1534', '26', '1533', '1512', '1518'],
      genres: [
        'Natural Sciences',
        'Podcasts',
        'Science',
        'Health & Fitness',
        'Medicine'
      ]
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1485144993,
      trackId: 1485144993,
      artistName: 'Fernanda Lind',
      collectionName: 'The Wired to Win Podcast',
      trackName: 'The Wired to Win Podcast',
      collectionCensoredName: 'The Wired to Win Podcast',
      trackCensoredName: 'The Wired to Win Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-to-win-podcast/id1485144993?uo=4',
      feedUrl: 'http://wiredtowin.libsyn.com/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-to-win-podcast/id1485144993?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/26/9f/4c/269f4cba-9bd4-e3c3-d98f-3b71c1fc4de2/mza_10558633168495157237.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/26/9f/4c/269f4cba-9bd4-e3c3-d98f-3b71c1fc4de2/mza_10558633168495157237.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/26/9f/4c/269f4cba-9bd4-e3c3-d98f-3b71c1fc4de2/mza_10558633168495157237.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-07T16:28:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      trackCount: 23,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Self-Improvement',
      contentAdvisoryRating: 'Explicit',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/26/9f/4c/269f4cba-9bd4-e3c3-d98f-3b71c1fc4de2/mza_10558633168495157237.jpg/600x600bb.jpg',
      genreIds: ['1500', '26', '1304', '1321', '1493'],
      genres: [
        'Self-Improvement',
        'Podcasts',
        'Education',
        'Business',
        'Entrepreneurship'
      ]
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 254663240,
      trackId: 254663240,
      artistName: 'WiredParish.com. Tune In. Turn On. Get Wired.',
      collectionName: 'Wired Parish Cafe (The Free Cast)',
      trackName: 'Wired Parish Cafe (The Free Cast)',
      collectionCensoredName: 'Wired Parish Cafe (The Free Cast)',
      trackCensoredName: 'Wired Parish Cafe (The Free Cast)',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-parish-cafe-the-free-cast/id254663240?uo=4',
      feedUrl: 'http://feeds.feedburner.com/WPCafe',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-parish-cafe-the-free-cast/id254663240?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2007-09-10T20:29:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 10,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Christianity',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/600x600bb.jpg',
      genreIds: ['1439', '26', '1314'],
      genres: ['Christianity', 'Podcasts', 'Religion & Spirituality']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1000456953,
      trackId: 1000456953,
      artistName: 'WIRED',
      collectionName: "WIRED's Webmonkey Podcast",
      trackName: "WIRED's Webmonkey Podcast",
      collectionCensoredName: "WIRED's Webmonkey Podcast",
      trackCensoredName: "WIRED's Webmonkey Podcast",
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wireds-webmonkey-podcast/id1000456953?uo=4',
      feedUrl: 'https://www.wired.com/feed/podcast/webmonkey/',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wireds-webmonkey-podcast/id1000456953?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/5e/a9/ba/5ea9ba3f-a828-6874-e77a-af53b214421d/mza_6549452007039505637.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/5e/a9/ba/5ea9ba3f-a828-6874-e77a-af53b214421d/mza_6549452007039505637.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/5e/a9/ba/5ea9ba3f-a828-6874-e77a-af53b214421d/mza_6549452007039505637.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2015-09-24T18:25:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 8,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Technology',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/5e/a9/ba/5ea9ba3f-a828-6874-e77a-af53b214421d/mza_6549452007039505637.jpg/600x600bb.jpg',
      genreIds: ['1318', '26', '1489', '1528'],
      genres: ['Technology', 'Podcasts', 'News', 'Tech News']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 335306372,
      trackId: 335306372,
      artistName: 'Angelea Kelly',
      collectionName:
        'Horse Girl TV: Horses For Wired Equine Enthusiasts, HorseGirl Mail',
      trackName:
        'Horse Girl TV: Horses For Wired Equine Enthusiasts, HorseGirl Mail',
      collectionCensoredName:
        'Horse Girl TV: Horses For Wired Equine Enthusiasts, HorseGirl Mail',
      trackCensoredName:
        'Horse Girl TV: Horses For Wired Equine Enthusiasts, HorseGirl Mail',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/horse-girl-tv-horses-for-wired-equine-enthusiasts-horsegirl/id335306372?uo=4',
      feedUrl: 'http://www.horsegirltv.com/itunes/mail.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/horse-girl-tv-horses-for-wired-equine-enthusiasts-horsegirl/id335306372?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/42/df/7c/42df7c4c-a1a5-4832-c65f-13652de9f8c0/mza_8012650931621775564.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/42/df/7c/42df7c4c-a1a5-4832-c65f-13652de9f8c0/mza_8012650931621775564.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/42/df/7c/42df7c4c-a1a5-4832-c65f-13652de9f8c0/mza_8012650931621775564.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2011-02-01T17:03:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 18,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Wilderness',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/42/df/7c/42df7c4c-a1a5-4832-c65f-13652de9f8c0/mza_8012650931621775564.jpg/600x600bb.jpg',
      genreIds: ['1559', '26', '1545'],
      genres: ['Wilderness', 'Podcasts', 'Sports']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1400859058,
      trackId: 1400859058,
      artistName: 'Dr. Nisha Chellam',
      collectionName: 'Women Wired for Wellness hosted by Dr. Nisha Chellam',
      trackName: 'Women Wired for Wellness hosted by Dr. Nisha Chellam',
      collectionCensoredName:
        'Women Wired for Wellness hosted by Dr. Nisha Chellam',
      trackCensoredName: 'Women Wired for Wellness hosted by Dr. Nisha Chellam',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/women-wired-for-wellness-hosted-by-dr-nisha-chellam/id1400859058?uo=4',
      feedUrl: 'https://holisticicon.podbean.com/feed.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/women-wired-for-wellness-hosted-by-dr-nisha-chellam/id1400859058?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/b7/bb/f7/b7bbf7a2-e8f4-c9d3-4d44-a0f85f82bb64/mza_10476682318978433107.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/b7/bb/f7/b7bbf7a2-e8f4-c9d3-4d44-a0f85f82bb64/mza_10476682318978433107.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/b7/bb/f7/b7bbf7a2-e8f4-c9d3-4d44-a0f85f82bb64/mza_10476682318978433107.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-04-01T14:15:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 46,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Alternative Health',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/b7/bb/f7/b7bbf7a2-e8f4-c9d3-4d44-a0f85f82bb64/mza_10476682318978433107.jpg/600x600bb.jpg',
      genreIds: ['1513', '26', '1512', '1515'],
      genres: [
        'Alternative Health',
        'Podcasts',
        'Health & Fitness',
        'Nutrition'
      ]
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1474522404,
      trackId: 1474522404,
      artistName: 'The wired',
      collectionName: 'The wired',
      trackName: 'The wired',
      collectionCensoredName: 'The wired',
      trackCensoredName: 'The wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired/id1474522404?uo=4',
      feedUrl: 'https://anchor.fm/s/c8f80c0/podcast/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired/id1474522404?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/e9/78/60/e97860e6-7dfd-34ad-5d2b-a8a44c705627/mza_16074739482459812963.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/e9/78/60/e97860e6-7dfd-34ad-5d2b-a8a44c705627/mza_16074739482459812963.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/e9/78/60/e97860e6-7dfd-34ad-5d2b-a8a44c705627/mza_16074739482459812963.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-08-07T00:44:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 5,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Technology',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/e9/78/60/e97860e6-7dfd-34ad-5d2b-a8a44c705627/mza_16074739482459812963.jpg/600x600bb.jpg',
      genreIds: ['1318', '26'],
      genres: ['Technology', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1262924801,
      trackId: 1262924801,
      artistName: 'Robin Nicole Kindrick- The Inspiration Specialist',
      collectionName: "The I'm Wired To Inspire Podcast",
      trackName: "The I'm Wired To Inspire Podcast",
      collectionCensoredName: "The I'm Wired To Inspire Podcast",
      trackCensoredName: "The I'm Wired To Inspire Podcast",
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-im-wired-to-inspire-podcast/id1262924801?uo=4',
      feedUrl: 'https://imwiredtoinspire.podbean.com/feed.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-im-wired-to-inspire-podcast/id1262924801?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f4/8b/67/f48b678b-d63e-4847-8f71-e9aee1a5d9ca/mza_12057958324067468229.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f4/8b/67/f48b678b-d63e-4847-8f71-e9aee1a5d9ca/mza_12057958324067468229.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f4/8b/67/f48b678b-d63e-4847-8f71-e9aee1a5d9ca/mza_12057958324067468229.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-12T01:08:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 100,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Christianity',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f4/8b/67/f48b678b-d63e-4847-8f71-e9aee1a5d9ca/mza_12057958324067468229.jpg/600x600bb.jpg',
      genreIds: ['1439', '26', '1314'],
      genres: ['Christianity', 'Podcasts', 'Religion & Spirituality']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1051009398,
      trackId: 1051009398,
      artistName: 'Wolves Wired',
      collectionName: 'Wolves Wired',
      trackName: 'Wolves Wired',
      collectionCensoredName: 'Wolves Wired',
      trackCensoredName: 'Wolves Wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wolves-wired/id1051009398?uo=4',
      feedUrl: 'https://audioboom.com/channels/4346369.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wolves-wired/id1051009398?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c9/a5/98/c9a59806-e7c6-1def-7d95-10f0d5e26185/mza_6290726073039398651.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c9/a5/98/c9a59806-e7c6-1def-7d95-10f0d5e26185/mza_6290726073039398651.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c9/a5/98/c9a59806-e7c6-1def-7d95-10f0d5e26185/mza_6290726073039398651.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2015-12-03T16:11:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 11,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Sports',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/c9/a5/98/c9a59806-e7c6-1def-7d95-10f0d5e26185/mza_6290726073039398651.jpg/600x600bb.jpg',
      genreIds: ['1545', '26'],
      genres: ['Sports', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1384622175,
      trackId: 1384622175,
      artistName: 'Radio.com',
      collectionName: 'Wired This Way with Andrew Porter',
      trackName: 'Wired This Way with Andrew Porter',
      collectionCensoredName: 'Wired This Way with Andrew Porter',
      trackCensoredName: 'Wired This Way with Andrew Porter',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-this-way-with-andrew-porter/id1384622175?uo=4',
      feedUrl:
        'https://www.omnycontent.com/d/playlist/4b5f9d6d-9214-48cb-8455-a73200038129/bb6b3040-0c72-43d8-96da-a8e0011bb01c/564379d8-93f5-4cb3-866a-a8e0011c1110/podcast.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-this-way-with-andrew-porter/id1384622175?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/56/da/e1/56dae15d-ebd9-b377-2cc8-01272bba7bed/mza_1407555826134200127.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/56/da/e1/56dae15d-ebd9-b377-2cc8-01272bba7bed/mza_1407555826134200127.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/56/da/e1/56dae15d-ebd9-b377-2cc8-01272bba7bed/mza_1407555826134200127.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-08-07T11:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 13,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Sports',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/56/da/e1/56dae15d-ebd9-b377-2cc8-01272bba7bed/mza_1407555826134200127.jpg/600x600bb.jpg',
      genreIds: ['1545', '26'],
      genres: ['Sports', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1463873082,
      trackId: 1463873082,
      artistName: 'Central Wired',
      collectionName: 'Central Wired Podcast',
      trackName: 'Central Wired Podcast',
      collectionCensoredName: 'Central Wired Podcast',
      trackCensoredName: 'Central Wired Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/central-wired-podcast/id1463873082?uo=4',
      feedUrl: 'https://feed.podbean.com/centralwired/feed.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/central-wired-podcast/id1463873082?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/20/c0/16/20c0164d-6ee1-c272-8621-4e9622e73386/mza_3466038707461889309.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/20/c0/16/20c0164d-6ee1-c272-8621-4e9622e73386/mza_3466038707461889309.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/20/c0/16/20c0164d-6ee1-c272-8621-4e9622e73386/mza_3466038707461889309.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-12T20:36:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 55,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Christianity',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/20/c0/16/20c0164d-6ee1-c272-8621-4e9622e73386/mza_3466038707461889309.jpg/600x600bb.jpg',
      genreIds: ['1439', '26', '1314'],
      genres: ['Christianity', 'Podcasts', 'Religion & Spirituality']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 566108797,
      trackId: 566108797,
      artistName: 'Wired For Success TV',
      collectionName: 'Wired For Success TV',
      trackName: 'Wired For Success TV',
      collectionCensoredName: 'Wired For Success TV',
      trackCensoredName: 'Wired For Success TV',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-for-success-tv/id566108797?uo=4',
      feedUrl: 'http://wiredforsuccess.libsyn.com/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-for-success-tv/id566108797?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts6/v4/81/b7/a6/81b7a69a-dfa4-c78a-4d9f-b0209ed31149/mza_4712345574483173486.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts6/v4/81/b7/a6/81b7a69a-dfa4-c78a-4d9f-b0209ed31149/mza_4712345574483173486.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts6/v4/81/b7/a6/81b7a69a-dfa4-c78a-4d9f-b0209ed31149/mza_4712345574483173486.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2014-11-18T14:32:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 100,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Education',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts6/v4/81/b7/a6/81b7a69a-dfa4-c78a-4d9f-b0209ed31149/mza_4712345574483173486.jpg/600x600bb.jpg',
      genreIds: ['1304', '26', '1512'],
      genres: ['Education', 'Podcasts', 'Health & Fitness']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1497780166,
      trackId: 1497780166,
      artistName: 'Max Derrat, John Tucker',
      collectionName: 'The Differently Wired Show',
      trackName: 'The Differently Wired Show',
      collectionCensoredName: 'The Differently Wired Show',
      trackCensoredName: 'The Differently Wired Show',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-differently-wired-show/id1497780166?uo=4',
      feedUrl: 'https://feeds.transistor.fm/differently-wired-public-feed',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-differently-wired-show/id1497780166?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/82/fc/c7/82fcc7dd-f82c-9f27-ac20-38d6d050c7f6/mza_12204233877108192970.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/82/fc/c7/82fcc7dd-f82c-9f27-ac20-38d6d050c7f6/mza_12204233877108192970.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/82/fc/c7/82fcc7dd-f82c-9f27-ac20-38d6d050c7f6/mza_12204233877108192970.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-14T15:30:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 16,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Mental Health',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/82/fc/c7/82fcc7dd-f82c-9f27-ac20-38d6d050c7f6/mza_12204233877108192970.jpg/600x600bb.jpg',
      genreIds: ['1517', '26', '1512', '1304', '1500'],
      genres: [
        'Mental Health',
        'Podcasts',
        'Health & Fitness',
        'Education',
        'Self-Improvement'
      ]
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      artistId: 912880194,
      collectionId: 1470616987,
      trackId: 1470616987,
      artistName: 'Center for Strategic and International Studies',
      collectionName: 'Humanity, Wired',
      trackName: 'Humanity, Wired',
      collectionCensoredName: 'Humanity, Wired',
      trackCensoredName: 'Humanity, Wired',
      artistViewUrl:
        'https://podcasts.apple.com/us/artist/center-for-strategic-and-international-studies/912880194?uo=4',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/humanity-wired/id1470616987?uo=4',
      feedUrl: 'http://feeds.feedburner.com/HumanityWired',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/humanity-wired/id1470616987?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/2e/66/62/2e666222-c226-fc6f-fb5b-25f653d32e2b/mza_4586220168650410686.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/2e/66/62/2e666222-c226-fc6f-fb5b-25f653d32e2b/mza_4586220168650410686.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/2e/66/62/2e666222-c226-fc6f-fb5b-25f653d32e2b/mza_4586220168650410686.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-02-21T21:02:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 6,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Podcasts',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/2e/66/62/2e666222-c226-fc6f-fb5b-25f653d32e2b/mza_4586220168650410686.jpg/600x600bb.jpg',
      genreIds: ['26'],
      genres: ['Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1509519096,
      trackId: 1509519096,
      artistName: 'Brendan Frazier',
      collectionName: 'The Wired Advisor',
      trackName: 'The Wired Advisor',
      collectionCensoredName: 'The Wired Advisor',
      trackCensoredName: 'The Wired Advisor',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-advisor/id1509519096?uo=4',
      feedUrl: 'https://wiredadvisorpodcast.libsyn.com/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-advisor/id1509519096?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/47/66/7847662b-4202-87c4-c0b6-e227d381d105/mza_1968308715097283508.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/47/66/7847662b-4202-87c4-c0b6-e227d381d105/mza_1968308715097283508.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/47/66/7847662b-4202-87c4-c0b6-e227d381d105/mza_1968308715097283508.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-04-22T17:29:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 1,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Careers',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/78/47/66/7847662b-4202-87c4-c0b6-e227d381d105/mza_1968308715097283508.jpg/600x600bb.jpg',
      genreIds: ['1410', '26', '1321', '1412'],
      genres: ['Careers', 'Podcasts', 'Business', 'Investing']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1408871352,
      trackId: 1408871352,
      artistName: 'Wired with Resi',
      collectionName: 'Wired with Resi',
      trackName: 'Wired with Resi',
      collectionCensoredName: 'Wired with Resi',
      trackCensoredName: 'Wired with Resi',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-with-resi/id1408871352?uo=4',
      feedUrl:
        'http://feeds.soundcloud.com/users/soundcloud:users:474098727/sounds.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-with-resi/id1408871352?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/cd/83/30/cd8330c6-2cb7-da2f-4fb3-7e808e711ade/mza_4156761996495518207.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/cd/83/30/cd8330c6-2cb7-da2f-4fb3-7e808e711ade/mza_4156761996495518207.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/cd/83/30/cd8330c6-2cb7-da2f-4fb3-7e808e711ade/mza_4156761996495518207.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-10-16T15:44:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 11,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Business',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/cd/83/30/cd8330c6-2cb7-da2f-4fb3-7e808e711ade/mza_4156761996495518207.jpg/600x600bb.jpg',
      genreIds: ['1321', '26'],
      genres: ['Business', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1378688323,
      trackId: 1378688323,
      artistName: 'Amherst Wire',
      collectionName: 'Amherst Wired Network',
      trackName: 'Amherst Wired Network',
      collectionCensoredName: 'Amherst Wired Network',
      trackCensoredName: 'Amherst Wired Network',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/amherst-wired-network/id1378688323?uo=4',
      feedUrl: 'https://amherstwire.podbean.com/feed.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/amherst-wired-network/id1378688323?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/48/7b/4a487bd3-0620-44ee-1815-334b4cec3859/mza_1710046378841602823.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/48/7b/4a487bd3-0620-44ee-1815-334b4cec3859/mza_1710046378841602823.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/48/7b/4a487bd3-0620-44ee-1815-334b4cec3859/mza_1710046378841602823.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-03-12T03:58:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 100,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Technology',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/48/7b/4a487bd3-0620-44ee-1815-334b4cec3859/mza_1710046378841602823.jpg/600x600bb.jpg',
      genreIds: ['1318', '26'],
      genres: ['Technology', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1329601459,
      trackId: 1329601459,
      artistName: 'The Wired Speakers',
      collectionName: 'The Wired Speakers',
      trackName: 'The Wired Speakers',
      collectionCensoredName: 'The Wired Speakers',
      trackCensoredName: 'The Wired Speakers',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-speakers/id1329601459?uo=4',
      feedUrl:
        'http://feeds.soundcloud.com/users/soundcloud:users:363535166/sounds.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-speakers/id1329601459?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/25/57/14/2557149c-2174-a8b6-6b02-845a5d4115ab/mza_7020547720586588609.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/25/57/14/2557149c-2174-a8b6-6b02-845a5d4115ab/mza_7020547720586588609.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/25/57/14/2557149c-2174-a8b6-6b02-845a5d4115ab/mza_7020547720586588609.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-06-28T13:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      trackCount: 6,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Comedy',
      contentAdvisoryRating: 'Explicit',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/25/57/14/2557149c-2174-a8b6-6b02-845a5d4115ab/mza_7020547720586588609.jpg/600x600bb.jpg',
      genreIds: ['1303', '26'],
      genres: ['Comedy', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 545194009,
      trackId: 545194009,
      artistName: 'The Geeks',
      collectionName: 'Geeks Are Wired',
      trackName: 'Geeks Are Wired',
      collectionCensoredName: 'Geeks Are Wired',
      trackCensoredName: 'Geeks Are Wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/geeks-are-wired/id545194009?uo=4',
      feedUrl: 'https://geeksarewired.podbean.com/feed.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/geeks-are-wired/id545194009?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts/v4/4e/ed/ec/4eedeca1-8327-3862-030f-24212325470a/mza_7394641352787352293.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts/v4/4e/ed/ec/4eedeca1-8327-3862-030f-24212325470a/mza_7394641352787352293.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts/v4/4e/ed/ec/4eedeca1-8327-3862-030f-24212325470a/mza_7394641352787352293.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-09T06:55:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 20,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Technology',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts/v4/4e/ed/ec/4eedeca1-8327-3862-030f-24212325470a/mza_7394641352787352293.jpg/600x600bb.jpg',
      genreIds: ['1318', '26', '1489', '1528'],
      genres: ['Technology', 'Podcasts', 'News', 'Tech News']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 297757877,
      trackId: 297757877,
      artistName: 'wiredsanta',
      collectionName: "Wired Santa's Podcast",
      trackName: "Wired Santa's Podcast",
      collectionCensoredName: "Wired Santa's Podcast",
      trackCensoredName: "Wired Santa's Podcast",
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-santas-podcast/id297757877?uo=4',
      feedUrl: 'http://wiredsanta.podOmatic.com/rss2.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-santas-podcast/id297757877?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7a/56/48/7a564890-155f-ea4f-7c3b-c096cf1ff336/mza_11204426434167512076.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7a/56/48/7a564890-155f-ea4f-7c3b-c096cf1ff336/mza_11204426434167512076.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7a/56/48/7a564890-155f-ea4f-7c3b-c096cf1ff336/mza_11204426434167512076.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2008-12-16T20:37:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 18,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Music',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/7a/56/48/7a564890-155f-ea4f-7c3b-c096cf1ff336/mza_11204426434167512076.jpg/600x600bb.jpg',
      genreIds: ['1310', '26'],
      genres: ['Music', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1484088731,
      trackId: 1484088731,
      artistName: 'RemedyLIVE // Clinton Faupel',
      collectionName: 'WIRED',
      trackName: 'WIRED',
      collectionCensoredName: 'WIRED',
      trackCensoredName: 'WIRED',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired/id1484088731?uo=4',
      feedUrl: 'https://feeds.buzzsprout.com/591340.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired/id1484088731?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/80/ab/7d/80ab7d58-9344-51c6-b782-9d8544895f3f/mza_7870269989733855593.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/80/ab/7d/80ab7d58-9344-51c6-b782-9d8544895f3f/mza_7870269989733855593.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/80/ab/7d/80ab7d58-9344-51c6-b782-9d8544895f3f/mza_7870269989733855593.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-04-21T19:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 16,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Mental Health',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/80/ab/7d/80ab7d58-9344-51c6-b782-9d8544895f3f/mza_7870269989733855593.jpg/600x600bb.jpg',
      genreIds: ['1517', '26', '1512', '1321'],
      genres: ['Mental Health', 'Podcasts', 'Health & Fitness', 'Business']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1236922586,
      trackId: 1236922586,
      artistName: 'Mike Burkart',
      collectionName: 'The Get Wired Podcast',
      trackName: 'The Get Wired Podcast',
      collectionCensoredName: 'The Get Wired Podcast',
      trackCensoredName: 'The Get Wired Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-get-wired-podcast/id1236922586?uo=4',
      feedUrl: 'https://www.thegetwiredpodcast.com/blog?format=rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-get-wired-podcast/id1236922586?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/03/a9/85/03a985ef-cec2-34e0-fa89-aa97c048dc7d/mza_7245185960389643745.png/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/03/a9/85/03a985ef-cec2-34e0-fa89-aa97c048dc7d/mza_7245185960389643745.png/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/03/a9/85/03a985ef-cec2-34e0-fa89-aa97c048dc7d/mza_7245185960389643745.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-04-27T08:30:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 55,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Business',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/03/a9/85/03a985ef-cec2-34e0-fa89-aa97c048dc7d/mza_7245185960389643745.png/600x600bb.jpg',
      genreIds: ['1321', '26', '1318'],
      genres: ['Business', 'Podcasts', 'Technology']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1509086955,
      trackId: 1509086955,
      artistName: 'Wired Ivy',
      collectionName: 'Wired Ivy',
      trackName: 'Wired Ivy',
      collectionCensoredName: 'Wired Ivy',
      trackCensoredName: 'Wired Ivy',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-ivy/id1509086955?uo=4',
      feedUrl: 'https://feeds.buzzsprout.com/806846.rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-ivy/id1509086955?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3d/2d/b7/3d2db7bf-5d5a-55d4-9319-1147a35a2d17/mza_1417581916199787855.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3d/2d/b7/3d2db7bf-5d5a-55d4-9319-1147a35a2d17/mza_1417581916199787855.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3d/2d/b7/3d2db7bf-5d5a-55d4-9319-1147a35a2d17/mza_1417581916199787855.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-05T04:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 5,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'How To',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3d/2d/b7/3d2db7bf-5d5a-55d4-9319-1147a35a2d17/mza_1417581916199787855.jpg/600x600bb.jpg',
      genreIds: ['1499', '26', '1304', '1318'],
      genres: ['How To', 'Podcasts', 'Education', 'Technology']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 599714083,
      trackId: 599714083,
      artistName: 'Andrew Evans',
      collectionName: 'Idlewild Wired',
      trackName: 'Idlewild Wired',
      collectionCensoredName: 'Idlewild Wired',
      trackCensoredName: 'Idlewild Wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/idlewild-wired/id599714083?uo=4',
      feedUrl: 'http://idlewild.sermon.net/rss/Wired',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/idlewild-wired/id599714083?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/7e/ed/b87eed45-03c4-616c-38be-4a8d62a627e0/mza_6342846097917316742.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/7e/ed/b87eed45-03c4-616c-38be-4a8d62a627e0/mza_6342846097917316742.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/7e/ed/b87eed45-03c4-616c-38be-4a8d62a627e0/mza_6342846097917316742.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-03-04T19:15:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 150,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Christianity',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b8/7e/ed/b87eed45-03c4-616c-38be-4a8d62a627e0/mza_6342846097917316742.jpg/600x600bb.jpg',
      genreIds: ['1439', '26', '1314'],
      genres: ['Christianity', 'Podcasts', 'Religion & Spirituality']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1483665435,
      trackId: 1483665435,
      artistName: 'Wired 2 Change',
      collectionName: 'Wired 2 Change',
      trackName: 'Wired 2 Change',
      collectionCensoredName: 'Wired 2 Change',
      trackCensoredName: 'Wired 2 Change',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-2-change/id1483665435?uo=4',
      feedUrl: 'https://anchor.fm/s/e452000/podcast/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-2-change/id1483665435?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/72/13/80/721380ac-4a45-22db-b098-56b126fc8f66/mza_5237871878932288295.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/72/13/80/721380ac-4a45-22db-b098-56b126fc8f66/mza_5237871878932288295.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/72/13/80/721380ac-4a45-22db-b098-56b126fc8f66/mza_5237871878932288295.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-14T09:44:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 64,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Entrepreneurship',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/72/13/80/721380ac-4a45-22db-b098-56b126fc8f66/mza_5237871878932288295.jpg/600x600bb.jpg',
      genreIds: ['1493', '26', '1321'],
      genres: ['Entrepreneurship', 'Podcasts', 'Business']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1483127125,
      trackId: 1483127125,
      artistName: 'The Radio People',
      collectionName: 'Wired with DC & John',
      trackName: 'Wired with DC & John',
      collectionCensoredName: 'Wired with DC & John',
      trackCensoredName: 'Wired with DC & John',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-with-dc-john/id1483127125?uo=4',
      feedUrl: 'https://podcastplayer.io/requests/folders/rss_feed/g3/Bethany',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-with-dc-john/id1483127125?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b2/b0/48/b2b04832-65b5-f61d-9ebb-f2af0aaefcb4/mza_15082850115062578662.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b2/b0/48/b2b04832-65b5-f61d-9ebb-f2af0aaefcb4/mza_15082850115062578662.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b2/b0/48/b2b04832-65b5-f61d-9ebb-f2af0aaefcb4/mza_15082850115062578662.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-05-15T17:05:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 16,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Comedy',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/b2/b0/48/b2b04832-65b5-f61d-9ebb-f2af0aaefcb4/mza_15082850115062578662.jpg/600x600bb.jpg',
      genreIds: ['1303', '26'],
      genres: ['Comedy', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 551587599,
      trackId: 551587599,
      artistName: 'David M. Wallace',
      collectionName: 'Encore: Wired',
      trackName: 'Encore: Wired',
      collectionCensoredName: 'Encore: Wired',
      trackCensoredName: 'Encore: Wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/encore-wired/id551587599?uo=4',
      feedUrl: 'http://www.totalprayze.com/encorewired.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/encore-wired/id551587599?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ea/44/b6/ea44b610-5fbb-5631-ebe3-f2873994eaf7/mza_5063075128941688096.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ea/44/b6/ea44b610-5fbb-5631-ebe3-f2873994eaf7/mza_5063075128941688096.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ea/44/b6/ea44b610-5fbb-5631-ebe3-f2873994eaf7/mza_5063075128941688096.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2016-05-15T19:00:00Z',
      collectionExplicitness: 'notExplicit',
      trackExplicitness: 'notExplicit',
      trackCount: 14,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Christianity',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/ea/44/b6/ea44b610-5fbb-5631-ebe3-f2873994eaf7/mza_5063075128941688096.jpg/600x600bb.jpg',
      genreIds: ['1439', '26', '1314', '1310'],
      genres: ['Christianity', 'Podcasts', 'Religion & Spirituality', 'Music']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1140303543,
      trackId: 1140303543,
      artistName: 'Joe Serpico & Scott Rosario',
      collectionName: 'BMore Wired',
      trackName: 'BMore Wired',
      collectionCensoredName: 'BMore Wired',
      trackCensoredName: 'BMore Wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/bmore-wired/id1140303543?uo=4',
      feedUrl: 'https://bmorewired.libsyn.com/',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/bmore-wired/id1140303543?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/1f/e9/4a1fe9c6-ade9-340b-0689-d064b7ec8bb8/mza_6325463992401785846.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/1f/e9/4a1fe9c6-ade9-340b-0689-d064b7ec8bb8/mza_6325463992401785846.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/1f/e9/4a1fe9c6-ade9-340b-0689-d064b7ec8bb8/mza_6325463992401785846.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2017-02-04T21:23:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 28,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Sports',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4a/1f/e9/4a1fe9c6-ade9-340b-0689-d064b7ec8bb8/mza_6325463992401785846.jpg/600x600bb.jpg',
      genreIds: ['1545', '26'],
      genres: ['Sports', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 981930718,
      trackId: 981930718,
      artistName: 'The Wired To Grow Show',
      collectionName: 'The Wired To Grow Show',
      trackName: 'The Wired To Grow Show',
      collectionCensoredName: 'The Wired To Grow Show',
      trackCensoredName: 'The Wired To Grow Show',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-to-grow-show/id981930718?uo=4',
      feedUrl: 'http://www.wiredtogrow.com/feed/podcast/',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-to-grow-show/id981930718?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts71/v4/a7/25/65/a72565e8-975d-e9da-4062-93790839f0f4/mza_4518352646576327782.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts71/v4/a7/25/65/a72565e8-975d-e9da-4062-93790839f0f4/mza_4518352646576327782.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts71/v4/a7/25/65/a72565e8-975d-e9da-4062-93790839f0f4/mza_4518352646576327782.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2016-11-09T11:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 10,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Business',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts71/v4/a7/25/65/a72565e8-975d-e9da-4062-93790839f0f4/mza_4518352646576327782.jpg/600x600bb.jpg',
      genreIds: ['1321', '26'],
      genres: ['Business', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1476823852,
      trackId: 1476823852,
      artistName: 'Wired For Big',
      collectionName: 'The Wired For Big Podcast',
      trackName: 'The Wired For Big Podcast',
      collectionCensoredName: 'The Wired For Big Podcast',
      trackCensoredName: 'The Wired For Big Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-for-big-podcast/id1476823852?uo=4',
      feedUrl: 'https://anchor.fm/s/4ad966c/podcast/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-for-big-podcast/id1476823852?uo=4',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/4b/bf/7e/4bbf7ea5-926c-4feb-b2ce-9e63aff29db3/mza_3770286413622049388.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/4b/bf/7e/4bbf7ea5-926c-4feb-b2ce-9e63aff29db3/mza_3770286413622049388.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/4b/bf/7e/4bbf7ea5-926c-4feb-b2ce-9e63aff29db3/mza_3770286413622049388.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-02-02T21:57:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 11,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Society & Culture',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/4b/bf/7e/4bbf7ea5-926c-4feb-b2ce-9e63aff29db3/mza_3770286413622049388.jpg/600x600bb.jpg',
      genreIds: ['1324', '26'],
      genres: ['Society & Culture', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 486065243,
      trackId: 486065243,
      artistName: 'Go-to-Guys.de',
      collectionName: 'Go-to-Guys Wired | NBA & Basketball Podcast',
      trackName: 'Go-to-Guys Wired | NBA & Basketball Podcast',
      collectionCensoredName: 'Go-to-Guys Wired | NBA & Basketball Podcast',
      trackCensoredName: 'Go-to-Guys Wired | NBA & Basketball Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/go-to-guys-wired-nba-basketball-podcast/id486065243?uo=4',
      feedUrl: 'https://go-to-guys.de/feed/podcast/',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/go-to-guys-wired-nba-basketball-podcast/id486065243?uo=4',
      artworkUrl30:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/d6/ab/cd/d6abcd07-814c-1b66-d6a7-c813c583c5f9/mza_6665256578678144092.png/30x30bb.jpg',
      artworkUrl60:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/d6/ab/cd/d6abcd07-814c-1b66-d6a7-c813c583c5f9/mza_6665256578678144092.png/60x60bb.jpg',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/d6/ab/cd/d6abcd07-814c-1b66-d6a7-c813c583c5f9/mza_6665256578678144092.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2019-11-08T15:00:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 300,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Basketball',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/d6/ab/cd/d6abcd07-814c-1b66-d6a7-c813c583c5f9/mza_6665256578678144092.png/600x600bb.jpg',
      genreIds: ['1548', '26', '1545'],
      genres: ['Basketball', 'Podcasts', 'Sports']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 296529810,
      trackId: 296529810,
      artistName: 'Milligan College',
      collectionName: 'Milligan College Wired',
      trackName: 'Milligan College Wired',
      collectionCensoredName: 'Milligan College Wired',
      trackCensoredName: 'Milligan College Wired',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/milligan-college-wired/id296529810?uo=4',
      feedUrl: 'http://feeds.feedburner.com/MilliganWired',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/milligan-college-wired/id296529810?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2008-11-21T19:07:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 5,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'TV & Film',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Features/v4/5f/88/96/5f8896e9-9be5-529a-af14-cc807367568a/mza_1382744875394257421.png/600x600bb.jpg',
      genreIds: ['1309', '26'],
      genres: ['TV & Film', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1471108024,
      trackId: 1471108024,
      artistName: 'Wired Italia',
      collectionName: 'Wired Play',
      trackName: 'Wired Play',
      collectionCensoredName: 'Wired Play',
      trackCensoredName: 'Wired Play',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-play/id1471108024?uo=4',
      feedUrl: 'https://www.spreaker.com/show/3598410/episodes/feed',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-play/id1471108024?uo=4',
      artworkUrl30:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/76/f0/ba/76f0babc-ad51-90c9-5d12-fa8bb1be453c/mza_2580617557319529392.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/76/f0/ba/76f0babc-ad51-90c9-5d12-fa8bb1be453c/mza_2580617557319529392.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/76/f0/ba/76f0babc-ad51-90c9-5d12-fa8bb1be453c/mza_2580617557319529392.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-03-20T11:56:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 19,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'TV & Film',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/76/f0/ba/76f0babc-ad51-90c9-5d12-fa8bb1be453c/mza_2580617557319529392.jpg/600x600bb.jpg',
      genreIds: ['1309', '26'],
      genres: ['TV & Film', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 604781931,
      trackId: 604781931,
      artistName: 'DJ WIRED',
      collectionName: 'WIRED-RADIO',
      trackName: 'WIRED-RADIO',
      collectionCensoredName: 'WIRED-RADIO',
      trackCensoredName: 'WIRED-RADIO',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-radio/id604781931?uo=4',
      feedUrl: 'http://djwiredmixtapes.podomatic.com/rss2.xml',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/wired-radio/id604781931?uo=4',
      artworkUrl30:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/0f/2c/b3/0f2cb3da-5af4-a466-defa-f9a7ee7eef5e/mza_6061558075842055424.png/30x30bb.jpg',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/0f/2c/b3/0f2cb3da-5af4-a466-defa-f9a7ee7eef5e/mza_6061558075842055424.png/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/0f/2c/b3/0f2cb3da-5af4-a466-defa-f9a7ee7eef5e/mza_6061558075842055424.png/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2013-06-30T18:22:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      trackCount: 3,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Music',
      contentAdvisoryRating: 'Explicit',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/0f/2c/b3/0f2cb3da-5af4-a466-defa-f9a7ee7eef5e/mza_6061558075842055424.png/600x600bb.jpg',
      genreIds: ['1310', '26'],
      genres: ['Music', 'Podcasts']
    },
    {
      wrapperType: 'track',
      kind: 'podcast',
      collectionId: 1458515653,
      trackId: 1458515653,
      artistName: 'Wired Up Podcast',
      collectionName: 'The Wired Up Sports Podcast',
      trackName: 'The Wired Up Sports Podcast',
      collectionCensoredName: 'The Wired Up Sports Podcast',
      trackCensoredName: 'The Wired Up Sports Podcast',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-up-sports-podcast/id1458515653?uo=4',
      feedUrl: 'https://anchor.fm/s/2c9b434/podcast/rss',
      trackViewUrl:
        'https://podcasts.apple.com/us/podcast/the-wired-up-sports-podcast/id1458515653?uo=4',
      artworkUrl30:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3a/c5/9f/3ac59f30-61f4-a478-ee62-d919b1692f3d/mza_6603307238723604269.jpg/30x30bb.jpg',
      artworkUrl60:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3a/c5/9f/3ac59f30-61f4-a478-ee62-d919b1692f3d/mza_6603307238723604269.jpg/60x60bb.jpg',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3a/c5/9f/3ac59f30-61f4-a478-ee62-d919b1692f3d/mza_6603307238723604269.jpg/100x100bb.jpg',
      collectionPrice: 0.0,
      trackPrice: 0.0,
      trackRentalPrice: 0,
      collectionHdPrice: 0,
      trackHdPrice: 0,
      trackHdRentalPrice: 0,
      releaseDate: '2020-04-22T22:05:00Z',
      collectionExplicitness: 'cleaned',
      trackExplicitness: 'cleaned',
      trackCount: 52,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Sports',
      contentAdvisoryRating: 'Clean',
      artworkUrl600:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3a/c5/9f/3ac59f30-61f4-a478-ee62-d919b1692f3d/mza_6603307238723604269.jpg/600x600bb.jpg',
      genreIds: ['1545', '26'],
      genres: ['Sports', 'Podcasts']
    }
  ],
  searchedPodcasts: []
})

export const mutations = {
  SET_SEARCHED_PODCASTS(state, searchedPodcasts) {
    state.searchedPodcasts = searchedPodcasts
  },

  CLEAR_SEARCHED_PODCASTS(state) {
    state.searchedPodcasts.length = 0
  }
}

export const actions = {
  fetchSearchedPodcasts({ commit }, term) {
    return podcastService.search(term).then((response) => {
      commit('SET_SEARCHED_PODCASTS', response.data.results)
    })
  },

  clearSearchedPodcasts({ commit }) {
    commit('CLEAR_SEARCHED_PODCASTS')
  }
}
