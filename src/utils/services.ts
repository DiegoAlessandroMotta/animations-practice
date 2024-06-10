const posts = [
  {
    username: "ひろ@C103/1日目東モ08a",
    accountName: "habanero_mgmg",
    avatarUrl: "/img/user1.webp",
    postImgUrl: "/img/post1.webp",
    repliesCount: 18,
    repostsCount: 4219,
    likesCount: 29415,
    analiticsCount: 368193,
    contentPost: "ヴェールヌイ",
  },
  {
    username: "さ",
    accountName: "iorikawawa",
    avatarUrl: "/img/user2.webp",
    postImgUrl: "/img/post2.webp",
    repliesCount: 7,
    repostsCount: 2217,
    likesCount: 13612,
    analiticsCount: 292461,
    contentPost: "ヴェールヌイ",
  },
  {
    username: "Randomuser",
    accountName: "randomuser",
    avatarUrl: "/img/user3.webp",
    postImgUrl: "/img/post3.webp",
    repliesCount: 4,
    repostsCount: 812,
    likesCount: 6612,
    analiticsCount: 122461,
    contentPost:
      'This is a simple post <a class="post-link" href="#">#Go to home</a>',
  },
  {
    username: "Reia🍀",
    accountName: "Reia_76",
    avatarUrl: "/img/user4.webp",
    postImgUrl: "/img/post4.webp",
    repliesCount: 12,
    repostsCount: 2512,
    likesCount: 22175,
    analiticsCount: 373193,
    contentPost: '水着シロコ・セリカ <a class="post-link" href="#">#ブルアカ</a>',
  },
  {
    username: "日目東モ",
    accountName: "iorikawawa",
    avatarUrl: "/img/user5.webp",
    postImgUrl: "/img/post5.webp",
    repliesCount: 9,
    repostsCount: 1672,
    likesCount: 19911,
    analiticsCount: 275163,
    contentPost: "ヴェールヌイ",
  },
  {
    username: "GongGo",
    accountName: "Gonggo_901",
    avatarUrl: "/img/user6.webp",
    postImgUrl: "/img/post6.webp",
    repliesCount: 16,
    repostsCount: 2419,
    likesCount: 22136,
    analiticsCount: 256292,
    contentPost: '<a class="post-link" href="#">#ブルアカ</a>'
  },
];

export const fetchPosts = async (limit?: number) => {
  return posts.slice(0, limit)
}