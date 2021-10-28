module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nintengo-game-list/' // nintengo-game-list 為 repo 名稱
    : '/'
};