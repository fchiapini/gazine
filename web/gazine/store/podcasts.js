import { firestoreAction } from 'vuexfire'
import podcastService from '@/services/podcastService.js'

export const state = () => ({
  followingPodcasts: [],
  topPodcasts: [
    {
      title: 'The WIRED Podcast',
      author: 'WIRED UK',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/51/f3/8e/51f38e79-f8bc-5a38-0bdc-0d27ff3a471a/mza_5998622837811600915.jpg/600x600bb.jpg',
      feedUrl: 'https://www.wired.co.uk/rss/podcast/wired-podcast'
    },
    {
      title: 'Enjoy the Vue',
      author: 'CodeFund',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/60/ba/51/60ba517d-a7e7-7d52-ceeb-bed93998ae54/mza_7230888293719508805.jpg/600x600bb.jpg',
      feedUrl: 'https://feeds.fireside.fm/enjoy-the-vue/rss'
    },
    {
      title: 'All JavaScript Podcasts by Devchat.tv',
      author: 'Devchat.tv',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts71/v4/86/fd/cc/86fdcc56-cc96-77e0-03c9-199bfc5dd781/mza_2876216304839239039.jpg/600x600bb.jpg',
      feedUrl: 'https://feeds.feedwrench.com/JavaScriptJabber.rss'
    },
    {
      title: 'CodeNewbie',
      author: 'CodeNewbie',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/29/d5/e8/29d5e802-b5e7-9dc4-f300-e6472ac27d04/mza_440076239163041537.png/600x600bb.jpg',
      feedUrl: 'http://feeds.codenewbie.org/cnpodcast.xml'
    },
    {
      title: 'Developer Tea',
      author: 'Spec',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/3a/d8/26/3ad826b3-a007-515f-5103-e07192033fe7/mza_8719208232638871650.jpg/600x600bb.jpg',
      feedUrl: 'https://rss.simplecast.com/podcasts/363/rss'
    },
    {
      title: 'egghead.io developer chats',
      author: 'Joel Hooks and John Lindquist',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/1d/3a/b7/1d3ab76e-596f-590e-30be-7f5901bebc32/mza_13550373155129918169.jpg/600x600bb.jpg',
      feedUrl: 'https://feeds.simplecast.com/saRCLXVY'
    },
    {
      title: 'Front End Happy Hour',
      author: 'Front End Happy Hour',
      image:
        'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/75/b2/de/75b2de92-b3cf-047d-22b7-9a25614328f2/mza_803402106788234590.jpg/600x600bb.jpg',
      feedUrl:
        'https://feeds.soundcloud.com/users/soundcloud:users:206137365/sounds.rss'
    },
    {
      title: 'Here & Now',
      author: 'NPR',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/8a/16/c1/8a16c1ab-3d19-9c86-7fc7-45d15dc81642/mza_1910988690303423305.jpg/600x600bb.jpg',
      feedUrl: 'https://feeds.npr.org/510051/podcast.xml'
    },
    {
      title: 'if/else',
      author: 'CTO.ai and Mayuko Inoue',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4f/55/b9/4f55b925-9ef0-9715-d55d-3ca1c27025d9/mza_5798650382677106203.jpg/600x600bb.jpg',
      feedUrl: 'https://rss.cto.ai/ifelse'
    },
    {
      title: 'JAMstack Radio',
      author: 'Heavybit',
      image:
        'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/1f/35/67/1f356770-4297-4844-a097-c8669166ef4b/mza_6141388864142395408.jpg/600x600bb.jpg',
      feedUrl:
        'https://www.heavybit.com/category/library/podcasts/jamstack-radio/feed/'
    },
    {
      title: 'TED Talks Daily',
      author: 'TED',
      image:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/00/c2/32/00c2326c-1e94-ac4e-00f5-328e66112a9c/mza_14141807629952143737.png/600x600bb.jpg',
      feedUrl: 'http://feeds.feedburner.com/TEDTalks_audio'
    },
    {
      title: 'TED Radio Hour',
      author: 'NPR',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/2f/91/ba/2f91ba10-de04-74b1-a42b-3bea299ff421/mza_7505339980000321044.png/600x600bb.jpg',
      feedUrl: 'https://feeds.npr.org/510298/podcast.xml'
    },
    {
      title: 'Ladybug Podcast',
      author: 'Emma Bostian, Kelly Vaughn, and Ali Spittel',
      image:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/37/4c/46/374c46ff-daa8-7225-a044-d578590bd340/mza_6894388306222742625.png/600x600bb.jpg',
      feedUrl: 'https://pinecast.com/feed/ladybug-podcast'
    },
    {
      title: 'Modern Web',
      author: 'Tracy Lee',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts62/v4/84/6d/1c/846d1c19-470d-20f6-9bad-06e5b167b9da/mza_3815629144692594773.png/600x600bb.jpg',
      feedUrl: 'https://modernweb.podbean.com/feed.xml'
    }
  ],
  searchedPodcasts: [],

  currentPodcast: {},

  currentEpisode: {
    enclosure: {
      url: ''
    },
    title: 'No podcast episode',
    creator: ''
  }
})

export const mutations = {
  SET_SEARCHED_PODCASTS(state, searchedPodcasts) {
    state.searchedPodcasts = searchedPodcasts
  },

  CLEAR_SEARCHED_PODCASTS(state) {
    state.searchedPodcasts = []
  },

  SET_PODCAST(state, podcast) {
    state.currentPodcast = podcast
  },

  SET_EPISODE(state, episode) {
    state.currentEpisode = episode
  }
}

export const actions = {
  bindFollowingPodcastDocument: firestoreAction(async function({
    rootState,
    bindFirestoreRef
  }) {
    const ref = this.$fireStore
      .collection('users')
      .doc(rootState.user.authUser.uid)
      .collection('podcasts')
    await bindFirestoreRef('followingPodcasts', ref, { wait: true })
  }),
  unbindFollowingPodcastDocument: firestoreAction(function({
    unbindFirestoreRef
  }) {
    unbindFirestoreRef('followingPodcasts', false)
  }),

  fetchSearchedPodcasts({ commit }, term) {
    return podcastService.search(term).then((response) => {
      commit('SET_SEARCHED_PODCASTS', response.data)
    })
  },

  fetchPodcastByFeedUrl({ commit }, feedUrl) {
    return podcastService.getPodcast(feedUrl).then((response) => {
      commit('SET_PODCAST', response.data)
    })
  },

  followPodcast({ rootState }, podcast) {
    this.$fireStore
      .collection('users')
      .doc(rootState.user.authUser.uid)
      .collection('podcasts')
      .add(podcast)
  },

  unFollowPodcast({ state, rootState }, podcast) {
    const podcastToUnfollow = state.followingPodcasts.find(
      (followingPodcast) => followingPodcast.title === podcast.title
    )
    if (podcastToUnfollow !== null) {
      this.$fireStore
        .collection('users')
        .doc(rootState.user.authUser.uid)
        .collection('podcasts')
        .doc(podcastToUnfollow.id)
        .delete()
    }
  },

  clearSearchedPodcasts({ commit }) {
    commit('CLEAR_SEARCHED_PODCASTS')
  },

  loadEpisode({ commit }, episode) {
    commit('SET_EPISODE', episode)
  }
}
